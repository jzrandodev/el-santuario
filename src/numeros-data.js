/* LOS NÚMEROS — the counts behind the shrine, as published on the eve of the farewell.
 * Sources: Olé, "10 números de Messi con la Selección" (5 October 2026) for the ten counts;
 * a published match-by-venue table of his 207 senior matches for the map (36 countries and
 * territories, Hong Kong counted apart from China; Olé counts 35). The venue counts sum to 207.
 * Two corrections to Olé, both checked against the map source: the World Cup runners-up are
 * 2014 and 2026 (Olé prints "2014 y 2014"). Nothing here is rounded or estimated. */

export const NUMS = [
  { n:'207', k:{ es:'Partidos', en:'Matches' },
    t:{ es:'185 como titular. Serán 208 con el amistoso ante Benín. El segundo en la historia, Javier Mascherano, tiene 147.',
        en:'185 as a starter. 208 after the friendly against Benin. Second all-time, Javier Mascherano, has 147.' } },
  { n:'125', k:{ es:'Goles', en:'Goals' },
    t:{ es:'El máximo goleador; Gabriel Batistuta es segundo con 54. El primero, a Croacia en un amistoso de 2006; el último, a Egipto en los octavos del Mundial 2026. 54 en amistosos, 36 en Eliminatorias, 21 en Mundiales y 14 en Copa América. A Bolivia le hizo 11.',
        en:'The all-time top scorer; Gabriel Batistuta is second with 54. The first against Croatia in a 2006 friendly; the last against Egypt in the 2026 World Cup round of 16. 54 in friendlies, 36 in qualifiers, 21 at World Cups and 14 at the Copa América. Bolivia conceded 11.' } },
  { n:'68', k:{ es:'Asistencias', en:'Assists' },
    t:{ es:'La última, el centro a la cabeza de Lautaro Martínez en el 2–1 a Inglaterra, en la semifinal del Mundial 2026.',
        en:'The last, a cross onto Lautaro Martínez’s head in the 2–1 against England, the 2026 World Cup semi-final.' } },
  { n:'6', k:{ es:'Títulos', en:'Titles' },
    t:{ es:'Copa América 2021 y 2024, Finalissima 2022 y Mundial 2022 con la mayor; Mundial Sub-20 2005 y oro olímpico en Pekín 2008. Y cinco subcampeonatos: Copa América 2007, 2015 y 2016, Mundial 2014 y 2026.',
        en:'Copa América 2021 and 2024, the 2022 Finalissima and the 2022 World Cup with the senior team; the 2005 U-20 World Cup and Olympic gold in Beijing 2008. And five runner-up finishes: Copa América 2007, 2015 and 2016, the World Cup in 2014 and 2026.' } },
  { n:'34', k:{ es:'Partidos en Mundiales', en:'World Cup matches' },
    t:{ es:'El que más jugó en la historia (Cristiano Ronaldo, 27). Seis Mundiales, como Cristiano y Memo Ochoa. 21 goles: segundo en la tabla histórica, uno menos que Kylian Mbappé.',
        en:'The most in history (Cristiano Ronaldo, 27). Six World Cups, like Cristiano and Memo Ochoa. 21 goals: second all-time, one behind Kylian Mbappé.' } },
  { n:'2', k:{ es:'Balones de Oro en Mundiales', en:'World Cup Golden Balls' },
    t:{ es:'El de 2014, amargo, después de perder la final en el Maracanã. El de 2022 en Qatar, con la copa.',
        en:'2014’s, bitter, after losing the final at the Maracanã. 2022’s in Qatar, with the trophy.' } },
  { n:'9', k:{ es:'Técnicos', en:'Coaches' },
    t:{ es:'Pekerman lo hizo debutar. Después Basile, Maradona, Batista, Sabella, Martino, Bauza, Sampaoli y Scaloni.',
        en:'Pekerman gave him his debut. Then Basile, Maradona, Batista, Sabella, Martino, Bauza, Sampaoli and Scaloni.' } },
  { n:'172', k:{ es:'Veces con la 10', en:'Times in the 10' },
    t:{ es:'Debutó con la 18, en su primer Mundial usó la 19, en los Juegos Olímpicos la 15. Después, la 10.',
        en:'He debuted in 18, wore 19 at his first World Cup and 15 at the Olympics. Then the 10.' } },
  { n:'2', k:{ es:'Rojas', en:'Red cards' },
    t:{ es:'Nueve amarillas y dos rojas en toda su carrera: la del debut con Hungría y la del cruce con Gary Medel en el tercer puesto de la Copa América 2019.',
        en:'Nine yellows and two reds in his whole career: on his debut against Hungary, and the clash with Gary Medel in the 2019 Copa América third-place match.' } },
  { n:'154', k:{ es:'Partidos fuera del país', en:'Matches abroad' },
    t:{ es:'53 en Argentina y 154 afuera, en 36 países y territorios. Estados Unidos encabeza con 30; Brasil, 23.',
        en:'53 in Argentina and 154 abroad, in 36 countries and territories. The United States leads with 30; Brazil, 23.' } }
];

/* [es, en, matches, lon, lat]. Points are representative of the country, not stadiums. */
export const SEDES = [
  ['Argentina','Argentina',53,-64.2,-31.4], ['Estados Unidos','United States',30,-98.5,39.5],
  ['Brasil','Brazil',23,-47.9,-15.8], ['Chile','Chile',10,-70.7,-33.4],
  ['Venezuela','Venezuela',10,-66.9,10.5], ['Qatar','Qatar',9,51.5,25.3],
  ['Alemania','Germany',5,10.4,51.2], ['España','Spain',5,-3.7,40.4],
  ['Paraguay','Paraguay',5,-57.6,-25.3], ['Rusia','Russia',5,37.6,55.8],
  ['Sudáfrica','South Africa',5,24.0,-29.0], ['Ecuador','Ecuador',4,-78.5,-0.2],
  ['Inglaterra','England',4,-1.5,52.6], ['Perú','Peru',4,-77.0,-12.0],
  ['Suiza','Switzerland',4,8.2,46.8], ['Uruguay','Uruguay',4,-56.2,-34.9],
  ['Bolivia','Bolivia',3,-68.1,-16.5], ['Colombia','Colombia',3,-74.1,4.7],
  ['Arabia Saudita','Saudi Arabia',2,46.7,24.7], ['Australia','Australia',2,145.0,-37.8],
  ['China','China',2,116.4,39.9], ['Angola','Angola',1,13.2,-8.8],
  ['Bangladesh','Bangladesh',1,90.4,23.8], ['Emiratos Árabes Unidos','United Arab Emirates',1,54.4,24.5],
  ['Francia','France',1,2.35,48.9], ['Guatemala','Guatemala',1,-90.5,14.6],
  ['Hong Kong','Hong Kong',1,114.2,22.3], ['Hungría','Hungary',1,19.0,47.5],
  ['India','India',1,88.4,22.6], ['Irlanda','Ireland',1,-6.3,53.3],
  ['Israel','Israel',1,34.8,32.1], ['Italia','Italy',1,12.5,42.5],
  ['Japón','Japan',1,139.7,35.7], ['Noruega','Norway',1,10.8,59.9],
  ['Rumania','Romania',1,26.1,44.4], ['Suecia','Sweden',1,18.1,59.3]
];

export const COPY = {
  es: {
    title:'El Santuario — Los números', mark:'LOS NÚMEROS', back:'volver al santuario',
    lede:'Diez números para guardar, la víspera de la despedida. 207 partidos con la Selección mayor; serán 208 después de Benín.',
    mapH:'Por el mundo', mapK:'UNA VELA POR CADA LUGAR DONDE JUGÓ',
    mapT:'Cada vela es un país o territorio; su tamaño, los partidos que jugó ahí. Tocá una para ver cuántos.',
    listH:'Las 36 sedes', partidos:'partidos', partido:'partido', toggle:'EN', toggleLabel:'Read in English',
    src:'Fuentes: Olé, “10 números de Messi con la Selección”, 5·X·2026; tabla publicada de sedes de sus 207 partidos (36 países y territorios, con Hong Kong aparte de China; Olé cuenta 35). Partidos, goles, títulos y récords mundialistas contrastados con El Día, Telefe y FIFA. Los puntos del mapa representan países, no estadios.'
  },
  en: {
    title:'El Santuario — The numbers', mark:'THE NUMBERS', back:'back to the shrine',
    lede:'Ten numbers to keep, on the eve of the farewell. 207 senior matches for Argentina; 208 after Benin.',
    mapH:'Around the world', mapK:'A CANDLE FOR EVERY PLACE HE PLAYED',
    mapT:'Each candle is a country or territory; its size, the matches he played there. Tap one to see how many.',
    listH:'The 36 venues', partidos:'matches', partido:'match', toggle:'ES', toggleLabel:'Leer en español',
    src:'Sources: Olé, “10 números de Messi con la Selección”, 5 October 2026; a published venue table of his 207 matches (36 countries and territories, Hong Kong apart from China; Olé counts 35). Matches, goals, titles and World Cup records cross-checked with El Día, Telefe and FIFA. Map points stand for countries, not stadiums.'
  }
};
