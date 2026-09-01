/* The thirteen panels. Source of truth is ASSETS.md; this file must not drift from it.
 *
 * `src: null` means the lámina has not been made yet. A null path is NEVER requested and the
 * panel falls back to its generated layer, so the shrine is complete and shippable at every
 * point in the asset process. Nothing structural depends on which rung a panel ends up on.
 *
 * VERIFIED flags mirror ASSETS.md. A panel marked verified:false carries facts asserted from
 * general knowledge and has not been confirmed against a source. It must not ship that way.
 */

export const STATE = { PIDO: 'pido', GRACIAS: 'gracias', FIN: 'fin' };

/* rung: 1 estampita · 2 exvoto · 3 placa (no image, ever) · 4 milagro · 5 fotografía (unassigned) */
export const PANELS = [
  { id:'2006', state:STATE.PIDO, rung:1, verified:false, src:null,
    name:'El chico que no entró', line:'TE PIDO', place:'BERLÍN', date:'30·VI·2006',
    fact:'Alemania 1–1 Argentina, 4–2 por penales. Messi, 18 años, suplente sin ingresar.' },
  { id:'2007', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'Maracaibo', line:'TE PIDO', place:'MARACAIBO', date:'15·VII·2007',
    fact:'Final de la Copa América. Brasil 3–0 Argentina.' },
  { id:'2010', state:STATE.PIDO, rung:2, verified:false, src:null,
    name:'Ciudad del Cabo', line:'TE PIDO', place:'CIUDAD DEL CABO', date:'03·VII·2010',
    fact:'Cuartos de final. Alemania 4–0 Argentina. Messi terminó el mundial sin goles.' },
  { id:'2014', state:STATE.PIDO, rung:2, verified:false, src:null, scale:1.32,
    name:'La final', line:'TE PIDO', place:'MARACANÁ', date:'13·VII·2014',
    fact:'Final del mundo. Alemania 1–0 (Götze, 113′). Pasó al lado de la copa sin mirarla.' },
  { id:'2015', state:STATE.PIDO, rung:2, verified:false, src:null,
    name:'Santiago', line:'TE PIDO', place:'SANTIAGO', date:'04·VII·2015',
    fact:'Final de la Copa América. Chile 0–0, perdida por penales.' },
  { id:'2016', state:STATE.PIDO, rung:3, verified:true, src:null,
    name:'Se terminó', line:'TE PIDO', place:'EAST RUTHERFORD', date:'26·VI·2016',
    fact:'Final del Centenario en el MetLife. Chile 0–0, 4–2 por penales. El suyo se fue arriba. Esa noche dijo que se terminaba. Volvió en agosto.' },
  { id:'2018', state:STATE.PIDO, rung:2, verified:true, src:null,
    name:'Kazán', line:'TE PIDO', place:'KAZÁN', date:'30·VI·2018',
    fact:'Octavos de final. Francia 4–3 Argentina. Mbappé, 19 años, dos goles en cuatro minutos.' },

  { id:'2021', state:STATE.GRACIAS, rung:2, verified:false, src:null, celeste:0.35,
    name:'La deuda saldada', line:'GRACIAS POR EL FAVOR CONCEDIDO', place:'MARACANÁ', date:'10·VII·2021',
    fact:'Copa América. Argentina 1–0 Brasil (Di María, 22′). Su primer título mayor, a los 34, en el estadio donde había perdido la final de 2014.' },
  { id:'2022', state:STATE.GRACIAS, rung:2, verified:false, src:null, scale:1.24, celeste:1,
    name:'Lusail', line:'GRACIAS', place:'LUSAIL', date:'18·XII·2022',
    fact:'Final del mundo. Argentina 3–3 Francia, 4–2 por penales.' },

  { id:'2026', state:STATE.FIN, rung:3, verified:true, src:null,
    name:'MetLife, otra vez', line:'', place:'EAST RUTHERFORD', date:'19·VII·2026',
    fact:'Final del mundo. España 1–0 en tiempo suplementario (Ferran Torres, 106′). El mismo estadio que en 2016, diez años después.' },
  { id:'carta', state:STATE.FIN, rung:0, verified:true, src:null, scale:1.18, room:'la-carta',
    name:'La carta', line:'', place:'', date:'21·VII·2026 — 31·VIII·2026',
    fact:'Escrita dos días después de la final. Publicada seis semanas más tarde, a mano.' },
  { id:'padre', state:STATE.FIN, rung:4, verified:true, src:null,
    name:'El padre', line:'', place:'ROSARIO', date:'08·VIII·2026',
    fact:'Jorge Messi, su padre y representante de toda la vida, murió a los 68 años tras una larga enfermedad. Nunca se lo representa: un objeto encendido, nada más.' },
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

  if(p.rung===3){
    // PLACA DE BRONCE — no image, ever. The absence is the panel.
    let y=H*0.40;
    if(p.line) y=wrapCaps(c,p.line,W/2,y,26,textCol,W*0.78,40)+52;
    caps(c,p.place,W/2,y,22,textCol,0.22); y+=40;
    caps(c,p.date,W/2,y,17,'rgba(233,206,126,0.62)',0.24);
    // an engraved rule, the only ornament a plaque gets
    c.strokeStyle='rgba(233,206,126,0.22)'; c.lineWidth=1.5;
    c.beginPath(); c.moveTo(W*0.30,H*0.60); c.lineTo(W*0.70,H*0.60); c.stroke();
  } else if(p.rung===4){
    // MILAGRO DE HOJALATA — a stamped object, never a scene.
    c.save(); c.translate(W/2,H*0.42);
    c.strokeStyle='rgba(217,213,200,0.44)'; c.lineWidth=6; c.lineJoin='round';
    if(p.id==='camiseta'){
      c.font='900 210px Chivo, system-ui, sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      c.fillStyle='rgba(217,213,200,0.30)'; c.fillText('10',0,0);
      c.strokeStyle='rgba(217,213,200,0.40)'; c.lineWidth=3; c.strokeText('10',0,0);
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

  grain(c,16);
  return cv;
}
