import { PANELS, STATE } from './panels.js';
import { getLang, setLang } from './i18n.js';

/* SOBRE EL PROYECTO — the placard beside the shrine. What it is, how to walk it, and where the
 * facts come from. Counts are read from PANELS so this page can never disagree with the field. */

let lang = getLang();
const $ = id => document.getElementById(id);
const n = s => PANELS.filter(p => p.state === s).length;
const BASE = import.meta.env.BASE_URL;
const REPO = 'https://github.com/jzrandodev/el-santuario';

const COPY = {
  es: {
    title:'El Santuario — Sobre el proyecto', mark:'SOBRE EL PROYECTO', back:'volver al santuario',
    toggle:'EN', toggleLabel:'Read in English',
    lede:'Un santuario de ruta para la carrera de Lionel Messi, de Rosario a la carta de despedida.',
    sections:[
      ['Qué es',
       `<p>En las rutas argentinas hay santuarios hechos por la gente: los del Gauchito Gil, con sus banderas rojas, velas y exvotos dejados por promesas cumplidas. Cada objeto es un pedido o un agradecimiento.</p>
        <p>El Santuario usa ese idioma para contar la carrera de Messi. Son ${PANELS.length} objetos votivos suspendidos en la oscuridad. El visitante lleva una vela y cada objeto que alcanza queda encendido.</p>`],
      ['Los tres estados',
       `<p>Cada momento es una de tres cosas, y se distingue sin leer una palabra:</p>
        <ul>
          <li><b>Te pido</b> (${n(STATE.PIDO)}), en hojalata: las derrotas y los pedidos. Las finales perdidas, el tratamiento en Rosario, el burofax.</li>
          <li><b>Gracias por el favor concedido</b> (${n(STATE.GRACIAS)}), en bronce: los títulos, juveniles incluidos.</li>
          <li><b>Dolor muy grande</b> (${n(STATE.FIN)}): el final. El nombre sale de sus palabras en la despedida: «No venir más va a ser un dolor muy grande».</li>
        </ul>
        <p>El celeste no aparece hasta 2021. Le pertenece a la camiseta de la Selección mayor y solo a sus liberaciones.</p>`],
      ['Los objetos',
       `<ul>
          <li><b>Estampita</b>: la tarjeta impresa barata, la esperanza en serie.</li>
          <li><b>Exvoto pintado</b>: una escena ingenua sobre lata, con una frase escrita a mano.</li>
          <li><b>Placa de bronce</b>: sin imagen. La ausencia es el objeto.</li>
          <li><b>Milagro de hojalata</b>: un objeto estampado, nunca una escena.</li>
        </ul>
        <p>Cada época de su carrera tiene su propio acabado y su propio desgaste.</p>`],
      ['Cómo recorrerlo',
       `<p>Flechas o W A S D en la compu; arrastrar en el teléfono. Frente a un objeto, Enter o un toque abre su historia, y Escape la cierra.</p>
        <p>Quien prefiera leer tiene <a href="${BASE}?doc">la versión documento</a>: los mismos ${PANELS.length} momentos, quietos. Aparece sola si el dispositivo pide menos movimiento o no tiene WebGL.</p>`],
      ['Las otras salas',
       `<ul>
          <li><a href="${BASE}drafts/la-carta.html">La carta</a>: la carta escrita a mano con la que dejó la Selección, leída a la luz de una vela.</li>
          <li><a href="${BASE}numeros.html">Los números</a>: diez números con la Selección y un mapa con una vela por cada lugar donde jugó.</li>
        </ul>`],
      ['Fuentes',
       `<p>Cada fecha, resultado y cita fue contrastada con más de un medio: Olé, La Nación, Infobae, Forbes Argentina, Ámbito, El Día, Telefe, CNN en Español, ESPN, AP y FIFA. Cuando los medios no coinciden, el sitio lo dice en vez de elegir: las asistencias se muestran como 68–70.</p>
        <p>El registro de cada dato y su verificación está en <a href="${REPO}/blob/main/ASSETS.md" target="_blank" rel="noopener">ASSETS.md</a>.</p>`],
      ['Imágenes y videos',
       `<p>Ningún objeto usa fotos. Los paneles los pinta el propio sitio y son objetos votivos inventados sobre hechos documentados. Los videos que aparezcan en las historias se muestran con el reproductor de la plataforma donde fueron publicados, con el crédito de quien los subió. No se copian ni se alojan acá.</p>`],
      ['Créditos',
       `<p>Hecho por Juan Zamora. Construido con Vite y Three.js; el mapa usa d3-geo y Natural Earth (world-atlas). Tipografías Chivo y Alegreya. <a href="${REPO}" target="_blank" rel="noopener">Código en GitHub</a>.</p>
        <p>No está afiliado ni autorizado por la AFA, la FIFA ni ningún club.</p>`]
    ]
  },
  en: {
    title:'El Santuario — About the project', mark:'ABOUT THE PROJECT', back:'back to the shrine',
    toggle:'ES', toggleLabel:'Leer en español',
    lede:'A roadside shrine for Lionel Messi’s career, from Rosario to the farewell letter.',
    sections:[
      ['What it is',
       `<p>Argentine roads are lined with shrines built by ordinary people: the Gauchito Gil’s, with red flags, candles and ex-votos left for promises kept. Every object is a petition or a thank-you.</p>
        <p>El Santuario uses that language to tell Messi’s career. ${PANELS.length} votive objects hang in the dark. The visitor carries a candle, and every object it reaches stays lit.</p>`],
      ['The three states',
       `<p>Every moment is one of three things, readable without a word:</p>
        <ul>
          <li><b>Te pido</b>, I ask of you (${n(STATE.PIDO)}), in tin: the losses and the askings. The lost finals, the treatment in Rosario, the burofax.</li>
          <li><b>Gracias por el favor concedido</b>, thanks for the favor granted (${n(STATE.GRACIAS)}), in brass: the titles, youth ones included.</li>
          <li><b>Dolor muy grande</b>, a very great pain (${n(STATE.FIN)}): the ending. The name is his, from the farewell: «No venir más va a ser un dolor muy grande».</li>
        </ul>
        <p>Sky blue is withheld until 2021. It belongs to the senior Argentina shirt and only to its releases.</p>`],
      ['The objects',
       `<ul>
          <li><b>Estampita</b>: the cheap printed holy card, hope mass-produced.</li>
          <li><b>Painted ex-voto</b>: a naive scene on tin, with a hand-lettered line.</li>
          <li><b>Brass plaque</b>: no image. The absence is the object.</li>
          <li><b>Tin milagro</b>: a stamped object, never a scene.</li>
        </ul>
        <p>Each era of his career has its own finish and its own wear.</p>`],
      ['How to walk it',
       `<p>Arrow keys or W A S D on a computer; drag on a phone. In front of an object, Enter or a tap opens its story, and Escape closes it.</p>
        <p>If you’d rather read, there is <a href="${BASE}?doc">the document version</a>: the same ${PANELS.length} moments, held still. It opens on its own when a device asks for less motion or has no WebGL.</p>`],
      ['The other rooms',
       `<ul>
          <li><a href="${BASE}drafts/la-carta.html">The letter</a>: the handwritten letter he left the national team with, read by candlelight.</li>
          <li><a href="${BASE}numeros.html">The numbers</a>: ten numbers for Argentina and a map with a candle for every place he played.</li>
        </ul>`],
      ['Sources',
       `<p>Every date, score and quote was checked against more than one outlet: Olé, La Nación, Infobae, Forbes Argentina, Ámbito, El Día, Telefe, CNN en Español, ESPN, AP and FIFA. Where outlets disagree, the site says so instead of choosing: assists are shown as 68–70.</p>
        <p>The record of every fact and how it was checked is in <a href="${REPO}/blob/main/ASSETS.md" target="_blank" rel="noopener">ASSETS.md</a>.</p>`],
      ['Images and video',
       `<p>No object uses photographs. The site paints the panels itself, and they are invented votive objects about documented events. Any clip in a story plays in the player of the platform it was posted to, credited to whoever posted it. Nothing is copied or hosted here.</p>`],
      ['Credits',
       `<p>Made by Juan Zamora. Built with Vite and Three.js; the map uses d3-geo and Natural Earth (world-atlas). Type in Chivo and Alegreya. <a href="${REPO}" target="_blank" rel="noopener">Code on GitHub</a>.</p>
        <p>Not affiliated with or authorized by the AFA, FIFA or any club.</p>`]
    ]
  }
};

function render(){
  const c = COPY[lang];
  document.documentElement.lang = lang;
  document.title = c.title;
  $('mark').textContent = c.mark;
  $('back').title = c.back; $('back').setAttribute('aria-label', 'El Santuario: ' + c.back);
  $('lang').textContent = c.toggle; $('lang').setAttribute('aria-label', c.toggleLabel);
  $('lang').lang = lang === 'es' ? 'en' : 'es';
  $('sobre').innerHTML = `<p class="lede">${c.lede}</p>` +
    c.sections.map(([h, body]) => `<section><h2>${h}</h2>${body}</section>`).join('');
}

$('lang').addEventListener('click', () => { lang = lang === 'es' ? 'en' : 'es'; setLang(lang); render(); });
render();
