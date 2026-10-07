/* THE LONGER STORY of each moment, shown when a panel is opened. Built only from facts already
 * verified in ASSETS.md; nothing here is new reporting. Spanish is rioplatense; English mirrors
 * it and adds nothing. ERA sets how the panel is made (see paintPanel) and is named on the card. */

export const ERAS = {
  origen:     { es:'Rosario · el origen',      en:'Rosario · the beginning' },
  promesa:    { es:'La promesa · 2004–2008',   en:'The promise · 2004–2008' },
  cumbre:     { es:'La cumbre · 2009–2015',    en:'The summit · 2009–2015' },
  quiebre:    { es:'El quiebre · 2016–2020',   en:'The break · 2016–2020' },
  liberacion: { es:'La liberación · 2021–2023', en:'The release · 2021–2023' },
  final:      { es:'El final · 2024–2026',     en:'The end · 2024–2026' }
};

export const ERA_OF = {
  tratamiento:'origen', servilleta:'origen',
  '2006':'promesa', albacete:'promesa', sub20:'promesa', debut:'promesa', '2007':'promesa', pekin:'promesa',
  roma:'cumbre', '2010':'cumbre', wembley:'cumbre', '2014':'cumbre', '2015':'cumbre', berlin2015:'cumbre',
  '2016':'quiebre', '2018':'quiebre', burofax:'quiebre',
  '2021':'liberacion', despedida:'liberacion', finalissima:'liberacion', '2022':'liberacion',
  paris:'liberacion', miami:'liberacion', ocho:'liberacion',
  '2024':'final', '2026':'final', carta:'final', padre:'final', monumental:'final', camiseta:'final'
};

export const STORY = {
  tratamiento: {
    es:'Jugaba en las inferiores de Newell’s cuando, a los 10 años, le diagnosticaron déficit de hormona de crecimiento. Medía 1,27 m. El tratamiento era caro, y conseguirlo fue una de las razones por las que la familia buscó un club afuera.',
    en:'He was in the Newell’s youth teams when, at 10, he was diagnosed with growth hormone deficiency. He was 1.27 m tall. The treatment was expensive, and getting it was one of the reasons the family looked for a club abroad.' },
  servilleta: {
    es:'El 14 de diciembre de 2000, en el club de tenis Pompeia, Carles Rexach escribió en una servilleta de papel que el Barcelona se comprometía a ficharlo. Firmaron también Josep Minguella y Horacio Gaggioli. Messi tenía 13 años; el club se hizo cargo del tratamiento.',
    en:'On 14 December 2000, at the Pompeia tennis club, Carles Rexach wrote on a paper napkin that Barcelona committed to signing him. Josep Minguella and Horacio Gaggioli signed too. Messi was 13; the club took on the treatment.' },
  albacete: {
    es:'Rijkaard lo mandó a la cancha en el 87′, por Eto’o. Primero hizo un gol que anularon por offside. En el 91′, otra vez con pase de Ronaldinho, la picó por encima del arquero. Llevaba la 30 y tenía 17 años.',
    en:'Rijkaard sent him on in the 87th for Eto’o. His first goal was ruled out for offside. In the 91st, again from Ronaldinho’s pass, he lobbed the keeper. He wore 30 and he was 17.' },
  sub20: {
    es:'En Utrecht, en el Stadion Galgenwaard, convirtió los dos penales de la final ante Nigeria. Terminó el Mundial Sub-20 con seis goles: Balón de Oro y Botín de Oro del torneo.',
    en:'In Utrecht, at the Stadion Galgenwaard, he scored both penalties in the final against Nigeria. He finished the U-20 World Cup with six goals: the tournament’s Golden Ball and Golden Boot.' },
  debut: {
    es:'Budapest, un amistoso con Hungría. Entró en el 64′ por Lisandro López y a los cuarenta segundos el árbitro Markus Merk lo expulsó por un empujón a Vanczák. Argentina ganó 2–1 igual.',
    en:'Budapest, a friendly against Hungary. He came on in the 64th for Lisandro López and forty seconds later referee Markus Merk sent him off for a shove on Vanczák. Argentina still won 2–1.' },
  '2006': {
    es:'Alemania era local y el partido se fue a penales. Pekerman hizo sus cambios y ninguno fue él: Julio Cruz entró último. Messi, de 18 años, miró la eliminación desde el banco del Olympiastadion. Nueve años después volvió a ese estadio y ganó una Champions.',
    en:'Germany were at home and it went to penalties. Pekerman made his changes and none was him: Julio Cruz was the last one on. Messi, 18, watched the exit from the Olympiastadion bench. Nine years later he came back to that stadium and won a Champions League.' },
  '2007': {
    es:'Final de la Copa América en Maracaibo, Venezuela. Brasil ganó 3–0 con goles de Júlio Baptista, un gol en contra de Ayala y Dani Alves.',
    en:'Copa América final in Maracaibo, Venezuela. Brazil won 3–0: Júlio Baptista, an Ayala own goal and Dani Alves.' },
  pekin: {
    es:'Final olímpica en el Estadio Nacional de Pekín, ante 89.102 personas. A los 58′ habilitó a Di María, que la picó sobre el arquero. Argentina 1–0 Nigeria: medalla de oro.',
    en:'Olympic final at the National Stadium in Beijing, in front of 89,102. In the 58th he played Di María through, who chipped the keeper. Argentina 1–0 Nigeria: gold.' },
  roma: {
    es:'Final de la Champions en el Stadio Olimpico. Eto’o abrió el partido y a los 70′ Messi cabeceó el 2–0. Lo festejó con el botín, que se le había salido, en la mano.',
    en:'Champions League final at the Stadio Olimpico. Eto’o opened the scoring and in the 70th Messi headed the second. He celebrated holding the boot that had come off.' },
  '2010': {
    es:'Cuartos de final en Ciudad del Cabo. Müller a los 3′, dos de Klose y uno de Friedrich: 4–0, la peor derrota de Argentina en un Mundial desde 1974. Messi jugó los cinco partidos, pateó 29 veces y no hizo goles.',
    en:'Quarter-final in Cape Town. Müller in the 3rd, two from Klose and one from Friedrich: 4–0, Argentina’s heaviest World Cup defeat since 1974. Messi started all five games, took 29 shots and scored none.' },
  wembley: {
    es:'Barcelona 3–1 Manchester United, la misma final que en Roma. Pedro, Messi a los 54′ y Villa. La UEFA lo eligió el mejor del partido.',
    en:'Barcelona 3–1 Manchester United, the Rome final again. Pedro, Messi in the 54th and Villa. UEFA named him man of the match.' },
  '2014': {
    es:'Final del Mundial en el Maracanã. Götze la paró de pecho y definió a los 113′. Messi recibió el Balón de Oro del torneo y pasó al lado de la copa sin mirarla.',
    en:'World Cup final at the Maracanã. Götze chested it down and finished in the 113th. Messi was given the Golden Ball and walked past the trophy without looking at it.' },
  '2015': {
    es:'Final de la Copa América en el Estadio Nacional de Santiago. Chile, local, empató 0–0 y ganó 4–1 por penales: su primer título. Para Messi, otra final perdida un año después del Maracanã.',
    en:'Copa América final at the Estadio Nacional in Santiago. Chile, at home, drew 0–0 and won 4–1 on penalties: their first title. For Messi, another lost final a year after the Maracanã.' },
  berlin2015: {
    es:'Final de la Champions en el Olympiastadion, el mismo estadio donde en 2006 no entró. Rakitić, Suárez y Neymar: Barcelona 3–1 Juventus, y el segundo triplete de la historia del club.',
    en:'Champions League final at the Olympiastadion, the stadium where he never came on in 2006. Rakitić, Suárez and Neymar: Barcelona 3–1 Juventus, and the club’s second treble.' },
  '2016': {
    es:'Final de la Copa América Centenario en el MetLife, Nueva Jersey. Chile otra vez: 0–0 y penales. El suyo se fue por arriba del travesaño. Esa noche dijo que dejaba la Selección. En agosto volvió.',
    en:'Copa América Centenario final at MetLife, New Jersey. Chile again: 0–0 and penalties. His went over the bar. That night he said he was leaving the national team. In August he came back.' },
  '2018': {
    es:'Octavos de final en Kazán. Mbappé, de 19 años, hizo dos goles en cuatro minutos. Di María, Mercado y Agüero en el 90+3′ no alcanzaron: Francia 4–3.',
    en:'Round of 16 in Kazan. Mbappé, 19, scored twice in four minutes. Di María, Mercado and Agüero in the 93rd were not enough: France 4–3.' },
  burofax: {
    es:'Nueve días después del 2–8 con el Bayern, mandó un burofax para irse gratis por una cláusula de su contrato. El club sostuvo que la cláusula ya no valía. Se quedó una temporada más.',
    en:'Nine days after the 2–8 against Bayern, he sent a burofax to leave for free under a clause in his contract. The club held that the clause no longer applied. He stayed one more season.' },
  '2021': {
    es:'Final de la Copa América en el Maracanã, el estadio de la final de 2014. Di María a los 22′: Argentina 1–0 Brasil. Su primer título mayor con la Selección, a los 34 años.',
    en:'Copa América final at the Maracanã, the stadium of the 2014 final. Di María in the 22nd: Argentina 1–0 Brazil. His first senior title with Argentina, at 34.' },
  despedida: {
    es:'El contrato había vencido el 30 de junio y el Barcelona anunció que no podía renovarlo por sus problemas económicos. En la conferencia de despedida lloró. Después firmó con el PSG.',
    en:'His contract had run out on 30 June and Barcelona announced it could not renew it because of its finances. He cried at the farewell press conference. Then he signed for PSG.' },
  finalissima: {
    es:'Campeón de América contra campeón de Europa, en Wembley. Le dio el gol a Lautaro y, en el último minuto, el de Dybala; Di María hizo el otro. 3–0 y figura del partido.',
    en:'South America’s champions against Europe’s, at Wembley. He set up Lautaro and, in the last minute, Dybala; Di María got the other. 3–0, and man of the match.' },
  '2022': {
    es:'Final del Mundial en Lusail. Messi y Di María pusieron el 2–0; Mbappé empató; Messi volvió a adelantar a Argentina en el alargue y Mbappé completó el triplete de penal. 3–3 y 4–2 en los penales. Fue su partido 26 en Mundiales, un récord.',
    en:'World Cup final in Lusail. Messi and Di María made it 2–0; Mbappé equalised; Messi put Argentina ahead again in extra time and Mbappé completed his hat-trick from the spot. 3–3, and 4–2 on penalties. It was his 26th World Cup match, a record.' },
  paris: {
    es:'Su último partido con el PSG fue una derrota 2–3 con Clermont. Parte del Parque de los Príncipes lo silbó cuando anunciaron su nombre, y otra vez cuando erró un mano a mano.',
    en:'His last PSG match was a 2–3 loss to Clermont. Part of the Parc des Princes booed when his name was read out, and again when he missed a one-on-one.' },
  miami: {
    es:'Leagues Cup en Nashville: hizo el 1–0 y pateó el primer penal de la tanda, que Miami ganó 10–9. Fue el primer título de la historia del club. En diciembre de 2025 llegó la MLS Cup: Inter Miami 3–1 Vancouver.',
    en:'Leagues Cup in Nashville: he scored the opener and took the first kick of the shootout, which Miami won 10–9. It was the first trophy in the club’s history. In December 2025 the MLS Cup followed: Inter Miami 3–1 Vancouver.' },
  ocho: {
    es:'En el Théâtre du Châtelet, en París, ganó su octavo Balón de Oro, por delante de Haaland y Mbappé. Lo ganó por el Mundial de Qatar.',
    en:'At the Théâtre du Châtelet in Paris he won his eighth Ballon d’Or, ahead of Haaland and Mbappé. He won it on the World Cup in Qatar.' },
  '2024': {
    es:'Final de la Copa América en el Hard Rock Stadium, demorada más de una hora por incidentes en los accesos. A los 64′ se lesionó el tobillo y salió; lloró en el banco. Lautaro hizo el gol en el 112′: 1–0 a Colombia y el tercer título seguido.',
    en:'Copa América final at Hard Rock Stadium, delayed over an hour by trouble at the gates. In the 64th he hurt his ankle and went off; he cried on the bench. Lautaro scored in the 112th: 1–0 against Colombia, a third straight title.' },
  '2026': {
    es:'Su sexto Mundial. Llegó a la final con goles a Austria, Jordania, Cabo Verde y Egipto, el de Egipto en el 2–2 de octavos, y con el centro a la cabeza de Lautaro en el 2–1 a Inglaterra en la semifinal. La final fue en el MetLife, el mismo estadio de la final de 2016. España ganó 1–0 en el alargue con gol de Ferran Torres a los 106′. Enzo Fernández fue expulsado. Emiliano Martínez atajó 11 pelotas, récord en una final.',
    en:'His sixth World Cup. He reached the final with goals against Austria, Jordan, Cabo Verde and Egypt, the Egypt one in the 2–2 round of 16, and with the cross for Lautaro’s header in the 2–1 semi-final against England. The final was at MetLife, the stadium of the 2016 final. Spain won 1–0 in extra time, Ferran Torres in the 106th. Enzo Fernández was sent off. Emiliano Martínez made 11 saves, a record in a final.' },
  carta: {
    es:'La escribió el 21 de julio, dos días después de la final, y la guardó seis semanas. La publicó el 31 de agosto, después de la muerte de su padre: dijo que eso lo había terminado de convencer.',
    en:'He wrote it on 21 July, two days after the final, and kept it for six weeks. He published it on 31 August, after his father’s death: he said that was what made him certain.' },
  padre: {
    es:'Jorge Messi fue su padre y su representante de toda la vida. Murió el 8 de agosto de 2026 en Rosario, a los 68 años, después de una larga enfermedad. El 12 de agosto Messi le publicó una carta abierta. Acá no hay imagen de él: una vela, nada más.',
    en:'Jorge Messi was his father and lifelong representative. He died on 8 August 2026 in Rosario, aged 68, after a long illness. On 12 August Messi published an open letter to him. There is no image of him here: a candle, nothing more.' },
  monumental: {
    es:'Después de la carta, la AFA lo convocó para un último partido en el país: un amistoso ante Benín, con el Monumental lleno. A los 48′ tiró el córner que Nicolás Otamendi, que también se despedía de la Selección, cabeceó al gol. Después le dio el segundo a Nico Paz, y en el segundo tiempo convirtió de penal su gol 126. Argentina 3–0: estuvo en los tres goles de su partido 208, el último.',
    en:'After the letter, the AFA called him up for one last match at home: a friendly against Benin, the Monumental full. In the 48th he took the corner that Nicolás Otamendi, also playing his last for Argentina, headed in. Then he set up Nico Paz for the second, and in the second half he scored his 126th from the penalty spot. Argentina 3–0: he was in all three goals of his 208th match, the last.' },
  camiseta: {
    es:'No es un partido. Es la camiseta celeste y blanca y el 10, y lo que pesó llevarlos durante más de veinte años.',
    en:'Not a match. It is the sky-blue and white shirt and the 10, and what it weighed to carry them for more than twenty years.' }
};
