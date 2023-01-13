// airbnb-rio.js
// 2020 David Souza Pinto

// set_path: defines the projection, retuns path
function set_projection(cp, dim) {
    // convenience constants: dimensions and limits
    const [width, height] = dim;
    const compass = { C: cp[0], N: cp[1], S: cp[2],  W: cp[3], E: cp[4] };
  
    // bbox: bounding box
    const bbox = {
        'type': 'Polygon',
        'coordinates': [[
            [compass.W, compass.N],
            [compass.E, compass.N],
            [compass.E, compass.S],
            [compass.W, compass.S],
            [compass.W, compass.N]
        ]]
    }
  
    // projection setup + path return
    let projection = d3.geoConicConformal()
        .parallels([compass.S, compass.N])
        .rotate([-compass.C, 0])      
        .fitSize([width, height], bbox);
        
    return projection;
};
  
// Loads data, the div name, width, height, and CSS class to setup SVG 
function choropleth(geo, proj, dist_scale, div_name, w, h) {
    const path = d3.geoPath(proj);
    const svg = d3.select(div_name)
        .append('svg')
        .attr('width', w)
        .attr('height', h);
        
    d3.json(geo).then((data) => {
        data.features.map((i) => {
            i.properties.entp = +i.properties.entire / +i.properties.n;
        });
        
        const colour = pgen(data.features)['palette'];
        colorkey(data);
        distscale(data, proj, dist_scale);
        svg.selectAll('path')
            .data(data.features)
            .join('path')
            .attr('d', path)
            .attr('fill-opacity', '0.7')
            .style('fill', (d) => {
                const v = d.properties.log_n
                return v ? colour(v) : '#c4c4c4';
            })
            .on('mousemove', displayToolTip)
            .on('mouseout', hideToolTip);
    });        
};

function displayToolTip(d) {
    // -- update the tooltip position and values
    d3.select('#tooltip').classed('hidden', false);
    d3.select(this)
      .attr('fill-opacity', '0.90')
    // -- position of the tooltip
    d3.select('#tooltip')
      .style('left', d3.event.pageX - 25 + 'px')
      .style('top', d3.event.pageY + 25 + 'px')
      .style('opacity', 1)
      .select('#neighbourhood')
      .text(d.properties.neighbourhood);
    // -- no. of properties + pct
    d3.select('#tooltip')
      .select('#n')
      .text(d.properties.n);
    d3.select('#tooltip')
      .select('#pct')
      .text(d3.format('.2%')(d.properties.pct)); 
    // -- no. of entire properties
    d3.select('#tooltip')
      .select('#ent')
      .text(d.properties.entire);
    d3.select('#tooltip')
      .select('#entp')
      .text(d3.format('.2%')(d.properties.entp));
    // -- avg. price + std dev 
    d3.select('#tooltip')
      .select('#mp')
      .text(d3.format('.2f')(d.properties.mean_price));
    d3.select('#tooltip')
      .select('#sp')
      .text(' ± ' + d3.format('.2f')(d.properties.sd_price));
    // -- avg. score + std dev 
    d3.select('#tooltip')
      .select('#ms')
      .text(d3.format('.2f')(d.properties.mean_score));
    d3.select('#tooltip')
      .select('#ss')
      .text(' ± ' + d3.format('.2f')(d.properties.sd_score));
};

function hideToolTip() {
    d3.select('#tooltip').classed('hidden', true);
    d3.select(this).attr('fill-opacity', '0.7');
};

// Colour gradient
function colorkey(data) {
    const o         = pgen(data.features);
    const threshold = o['palette'];
    const xt        = o['extent']
    const scale     = d3.scalePow()
                        .exponent(1.2)
                        .domain(xt)
                        .range([0, 350]);
    
    const formatNumber = d3.format('.2f');
    const xAxis = d3.axisBottom(scale)
        .tickSize(15)
        .tickValues(threshold.domain()) // alt. 
        .tickFormat((d) => Math.round(10 ** formatNumber(d)));
        
    const g = d3.select('svg')
        .append('g')
        .attr('transform', 'translate(0 40)')
        .call(xAxis);
    
    g.select('.domain').remove();
    g.selectAll('rect')
        .data(threshold.range().map((color) => {
            var d = threshold.invertExtent(color);
            if (d[0] == null) d[0] = scale.domain()[0];
            if (d[1] == null) d[1] = scale.domain()[1];
            return d;
        }))
        .join('rect')
        .attr('classed', '.tick')
        .attr('height', 6)
        .attr('x', (d) =>  scale(d[0]))
        .attr('width', (d) => (scale(d[1]) - scale(d[0])))
        .attr('fill', (d) => threshold(d[0]))
        .style('stroke', 'transparent')
        .style('fill-opacity', '0.7');
        
    g.append('text')
        .attr('y', -5)
        .attr('fill', '#000')
        .attr('text-anchor', 'start')
        .style('font-size', '12px')
        .text('Number of listed properties');
        
    g.selectAll('line').style('stroke-width', '1');
};

// Distance scale
function distscale(data, proj, dist, earth_radius = 6371) {
    const scale = d3.select('svg')
            .datum(dist2px(data, proj, dist, earth_radius))
            .append('g')
            .attr('transform', 'translate(0 425)');
        
        // draws rect
        scale.append('rect')
            .attr('height', 1)
            .attr('width', (d) => d)
            .attr('fill', '#000');
        
        // includes the length 
        scale.append('text')
            .attr('y', -5)
            .attr('fill', '#000')
            .attr('text-anchor', 'start')
            .style('font-size', '12px')
            .text(`${dist} km`);
};

// Palette generator
function pgen(d) {
    // extracting values from the data
    var vals = d
        .map((i) => parseFloat(i.properties.log_n))
        .filter((i) => !Number.isNaN(i))
        .sort((a, b) => a - b);
    
    // setting up the palette, the extent and the range
    const pal = d3.interpolateBlues;
    const x = d3.extent(vals)
    const r = d3.range(0, 1, .15);
    r.push(1);
    
    // getting the quantile range and the length
    // to declare the palette and the hues
    const q = r.map((i) => d3.quantile(x, i));
    const l = q.length;
    const palette = q.map((i) => d3.scaleSequential(x, pal, l)(i));
    const hues = d3.scaleThreshold()
        .domain(q)
        .range(palette);
    
    return { palette: hues, extent: x };
};

// Conversion of pixels to distance
function dist2px(geo, proj, dist, earth_radius = 6371) {
    // Calculations done for km
    // gets boundaries to calculate the arc length
    const boundaries = d3.geoBounds(geo);
    const rad = d3.geoDistance(boundaries[0], boundaries[1]);
    const l_arc = earth_radius * rad;

    // calculating the projected hypothenuse 
    const bounds_proj = [ proj(boundaries[0]), proj(boundaries[1]) ];
    const w_proj = bounds_proj[1][0] - bounds_proj[0][0];
    const h_proj = bounds_proj[0][1] - bounds_proj[1][1];
    const hyp_proj = Math.sqrt((Math.pow(w_proj, 2)) + (Math.pow(h_proj, 2)));
    
    // gets the hypothenuse-arc ratio to get the pixel to distance
    const factor = hyp_proj / l_arc;

    return factor * dist;
};

// Height and Width
const [width, height] = [800, 450];

// Bounding boxes | center, north, south, west, east
const bbox_RJ = [-43.4722, -23.082893, -22.746020, -43.096863, -43.795432];

// File path
const gd = 'data/rio-data.geojson';

// Default set projection
const proj = set_projection(cp = bbox_RJ, dim = [width, height])

// draw map
choropleth(gd, proj, 5, '#interactive-cp', width, height);
