/* The thirty panels. Source of truth is ASSETS.md; this file must not drift from it.
 *
 * `src: null` means the lámina has not been made yet. A null path is NEVER requested and the
 * panel falls back to its generated layer, so the shrine is complete and shippable at every
 * point in the asset process. Nothing structural depends on which rung a panel ends up on.
 *
 * VERIFIED flags mirror ASSETS.md. A panel marked verified:false carries facts asserted from
 * general knowledge and has not been confirmed against a source. It must not ship that way.
 *
 * The whole career hangs here, country and club alike, under the same rule: a loss or an
 * asking is TE PIDO, a thing given is GRACIAS. Celeste belongs to the Argentina shirt alone,
 * and only to its senior releases (2021 on). Club panels never carry it, and neither do the
 * youth titles: the debt they could not pay was the senior one.
 */

import { ERA_OF } from './stories.js';

export const STATE = { PIDO: 'pido', GRACIAS: 'gracias', FIN: 'fin' };

/* rung: 1 estampita · 2 exvoto · 3 placa (no image, ever) · 4 milagro · 5 fotografía (unassigned) */
export const PANELS = [
  { id:'2006', state:STATE.PIDO, rung:1, verified:true, src:null,
    name:'El chico que no entró', line:'TE PIDO', place:'BERLÍN', date:'30·VI·2006',
    fact:'Alemania 1–1 Argentina, 4–2 por penales. Messi, 18 años, suplente sin ingresar.' },
  { id:'tratamiento', state:STATE.PIDO, rung:4, verified:true, src:null,
    name:'El tratamiento', line:'TE PIDO', place:'ROSARIO', date:'',
    fact:'A los 10 años, en las inferiores de Newell’s, le diagnosticaron déficit de hormona de crecimiento. Medía 1,27 m.' },
  { id:'servilleta', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'La servilleta', line:'TE PIDO', place:'BARCELONA', date:'14·XII·2000',
    fact:'Carles Rexach firmó su compromiso de ficharlo en una servilleta de papel. Messi tenía 13 años; el club pagaba el tratamiento.' },
  { id:'albacete', state:STATE.GRACIAS, rung:1, verified:true, src:null,
    name:'El primer gol', line:'GRACIAS', place:'CAMP NOU', date:'01·V·2005',
    fact:'Barcelona 2–0 Albacete. Entró en el 87′; a los 91′ picó la pelota sobre el arquero, con pase de Ronaldinho. Tenía 17 años.' },
  { id:'sub20', state:STATE.GRACIAS, rung:1, verified:true, src:null,
    name:'Utrecht', line:'GRACIAS', place:'UTRECHT', date:'02·VII·2005',
    fact:'Final del Mundial Sub-20. Argentina 2–1 Nigeria, los dos goles suyos de penal. Balón de Oro y Botín de Oro del torneo.' },
  { id:'debut', state:STATE.PIDO, rung:1, verified:true, src:null,
    name:'Cuarenta segundos', line:'TE PIDO', place:'BUDAPEST', date:'17·VIII·2005',
    fact:'Su debut en la Selección mayor. Entró en el 64′ y a los cuarenta segundos lo expulsaron. Hungría 1–2 Argentina.' },
  { id:'2007', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'Maracaibo', line:'TE PIDO', place:'MARACAIBO', date:'15·VII·2007',
    fact:'Final de la Copa América. Brasil 3–0 Argentina.' },
  { id:'pekin', state:STATE.GRACIAS, rung:2, verified:true, src:null,
    name:'Pekín', line:'GRACIAS', place:'PEKÍN', date:'23·VIII·2008',
    fact:'Final olímpica. Argentina 1–0 Nigeria: él habilitó a Di María, que la picó. Medalla de oro.' },
  { id:'roma', state:STATE.GRACIAS, rung:2, verified:true, src:null,
    name:'Roma', line:'GRACIAS', place:'ROMA', date:'27·V·2009',
    fact:'Final de la Champions. Barcelona 2–0 Manchester United. Su gol de cabeza, y después el botín en la mano.' },
  { id:'2010', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'Ciudad del Cabo', line:'TE PIDO', place:'CIUDAD DEL CABO', date:'03·VII·2010',
    fact:'Cuartos de final. Alemania 4–0 Argentina. Messi terminó el mundial sin goles.' },
  { id:'wembley', state:STATE.GRACIAS, rung:2, verified:true, src:null,
    name:'Wembley', line:'GRACIAS', place:'WEMBLEY', date:'28·V·2011',
    fact:'Final de la Champions. Barcelona 3–1 Manchester United. Hizo el segundo y fue la figura.' },
  { id:'2014', state:STATE.PIDO, rung:2, verified:true, src:null, scale:1.32,
    name:'La final', line:'TE PIDO', place:'MARACANÁ', date:'13·VII·2014',
    fact:'Final del mundo. Alemania 1–0 (Götze, 113′). Pasó al lado de la copa sin mirarla.' },
  { id:'2015', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'Santiago', line:'TE PIDO', place:'SANTIAGO', date:'04·VII·2015',
    fact:'Final de la Copa América. Chile 0–0, 4–1 por penales.' },
  { id:'berlin2015', state:STATE.GRACIAS, rung:2, verified:true, src:null,
    name:'Berlín, otra vez', line:'GRACIAS', place:'BERLÍN', date:'06·VI·2015',
    fact:'Final de la Champions en el Olympiastadion, el estadio donde en 2006 se quedó en el banco. Barcelona 3–1 Juventus; el triplete.' },
  { id:'2016', state:STATE.PIDO, rung:3, verified:true, src:null,
    name:'Se terminó', line:'TE PIDO', place:'EAST RUTHERFORD', date:'26·VI·2016',
    fact:'Final del Centenario en el MetLife. Chile 0–0, 4–2 por penales. El suyo se fue arriba. Esa noche dijo que se terminaba. Volvió en agosto.' },
  { id:'2018', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'Kazán', line:'TE PIDO', place:'KAZÁN', date:'30·VI·2018',
    fact:'Octavos de final. Francia 4–3 Argentina. Mbappé, 19 años, dos goles en cuatro minutos.' },

  { id:'2021', state:STATE.GRACIAS, rung:2, verified:true, src:null, celeste:0.35,
    name:'La deuda saldada', line:'GRACIAS POR EL FAVOR CONCEDIDO', place:'MARACANÁ', date:'10·VII·2021',
    fact:'Copa América. Argentina 1–0 Brasil (Di María, 22′). Su primer título mayor, a los 34, en el estadio donde había perdido la final de 2014.' },
  { id:'burofax', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'El burofax', line:'TE PIDO', place:'BARCELONA', date:'VIII·2020',
    fact:'Después del 2–8 con el Bayern pidió irse por burofax. El club no lo dejó y se quedó un año más.' },
  { id:'despedida', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'La despedida', line:'TE PIDO', place:'CAMP NOU', date:'08·VIII·2021',
    fact:'El club no pudo renovarle. Se despidió llorando en una conferencia de prensa, después de 21 años.' },
  { id:'finalissima', state:STATE.GRACIAS, rung:2, verified:true, src:null, celeste:0.5,
    name:'La Finalissima', line:'GRACIAS', place:'WEMBLEY', date:'01·VI·2022',
    fact:'Argentina 3–0 Italia. Dos asistencias y la figura del partido. Wembley otra vez, once años después.' },
  { id:'2022', state:STATE.GRACIAS, rung:2, verified:true, src:null, scale:1.24, celeste:1,
    name:'Lusail', line:'GRACIAS', place:'LUSAIL', date:'18·XII·2022',
    fact:'Final del mundo. Argentina 3–3 Francia, 4–2 por penales.' },

  { id:'paris', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'París', line:'TE PIDO', place:'PARÍS', date:'03·VI·2023',
    fact:'Su último partido en el PSG. PSG 2–3 Clermont, y parte del Parque de los Príncipes lo silbó.' },
  { id:'miami', state:STATE.GRACIAS, rung:1, verified:true, src:null,
    name:'Miami', line:'GRACIAS', place:'NASHVILLE', date:'19·VIII·2023',
    fact:'Leagues Cup: su gol y el primer penal de la tanda, 10–9. El primer título del Inter Miami. En 2025 llegó la MLS Cup, 3–1 a Vancouver.' },
  { id:'ocho', state:STATE.GRACIAS, rung:4, verified:true, src:null,
    name:'Ocho', line:'GRACIAS', place:'PARÍS', date:'30·X·2023',
    fact:'Su octavo Balón de Oro, un récord. Lo ganó por el Mundial.' },
  { id:'2024', state:STATE.GRACIAS, rung:2, verified:true, src:null, celeste:0.6,
    name:'Llorar en el banco', line:'GRACIAS', place:'MIAMI GARDENS', date:'14·VII·2024',
    fact:'Final de la Copa América. Se rompió el tobillo a los 64′ y lloró en el banco. Argentina 1–0 Colombia, Lautaro en el 112′.' },
  { id:'2026', state:STATE.FIN, rung:3, verified:true, src:null,
    name:'MetLife, otra vez', line:'', place:'EAST RUTHERFORD', date:'19·VII·2026',
    fact:'Final del mundo. España 1–0 en tiempo suplementario (Ferran Torres, 106′). El mismo estadio que en 2016, diez años después.' },
  { id:'carta', state:STATE.FIN, rung:0, verified:true, src:null, scale:1.18, room:'la-carta',
    name:'La carta', line:'', place:'', date:'21·VII·2026 — 31·VIII·2026',
    fact:'Escrita dos días después de la final. Publicada seis semanas más tarde, a mano.' },
  { id:'padre', state:STATE.FIN, rung:4, verified:true, src:null,
    name:'El padre', line:'', place:'ROSARIO', date:'08·VIII·2026',
    fact:'Jorge Messi, su padre y representante de toda la vida, murió a los 68 años tras una larga enfermedad. Nunca se lo representa: un objeto encendido, nada más.' },
  { id:'monumental', state:STATE.FIN, rung:2, verified:true, src:null,
    name:'El último partido', line:'', place:'MONUMENTAL', date:'06·X·2026',
    fact:'Argentina 3–0 Benín. Su partido 208: el córner del primero, el pase del segundo y el tercero de penal, su gol 126.' },
  { id:'camiseta', state:STATE.FIN, rung:4, verified:true, src:null,
    name:'La camiseta', line:'', place:'', date:'',
    fact:'No es un partido. Es la camiseta y el número, y lo que cuesta llevarlos.' }
];

export const TOTAL = PANELS.length;

/* ---------- generated layers ----------------------------------------------------------------
 * Every panel can draw itself with no asset at all. These are not placeholders: they are the
 * fallback the piece ships with, and they must look like objects in the shrine, not like
 * missing images. An arriving lámina replaces the image region only; the frame stays.
 * ------------------------------------------------------------------------------------------ */

const W = 512, H = 683;

const INK = {
  tinBase:['#4E4E47','#2F2E29'], tinEdge:'rgba(217,213,200,0.16)', tinText:'rgba(226,224,214,0.74)',
  brassBase:['#8A6E24','#54400F'], brassEdge:'rgba(228,196,106,0.30)', brassText:'#E9CE7E'
};

function rounded(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);
  c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}

function grain(c,alpha){
  const im=c.getImageData(0,0,W,H), d=im.data;
  for(let i=0;i<d.length;i+=4){const n=(Math.random()-0.5)*alpha;
    d[i]+=n; d[i+1]+=n; d[i+2]+=n;}
  c.putImageData(im,0,0);
}

function caps(c,text,x,y,size,color,track=0.18,weight=700){
  c.save(); c.fillStyle=color; c.textAlign='center'; c.textBaseline='middle';
  c.font=`${weight} ${size}px Chivo, system-ui, sans-serif`;
  const chars=[...text]; const sp=size*track;
  let total=0; chars.forEach(ch=>total+=c.measureText(ch).width+sp);
  total-=sp; let cx=x-total/2;
  chars.forEach(ch=>{const w=c.measureText(ch).width; c.fillText(ch,cx+w/2,y); cx+=w+sp;});
  c.restore();
}

function wrapCaps(c,text,x,y,size,color,maxW,lh){
  const words=text.split(/\s+/); let line='', yy=y;
  c.save(); c.font=`700 ${size}px Chivo, system-ui, sans-serif`;
  for(const w of words){
    const t=line?line+' '+w:w;
    if(c.measureText(t).width*1.18>maxW && line){ caps(c,line,x,yy,size,color); line=w; yy+=lh; }
    else line=t;
  }
  if(line) caps(c,line,x,yy,size,color);
  c.restore(); return yy;
}

/* ERAS. Every panel is made by a different hand depending on when it happened, the way a real
 * shrine collects objects over decades. Older eras are more worn. Tin and brass, and the state
 * line, stay what they are; the era only changes how the object was made and how it aged. */
const AGE = { origen:30, promesa:22, cumbre:18, quiebre:20, liberacion:12, final:7 };

function eraDress(c, era, brass){
  const hi = brass ? 'rgba(233,206,126,' : 'rgba(217,213,200,';
  c.save();
  if (era === 'origen') {
    // a hand-tinted card from the nineties: sepia wash and an edge chewed by handling
    c.fillStyle='rgba(120,78,36,0.22)'; c.fillRect(0,0,W,H);
    c.fillStyle='#0A0806';
    for (let i=0;i<70;i++){
      const t=i/70, side=i%4, r=2+Math.abs(Math.sin(i*7.3))*6;
      const x= side===0? t*W*4%W : side===1? W : side===2? (t*W*4)%W : 0;
      const y= side===0? 0 : side===1? (t*H*4)%H : side===2? H : (t*H*4)%H;
      c.beginPath(); c.arc(x,y,r,0,Math.PI*2); c.fill();
    }
  } else if (era === 'promesa') {
    // a kiosk estampita: gold double edge, the inner one printed a hair off register
    c.strokeStyle='rgba(214,170,72,0.55)'; c.lineWidth=3; c.strokeRect(16,16,W-32,H-32);
    c.strokeStyle='rgba(176,18,24,0.35)'; c.lineWidth=1.5; c.strokeRect(25,23,W-48,H-48);
    c.strokeStyle='rgba(214,170,72,0.40)'; c.lineWidth=1.5; c.strokeRect(23,23,W-46,H-46);
  } else if (era === 'cumbre') {
    // beaten tin nailed to the wall: a nail in each corner and one at the top
    for (const [x,y] of [[22,22],[W-22,22],[22,H-22],[W-22,H-22],[W/2,16]]) {
      const g=c.createRadialGradient(x-2,y-2,1,x,y,7);
      g.addColorStop(0,hi+'0.85)'); g.addColorStop(1,'rgba(20,18,16,0.9)');
      c.fillStyle=g; c.beginPath(); c.arc(x,y,6,0,Math.PI*2); c.fill();
    }
  } else if (era === 'quiebre') {
    // taped back up after a fall: two strips of tape and the scratches of the fall
    c.fillStyle='rgba(222,206,160,0.20)';
    c.translate(70,30); c.rotate(-0.5); c.fillRect(-60,-14,120,28); c.setTransform(1,0,0,1,0,0);
    c.translate(W-70,30); c.rotate(0.5); c.fillRect(-60,-14,120,28); c.setTransform(1,0,0,1,0,0);
    c.strokeStyle=hi+'0.16)'; c.lineWidth=1;
    for (let i=0;i<9;i++){ const y=90+i*58, x=40+((i*97)%300);
      c.beginPath(); c.moveTo(x,y); c.lineTo(x+60+((i*37)%80),y+18-((i*13)%30)); c.stroke(); }
  } else if (era === 'liberacion') {
    // a retablo: an arch over the top and small turned ornaments at the corners
    c.strokeStyle=hi+'0.50)'; c.lineWidth=2.5;
    c.beginPath(); c.moveTo(18,96); c.lineTo(18,40); c.quadraticCurveTo(W/2,-26,W-18,40); c.lineTo(W-18,96); c.stroke();
    c.fillStyle=hi+'0.55)';
    for (const [x,y] of [[18,H-18],[W-18,H-18],[18,104],[W-18,104]]) {
      c.beginPath(); c.moveTo(x,y-7); c.lineTo(x+7,y); c.lineTo(x,y+7); c.lineTo(x-7,y); c.closePath(); c.fill();
    }
  } else if (era === 'final') {
    // made this year and barely touched, with the thin black edge of mourning
    c.strokeStyle='rgba(8,6,5,0.85)'; c.lineWidth=7; c.strokeRect(10,10,W-20,H-20);
  }
  c.restore();
}

/** Paint one panel. Returns an HTMLCanvasElement ready to become a texture. */
export function paintPanel(p){
  const cv=document.createElement('canvas'); cv.width=W; cv.height=H;
  const c=cv.getContext('2d');
  const brass = p.state===STATE.GRACIAS || p.rung===3;

  // ground
  const g=c.createLinearGradient(0,0,W*0.4,H);
  const base = brass ? INK.brassBase : INK.tinBase;
  g.addColorStop(0,base[0]); g.addColorStop(1,base[1]);
  c.fillStyle=g; c.fillRect(0,0,W,H);

  // bevel
  c.strokeStyle = brass ? INK.brassEdge : INK.tinEdge; c.lineWidth=3;
  rounded(c,6,6,W-12,H-12,3); c.stroke();

  const textCol = brass ? '#E9CE7E' : INK.tinText;

  if(p.pending){
    // NOT YET. An empty frame hung before the thing it is for: dashed, unpainted, waiting.
    c.save(); c.setLineDash([14,10]); c.strokeStyle='rgba(217,213,200,0.30)'; c.lineWidth=2;
    c.strokeRect(46,46,W-92,H*0.56); c.restore();
    caps(c,'TODAVÍA NO',W/2,46+H*0.28,16,'rgba(217,213,200,0.34)',0.36,400);
    let y=H*0.56+46+56;
    caps(c,p.place,W/2,y,19,textCol,0.24); y+=32;
    caps(c,p.date,W/2,y,14,'rgba(217,213,200,0.42)',0.24);
  } else if(p.rung===3){
    // PLACA DE BRONCE — no image, ever. The absence is the panel.
    let y=H*0.40;
    if(p.line) y=wrapCaps(c,p.line,W/2,y,26,textCol,W*0.78,40)+52;
    caps(c,p.place,W/2,y,22,textCol,0.22); y+=40;
    caps(c,p.date,W/2,y,17,'rgba(233,206,126,0.62)',0.24);
    // an engraved rule, the only ornament a plaque gets
    c.strokeStyle='rgba(233,206,126,0.22)'; c.lineWidth=1.5;
    c.beginPath(); c.moveTo(W*0.30,H*0.60); c.lineTo(W*0.70,H*0.60); c.stroke();
  } else if(p.rung===0){
    // LA CARTA — no image, ever. A ruled notepad sheet, and the panel is a door to the room.
    const ix=40, iy=40, iw=W-80, ih=H-80;
    c.fillStyle='rgba(228,216,188,0.20)'; c.fillRect(ix,iy,iw,ih);
    c.strokeStyle='rgba(20,18,16,0.38)'; c.lineWidth=1;
    for(let y=iy+64; y<iy+ih-24; y+=26){ c.beginPath(); c.moveTo(ix+22,y); c.lineTo(ix+iw-22,y); c.stroke(); }
    caps(c,'LA CARTA',W/2,iy+34,20,textCol,0.30);
    caps(c,p.date,W/2,iy+ih-40,13,'rgba(217,213,200,0.42)',0.22);
  } else if(p.rung===4){
    // MILAGRO DE HOJALATA — a stamped object, never a scene.
    c.save(); c.translate(W/2,H*0.42);
    c.strokeStyle='rgba(217,213,200,0.44)'; c.lineWidth=6; c.lineJoin='round';
    if(p.id==='camiseta' || p.id==='ocho'){
      const n = p.id==='ocho' ? '8' : '10';
      c.font='900 210px Chivo, system-ui, sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      c.fillStyle='rgba(217,213,200,0.30)'; c.fillText(n,0,0);
      c.strokeStyle='rgba(217,213,200,0.40)'; c.lineWidth=3; c.strokeText(n,0,0);
    } else if(p.id==='tratamiento'){
      // a stamped tin figure of a child, the oldest kind of milagro: a body asked for
      c.fillStyle='rgba(217,213,200,0.24)';
      c.beginPath(); c.arc(0,-78,26,0,Math.PI*2); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(-34,-44); c.lineTo(34,-44); c.lineTo(26,40); c.lineTo(-26,40); c.closePath();
      c.fill(); c.stroke();
      c.beginPath(); c.moveTo(-20,40); c.lineTo(-22,112); c.moveTo(20,40); c.lineTo(22,112); c.stroke();
    } else {
      // a candle: the only mark El Padre ever gets
      c.fillStyle='rgba(232,220,192,0.26)'; c.fillRect(-26,-10,52,150);
      c.beginPath(); c.ellipse(0,-34,14,30,0,0,Math.PI*2);
      const fg=c.createRadialGradient(0,-28,2,0,-34,34);
      fg.addColorStop(0,'rgba(255,246,220,0.95)'); fg.addColorStop(0.5,'rgba(255,193,99,0.55)');
      fg.addColorStop(1,'rgba(255,140,40,0)');
      c.fillStyle=fg; c.fill();
    }
    c.restore();
    let y=H*0.74;
    // the state line, so a tin object still says whether it asks or thanks
    if(p.line){ caps(c,p.line,W/2,y-36,15,textCol,0.30); }
    if(p.place){ caps(c,p.place,W/2,y,18,textCol,0.22); y+=32; }
    if(p.date) caps(c,p.date,W/2,y,15,'rgba(217,213,200,0.40)',0.24);
  } else {
    // ESTAMPITA / EX-VOTO — a framed image region above a hand-lettered caption.
    const ix=34, iy=34, iw=W-68, ih=H*0.56;
    const ig=c.createLinearGradient(0,iy,0,iy+ih);
    ig.addColorStop(0, brass?'#7A6220':'#2B2922'); ig.addColorStop(1, brass?'#4A3A0E':'#171613');
    c.fillStyle=ig; c.fillRect(ix,iy,iw,ih);
    // the empty slot says what it is rather than pretending
    caps(c,'SIN LÁMINA',W/2,iy+ih/2,13,'rgba(217,213,200,0.17)',0.34,400);
    c.strokeStyle= brass?'rgba(228,196,106,0.22)':'rgba(217,213,200,0.10)';
    c.lineWidth=2; c.strokeRect(ix,iy,iw,ih);

    let y=iy+ih+52;
    if(p.line) y=wrapCaps(c,p.line,W/2,y,p.line.length>18?17:23,textCol,W*0.80,32)+38;
    if(p.place){ caps(c,p.place,W/2,y,17,textCol,0.22); y+=30; }
    if(p.date) caps(c,p.date,W/2,y,14,brass?'rgba(233,206,126,0.58)':'rgba(217,213,200,0.38)',0.24);

    // celeste is withheld everywhere until a release is earned
    if(p.celeste){
      c.save(); c.globalAlpha=0.20*p.celeste; c.fillStyle='#75AADB';
      c.fillRect(ix,iy+ih-6,iw,6); c.restore();
    }
  }

  const era = ERA_OF[p.id];
  eraDress(c, era, brass);
  grain(c, AGE[era] ?? 16);
  return cv;
}
