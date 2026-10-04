/* Spanish is the piece. English is a reading aid, never a second version: plaque lettering
 * (TE PIDO, place, date) is the shrine's own voice and stays rioplatense in both. Only the
 * chrome, the names, the facts and what assistive tech hears are translated. */
export const KEY = 'santuario:lang';

export function getLang(){
  try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'es'; } catch (_) { return 'es'; }
}
export function setLang(l){ try { localStorage.setItem(KEY, l); } catch (_) {} }

export const T = {
  es: {
    sub:'MESSI Y LA CAMISETA', gracias:'GRACIAS', fin:'SIN NOMBRE', pido:'TE PIDO',
    hint:'movete · la vela va con vos', found:'DE', foundEnd:'ENCENDIDAS',
    asDoc:'leer como documento', toggle:'EN', toggleLabel:'Read in English',
    doorTouch:'tocá la carta para abrirla', doorKey:'click o enter · abrí la carta',
    howto:'Flechas o W A S D para moverte. Cada objeto que la vela alcanza queda encendido y se anuncia. Frente a la carta, Enter la abre.',
    canvas:'El santuario: catorce objetos votivos suspendidos en la oscuridad, encendidos por una vela que lleva el visitante.',
    colophon:'BORRADOR · SIN IMÁGENES TODAVÍA — CADA PANEL ESPERA SU LÁMINA.<br>NO AFILIADO NI AUTORIZADO POR LA AFA, LA FIFA NI NINGÚN CLUB.',
    openIt:'Enter para abrirla.',
    stFin:'SIN NOMBRE TODAVÍA', stGracias:'GRACIAS POR EL FAVOR CONCEDIDO', stPido:'TE PIDO',
    h1:'El Santuario · Messi y la camiseta',
    lede:'No es una línea de tiempo. Son catorce objetos en un santuario, y el orden lo elegís vos. Acá están todos, quietos.',
    title:'El Santuario — Messi y la camiseta'
  },
  en: {
    sub:'MESSI AND THE SHIRT', gracias:'THANKS', fin:'UNNAMED', pido:'TE PIDO',
    hint:'move · the candle goes with you', found:'OF', foundEnd:'LIT',
    asDoc:'read as a document', toggle:'ES', toggleLabel:'Leer en español',
    doorTouch:'tap the letter to open it', doorKey:'click or enter · open the letter',
    howto:'Arrow keys or W A S D to move. Every object the candle reaches stays lit and is announced. In front of the letter, Enter opens it.',
    canvas:'The shrine: fourteen votive objects hanging in the dark, lit by a candle the visitor carries.',
    colophon:'DRAFT · NO IMAGES YET - EVERY PANEL IS WAITING FOR ITS PLATE.<br>NOT AFFILIATED WITH OR AUTHORIZED BY THE AFA, FIFA OR ANY CLUB.',
    openIt:'Press Enter to open it.',
    stFin:'NOT NAMED YET', stGracias:'THANKS FOR THE FAVOR GRANTED', stPido:'TE PIDO (I ASK OF YOU)',
    h1:'El Santuario · Messi and the shirt',
    lede:'Not a timeline. Fourteen objects in a shrine, and you choose the order. Here they all are, held still.',
    title:'El Santuario — Messi and the shirt'
  }
};

/* English for each panel, keyed by id. Facts mirror the Spanish exactly; nothing is added. */
export const EN = {
  '2006': { name:'The boy who never came on',
    fact:'Germany 1–1 Argentina, 4–2 on penalties. Messi, 18, an unused substitute.' },
  '2007': { name:'Maracaibo', fact:'Copa América final. Brazil 3–0 Argentina.' },
  '2010': { name:'Cape Town',
    fact:'Quarter-final. Germany 4–0 Argentina. Messi finished the World Cup without a goal.' },
  '2014': { name:'The final',
    fact:'World Cup final. Germany 1–0 (Götze, 113′). He walked past the trophy without looking at it.' },
  '2015': { name:'Santiago', fact:'Copa América final. Chile 0–0, 4–1 on penalties.' },
  '2016': { name:"It's over",
    fact:'Centenario final at MetLife. Chile 0–0, 4–2 on penalties. His went over the bar. That night he said it was over. He came back in August.' },
  '2018': { name:'Kazan',
    fact:'Round of 16. France 4–3 Argentina. Mbappé, 19, two goals in four minutes.' },
  '2021': { name:'The debt repaid',
    fact:'Copa América. Argentina 1–0 Brazil (Di María, 22′). His first major title, at 34, in the stadium where he lost the 2014 final.' },
  '2022': { name:'Lusail', fact:'World Cup final. Argentina 3–3 France, 4–2 on penalties.' },
  '2026': { name:'MetLife, again',
    fact:'World Cup final. Spain 1–0 after extra time (Ferran Torres, 106′). The same stadium as 2016, ten years on.' },
  'carta': { name:'The letter',
    fact:'Written two days after the final. Published six weeks later, by hand.' },
  'padre': { name:'The father',
    fact:'Jorge Messi, his father and lifelong representative, died aged 68 after a long illness. He is never depicted: a lit object, nothing more.' },
  'ofrenda': { name:'A fan, 43',
    fact:"A letter to Messi, left at the shrine. I'm 43 and I've been watching you for as long as I can remember. I saw you come on against Chelsea. I saw you at the U20 World Cup, at the Olympics, in the 5-0 against Real. I went to the Copa América final in New Jersey and came home devastated. I saw you leave and I saw you come back. And I saw Qatar. I own all your shirts. I have nothing else to ask of you. Thank you for the favor granted." },
  'camiseta': { name:'The shirt',
    fact:"Not a match. It is the shirt and the number, and what it costs to carry them." }
};

export function panelText(p, lang){
  const e = lang === 'en' && EN[p.id];
  return { name: e ? e.name : p.name, fact: e ? e.fact : p.fact };
}
