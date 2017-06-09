
$(function(){
  var poolData = [
      {
          "value": "Jerusalem (Site proposed by Jordan)"
      },
      {
          "value": "Aruba"
      },
      {
          "value": "Afghanistan"
      },
      {
          "value": "Angola"
      },
      {
          "value": "Anguilla"
      },
      {
          "value": "Åland Islands"
      },
      {
          "value": "Albania"
      },
      {
          "value": "Andorra"
      },
      {
          "value": "United Arab Emirates"
      },
      {
          "value": "Argentina"
      },
      {
          "value": "Armenia"
      },
      {
          "value": "American Samoa"
      },
      {
          "value": "Antarctica"
      },
      {
          "value": "French Southern and Antarctic Lands"
      },
      {
          "value": "Antigua and Barbuda"
      },
      {
          "value": "Australia"
      },
      {
          "value": "Austria"
      },
      {
          "value": "Azerbaijan"
      },
      {
          "value": "Bonaire, Saint Eustatius And Saba"
      },
      {
          "value": "Burkina Faso"
      },
      {
          "value": "Bangladesh"
      },
      {
          "value": "Bulgaria"
      },
      {
          "value": "Bahrain"
      },
      {
          "value": "Bahamas"
      },
      {
          "value": "Bosnia and Herzegovina"
      },
      {
          "value": "Saint Barthélemy"
      },
      {
          "value": "Belarus"
      },
      {
          "value": "Bermuda"
      },
      {
          "value": "Bolivia (Plurinational State of)"
      },
      {
          "value": "Brazil"
      },
      {
          "value": "Barbados"
      },
      {
          "value": "Bhutan"
      },
      {
          "value": "Bouvet Island"
      },
      {
          "value": "Botswana"
      },
      {
          "value": "Central African Republic"
      },
      {
          "value": "Canada"
      },
      {
          "value": "Cocos (Keeling) Islands"
      },
      {
          "value": "Switzerland"
      },
      {
          "value": "China"
      },
      {
          "value": "Cameroon"
      },
      {
          "value": "Democratic Republic of the Congo"
      },
      {
          "value": "Cook Islands"
      },
      {
          "value": "Colombia"
      },
      {
          "value": "Cabo Verde"
      },
      {
          "value": "Costa Rica"
      },
      {
          "value": "Cuba"
      },
      {
          "value": "Curaçao"
      },
      {
          "value": "Christmas Island"
      },
      {
          "value": "Cayman Islands"
      },
      {
          "value": "Czechia"
      },
      {
          "value": "Germany"
      },
      {
          "value": "Dominica"
      },
      {
          "value": "Denmark"
      },
      {
          "value": "Dominican Republic"
      },
      {
          "value": "Algeria"
      },
      {
          "value": "Ecuador"
      },
      {
          "value": "Eritrea"
      },
      {
          "value": "Western Sahara"
      },
      {
          "value": "Spain"
      },
      {
          "value": "Estonia"
      },
      {
          "value": "Ethiopia"
      },
      {
          "value": "European Union"
      },
      {
          "value": "Finland"
      },
      {
          "value": "Falkland Islands (Malvinas)"
      },
      {
          "value": "France"
      },
      {
          "value": "Faroe Islands"
      },
      {
          "value": "Micronesia (Federated States of)"
      },
      {
          "value": "Gabon"
      },
      {
          "value": "United Kingdom of Great Britain and Northern Ireland"
      },
      {
          "value": "Georgia"
      },
      {
          "value": "Ghana"
      },
      {
          "value": "Gibraltar"
      },
      {
          "value": "Guinea"
      },
      {
          "value": "Guadeloupe"
      },
      {
          "value": "Gambia"
      },
      {
          "value": "Guinea-Bissau"
      },
      {
          "value": "Equatorial Guinea"
      },
      {
          "value": "Grenada"
      },
      {
          "value": "Greenland"
      },
      {
          "value": "Guatemala"
      },
      {
          "value": "French Guiana"
      },
      {
          "value": "Guam"
      },
      {
          "value": "Guyana"
      },
      {
          "value": "Heard Island And McDonald Islands"
      },
      {
          "value": "Honduras"
      },
      {
          "value": "Croatia"
      },
      {
          "value": "Haiti"
      },
      {
          "value": "Hungary"
      },
      {
          "value": "Indonesia"
      },
      {
          "value": "Isle of Man"
      },
      {
          "value": "India"
      },
      {
          "value": "British Indian Ocean Territory"
      },
      {
          "value": "Ireland"
      },
      {
          "value": "Iran (Islamic Republic of)"
      },
      {
          "value": "Iraq"
      },
      {
          "value": "Iceland"
      },
      {
          "value": "Israel"
      },
      {
          "value": "Italy"
      },
      {
          "value": "Jamaica"
      },
      {
          "value": "Jordan"
      },
      {
          "value": "Japan"
      },
      {
          "value": "Kazakhstan"
      },
      {
          "value": "Kenya"
      },
      {
          "value": "Kyrgyzstan"
      },
      {
          "value": "Cambodia"
      },
      {
          "value": "Kiribati"
      },
      {
          "value": "Saint Kitts and Nevis"
      },
      {
          "value": "Republic of Korea"
      },
      {
          "value": "Kuwait"
      },
      {
          "value": "Lao People's Democratic Republic"
      },
      {
          "value": "Lebanon"
      },
      {
          "value": "Liberia"
      },
      {
          "value": "Libya"
      },
      {
          "value": "Saint Lucia"
      },
      {
          "value": "Sri Lanka"
      },
      {
          "value": "Lithuania"
      },
      {
          "value": "Latvia"
      },
      {
          "value": "Macao"
      },
      {
          "value": "Saint Martin"
      },
      {
          "value": "Monaco"
      },
      {
          "value": "Republic of Moldova"
      },
      {
          "value": "Madagascar"
      },
      {
          "value": "Maldives"
      },
      {
          "value": "Marshall Islands"
      },
      {
          "value": "the Former Yugoslav Republic of Macedonia"
      },
      {
          "value": "Mali"
      },
      {
          "value": "Malta"
      },
      {
          "value": "Myanmar"
      },
      {
          "value": "Mongolia"
      },
      {
          "value": "Northern Mariana Islands"
      },
      {
          "value": "Mozambique"
      },
      {
          "value": "Mauritania"
      },
      {
          "value": "Montserrat"
      },
      {
          "value": "Martinique"
      },
      {
          "value": "Mauritius"
      },
      {
          "value": "Malawi"
      },
      {
          "value": "Malaysia"
      },
      {
          "value": "Mayotte"
      },
      {
          "value": "Namibia"
      },
      {
          "value": "New Caledonia"
      },
      {
          "value": "Norfolk Island"
      },
      {
          "value": "Nigeria"
      },
      {
          "value": "Nicaragua"
      },
      {
          "value": "Netherlands"
      },
      {
          "value": "Norway"
      },
      {
          "value": "Nepal"
      },
      {
          "value": "Nauru"
      },
      {
          "value": "New Zealand"
      },
      {
          "value": "Oman"
      },
      {
          "value": "Pakistan"
      },
      {
          "value": "Panama"
      },
      {
          "value": "Pitcairn Islands"
      },
      {
          "value": "Palau"
      },
      {
          "value": "Papua New Guinea"
      },
      {
          "value": "Poland"
      },
      {
          "value": "Democratic People's Republic of Korea"
      },
      {
          "value": "Portugal"
      },
      {
          "value": "Paraguay"
      },
      {
          "value": "Palestine"
      },
      {
          "value": "French Polynesia"
      },
      {
          "value": "Qatar"
      },
      {
          "value": "Romania"
      },
      {
          "value": "Russian Federation"
      },
      {
          "value": "Rwanda"
      },
      {
          "value": "Saudi Arabia"
      },
      {
          "value": "Sudan"
      },
      {
          "value": "Senegal"
      },
      {
          "value": "Singapore"
      },
      {
          "value": "South Georgia and the South Sandwich Islands"
      },
      {
          "value": "Saint Helena, Ascension and Tristan da Cunha"
      },
      {
          "value": "Svalbard and Jan Mayen"
      },
      {
          "value": "Solomon Islands"
      },
      {
          "value": "Sierra Leone"
      },
      {
          "value": "El Salvador"
      },
      {
          "value": "San Marino"
      },
      {
          "value": "Somalia"
      },
      {
          "value": "Saint Pierre and Miquelon"
      },
      {
          "value": "Serbia"
      },
      {
          "value": "South Sudan"
      },
      {
          "value": "Sao Tome and Principe"
      },
      {
          "value": "Suriname"
      },
      {
          "value": "Slovakia"
      },
      {
          "value": "Slovenia"
      },
      {
          "value": "Swaziland"
      },
      {
          "value": "Sint Maarten"
      },
      {
          "value": "Syrian Arab Republic"
      },
      {
          "value": "Turks and Caicos Islands"
      },
      {
          "value": "Chad"
      },
      {
          "value": "Thailand"
      },
      {
          "value": "Tajikistan"
      },
      {
          "value": "Tokelau"
      },
      {
          "value": "Turkmenistan"
      },
      {
          "value": "Tonga"
      },
      {
          "value": "Trinidad and Tobago"
      },
      {
          "value": "Tunisia"
      },
      {
          "value": "Tuvalu"
      },
      {
          "value": "Taiwan"
      },
      {
          "value": "United Republic of Tanzania"
      },
      {
          "value": "Uganda"
      },
      {
          "value": "Ukraine"
      },
      {
          "value": "United States Minor Outlying Islands"
      },
      {
          "value": "Uruguay"
      },
      {
          "value": "United States of America"
      },
      {
          "value": "Uzbekistan"
      },
      {
          "value": "Saint Vincent and the Grenadines"
      },
      {
          "value": "Venezuela (Bolivarian Republic of)"
      },
      {
          "value": "Virgin Islands"
      },
      {
          "value": "United States Virgin Islands"
      },
      {
          "value": "Viet Nam"
      },
      {
          "value": "Vanuatu"
      },
      {
          "value": "Wallis and Futuna"
      },
      {
          "value": "Samoa"
      },
      {
          "value": "South Africa"
      },
      {
          "value": "Zambia"
      },
      {
          "value": "Zimbabwe"
      },
      {
          "value": "Africa"
      },
      {
          "value": "Antarctica"
      },
      {
          "value": "Asia"
      },
      {
          "value": "North America"
      },
      {
          "value": "Oceania"
      },
      {
          "value": "South America"
      },
      {
          "value": "Historic Centres of Berat and Gjirokastra (2005)"
      },
      {
          "value": "Madriu-Perafita-Claror Valley"
      },
      {
          "value": "Cathedral and Churches of Echmiatsin and the Archaeological Site of Zvartnots (2000)"
      },
      {
          "value": "Monasteries of Haghpat and Sanahin (1996)"
      },
      {
          "value": "Monastery of Geghard and the Upper Azat Valley (2000)"
      },
      {
          "value": "City of Graz – Historic Centre and Schloss Eggenberg (1999)"
      },
      {
          "value": "Fertö / Neusiedlersee Cultural Landscape (2001)"
      },
      {
          "value": "Hallstatt-Dachstein / Salzkammergut Cultural Landscape (1997)"
      },
      {
          "value": "Historic Centre of the City of Salzburg (1996)"
      },
      {
          "value": "Historic Centre of Vienna (2001)"
      },
      {
          "value": "Palace and Gardens of Schönbrunn (1996)"
      },
      {
          "value": "Prehistoric Pile Dwellings around the Alps (2011)"
      },
      {
          "value": "Semmering Railway (1998)"
      },
      {
          "value": "Wachau Cultural Landscape (2000)"
      },
      {
          "value": "Gobustan Rock Art Cultural Landscape"
      },
      {
          "value": "Walled City of Baku with the Shirvanshah's Palace and Maiden Tower"
      },
      {
          "value": "Belfries of Belgium and France (1999)"
      },
      {
          "value": "Flemish Béguinages (1998)"
      },
      {
          "value": "La Grand-Place, Brussels (1998)"
      },
      {
          "value": "Major Mining Sites of Wallonia (2012)"
      },
      {
          "value": "Major Town Houses of the Architect Victor Horta (Brussels) (2000)"
      },
      {
          "value": "Neolithic Flint Mines at Spiennes (Mons)(2000)"
      },
      {
          "value": "Notre-Dame Cathedral in Tournai (2000)"
      },
      {
          "value": "Plantin-Moretus House-Workshops-Museum Complex (2005)"
      },
      {
          "value": "The Architectural Work of Le Corbusier, an Outstanding Contribution to the Modern Movement (2016)"
      },
      {
          "value": "The Four Lifts on the Canal du Centre and their Environs, La Louvière and Le Roeulx (Hainaut)(1998)"
      },
      {
          "value": "Ancient City of Nessebar"
      },
      {
          "value": "Boyana Church"
      },
      {
          "value": "Madara Rider"
      },
      {
          "value": "Pirin National Park"
      },
      {
          "value": "Rila Monastery"
      },
      {
          "value": "Rock-Hewn Churches of Ivanovo"
      },
      {
          "value": "Srebarna Nature Reserve"
      },
      {
          "value": "Thracian Tomb of Kazanlak"
      },
      {
          "value": "Thracian Tomb of Sveshtari"
      },
      {
          "value": "Mehmed Paša Sokolović Bridge in Višegrad"
      },
      {
          "value": "Old Bridge Area of the Old City of Mostar"
      },
      {
          "value": "Stećci Medieval Tombstones Graveyards"
      },
      {
          "value": "Architectural, Residential and Cultural Complex of the Radziwill Family at Nesvizh"
      },
      {
          "value": "Białowieża Forest"
      },
      {
          "value": "Mir Castle Complex"
      },
      {
          "value": "Struve Geodetic Arc"
      },
      {
          "value": "Abbey of St Gall (1983)"
      },
      {
          "value": "Benedictine Convent of St John at MÃ¼stair (1983)"
      },
      {
          "value": "La Chaux-de-Fonds / Le Locle, Watchmaking Town Planning (2009)"
      },
      {
          "value": "Lavaux, Vineyard Terraces (2007)"
      },
      {
          "value": "Monte San Giorgio (2003)"
      },
      {
          "value": "Prehistoric Pile Dwellings around the Alps (2011)"
      },
      {
          "value": "Rhaetian Railway in the Albula / Bernina Landscapes (2008)"
      },
      {
          "value": "Swiss Alps Jungfrau-Aletsch (2001)"
      },
      {
          "value": "Swiss Tectonic Arena Sardona (2008)"
      },
      {
          "value": "The Architectural Work of Le Corbusier, an Outstanding Contribution to the Modern Movement (2016)"
      },
      {
          "value": "Three Castles, Defensive Wall and Ramparts of the Market-Town of Bellinzona (2000)"
      },
      {
          "value": "Choirokoitia"
      },
      {
          "value": "Painted Churches in the Troodos Region"
      },
      {
          "value": "Paphos"
      },
      {
          "value": "Gardens and Castle at Kroměříž"
      },
      {
          "value": "Historic Centre of Prague"
      },
      {
          "value": "Holašovice Historic Village"
      },
      {
          "value": "Jewish Quarter and St Procopius' Basilica in Třebíč"
      },
      {
          "value": "Kutná Hora: Historical Town Centre with the Church of St Barbara and the Cathedral of Our Lady at Sedlec"
      },
      {
          "value": "Lednice-Valtice Cultural Landscape"
      },
      {
          "value": "Litomyšl Castle"
      },
      {
          "value": "Pilgrimage Church of St John of Nepomuk at Zelená Hora"
      },
      {
          "value": "Tugendhat Villa in Brno"
      },
      {
          "value": "Aachen Cathedral"
      },
      {
          "value": "Abbey and Altenmünster of Lorsch (1991)"
      },
      {
          "value": "Bauhaus and its Sites in Weimar and Dessau (1996)"
      },
      {
          "value": "Bergpark Wilhelmshöhe (2013)"
      },
      {
          "value": "Berlin Modernism Housing Estates (2008)"
      },
      {
          "value": "Carolingian Westwork and Civitas Corvey (2014)"
      },
      {
          "value": "Castles of Augustusburg and Falkenlust at Brühl (1984)"
      },
      {
          "value": "Classical Weimar (1998)"
      },
      {
          "value": "Collegiate Church, Castle and Old Town of Quedlinburg (1994)"
      },
      {
          "value": "Cologne Cathedral (1996)"
      },
      {
          "value": "Fagus Factory in Alfeld (2011)"
      },
      {
          "value": "Frontiers of the Roman Empire (1987)"
      },
      {
          "value": "Garden Kingdom of Dessau-Wörlitz (2000)"
      },
      {
          "value": "Hanseatic City of Lübeck (1987)"
      },
      {
          "value": "Historic Centres of Stralsund and Wismar (2002)"
      },
      {
          "value": "Luther Memorials in Eisleben and Wittenberg (1996)"
      },
      {
          "value": "Margravial Opera House Bayreuth (2012)"
      },
      {
          "value": "Maulbronn Monastery Complex (1993)"
      },
      {
          "value": "Mines of Rammelsberg, Historic Town of Goslar and Upper Harz Water Management System (1992)"
      },
      {
          "value": "Monastic Island of Reichenau (2000)"
      },
      {
          "value": "Museumsinsel (Museum Island), Berlin (1999)"
      },
      {
          "value": "Muskauer Park / Park Mużakowski (2004)"
      },
      {
          "value": "Old town of Regensburg with Stadtamhof (2006)"
      },
      {
          "value": "Palaces and Parks of Potsdam and Berlin (1990)"
      },
      {
          "value": "Pilgrimage Church of Wies (1983)"
      },
      {
          "value": "Prehistoric Pile Dwellings around the Alps (2011)"
      },
      {
          "value": "Primeval Beech Forests of the Carpathians and the Ancient Beech Forests of Germany (2007)"
      },
      {
          "value": "Roman Monuments, Cathedral of St Peter and Church of Our Lady in Trier (1986)"
      },
      {
          "value": "Speicherstadt and Kontorhaus District with Chilehaus (2015)"
      },
      {
          "value": "Speyer Cathedral (1981)"
      },
      {
          "value": "St Mary's Cathedral and St Michael's Church at Hildesheim (1985)"
      },
      {
          "value": "The Architectural Work of Le Corbusier, an Outstanding Contribution to the Modern Movement (2016)"
      },
      {
          "value": "Town Hall and Roland on the Marketplace of Bremen (2004)"
      },
      {
          "value": "Town of Bamberg (1993)"
      },
      {
          "value": "Upper Middle Rhine Valley (2002)"
      },
      {
          "value": "Wadden Sea (2009)"
      },
      {
          "value": "Wartburg Castle (1999)"
      },
      {
          "value": "Würzburg Residence with the Court Gardens and Residence Square (1981)"
      },
      {
          "value": "Zollverein Coal Mine Industrial Complex in Essen (2001)"
      },
      {
          "value": "Christiansfeld, a Moravian Church Settlement"
      },
      {
          "value": "Ilulissat Icefjord"
      },
      {
          "value": "Jelling Mounds, Runic Stones and Church"
      },
      {
          "value": "Kronborg Castle"
      },
      {
          "value": "Roskilde Cathedral"
      },
      {
          "value": "The par force hunting landscape in North Zealand"
      },
      {
          "value": "Wadden Sea"
      },
      {
          "value": "Alhambra, Generalife and Albayzín, Granada\n"
      },
      {
          "value": "Antequera Dolmens Site"
      },
      {
          "value": "Aranjuez Cultural Landscape"
      },
      {
          "value": "Archaeological Ensemble of Mérida\n"
      },
      {
          "value": "Archaeological Ensemble of Tárraco"
      },
      {
          "value": "Archaeological Site of Atapuerca"
      },
      {
          "value": "Burgos Cathedral"
      },
      {
          "value": "Catalan Romanesque Churches of the Vall de Boí"
      },
      {
          "value": "Cathedral, Alcázar and Archivo de Indias in Seville"
      },
      {
          "value": "Cave of Altamira and Paleolithic Cave Art of Northern Spain"
      },
      {
          "value": "Cultural Landscape of the Serra de Tramuntana"
      },
      {
          "value": "Doñana National Park"
      },
      {
          "value": "Garajonay National Park"
      },
      {
          "value": "Heritage of Mercury. Almadén and Idrija"
      },
      {
          "value": "Historic Centre of Cordoba"
      },
      {
          "value": "Historic Walled Town of Cuenca"
      },
      {
          "value": "Ibiza, Biodiversity and Culture"
      },
      {
          "value": "La Lonja de la Seda de Valencia"
      },
      {
          "value": "Las Médulas"
      },
      {
          "value": "Monastery and Site of the Escurial, Madrid"
      },
      {
          "value": "Monuments of Oviedo and the Kingdom of the Asturias"
      },
      {
          "value": "Mudejar Architecture of Aragon"
      },
      {
          "value": "Old City of Salamanca"
      },
      {
          "value": "Old Town of Ávila with its Extra-Muros Churches"
      },
      {
          "value": "Old Town of Cáceres"
      },
      {
          "value": "Old Town of Segovia and its Aqueduct"
      },
      {
          "value": "Palau de la Música Catalana and Hospital de Sant Pau, Barcelona"
      },
      {
          "value": "Palmeral of Elche\n"
      },
      {
          "value": "Poblet Monastery"
      },
      {
          "value": "Prehistoric Rock Art Sites in the Côa Valley and Siega Verde"
      },
      {
          "value": "Renaissance Monumental Ensembles of Úbeda and Baeza"
      },
      {
          "value": "Rock Art of the Mediterranean Basin on the Iberian Peninsula"
      },
      {
          "value": "Roman Walls of Lugo"
      },
      {
          "value": "Routes of Santiago de Compostela: Camino Francés and Routes of Northern Spain\n"
      },
      {
          "value": "Royal Monastery of Santa María de Guadalupe"
      },
      {
          "value": "San Cristóbal de La Laguna"
      },
      {
          "value": "San Millán Yuso and Suso Monasteries"
      },
      {
          "value": "Santiago de Compostela (Old Town)"
      },
      {
          "value": "Teide National Park"
      },
      {
          "value": "University and Historic Precinct of Alcalá de Henares"
      },
      {
          "value": "Vizcaya Bridge"
      },
      {
          "value": "Works of Antoni Gaudí"
      },
      {
          "value": "Historic Centre (Old Town) Of Tallinn"
      },
      {
          "value": "Struve Geodetic Arc"
      },
      {
          "value": "Bronze Age Burial Site of Sammallahdenmäki"
      },
      {
          "value": "Fortress of Suomenlinna"
      },
      {
          "value": "High Coast / Kvarken Archipelago"
      },
      {
          "value": "Old Rauma"
      },
      {
          "value": "Petäjävesi Old Church"
      },
      {
          "value": "Struve Geodetic Arc"
      },
      {
          "value": "Verla Groundwood and Board Mill"
      },
      {
          "value": "Abbey Church of Saint-Savin sur Gartempe"
      },
      {
          "value": "Amiens Cathedral"
      },
      {
          "value": "Arles, Roman and Romanesque Monuments"
      },
      {
          "value": "Belfries of Belgium and France"
      },
      {
          "value": "Bordeaux, Port of the Moon "
      },
      {
          "value": "Bourges Cathedral"
      },
      {
          "value": "Canal du Midi "
      },
      {
          "value": "Cathedral of Notre-Dame, Former Abbey of Saint-Rémi and Palace of Tau, Reims"
      },
      {
          "value": "Champagne Hillsides, Houses and Cellars"
      },
      {
          "value": "Chartres Cathedral"
      },
      {
          "value": "Cistercian Abbey of Fontenay\n"
      },
      {
          "value": "Decorated Cave of Pont d’Arc, known as Grotte Chauvet-Pont d’Arc, Ardèche"
      },
      {
          "value": "Episcopal City of Albi"
      },
      {
          "value": "Fortifications of Vauban"
      },
      {
          "value": "From the Great Saltworks of Salins-les-Bains to the Royal Saltworks of Arc-et-Senans, the Production of Open-pan Salt"
      },
      {
          "value": "Gulf of Porto: Calanche of Piana, Gulf of Girolata, Scandola Reserve"
      },
      {
          "value": "Historic Centre of Avignon: Papal Palace, Episcopal Ensemble and Avignon Bridge"
      },
      {
          "value": "Historic Fortified City of Carcassonne"
      },
      {
          "value": "Jurisdiction of Saint-Emilion"
      },
      {
          "value": "Lagoons of New Caledonia: Reef Diversity and Associated Ecosystems"
      },
      {
          "value": "Le Havre, the City Rebuilt by Auguste Perret"
      },
      {
          "value": "Mont-Saint-Michel and its Bay\n"
      },
      {
          "value": "Nord-Pas de Calais Mining Basin"
      },
      {
          "value": "Palace and Park of Fontainebleau"
      },
      {
          "value": "Palace and Park of Versailles"
      },
      {
          "value": "Paris, Banks of the Seine"
      },
      {
          "value": "Pitons, cirques and remparts of Reunion Island"
      },
      {
          "value": "Place Stanislas, Place de la Carrière and Place d'Alliance in Nancy"
      },
      {
          "value": "Pont du Gard (Roman Aqueduct)"
      },
      {
          "value": "Prehistoric Pile Dwellings around the Alps"
      },
      {
          "value": "Prehistoric Sites and Decorated Caves of the Vézère Valley"
      },
      {
          "value": "Provins, Town of Medieval Fairs"
      },
      {
          "value": "Roman Theatre and its Surroundings and the \"Triumphal Arch\" of Orange"
      },
      {
          "value": "Routes of Santiago de Compostela in France"
      },
      {
          "value": "Strasbourg – Grande île"
      },
      {
          "value": "The Architectural Work of Le Corbusier, an Outstanding Contribution to the Modern Movement"
      },
      {
          "value": "The Causses and the Cévennes, Mediterranean agro-pastoral Cultural Landscape"
      },
      {
          "value": "The Climats, terroirs of Burgundy"
      },
      {
          "value": "The Loire Valley between Sully-sur-Loire and Chalonnes"
      },
      {
          "value": "Vézelay, Church and Hill"
      },
      {
          "value": "Blaenavon Industrial Landscape (2000)"
      },
      {
          "value": "Blenheim Palace (1987)"
      },
      {
          "value": "Canterbury Cathedral, St Augustine's Abbey, and St Martin's Church (1988)"
      },
      {
          "value": "Castles and Town Walls of King Edward in Gwynedd (1986)"
      },
      {
          "value": "City of Bath (1987)"
      },
      {
          "value": "Cornwall and West Devon Mining Landscape (2006)"
      },
      {
          "value": "Derwent Valley Mills (2001)"
      },
      {
          "value": "Dorset and East Devon Coast (2001)"
      },
      {
          "value": "Durham Castle and Cathedral (1986)"
      },
      {
          "value": "Frontiers of the Roman Empire (1987)"
      },
      {
          "value": "Giant's Causeway and Causeway Coast (1986)"
      },
      {
          "value": "Gorham's Cave Complex (2016)"
      },
      {
          "value": "Gough and Inaccessible Islands (1995)"
      },
      {
          "value": "Heart of Neolithic Orkney (1999)"
      },
      {
          "value": "Henderson Island (1988)"
      },
      {
          "value": "Historic Town of St George and Related Fortifications, Bermuda (2000)"
      },
      {
          "value": "Liverpool â€“ Maritime Mercantile City (2004)"
      },
      {
          "value": "Maritime Greenwich (1997)"
      },
      {
          "value": "New Lanark (2001)"
      },
      {
          "value": "Old and New Towns of Edinburgh (1995)"
      },
      {
          "value": "Palace of Westminster and Westminster Abbey including Saint Margaretâ€™s Church (1987)"
      },
      {
          "value": "Pontcysyllte Aqueduct and Canal (2009)"
      },
      {
          "value": "Royal Botanic Gardens, Kew (2003)"
      },
      {
          "value": "Saltaire (2001)"
      },
      {
          "value": "St Kilda (1986)"
      },
      {
          "value": "Stonehenge, Avebury and Associated Sites (1986)"
      },
      {
          "value": "Studley Royal Park including the Ruins of Fountains Abbey (1986)"
      },
      {
          "value": "Bagrati Cathedral and Gelati Monastery"
      },
      {
          "value": "Historical Monuments of Mtskheta"
      },
      {
          "value": "Upper Svaneti"
      },
      {
          "value": "Acropolis, Athens (1987)"
      },
      {
          "value": "Archaeological Site of Aigai (modern name Vergina) (1996)"
      },
      {
          "value": "Archaeological Site of Delphi (1987)"
      },
      {
          "value": "Archaeological Site of Mystras (1989)"
      },
      {
          "value": "Archaeological Site of Olympia (1989)"
      },
      {
          "value": "Archaeological Site of Philippi (2016)"
      },
      {
          "value": "Archaeological Sites of Mycenae and Tiryns (1999)"
      },
      {
          "value": "Medieval City of Rhodes (1988)"
      },
      {
          "value": "Meteora (1988)"
      },
      {
          "value": "Monasteries of Daphni, Hosios Loukas and Nea Moni of Chios (1990)"
      },
      {
          "value": "Mount Athos (1988)"
      },
      {
          "value": "Paleochristian and Byzantine Monuments of Thessalonika (1988)"
      },
      {
          "value": "Pythagoreion and Heraion of Samos (1992)"
      },
      {
          "value": "Sanctuary of Asklepios at Epidaurus (1988)"
      },
      {
          "value": "Temple of Apollo Epicurius at Bassae (1986)"
      },
      {
          "value": "The Historic Centre (Chorá) with the Monastery of Saint-John the Theologian and the Cave of the Apocalypse on the Island of Pátmos (1999)"
      },
      {
          "value": "Episcopal Complex of the Euphrasian Basilica in the Historic Centre of Poreč (1997)"
      },
      {
          "value": "Historical Complex of Split with the Palace of Diocletian (1979)"
      },
      {
          "value": "Plitvice Lakes National Park (1979)"
      },
      {
          "value": "Stari Grad Plain (2008)"
      },
      {
          "value": "Stećci Medieval Tombstones Graveyards (2016)"
      },
      {
          "value": "The Cathedral of St James in Šibenik (2000)"
      },
      {
          "value": "Budapest, including the Banks of the Danube, the Buda Castle Quarter and Andrássy Avenue"
      },
      {
          "value": "Caves of Aggtelek Karst and Slovak Karst"
      },
      {
          "value": "Early Christian Necropolis of Pécs (Sopianae)"
      },
      {
          "value": "Fertö / Neusiedlersee Cultural Landscape"
      },
      {
          "value": "Hortobágy National Park - the Puszta"
      },
      {
          "value": "Millenary Benedictine Abbey of Pannonhalma and its Natural Environment"
      },
      {
          "value": "Old Village of Hollókő and its Surroundings"
      },
      {
          "value": "Tokaj Wine Region Historic Cultural Landscape"
      },
      {
          "value": "Brú na Bóinne - Archaeological Ensemble of the Bend of the Boyne (1993)"
      },
      {
          "value": "Þingvellir National Park (2004)"
      },
      {
          "value": "Bahá’i Holy Places in Haifa and the Western Galilee (2008)"
      },
      {
          "value": "Biblical Tels - Megiddo, Hazor, Beer Sheba (2005)"
      },
      {
          "value": "Caves of Maresha and Bet-Guvrin in the Judean Lowlands as a Microcosm of the Land of the Caves (2014)"
      },
      {
          "value": "Masada (2001)"
      },
      {
          "value": "Necropolis of Bet She’arim: A Landmark of Jewish Renewal (2015)"
      },
      {
          "value": "Old City of Acre (2001)"
      },
      {
          "value": "Sites of Human Evolution at Mount Carmel: The Nahal Me’arot / Wadi el-Mughara Caves (2012)"
      },
      {
          "value": "White City of Tel-Aviv -- the Modern Movement (2003)"
      },
      {
          "value": "18th-Century Royal Palace at Caserta with the Park, the Aqueduct of Vanvitelli, and the San Leucio Complex (1997)"
      },
      {
          "value": "Arab-Norman Palermo and the Cathedral Churches of Cefalú and Monreale (2015)"
      },
      {
          "value": "Archaeological Area and the Patriarchal Basilica of Aquileia (1998)"
      },
      {
          "value": "Archaeological Area of Agrigento (1997)"
      },
      {
          "value": "Archaeological Areas of Pompei, Herculaneum and Torre Annunziata (1997)"
      },
      {
          "value": "Assisi, the Basilica of San Francesco and Other Franciscan Sites (2000)"
      },
      {
          "value": "Botanical Garden (Orto Botanico), Padua (1997)"
      },
      {
          "value": "Castel del Monte (1996)"
      },
      {
          "value": "Cathedral, Torre Civica and Piazza Grande, Modena (1997)"
      },
      {
          "value": "Church and Dominican Convent of Santa Maria delle Grazie with “The Last Supper” by Leonardo da Vinci (1980)"
      },
      {
          "value": "Cilento and Vallo di Diano National Park with the Archeological Sites of Paestum and Velia, and the Certosa di Padula (1998)"
      },
      {
          "value": "City of Verona (2000)"
      },
      {
          "value": "City of Vicenza and the Palladian Villas of the Veneto (1994)"
      },
      {
          "value": "Costiera Amalfitana (1997)"
      },
      {
          "value": "Crespi d'Adda (1995)"
      },
      {
          "value": "Early Christian Monuments of Ravenna (1996)"
      },
      {
          "value": "Etruscan Necropolises of Cerveteri and Tarquinia (2004)"
      },
      {
          "value": "Ferrara, City of the Renaissance, and its Po Delta (1995)"
      },
      {
          "value": "Genoa: Le Strade Nuove and the system of the Palazzi dei Rolli (2006)"
      },
      {
          "value": "Historic Centre of Naples (1995)"
      },
      {
          "value": "Historic Centre of Rome, the Properties of the Holy See in that City Enjoying Extraterritorial Rights and San Paolo Fuori le Mura (1980)"
      },
      {
          "value": "Historic Centre of San Gimignano (1990)"
      },
      {
          "value": "Historic Centre of Siena (1995)"
      },
      {
          "value": "Historic Centre of the City of Pienza (1996)"
      },
      {
          "value": "Isole Eolie (Aeolian Islands) (2000)"
      },
      {
          "value": "Late Baroque Towns of the Val di Noto (South-Eastern Sicily) (2002)"
      },
      {
          "value": "Longobards in Italy. Places of the Power (568-774 A.D.) (2011)"
      },
      {
          "value": "Mantua and Sabbioneta (2008)"
      },
      {
          "value": "Medici Villas and Gardens in Tuscany (2013)"
      },
      {
          "value": "Mount Etna (2013)"
      },
      {
          "value": "Monte San Giorgio (2003)"
      },
      {
          "value": "Piazza del Duomo, Pisa (1987)"
      },
      {
          "value": "Portovenere, Cinque Terre, and the Islands (Palmaria, Tino and Tinetto) (1997)"
      },
      {
          "value": "Prehistoric Pile Dwellings around the Alps (2011)"
      },
      {
          "value": "Residences of the Royal House of Savoy (1997)"
      },
      {
          "value": "Rhaetian Railway in the Albula / Bernina Landscapes"
      },
      {
          "value": "Rock Drawings in Valcamonica"
      },
      {
          "value": "Sacri Monti of Piedmont and Lombardy"
      },
      {
          "value": "Su Nuraxi di Barumini (1997)"
      },
      {
          "value": "Syracuse and the Rocky Necropolis of Pantalica (2005)"
      },
      {
          "value": "The Sassi and the Park of the Rupestrian Churches of Matera (1993)"
      },
      {
          "value": "The Trulli of Alberobello (1996)"
      },
      {
          "value": "Val d'Orcia (2004)"
      },
      {
          "value": "Venice and its Lagoon (1987)"
      },
      {
          "value": "Villa Adriana (Tivoli) (1999)"
      },
      {
          "value": "Villa d'Este, Tivoli (2001)"
      },
      {
          "value": "Villa Romana del Casale (1997)"
      },
      {
          "value": "Vineyard Landscape of Piedmont: Langhe-Roero and Monferrato (2014)"
      },
      {
          "value": "Curonian Spit"
      },
      {
          "value": "Kernavė Archaeological Site (Cultural Reserve of Kernavė)"
      },
      {
          "value": "Struve Geodetic Arc"
      },
      {
          "value": "City of Luxembourg: its Old Quarters and Fortifications"
      },
      {
          "value": "Historic Centre of Riga (1997)"
      },
      {
          "value": "Struve Geodetic Arc (2005)"
      },
      {
          "value": "Struve Geodetic Arc (2005)"
      },
      {
          "value": "Natural and Cultural Heritage of the Ohrid region (1979)"
      },
      {
          "value": "City of Valletta"
      },
      {
          "value": "Ħal Saflieni Hypogeum"
      },
      {
          "value": "Megalithic Temples of Malta"
      },
      {
          "value": "Durmitor National Park (1980)"
      },
      {
          "value": "Natural and Culturo-Historical Region of Kotor (1979)"
      },
      {
          "value": "Stećci Medieval Tombstones Graveyards (2016)"
      },
      {
          "value": "Defence Line of Amsterdam"
      },
      {
          "value": "Droogmakerij de Beemster (Beemster Polder)"
      },
      {
          "value": "Historic Area of Willemstad, Inner City and Harbour, Curaçao"
      },
      {
          "value": "Ir.D.F. Woudagemaal (D.F. Wouda Steam Pumping Station)\n"
      },
      {
          "value": "Mill Network at Kinderdijk-Elshout"
      },
      {
          "value": "Schokland and Surroundings"
      },
      {
          "value": "Seventeenth-Century Canal Ring Area of Amsterdam inside the Singelgracht"
      },
      {
          "value": "Van Nellefabriek"
      },
      {
          "value": "Wadden Sea"
      },
      {
          "value": "Rjukan-Notodden Industrial Heritage Site (2015)"
      },
      {
          "value": "Rock Art of Alta (1985)"
      },
      {
          "value": "Røros Mining Town and the Circumference (1980)"
      },
      {
          "value": "Struve Geodetic Arc (2005)"
      },
      {
          "value": "Urnes Stave Church (1979)"
      },
      {
          "value": "Vegaøyan -- The Vega Archipelago (2004)"
      },
      {
          "value": "Auschwitz Birkenau \nGerman Nazi Concentration and Extermination Camp (1940-1945) (1979)"
      },
      {
          "value": "Białowieża Forest (1979)"
      },
      {
          "value": "Castle of the Teutonic Order in Malbork (1997)"
      },
      {
          "value": "Centennial Hall in Wrocław (2006)"
      },
      {
          "value": "Churches of Peace in Jawor and Świdnica (2001)"
      },
      {
          "value": "Historic Centre of Kraków (1978)"
      },
      {
          "value": "Historic Centre of Warsaw (1980)"
      },
      {
          "value": "Kalwaria Zebrzydowska: the Mannerist Architectural and Park Landscape Complex and Pilgrimage Park (1999)"
      },
      {
          "value": "Medieval Town of Toruń (1997)"
      },
      {
          "value": "Muskauer Park / Park Mużakowski (2004)"
      },
      {
          "value": "Old City of Zamość (1992)"
      },
      {
          "value": "Wieliczka and Bochnia Royal Salt Mines (1978)"
      },
      {
          "value": "Wooden Churches of Southern Małopolska (2003)"
      },
      {
          "value": "Wooden Tserkvas of the Carpathian Region in Poland and Ukraine (2013)"
      },
      {
          "value": "Alto Douro Wine Region"
      },
      {
          "value": "Central Zone of the Town of Angra do Heroismo in the Azores"
      },
      {
          "value": "Convent of Christ in Tomar"
      },
      {
          "value": "Cultural Landscape of Sintra"
      },
      {
          "value": "Garrison Border Town of Elvas and its Fortifications"
      },
      {
          "value": "Historic Centre of Évora"
      },
      {
          "value": "Historic Centre of Guimarães"
      },
      {
          "value": "Historic Centre of Oporto, Luiz I Bridge and Monastery of Serra do Pilar"
      },
      {
          "value": "Landscape of the Pico Island Vineyard Culture"
      },
      {
          "value": "Laurisilva of Madeira\n"
      },
      {
          "value": "Monastery of Alcobaça"
      },
      {
          "value": "Monastery of Batalha "
      },
      {
          "value": "Monastery of the Hieronymites and Tower of Belém in Lisbon"
      },
      {
          "value": "Prehistoric Rock Art Sites in the Côa Valley and Siega Verde"
      },
      {
          "value": "University of Coimbra – Alta and Sofia"
      },
      {
          "value": "Churches of Moldavia (1993)"
      },
      {
          "value": "Dacian Fortresses of the Orastie Mountains (1999)"
      },
      {
          "value": "Danube Delta (1991)"
      },
      {
          "value": "Historic Centre of Sighişoara (1999)"
      },
      {
          "value": "Monastery of Horezu (1993)"
      },
      {
          "value": "Villages with Fortified Churches in Transylvania (1993)"
      },
      {
          "value": "Wooden Churches of Maramureş (1999)"
      },
      {
          "value": "Architectural Ensemble of the Trinity Sergius Lavra in Sergiev Posad (1993)"
      },
      {
          "value": "Bolgar Historical and Archaeological Complex (2014)"
      },
      {
          "value": "Central Sikhote-Alin (2001)"
      },
      {
          "value": "Church of the Ascension, Kolomenskoye (1994)"
      },
      {
          "value": "Citadel, Ancient City and Fortress Buildings of Derbent (2003)"
      },
      {
          "value": "Cultural and Historic Ensemble of the Solovetsky Islands (1992)"
      },
      {
          "value": "Curonian Spit (2000)"
      },
      {
          "value": "Ensemble of the Ferapontov Monastery (2000)"
      },
      {
          "value": "Golden Mountains of Altai (1998)"
      },
      {
          "value": "Historic and Architectural Complex of the Kazan Kremlin (2000)"
      },
      {
          "value": "Historic Centre of Saint Petersburg and Related Groups of Monuments (1990)"
      },
      {
          "value": "Historic Monuments of Novgorod and Surroundings (1992)"
      },
      {
          "value": "Historical Centre of the City of Yaroslavl (2005)"
      },
      {
          "value": "Kremlin and Red Square, Moscow (1990)"
      },
      {
          "value": "Lake Baikal (1996)"
      },
      {
          "value": "Lena Pillars Nature Park (2012)"
      },
      {
          "value": "Natural System of Wrangel Island Reserve (2004)"
      },
      {
          "value": "Putorana Plateau (2010)"
      },
      {
          "value": "Struve Geodetic Arc (2005)"
      },
      {
          "value": "Uvs Nuur Basin (2003)"
      },
      {
          "value": "Volcanoes of Kamchatka (1996)"
      },
      {
          "value": "Western Caucasus (1999)"
      },
      {
          "value": "White Monuments of Vladimir and Suzdal (1992)"
      },
      {
          "value": "San Marino Historic Centre and Mount Titano"
      },
      {
          "value": "Gamzigrad-Romuliana, Palace of Galerius"
      },
      {
          "value": "Medieval Monuments in Kosovo"
      },
      {
          "value": "Stari Ras and Sopoćani"
      },
      {
          "value": "Stećci Medieval Tombstones Graveyards"
      },
      {
          "value": "Studenica Monastery"
      },
      {
          "value": "Bardejov Town Conservation Reserve (2000)"
      },
      {
          "value": "Historic Town of Banská Štiavnica and the Technical Monuments in its Vicinity (1993)"
      },
      {
          "value": "Levoča, Spišský Hrad and the Associated Cultural Monuments (1993)"
      },
      {
          "value": "Wooden Churches of the Slovak part of the Carpathian Mountain Area (2008)"
      },
      {
          "value": "Caves of Aggtelek Karst and Slovak Karst (1995)"
      },
      {
          "value": "Primeval Beech Forests of the Carpathians and the Ancient Beech Forests of Germany (2007)"
      },
      {
          "value": "Heritage of Mercury. Almadén and Idrija"
      },
      {
          "value": "Prehistoric Pile Dwellings around the Alps"
      },
      {
          "value": "Škocjan Caves"
      },
      {
          "value": "Agricultural Landscape of Southern Ã–land (2000)"
      },
      {
          "value": "Birka and HovgÃ¥rden (1993)"
      },
      {
          "value": "Church Town of Gammelstad, LuleÃ¥ (1996)"
      },
      {
          "value": "Decorated Farmhouses of HÃ¤lsingland (2012)"
      },
      {
          "value": "Grimeton Radio Station, Varberg (2004)"
      },
      {
          "value": "Hanseatic Town of Visby (1995)"
      },
      {
          "value": "High Coast / Kvarken Archipelago (2000)"
      },
      {
          "value": "Laponian Area (1996)"
      },
      {
          "value": "Mining Area of the Great Copper Mountain in Falun (2001)"
      },
      {
          "value": "Naval Port of Karlskrona (1998)"
      },
      {
          "value": "Rock Carvings in Tanum (1994)"
      },
      {
          "value": "Royal Domain of Drottningholm (1991)"
      },
      {
          "value": "SkogskyrkogÃ¥rden (1994)"
      },
      {
          "value": "Struve Geodetic Arc (2005)"
      },
      {
          "value": "Archaeological Site of Ani (2016)"
      },
      {
          "value": "Archaeological Site of Troy (1998)"
      },
      {
          "value": "Bursa and CumalÄ±kÄ±zÄ±k: the Birth of the Ottoman Empire (2014)"
      },
      {
          "value": "City of Safranbolu (1994)"
      },
      {
          "value": "DiyarbakÄ±r Fortress and Hevsel Gardens Cultural Landscape (2015)"
      },
      {
          "value": "GÃ¶reme National Park and the Rock Sites of Cappadocia (1985)"
      },
      {
          "value": "Great Mosque and Hospital of DivriÄŸi (1985)"
      },
      {
          "value": "Hattusha: the Hittite Capital (1986)"
      },
      {
          "value": "Hierapolis-Pamukkale (1988)"
      },
      {
          "value": "Historic Areas of Istanbul (1985)"
      },
      {
          "value": "Nemrut DaÄŸ (1987)"
      },
      {
          "value": "Neolithic Site of Ã‡atalhÃ¶yÃ¼k (2012)"
      },
      {
          "value": "Pergamon and its Multi-Layered Cultural Landscape (2014)"
      },
      {
          "value": "Selimiye Mosque and its Social Complex (2011)"
      },
      {
          "value": "Xanthos-Letoon (1988)"
      },
      {
          "value": "Ancient City of Tauric Chersonese and its Chora"
      },
      {
          "value": "Kiev: Saint-Sophia Cathedral and Related Monastic Buildings, Kiev-Pechersk Lavra"
      },
      {
          "value": "L'viv â€“ the Ensemble of the Historic Centre"
      },
      {
          "value": "Primeval Beech Forests of the Carpathians and the Ancient Beech Forests of Germany"
      },
      {
          "value": "Residence of Bukovinian and Dalmatian Metropolitans"
      },
      {
          "value": "Struve Geodetic Arc"
      },
      {
          "value": "Wooden Tserkvas of the Carpathian Region in Poland and Ukraine"
      },
      {
          "value": "Historic Centre of Rome, the Properties of the Holy See in that City Enjoying Extraterritorial Rights and San Paolo Fuori le Mura (1980)"
      },
      {
          "value": "Vatican City (1984)"
      },
      {
          "value": "Canadian Rocky Mountain Parks (1984)"
      },
      {
          "value": "Dinosaur Provincial Park (1979)"
      },
      {
          "value": "Gros Morne National Park (1987)"
      },
      {
          "value": "Head-Smashed-In Buffalo Jump (1981)"
      },
      {
          "value": "Kluane / Wrangell-St. Elias / Glacier Bay / Tatshenshini-Alsek (1979)"
      },
      {
          "value": "Landscape of Grand Pré (2012)"
      },
      {
          "value": "L’Anse aux Meadows National Historic Site (1978)"
      },
      {
          "value": "Miguasha National Park (1999)"
      },
      {
          "value": "Mistaken Point (2016)"
      },
      {
          "value": "Nahanni National Park (1978)"
      },
      {
          "value": "Red Bay Basque Whaling Station (2013)"
      },
      {
          "value": "Rideau Canal (2007)"
      },
      {
          "value": "SGang Gwaay (1981)"
      },
      {
          "value": "Waterton Glacier International Peace Park (1995)"
      },
      {
          "value": "Wood Buffalo National Park (1983)"
      },
      {
          "value": "Cahokia Mounds State Historic Site (1982)"
      },
      {
          "value": "Carlsbad Caverns National Park (1995)"
      },
      {
          "value": "Chaco Culture (1987)"
      },
      {
          "value": "Everglades National Park (1979)"
      },
      {
          "value": "Grand Canyon National Park (1979)"
      },
      {
          "value": "Great Smoky Mountains National Park (1983)"
      },
      {
          "value": "Hawaii Volcanoes National Park (1987)"
      },
      {
          "value": "Independence Hall (1979)"
      },
      {
          "value": "Kluane / Wrangell-St. Elias / Glacier Bay / Tatshenshini-Alsek (1979)"
      },
      {
          "value": "La Fortaleza and San Juan National Historic Site in Puerto Rico (1983)"
      },
      {
          "value": "Mammoth Cave National Park (1981)"
      },
      {
          "value": "Mesa Verde National Park (1978)"
      },
      {
          "value": "Monticello and the University of Virginia in Charlottesville (1987)"
      },
      {
          "value": "Monumental Earthworks of Poverty Point (2014)"
      },
      {
          "value": "Olympic National Park (1981)"
      },
      {
          "value": "Papahānaumokuākea (2010)"
      },
      {
          "value": "Redwood National and State Parks (1980)"
      },
      {
          "value": "San Antonio Missions (2015)"
      },
      {
          "value": "Statue of Liberty"
      },
      {
          "value": "Taos Pueblo (1992)"
      },
      {
          "value": "Waterton Glacier International Peace Park (1995)"
      },
      {
          "value": "Yellowstone National Park (1978)"
      },
      {
          "value": "Yosemite National Park (1984)"
      },
      {
          "value": "Cueva de las Manos, Río Pinturas (1999)"
      },
      {
          "value": "Iguazu National Park (1984)"
      },
      {
          "value": "Ischigualasto / Talampaya Natural Parks (2000)"
      },
      {
          "value": "Jesuit Block and Estancias of Córdoba (2000)"
      },
      {
          "value": "Jesuit Missions of the Guaranis: San Ignacio Mini, Santa Ana, Nuestra Señora de Loreto and Santa Maria Mayor (Argentina), Ruins of Sao Miguel das Missoes (Brazil) (1983)"
      },
      {
          "value": "Los Glaciares National Park (1981)"
      },
      {
          "value": "Península Valdés (1999)"
      },
      {
          "value": "Qhapaq Ñan, Andean Road System (2014)"
      },
      {
          "value": "Quebrada de Humahuaca (2003)"
      },
      {
          "value": "The Architectural Work of Le Corbusier, an Outstanding Contribution to the Modern Movement (2016)"
      },
      {
          "value": "Fuerte de Samaipata (1998)"
      },
      {
          "value": "Noel Kempff Mercado National Park (2000)"
      },
      {
          "value": "Qhapaq Ñan, Andean Road System (2014)"
      },
      {
          "value": "Tiwanaku: Spiritual and Political Centre of the Tiwanaku Culture (2000)"
      },
      {
          "value": "Atlantic Forest South-East Reserves"
      },
      {
          "value": "Brasilia"
      },
      {
          "value": "Brazilian Atlantic Islands: Fernando de Noronha and Atol das Rocas Reserves"
      },
      {
          "value": "Central Amazon Conservation Complex"
      },
      {
          "value": "Cerrado Protected Areas: Chapada dos Veadeiros and Emas National Parks"
      },
      {
          "value": "Discovery Coast Atlantic Forest Reserves"
      },
      {
          "value": "Historic Centre of Salvador de Bahia"
      },
      {
          "value": "Historic Centre of São Luís"
      },
      {
          "value": "Historic Centre of the Town of Diamantina"
      },
      {
          "value": "Historic Centre of the Town of Goiás"
      },
      {
          "value": "Historic Centre of the Town of Olinda"
      },
      {
          "value": "Iguaçu National Park"
      },
      {
          "value": "Jesuit Missions of the Guaranis: San Ignacio Mini, Santa Ana, Nuestra Señora de Loreto and Santa Maria Mayor (Argentina), Ruins of Sao Miguel das Missoes (Brazil)"
      },
      {
          "value": "Pampulha Modern Ensemble"
      },
      {
          "value": "Pantanal Conservation Area"
      },
      {
          "value": "Rio de Janeiro: Carioca Landscapes between the Mountain and the Sea"
      },
      {
          "value": "Sanctuary of Bom Jesus do Congonhas"
      },
      {
          "value": "São Francisco Square in the Town of São Cristóvão"
      },
      {
          "value": "Serra da Capivara National Park"
      },
      {
          "value": "Historic Quarter of the Seaport City of Valparaíso (2003)"
      },
      {
          "value": "Humberstone and Santa Laura Saltpeter Works (2005)"
      },
      {
          "value": "Qhapaq Ñan, Andean Road System (2014)"
      },
      {
          "value": "Rapa Nui National Park (1995)"
      },
      {
          "value": "Coffee Cultural Landscape of Colombia (2011)"
      },
      {
          "value": "Historic Centre of Santa Cruz de Mompox (1995)"
      },
      {
          "value": "Los Katíos National Park (1994)"
      },
      {
          "value": "Malpelo Fauna and Flora Sanctuary (2006)"
      },
      {
          "value": "National Archeological Park of Tierradentro (1995)"
      },
      {
          "value": "Port, Fortresses and Group of Monuments, Cartagena (1984)"
      },
      {
          "value": "Qhapaq Ñan, Andean Road System (2014)"
      },
      {
          "value": "San Agustín Archaeological Park (1995)"
      },
      {
          "value": "Galápagos Islands (1978)"
      },
      {
          "value": "Historic Centre of Santa Ana de los Ríos de Cuenca (1999)"
      },
      {
          "value": "Qhapaq Ñan, Andean Road System (2014)"
      },
      {
          "value": "Sangay National Park (1983)"
      },
      {
          "value": "Chan Chan Archaeological Zone (1986)"
      },
      {
          "value": "Chavin (Archaeological Site) (1985)\n"
      },
      {
          "value": "Historic Centre of Lima (1988)"
      },
      {
          "value": "Historic Sanctuary of Machu Picchu (1983)"
      },
      {
          "value": "Historical Centre of the City of Arequipa (2000)"
      },
      {
          "value": "Huascarán National Park (1985)"
      },
      {
          "value": "Lines and Geoglyphs of Nasca and Palpa (1994)"
      },
      {
          "value": "Manú National Park (1987)"
      },
      {
          "value": "Qhapaq Ñan, Andean Road System (2014)"
      },
      {
          "value": "Río Abiseo National Park (1990)"
      },
      {
          "value": "Sacred City of Caral-Supe (2009)"
      },
      {
          "value": "Jesuit Missions of La Santísima Trinidad de Paraná and Jesús de Tavarangue (1993)"
      },
      {
          "value": "Central Suriname Nature Reserve (2000)"
      },
      {
          "value": "Historic Inner City of Paramaribo (2002)"
      },
      {
          "value": "Fray Bentos Industrial Landscape (2015)"
      },
      {
          "value": "Historic Quarter of the City of Colonia del Sacramento (1995)"
      },
      {
          "value": "Canaima National Park (1994)"
      },
      {
          "value": "Ciudad Universitaria de Caracas (2000)"
      },
      {
          "value": "Coro and its Port (1993)"
      }
  ];


  // setup autocomplete function pulling from poolData[] array
  $('#searchText').autocomplete({
    lookup: poolData
/*    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    } */
  });


});