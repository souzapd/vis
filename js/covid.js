const _0x37e5=['map','scaleLinear','transform','50%','scaleOrdinal','data/tally.csv','stop','none','fill-opacity','translate(0\x200)','#000','width','entries','fill','extent','call','exit','axisBottom','25%','.dth-diff','data/table.csv','attr','forEach','%b\x20%d','text-anchor','.bp-fr','.cnf-today','stop-color','stroke','td.fr','datum','text','linearGradient','ticks','left','select','tickValues','today','%Y-%m-%d','svg','min','deaths','td.plot','#ttable','td.recovered','right','tickSize','rect','end','class','#uts','append','style','translate(-10,0)rotate(-45)','10px','remove','value','html','diff','.cnf-diff','timeParse','axisLeft','path','100%','translate(0\x20','scaleTime','font-size','75%','.rec-today','.tick','%B\x20%d,\x20%Y','.rec-diff','stroke-width','.dth-today','values','key','descending','cases','bottom','translate(0,','td.deaths','csv','url(#linear-gradient)','font-weight','data','country','timeFormat','translate(','enter','max','.bp-deaths','sort','range','date','.bp-cases','height','join','.domain','all','domain','vmax','padding','vmin','line','top','td.country','scaleBand','linear-gradient','gradientTransform','reverse','schemeReds','format','selectAll','offset','create'];(function(_0x155c40,_0x37e537){const _0x45e343=function(_0x4b4685){while(--_0x4b4685){_0x155c40['push'](_0x155c40['shift']());}};_0x45e343(++_0x37e537);}(_0x37e5,0xbd));const _0x45e3=function(_0x155c40,_0x37e537){_0x155c40=_0x155c40-0x0;let _0x45e343=_0x37e5[_0x155c40];return _0x45e343;};const dtable=_0x45e3('0x3d');const series='data/timeseries.csv';const tally=_0x45e3('0x2e');const cleveland='data/cleveland.csv';const width=0x136;const height=0x3c;const btol=0x14;const stol=0xa;const parset=d3[_0x45e3('0x65')](_0x45e3('0x4f'));const timelabel=d3[_0x45e3('0xc')](_0x45e3('0x40'));function barplot(_0x3a69ef,_0x30fff6,_0x5cf597,_0x5749c4,_0x3719e3){df=Object[_0x45e3('0x28')](_0x3a69ef);df[_0x45e3('0x11')]((_0x19959e,_0xa52140)=>d3[_0x45e3('0x2')](+_0x19959e[_0x5cf597],+_0xa52140[_0x5cf597]));let _0x30a37a=[];for(let _0x22495b=0x0;_0x22495b<_0x5749c4;_0x22495b++){_0x30a37a['push'](df[_0x22495b]);}const _0x4b6306=[0x0,d3[_0x45e3('0x37')](_0x30a37a,_0x462ffb=>+_0x462ffb[_0x5cf597])[0x1]];const _0xa6d34c={'top':0x14,'right':0x14,'bottom':0x28,'left':0x64},_0x5adc10=0x15e-_0xa6d34c[_0x45e3('0x4b')]-_0xa6d34c[_0x45e3('0x56')],_0x2d8f8d=0xc8-_0xa6d34c[_0x45e3('0x1e')]-_0xa6d34c[_0x45e3('0x4')];const _0x15fb0e=d3[_0x45e3('0x4c')](_0x30fff6)[_0x45e3('0x5c')](_0x45e3('0x50'))['attr'](_0x45e3('0x34'),_0x5adc10+_0xa6d34c[_0x45e3('0x4b')]+_0xa6d34c[_0x45e3('0x56')])[_0x45e3('0x3e')](_0x45e3('0x15'),_0x2d8f8d+_0xa6d34c[_0x45e3('0x1e')]+_0xa6d34c[_0x45e3('0x4')])['append']('g')[_0x45e3('0x3e')]('transform',_0x45e3('0xd')+_0xa6d34c[_0x45e3('0x4b')]+','+_0xa6d34c['top']+')');const _0x2ded58=d3[_0x45e3('0x2a')]()[_0x45e3('0x19')](_0x4b6306)[_0x45e3('0x12')]([0x0,_0x5adc10]);_0x15fb0e[_0x45e3('0x5c')]('g')[_0x45e3('0x3e')](_0x45e3('0x2b'),_0x45e3('0x5')+_0x2d8f8d+')')[_0x45e3('0x38')](d3[_0x45e3('0x3a')](_0x2ded58)[_0x45e3('0x4a')](0x5))['selectAll']('text')[_0x45e3('0x3e')](_0x45e3('0x2b'),_0x45e3('0x5e'))[_0x45e3('0x5d')](_0x45e3('0x41'),_0x45e3('0x59'));const _0xf074bd=d3[_0x45e3('0x20')]()[_0x45e3('0x19')](_0x30a37a['map'](_0x3be8ca=>_0x3be8ca[_0x45e3('0xb')]))['range']([0x0,_0x2d8f8d])[_0x45e3('0x1b')](0.1);const _0x89761e=d3[_0x45e3('0x2d')]()['domain'](_0xf074bd[_0x45e3('0x19')]())['range'](_0x3719e3);_0x15fb0e[_0x45e3('0x5c')]('g')[_0x45e3('0x38')](d3[_0x45e3('0x66')](_0xf074bd));_0x15fb0e[_0x45e3('0x26')](_0x45e3('0x17'))['remove']();_0x15fb0e[_0x45e3('0x26')]('rects')[_0x45e3('0xa')](_0x30a37a)[_0x45e3('0xe')]()[_0x45e3('0x5c')](_0x45e3('0x58'))['attr']('x',_0x2ded58(0x0))[_0x45e3('0x3e')]('y',_0x3e7f3c=>_0xf074bd(_0x3e7f3c[_0x45e3('0xb')]))[_0x45e3('0x3e')](_0x45e3('0x15'),_0xf074bd['bandwidth']())[_0x45e3('0x3e')](_0x45e3('0x34'),_0x38f1c1=>_0x2ded58(+_0x38f1c1[_0x5cf597]))['attr'](_0x45e3('0x36'),_0x2f70da=>_0x89761e(_0x2f70da['country']))[_0x45e3('0x3e')](_0x45e3('0x31'),0.8);}function draw_panel(_0x1fd835,_0x18d303){const _0x4fa941=[_0x45e3('0xb'),_0x45e3('0x3'),_0x45e3('0x52'),'recovered','fr','plot'];const _0x381135=d3[_0x45e3('0x4c')](_0x45e3('0x54'));const _0x2f84e7=_0x381135[_0x45e3('0x4c')]('tbody')[_0x45e3('0x26')]('tr')[_0x45e3('0xa')](_0x1fd835)[_0x45e3('0xe')]()['append']('tr');const _0x3e3824=_0x2f84e7[_0x45e3('0x26')]('td')[_0x45e3('0xa')](_0x45e9cc=>{return _0x4fa941[_0x45e3('0x29')](_0x3bf0fb=>{return{'column':_0x3bf0fb,'value':_0x45e9cc[_0x3bf0fb]};});})[_0x45e3('0xe')]()['append']('td')[_0x45e3('0x3e')](_0x45e3('0x5a'),(_0x406b71,_0x2fe75b)=>_0x4fa941[_0x2fe75b])[_0x45e3('0x62')](_0x12cea4=>_0x12cea4[_0x45e3('0x61')])[_0x45e3('0x39')]();_0x381135['selectAll'](_0x45e3('0x1f'))[_0x45e3('0x5d')](_0x45e3('0x9'),0x1f4);_0x381135[_0x45e3('0x26')]('td.cases')['text'](_0x292a37=>d3[_0x45e3('0x25')](',')(+_0x292a37[_0x45e3('0x61')]));_0x381135[_0x45e3('0x26')](_0x45e3('0x6'))[_0x45e3('0x48')](_0x3305b9=>d3[_0x45e3('0x25')](',')(+_0x3305b9[_0x45e3('0x61')]));_0x381135[_0x45e3('0x26')](_0x45e3('0x55'))[_0x45e3('0x48')](_0x529055=>d3['format'](',')(+_0x529055[_0x45e3('0x61')]));_0x381135['selectAll'](_0x45e3('0x46'))[_0x45e3('0x48')](_0x4d7f02=>d3[_0x45e3('0x25')](',.2')(+_0x4d7f02[_0x45e3('0x61')]*0x64));const _0x92a891=d3[_0x45e3('0x26')](_0x45e3('0x53'))[_0x45e3('0x5c')](_0x45e3('0x50'))[_0x45e3('0x3e')](_0x45e3('0x34'),width)[_0x45e3('0x3e')](_0x45e3('0x15'),height);const _0xa55693=d3['nest']()[_0x45e3('0x1')](_0xd27ea2=>_0xd27ea2[_0x45e3('0xb')])[_0x45e3('0x35')](_0x18d303);_0xa55693[_0x45e3('0x3f')](_0x20b48e=>{_0x20b48e[_0x45e3('0x1c')]=d3[_0x45e3('0x51')](_0x20b48e[_0x45e3('0x0')],_0x745b63=>+_0x745b63['cases']);_0x20b48e['vmax']=d3[_0x45e3('0xf')](_0x20b48e[_0x45e3('0x0')],_0x93ae59=>+_0x93ae59[_0x45e3('0x3')]);});const _0x5b962f=_0xa55693[_0x45e3('0x29')](_0x5623b6=>+_0x5623b6[_0x45e3('0x1c')]);const _0x5a0503=_0xa55693[_0x45e3('0x29')](_0x25b9fe=>+_0x25b9fe['vmax']);const _0x3227b3=d3[_0x45e3('0x2a')]()[_0x45e3('0x12')]([height-btol,0x5]);const _0x4ddccb=d3[_0x45e3('0x6a')]()['domain'](d3[_0x45e3('0x37')](_0x18d303,_0xbd706e=>parset(_0xbd706e[_0x45e3('0x13')])))['range']([0x5,width-0x4*stol]);const _0x40b818=d3[_0x45e3('0x1d')]()['x'](_0x97f689=>_0x4ddccb(parset(_0x97f689['date'])))['y'](_0x39aee8=>_0x3227b3(+_0x39aee8[_0x45e3('0x3')]));const _0x1c78a0=d3[_0x45e3('0x24')][0x8]['reverse']();const _0x595f33=d3['scaleLinear']()[_0x45e3('0x12')](_0x1c78a0)[_0x45e3('0x19')](d3[_0x45e3('0x12')](0x1,0x6));const _0x35d73a=_0x92a891[_0x45e3('0x5c')]('defs')['append'](_0x45e3('0x49'))['attr']('id',_0x45e3('0x21'))[_0x45e3('0x3e')](_0x45e3('0x22'),'rotate(90)');_0x35d73a[_0x45e3('0x5c')]('stop')['attr'](_0x45e3('0x27'),'0%')[_0x45e3('0x3e')](_0x45e3('0x44'),_0x595f33(0x1));_0x35d73a[_0x45e3('0x5c')](_0x45e3('0x2f'))[_0x45e3('0x3e')](_0x45e3('0x27'),_0x45e3('0x3b'))[_0x45e3('0x3e')](_0x45e3('0x44'),_0x595f33(0x2));_0x35d73a[_0x45e3('0x5c')](_0x45e3('0x2f'))[_0x45e3('0x3e')]('offset',_0x45e3('0x2c'))['attr'](_0x45e3('0x44'),_0x595f33(0x3));_0x35d73a[_0x45e3('0x5c')](_0x45e3('0x2f'))[_0x45e3('0x3e')](_0x45e3('0x27'),_0x45e3('0x6c'))[_0x45e3('0x3e')](_0x45e3('0x44'),_0x595f33(0x4));_0x35d73a[_0x45e3('0x5c')](_0x45e3('0x2f'))[_0x45e3('0x3e')]('offset',_0x45e3('0x68'))[_0x45e3('0x3e')]('stop-color',_0x595f33(0x5));const _0x73dc2f=d3[_0x45e3('0x3a')](_0x4ddccb)[_0x45e3('0x57')](0x0)[_0x45e3('0x4d')](_0x4ddccb[_0x45e3('0x19')]())['tickFormat'](_0x3dd4d4=>timelabel(_0x3dd4d4));const _0x4ad4b8=_0x92a891[_0x45e3('0x5c')]('g')['call'](_0x73dc2f);_0x4ad4b8[_0x45e3('0x26')](_0x45e3('0x6e'))[_0x45e3('0x60')]();_0x4ad4b8[_0x45e3('0x26')]('.domain')[_0x45e3('0x3e')](_0x45e3('0x71'),0.25)[_0x45e3('0x3e')](_0x45e3('0x45'),'#777')[_0x45e3('0x3e')](_0x45e3('0x2b'),'translate(0,\x20'+(height-0x2*stol)+')');_0x4ad4b8[_0x45e3('0x5c')](_0x45e3('0x48'))[_0x45e3('0x3e')]('y',-0x5)['attr'](_0x45e3('0x36'),_0x45e3('0x33'))[_0x45e3('0x3e')](_0x45e3('0x41'),'start')['style'](_0x45e3('0x6b'),_0x45e3('0x5f'))['attr'](_0x45e3('0x2b'),_0x45e3('0x69')+height+')')['text'](timelabel(_0x4ddccb[_0x45e3('0x19')]()[0x0]));_0x4ad4b8[_0x45e3('0x5c')](_0x45e3('0x48'))[_0x45e3('0x3e')]('y',-0x5)[_0x45e3('0x3e')]('fill','#000')[_0x45e3('0x3e')](_0x45e3('0x41'),_0x45e3('0x59'))[_0x45e3('0x5d')]('font-size',_0x45e3('0x5f'))[_0x45e3('0x3e')]('transform',_0x45e3('0xd')+(width-0x3*stol)+'\x20'+height+')')['text'](timelabel(_0x4ddccb[_0x45e3('0x19')]()[0x1]));_0x92a891[_0x45e3('0x5c')]('g')[_0x45e3('0x47')](_0x5b962f)['append'](_0x45e3('0x48'))[_0x45e3('0x3e')]('y',-0x5)[_0x45e3('0x3e')](_0x45e3('0x36'),_0x45e3('0x33'))[_0x45e3('0x3e')](_0x45e3('0x41'),_0x45e3('0x59'))[_0x45e3('0x5d')](_0x45e3('0x6b'),'10px')[_0x45e3('0x3e')](_0x45e3('0x2b'),_0x45e3('0xd')+width+',\x20'+(height-1.42*stol)+')')[_0x45e3('0x48')]((_0x3feced,_0x157442)=>_0x3feced[_0x157442]);_0x92a891[_0x45e3('0x5c')]('g')[_0x45e3('0x47')](_0x5a0503)['append']('text')['attr']('y',-0x5)[_0x45e3('0x3e')]('fill','#000')[_0x45e3('0x3e')](_0x45e3('0x41'),_0x45e3('0x59'))['style'](_0x45e3('0x6b'),_0x45e3('0x5f'))[_0x45e3('0x3e')](_0x45e3('0x2b'),_0x45e3('0xd')+width+',\x20'+1.7*stol+')')['text']((_0x42c576,_0x359327)=>_0x42c576[_0x359327]);_0x92a891[_0x45e3('0x5c')]('path')[_0x45e3('0xa')](_0xa55693)[_0x45e3('0x16')](_0x45e3('0x67'))[_0x45e3('0x3e')]('d',_0x149e0a=>{_0x3227b3[_0x45e3('0x19')]([0x0,_0x149e0a[_0x45e3('0x1a')]]);return _0x40b818(_0x149e0a[_0x45e3('0x0')]);})[_0x45e3('0x3e')](_0x45e3('0x45'),_0x45e3('0x8'))[_0x45e3('0x5d')](_0x45e3('0x71'),0x2)[_0x45e3('0x5d')]('fill',_0x45e3('0x30'))[_0x45e3('0x3e')](_0x45e3('0x2b'),_0x45e3('0x32'));}Promise[_0x45e3('0x18')]([d3[_0x45e3('0x7')](dtable),d3['csv'](series),d3[_0x45e3('0x7')](tally)])['then'](function(_0x570b0b){const _0x5cc962=_0x570b0b[0x0];const _0x20427f=_0x570b0b[0x1];const _0x11cf50=_0x570b0b[0x2];const _0x5baa5a=d3[_0x45e3('0x37')](_0x20427f,_0x55baa3=>parset(_0x55baa3[_0x45e3('0x13')]))[0x1];d3[_0x45e3('0x26')](_0x45e3('0x5b'))[_0x45e3('0x48')](d3[_0x45e3('0xc')](_0x45e3('0x6f'))(_0x5baa5a));tly=d3['select']('dl')[_0x45e3('0x47')](_0x11cf50);tly['select'](_0x45e3('0x43'))[_0x45e3('0x48')](_0x23ca3f=>d3[_0x45e3('0x25')](',')(+_0x23ca3f[0x0][_0x45e3('0x4e')]));tly[_0x45e3('0x4c')](_0x45e3('0x72'))[_0x45e3('0x48')](_0x1a4ef3=>d3[_0x45e3('0x25')](',')(+_0x1a4ef3[0x1][_0x45e3('0x4e')]));tly[_0x45e3('0x4c')](_0x45e3('0x6d'))['text'](_0x2df1cd=>d3[_0x45e3('0x25')](',')(+_0x2df1cd[0x2][_0x45e3('0x4e')]));tly[_0x45e3('0x4c')](_0x45e3('0x64'))[_0x45e3('0x48')](_0xf3748f=>d3[_0x45e3('0x25')](',')(+_0xf3748f[0x0][_0x45e3('0x63')]));tly[_0x45e3('0x4c')](_0x45e3('0x3c'))[_0x45e3('0x48')](_0x57bbed=>d3[_0x45e3('0x25')](',')(+_0x57bbed[0x1][_0x45e3('0x63')]));tly['select'](_0x45e3('0x70'))[_0x45e3('0x48')](_0x105b5c=>d3[_0x45e3('0x25')](',')(+_0x105b5c[0x2][_0x45e3('0x63')]));const _0x25198f=0x7;const _0x27ae47=d3[_0x45e3('0x24')][_0x25198f][_0x45e3('0x23')]();barplot(_0x5cc962,_0x45e3('0x14'),_0x45e3('0x3'),_0x25198f,_0x27ae47);barplot(_0x5cc962,_0x45e3('0x10'),_0x45e3('0x52'),_0x25198f,_0x27ae47);barplot(_0x5cc962,_0x45e3('0x42'),'fr',_0x25198f,_0x27ae47);draw_panel(_0x5cc962,_0x20427f);});