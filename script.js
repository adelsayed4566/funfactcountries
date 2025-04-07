// Country data with fun facts, coordinates, and flag classes
const countries = [
    {
        name: "Afghanistan",
        fact: "Afghanistan is one of the few countries in the world that has a square flag.",
        lat: 33.93911,
        lng: 67.709953,
        flag: "fi-af"
    },
    {
        name: "Albania",
        fact: "Albania has over 750,000 bunkers built during communist rule - more than any other country relative to its size.",
        lat: 41.153332,
        lng: 20.168331,
        flag: "fi-al"
    },
    {
        name: "Algeria",
        fact: "Algeria is the largest country in Africa and the 10th largest in the world.",
        lat: 28.033886,
        lng: 1.659626,
        flag: "fi-dz"
    },
    {
        name: "Andorra",
        fact: "Andorra is the only country in the world where Catalan is the sole official language.",
        lat: 42.546245,
        lng: 1.601554,
        flag: "fi-ad"
    },
    {
        name: "Angola",
        fact: "Angola's capital Luanda was once the most expensive city in the world for expatriates.",
        lat: -11.202692,
        lng: 17.873887,
        flag: "fi-ao"
    },
    {
        name: "Antigua and Barbuda",
        fact: "Antigua and Barbuda has a beach for every day of the year - 365 in total!",
        lat: 17.060816,
        lng: -61.796428,
        flag: "fi-ag"
    },
    {
        name: "Argentina",
        fact: "Argentina is home to the southernmost city in the world, Ushuaia.",
        lat: -38.416097,
        lng: -63.616672,
        flag: "fi-ar"
    },
    {
        name: "Armenia",
        fact: "Armenia was the first country to adopt Christianity as its state religion in 301 AD.",
        lat: 40.069099,
        lng: 45.038189,
        flag: "fi-am"
    },
    {
        name: "Australia",
        fact: "Australia is home to the world's longest fence (5,614 km), built to keep dingoes away from fertile land.",
        lat: -25.274398,
        lng: 133.775136,
        flag: "fi-au"
    },
    {
        name: "Austria",
        fact: "Austria is the birthplace of Mozart, but also the world's oldest zoo (Vienna Zoo, founded in 1752).",
        lat: 47.516231,
        lng: 14.550072,
        flag: "fi-at"
    },
    {
        name: "Azerbaijan",
        fact: "Azerbaijan has the most mud volcanoes of any country - over 400!",
        lat: 40.143105,
        lng: 47.576927,
        flag: "fi-az"
    },
    {
        name: "Bahamas",
        fact: "The Bahamas has the clearest water in the world with visibility up to 200 feet.",
        lat: 25.03428,
        lng: -77.39628,
        flag: "fi-bs"
    },
    {
        name: "Bahrain",
        fact: "Bahrain has the world's largest underwater theme park featuring a sunken Boeing 747.",
        lat: 25.930414,
        lng: 50.637772,
        flag: "fi-bh"
    },
    {
        name: "Bangladesh",
        fact: "Bangladesh has the world's largest river delta formed by the Ganges, Brahmaputra and Meghna rivers.",
        lat: 23.684994,
        lng: 90.356331,
        flag: "fi-bd"
    },
    {
        name: "Barbados",
        fact: "Barbados is named after the bearded fig trees that once covered the island ('Los Barbados' means 'the bearded ones' in Portuguese).",
        lat: 13.193887,
        lng: -59.543198,
        flag: "fi-bb"
    },
    {
        name: "Belarus",
        fact: "Belarus is home to Europe's largest mammal - the European bison.",
        lat: 53.709807,
        lng: 27.953389,
        flag: "fi-by"
    },
    {
        name: "Belgium",
        fact: "Belgium produces over 220,000 tons of chocolate per year and has the most chocolate shops per capita.",
        lat: 50.503887,
        lng: 4.469936,
        flag: "fi-be"
    },
    {
        name: "Belize",
        fact: "Belize has the only jaguar reserve in the world, the Cockscomb Basin Wildlife Sanctuary.",
        lat: 17.189877,
        lng: -88.49765,
        flag: "fi-bz"
    },
    {
        name: "Benin",
        fact: "Benin is home to the 'Venice of Africa' - Ganvie, a village built entirely on stilts in Lake Nokoué.",
        lat: 9.30769,
        lng: 2.315834,
        flag: "fi-bj"
    },
    {
        name: "Bhutan",
        fact: "Bhutan is the only carbon-negative country in the world, absorbing more CO2 than it produces.",
        lat: 27.514162,
        lng: 90.433601,
        flag: "fi-bt"
    },
    {
        name: "Bolivia",
        fact: "Bolivia has the world's largest salt flat, Salar de Uyuni, which becomes a giant mirror when covered with water.",
        lat: -16.290154,
        lng: -63.588653,
        flag: "fi-bo"
    },
    {
        name: "Bosnia and Herzegovina",
        fact: "Bosnia and Herzegovina has one of the last remaining primeval forests in Europe, Perucica.",
        lat: 43.915886,
        lng: 17.679076,
        flag: "fi-ba"
    },
    {
        name: "Botswana",
        fact: "Botswana has the world's largest concentration of African elephants, with over 130,000 in the country.",
        lat: -22.328474,
        lng: 24.684866,
        flag: "fi-bw"
    },
    {
        name: "Brazil",
        fact: "Brazil has the world's largest carnival celebration in Rio de Janeiro, attracting over 2 million people daily.",
        lat: -14.235004,
        lng: -51.92528,
        flag: "fi-br"
    },
    {
        name: "Brunei",
        fact: "Brunei's Sultan Hassanal Bolkiah has a car collection worth over $5 billion with 7,000 cars including 600 Rolls Royces.",
        lat: 4.535277,
        lng: 114.727669,
        flag: "fi-bn"
    },
    {
        name: "Bulgaria",
        fact: "Bulgaria is the only European country that hasn't changed its name since it was first established in 681 AD.",
        lat: 42.733883,
        lng: 25.48583,
        flag: "fi-bg"
    },
    {
        name: "Burkina Faso",
        fact: "Burkina Faso translates to 'Land of Honest (Incorruptible) People' in the local languages.",
        lat: 12.238333,
        lng: -1.561593,
        flag: "fi-bf"
    },
    {
        name: "Burundi",
        fact: "Burundi is home to the world's longest freshwater lake, Lake Tanganyika, which is also the second deepest.",
        lat: -3.373056,
        lng: 29.918886,
        flag: "fi-bi"
    },
    {
        name: "Cambodia",
        fact: "Cambodia's Angkor Wat is the largest religious monument in the world, covering 162.6 hectares.",
        lat: 12.565679,
        lng: 104.990963,
        flag: "fi-kh"
    },
    {
        name: "Cameroon",
        fact: "Cameroon is called 'Africa in miniature' because it has all the major climates and vegetation of the continent.",
        lat: 7.369722,
        lng: 12.354722,
        flag: "fi-cm"
    },
    {
        name: "Canada",
        fact: "Canada has the longest coastline in the world at 202,080 km - enough to circle the Earth 5 times!",
        lat: 56.130366,
        lng: -106.346771,
        flag: "fi-ca"
    },
    {
        name: "Cape Verde",
        fact: "Cape Verde is one of the world's most stable democratic countries in Africa with no history of coups.",
        lat: 16.002082,
        lng: -24.013197,
        flag: "fi-cv"
    },
    {
        name: "Central African Republic",
        fact: "The Central African Republic is home to the Ba'Aka pygmies, one of the oldest indigenous groups in Africa.",
        lat: 6.611111,
        lng: 20.939444,
        flag: "fi-cf"
    },
    {
        name: "Chad",
        fact: "Chad is home to the Ennedi Plateau, known as the 'Garden of the Desert' with unique rock formations and prehistoric cave art.",
        lat: 15.454166,
        lng: 18.732207,
        flag: "fi-td"
    },
    {
        name: "Chile",
        fact: "Chile is home to the driest place on Earth - the Atacama Desert, where some areas haven't seen rain in over 400 years.",
        lat: -35.675147,
        lng: -71.542969,
        flag: "fi-cl"
    },
    {
        name: "China",
        fact: "China's railway system could loop around Earth twice - with over 139,000 km of tracks by 2021.",
        lat: 35.86166,
        lng: 104.195397,
        flag: "fi-cn"
    },
    {
        name: "Colombia",
        fact: "Colombia is the world's leading source of emeralds and home to the famous 'Chivor' and 'Muzo' mines.",
        lat: 4.570868,
        lng: -74.297333,
        flag: "fi-co"
    },
    {
        name: "Comoros",
        fact: "Comoros is the world's largest producer of ylang-ylang, a flower used in perfumes like Chanel No. 5.",
        lat: -11.875001,
        lng: 43.872219,
        flag: "fi-km"
    },
    {
        name: "Congo (Brazzaville)",
        fact: "The Republic of Congo is home to the 'Alphabetic Rapids' where the Congo River forms a series of rapids in the shape of letters.",
        lat: -0.228021,
        lng: 15.827659,
        flag: "fi-cg"
    },
    {
        name: "Congo (Kinshasa)",
        fact: "The Democratic Republic of Congo has the world's second largest rainforest after the Amazon.",
        lat: -4.038333,
        lng: 21.758664,
        flag: "fi-cd"
    },
    {
        name: "Costa Rica",
        fact: "Costa Rica generates over 99% of its electricity from renewable sources, mainly hydropower.",
        lat: 9.748917,
        lng: -83.753428,
        flag: "fi-cr"
    },
    {
        name: "Croatia",
        fact: "Croatia invented the necktie ('cravat'), which was inspired by scarves worn by Croatian mercenaries in the 17th century.",
        lat: 45.1,
        lng: 15.2,
        flag: "fi-hr"
    },
    {
        name: "Cuba",
        fact: "Cuba has one of the highest doctor-to-patient ratios in the world and sends thousands of doctors abroad annually.",
        lat: 21.521757,
        lng: -77.781167,
        flag: "fi-cu"
    },
    {
        name: "Cyprus",
        fact: "Cyprus is the legendary birthplace of Aphrodite, the Greek goddess of love and beauty.",
        lat: 35.126413,
        lng: 33.429859,
        flag: "fi-cy"
    },
    {
        name: "Czech Republic",
        fact: "The Czech Republic has the highest beer consumption per capita in the world at over 140 liters per person annually.",
        lat: 49.817492,
        lng: 15.472962,
        flag: "fi-cz"
    },
    {
        name: "Denmark",
        fact: "Denmark has over 400 islands, but only about 70 are inhabited.",
        lat: 56.26392,
        lng: 9.501785,
        flag: "fi-dk"
    },
    {
        name: "Djibouti",
        fact: "Djibouti's Lake Assal is Africa's lowest point at 155m below sea level and one of the saltiest bodies of water on Earth.",
        lat: 11.825138,
        lng: 42.590275,
        flag: "fi-dj"
    },
    {
        name: "Dominica",
        fact: "Dominica is home to the world's second largest boiling lake, a flooded fumarole heated by volcanic activity.",
        lat: 15.414999,
        lng: -61.370976,
        flag: "fi-dm"
    },
    {
        name: "Dominican Republic",
        fact: "The Dominican Republic is the only country in the world with a Bible on its flag.",
        lat: 18.735693,
        lng: -70.162651,
        flag: "fi-do"
    },
    {
        name: "Ecuador",
        fact: "Ecuador is home to the closest point on Earth to space - Mount Chimborazo, due to the Earth's equatorial bulge.",
        lat: -1.831239,
        lng: -78.183406,
        flag: "fi-ec"
    },
    {
        name: "Egypt",
        fact: "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World and the only one still standing.",
        lat: 26.820553,
        lng: 30.802498,
        flag: "fi-eg"
    },
    {
        name: "El Salvador",
        fact: "El Salvador is called the 'Land of Volcanoes' with over 20 volcanoes, two of which are currently active.",
        lat: 13.794185,
        lng: -88.89653,
        flag: "fi-sv"
    },
    {
        name: "Equatorial Guinea",
        fact: "Equatorial Guinea is the only African country where Spanish is an official language.",
        lat: 1.650801,
        lng: 10.267895,
        flag: "fi-gq"
    },
    {
        name: "Eritrea",
        fact: "Eritrea's capital Asmara is a UNESCO World Heritage site known for its well-preserved Italian modernist architecture.",
        lat: 15.179384,
        lng: 39.782334,
        flag: "fi-er"
    },
    {
        name: "Estonia",
        fact: "Estonia has the highest number of meteorite craters per land area in the world with over 100 known craters.",
        lat: 58.595272,
        lng: 25.013607,
        flag: "fi-ee"
    },
    {
        name: "Eswatini",
        fact: "Eswatini (formerly Swaziland) is Africa's last absolute monarchy and one of the world's few remaining ones.",
        lat: -26.522503,
        lng: 31.465866,
        flag: "fi-sz"
    },
    {
        name: "Ethiopia",
        fact: "Ethiopia follows its own calendar which is 7-8 years behind the Gregorian calendar and has 13 months.",
        lat: 9.145,
        lng: 40.489673,
        flag: "fi-et"
    },
    {
        name: "Fiji",
        fact: "Fiji's International Date Line creates a time zone where you can be in tomorrow while the rest of the country is in today.",
        lat: -17.713371,
        lng: 178.065032,
        flag: "fi-fj"
    },
    {
        name: "Finland",
        fact: "Finland has around 3 million saunas for a population of 5.5 million - that's nearly one per household!",
        lat: 61.92411,
        lng: 25.748151,
        flag: "fi-fi"
    },
    {
        name: "France",
        fact: "France is the most visited country in the world with over 89 million tourists annually.",
        lat: 46.227638,
        lng: 2.213749,
        flag: "fi-fr"
    },
    {
        name: "Gabon",
        fact: "Gabon has over 11% of its land protected as national parks - the highest percentage of any country.",
        lat: -0.803689,
        lng: 11.609444,
        flag: "fi-ga"
    },
    {
        name: "Gambia",
        fact: "The Gambia is the smallest country on mainland Africa, surrounded entirely by Senegal except for its Atlantic coastline.",
        lat: 13.443182,
        lng: -15.310139,
        flag: "fi-gm"
    },
    {
        name: "Georgia",
        fact: "Georgia is considered the birthplace of wine, with evidence of winemaking dating back 8,000 years.",
        lat: 42.315407,
        lng: 43.356892,
        flag: "fi-ge"
    },
    {
        name: "Germany",
        fact: "Germany has over 1,500 different beers from more than 1,300 breweries.",
        lat: 51.165691,
        lng: 10.451526,
        flag: "fi-de"
    },
    {
        name: "Ghana",
        fact: "Ghana was the first sub-Saharan African country to gain independence from colonial rule in 1957.",
        lat: 7.946527,
        lng: -1.023194,
        flag: "fi-gh"
    },
    {
        name: "Greece",
        fact: "Greece has over 6,000 islands and islets, but only 227 are inhabited.",
        lat: 39.074208,
        lng: 21.824312,
        flag: "fi-gr"
    },
    {
        name: "Grenada",
        fact: "Grenada is known as the 'Island of Spice' and is the world's second largest producer of nutmeg after Indonesia.",
        lat: 12.262776,
        lng: -61.604171,
        flag: "fi-gd"
    },
    {
        name: "Guatemala",
        fact: "Guatemala's Tikal was one of the largest Mayan cities with pyramids dating back to 300 BC.",
        lat: 15.783471,
        lng: -90.230759,
        flag: "fi-gt"
    },
    {
        name: "Guinea",
        fact: "Guinea holds over 25% of the world's bauxite reserves, the primary ore for aluminum.",
        lat: 9.945587,
        lng: -9.696645,
        flag: "fi-gn"
    },
    {
        name: "Guinea-Bissau",
        fact: "Guinea-Bissau's Bijagós Archipelago is a UNESCO Biosphere Reserve with some of the most pristine islands in Africa.",
        lat: 11.803749,
        lng: -15.180413,
        flag: "fi-gw"
    },
    {
        name: "Guyana",
        fact: "Guyana is the only South American country where English is the official language.",
        lat: 4.860416,
        lng: -58.93018,
        flag: "fi-gy"
    },
    {
        name: "Haiti",
        fact: "Haiti is the only country in the world established after a successful slave revolt (1804).",
        lat: 18.971187,
        lng: -72.285215,
        flag: "fi-ht"
    },
    {
        name: "Honduras",
        fact: "Honduras has the world's oldest clock that's still working, built by the Moors in the 12th century.",
        lat: 15.199999,
        lng: -86.241905,
        flag: "fi-hn"
    },
    {
        name: "Hungary",
        fact: "Cìgańy means brown in hungarian.",
        lat: 47.162494,
        lng: 19.503304,
        flag: "fi-hu"
    },
    {
        name: "Iceland",
        fact: "Iceland has no mosquitoes - they can't survive the climate!",
        lat: 64.963051,
        lng: -19.020835,
        flag: "fi-is"
    },
    {
        name: "India",
        fact: "India has the world's largest family - a man with 39 wives and 94 children living in a 100-room house.",
        lat: 20.593684,
        lng: 78.96288,
        flag: "fi-in"
    },
    {
        name: "Indonesia",
        fact: "Indonesia is the world's largest archipelago with over 17,000 islands (only about 6,000 are inhabited).",
        lat: -0.789275,
        lng: 113.921327,
        flag: "fi-id"
    },
    {
        name: "Iran",
        fact: "Iran has the world's largest hand-woven carpet (5,624 sqm) in the Abu Dhabi mosque.",
        lat: 32.427908,
        lng: 53.688046,
        flag: "fi-ir"
    },
    {
        name: "Iraq",
        fact: "Iraq is home to the ancient city of Babylon, one of the earliest known civilizations dating back to 2300 BC.",
        lat: 33.223191,
        lng: 43.679291,
        flag: "fi-iq"
    },
    {
        name: "Ireland",
        fact: "Ireland is home to the oldest pub in Europe - Sean's Bar in Athlone, dating back to 900 AD.",
        lat: 53.41291,
        lng: -8.24389,
        flag: "fi-ie"
    },
    {
        name: "Italy",
        fact: "Italy has more UNESCO World Heritage Sites than any other country (58 as of 2021).",
        lat: 41.87194,
        lng: 12.56738,
        flag: "fi-it"
    },
    {
        name: "Jamaica",
        fact: "Jamaica has the most churches per square mile of any country in the world.",
        lat: 18.109581,
        lng: -77.297508,
        flag: "fi-jm"
    },
    {
        name: "Japan",
        fact: "Japan has over 5 million vending machines - that's about 1 for every 25 people!",
        lat: 36.204824,
        lng: 138.252924,
        flag: "fi-jp"
    },
    {
        name: "Jordan",
        fact: "Jordan's Petra was named one of the New Seven Wonders of the World and is known as the 'Rose City' carved into pink sandstone cliffs.",
        lat: 30.585164,
        lng: 36.238414,
        flag: "fi-jo"
    },
    {
        name: "Kazakhstan",
        fact: "Kazakhstan is the world's largest landlocked country and has the world's largest space launch facility (Baikonur Cosmodrome).",
        lat: 48.019573,
        lng: 66.923684,
        flag: "fi-kz"
    },
    {
        name: "Kenya",
        fact: "Kenya is home to the world's fastest land animal (cheetah) and the world's largest land animal (African elephant).",
        lat: -0.023559,
        lng: 37.906193,
        flag: "fi-ke"
    },
    {
        name: "Kiribati",
        fact: "Kiribati is the only country in the world that falls in all four hemispheres (northern, southern, eastern and western).",
        lat: -3.370417,
        lng: -168.734039,
        flag: "fi-ki"
    },
    {
        name: "Korea, North",
        fact: "North Korea and Cuba are the only places in the world where you can't buy Coca-Cola.",
        lat: 40.339852,
        lng: 127.510093,
        flag: "fi-kp"
    },
    {
        name: "Korea, South",
        fact: "South Korea has the world's fastest average internet speed and is home to the 'PC bang' (gaming internet cafes).",
        lat: 35.907757,
        lng: 127.766922,
        flag: "fi-kr"
    },
    {
        name: "Kosovo",
        fact: "Kosovo has Europe's youngest population with over 50% under 25 years old.",
        lat: 42.602636,
        lng: 20.902977,
        flag: "fi-xk"
    },
    {
        name: "Kuwait",
        fact: "Kuwait has no natural freshwater sources - all drinking water comes from desalination plants.",
        lat: 29.31166,
        lng: 47.481766,
        flag: "fi-kw"
    },
    {
        name: "Kyrgyzstan",
        fact: "Kyrgyzstan's Lake Issyk-Kul is the second largest alpine lake in the world after Lake Titicaca.",
        lat: 41.20438,
        lng: 74.766098,
        flag: "fi-kg"
    },
    {
        name: "Laos",
        fact: "Laos is the most bombed country per capita in history with over 2 million tons dropped during the Vietnam War.",
        lat: 19.85627,
        lng: 102.495496,
        flag: "fi-la"
    },
    {
        name: "Latvia",
        fact: "Latvia has the world's tallest women on average (170 cm or 5'7\").",
        lat: 56.879635,
        lng: 24.603189,
        flag: "fi-lv"
    },
    {
        name: "Lebanon",
        fact: "Lebanon is home to the world's oldest continuously inhabited city - Byblos, settled around 5000 BC.",
        lat: 33.854721,
        lng: 35.862285,
        flag: "fi-lb"
    },
    {
        name: "Lesotho",
        fact: "Lesotho is the only independent state in the world that lies entirely above 1,000 meters (3,281 ft) in elevation.",
        lat: -29.609988,
        lng: 28.233608,
        flag: "fi-ls"
    },
    {
        name: "Liberia",
        fact: "Liberia was founded by freed American slaves and is Africa's oldest republic (established 1847).",
        lat: 6.428055,
        lng: -9.429499,
        flag: "fi-lr"
    },
    {
        name: "Libya",
        fact: "Libya is over 90% desert and has the world's highest recorded temperature (58°C or 136°F in 1922).",
        lat: 26.3351,
        lng: 17.228331,
        flag: "fi-ly"
    },
    {
        name: "Liechtenstein",
        fact: "Liechtenstein is the world's largest exporter of false teeth and the only country that's entirely in the Alps.",
        lat: 47.166,
        lng: 9.555373,
        flag: "fi-li"
    },
    {
        name: "Lithuania",
        fact: "Lithuania was the last pagan country in Europe, converting to Christianity in 1387.",
        lat: 55.169438,
        lng: 23.881275,
        flag: "fi-lt"
    },
    {
        name: "Luxembourg",
        fact: "Luxembourg has the world's highest minimum wage and the highest GDP per capita in the EU.",
        lat: 49.815273,
        lng: 6.129583,
        flag: "fi-lu"
    },
    {
        name: "Madagascar",
        fact: "Madagascar is home to over 70 species of lemurs found nowhere else on Earth.",
        lat: -18.766947,
        lng: 46.869107,
        flag: "fi-mg"
    },
    {
        name: "Malawi",
        fact: "Malawi is called 'The Warm Heart of Africa' and was the first country in Africa to grow tea commercially.",
        lat: -13.254308,
        lng: 34.301525,
        flag: "fi-mw"
    },
    {
        name: "Malaysia",
        fact: "Malaysia's Rafflesia flower is the world's largest, growing up to 1 meter (3 ft) in diameter.",
        lat: 4.210484,
        lng: 101.975766,
        flag: "fi-my"
    },
    {
        name: "Maldives",
        fact: "The Maldives is the world's flattest country with an average elevation of just 1.5 meters above sea level.",
        lat: 3.202778,
        lng: 73.22068,
        flag: "fi-mv"
    },
    {
        name: "Mali",
        fact: "Mali is home to the legendary city of Timbuktu, which was once a center of Islamic learning with over 700,000 ancient manuscripts.",
        lat: 17.570692,
        lng: -3.996166,
        flag: "fi-ml"
    },
    {
        name: "Malta",
        fact: "Malta has the world's oldest free-standing structures - the Megalithic Temples dating back to 3600 BC (older than Stonehenge and the Pyramids).",
        lat: 35.937496,
        lng: 14.375416,
        flag: "fi-mt"
    },
    {
        name: "Marshall Islands",
        fact: "The Marshall Islands has the world's largest shark sanctuary covering nearly 2 million square kilometers.",
        lat: 7.131474,
        lng: 171.184478,
        flag: "fi-mh"
    },
    {
        name: "Mauritania",
        fact: "Mauritania's Richat Structure (the 'Eye of the Sahara') is a 50km-wide geological formation visible from space.",
        lat: 21.00789,
        lng: -10.940835,
        flag: "fi-mr"
    },
    {
        name: "Mauritius",
        fact: "Mauritius is the only known home of the dodo bird before it went extinct in the 17th century.",
        lat: -20.348404,
        lng: 57.552152,
        flag: "fi-mu"
    },
    {
        name: "Mexico",
        fact: "Mexico City is built on a lake and sinks about 12 cm (5 inches) every year due to groundwater extraction.",
        lat: 23.634501,
        lng: -102.552784,
        flag: "fi-mx"
    },
    {
        name: "Micronesia",
        fact: "Micronesia's Nan Madol is often called the 'Venice of the Pacific' - a ruined city built on 92 artificial islands.",
        lat: 7.425554,
        lng: 150.550812,
        flag: "fi-fm"
    },
    {
        name: "Moldova",
        fact: "Moldova is home to the world's largest wine cellar (Mileștii Mici) with over 2 million bottles in a 200 km underground labyrinth.",
        lat: 47.411631,
        lng: 28.369885,
        flag: "fi-md"
    },
    {
        name: "Monaco",
        fact: "Monaco is the world's most densely populated country with over 19,000 people per square kilometer.",
        lat: 43.750298,
        lng: 7.412841,
        flag: "fi-mc"
    },
    {
        name: "Mongolia",
        fact: "Mongolia is the least densely populated country in the world with just 2 people per square kilometer.",
        lat: 46.862496,
        lng: 103.846656,
        flag: "fi-mn"
    },
    {
        name: "Montenegro",
        fact: "Montenegro's name means 'Black Mountain' and refers to Mount Lovćen's dark appearance from the dense forests.",
        lat: 42.708678,
        lng: 19.37439,
        flag: "fi-me"
    },
    {
        name: "Morocco",
        fact: "Morocco has the world's oldest university - University of Al Quaraouiyine in Fez, founded in 859 AD.",
        lat: 31.791702,
        lng: -7.09262,
        flag: "fi-ma"
    },
    {
        name: "Mozambique",
        fact: "Mozambique's flag is the only one in the world to feature a modern weapon - an AK-47 with a bayonet attached.",
        lat: -18.665695,
        lng: 35.529562,
        flag: "fi-mz"
    },
    {
        name: "Myanmar",
        fact: "Myanmar's Shwedagon Pagoda is encrusted with over 7,000 diamonds, rubies, and other precious stones. Tareq bob",
        lat: 21.916221,
        lng: 95.955974,
        flag: "fi-mm"
    },
    {
        name: "Namibia",
        fact: "Namibia was the first country to include environmental protection in its constitution and has the world's largest underground lake.",
        lat: -22.95764,
        lng: 18.49041,
        flag: "fi-na"
    },
    {
        name: "Nauru",
        fact: "Nauru is the world's smallest island nation and was once the wealthiest country per capita due to phosphate mining.",
        lat: -0.522778,
        lng: 166.931503,
        flag: "fi-nr"
    },
    {
        name: "Nepal",
        fact: "Nepal has the world's only non-rectangular flag - it's made of two stacked triangles representing the Himalayas.",
        lat: 28.394857,
        lng: 84.124008,
        flag: "fi-np"
    },
    {
        name: "Netherlands",
        fact: "The Netherlands has more bicycles than people and is so flat that its highest point is just 322 meters (1,056 ft) above sea level.",
        lat: 52.132633,
        lng: 5.291266,
        flag: "fi-nl"
    },
    {
        name: "New Zealand",
        fact: "New Zealand has the world's longest place name: Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu (85 letters).",
        lat: -40.900557,
        lng: 174.885971,
        flag: "fi-nz"
    },
    {
        name: "Nicaragua",
        fact: "Nicaragua is home to the only freshwater sharks in the world, found in Lake Nicaragua.",
        lat: 12.865416,
        lng: -85.207229,
        flag: "fi-ni"
    },
    {
        name: "Niger",
        fact: "Niger has the world's highest fertility rate with an average of 7 children per woman.",
        lat: 17.607789,
        lng: 8.081666,
        flag: "fi-ne"
    },
    {
        name: "Nigeria",
        fact: "Nigeria has the highest number of twins born per year globally, particularly in the Yoruba community.",
        lat: 9.081999,
        lng: 8.675277,
        flag: "fi-ng"
    },
    {
        name: "North Macedonia",
        fact: "North Macedonia has over 50 natural lakes and 1,000 larger artificial lakes, earning it the nickname 'Land of Lakes'.",
        lat: 41.608635,
        lng: 21.745275,
        flag: "fi-mk"
    },
    {
        name: "Norway",
        fact: "Norway has the world's longest road tunnel - the Lærdal Tunnel at 24.5 km (15.2 miles) long.",
        lat: 60.472024,
        lng: 8.468946,
        flag: "fi-no"
    },
    {
        name: "Oman",
        fact: "Oman was the first Arab country to have a democratically elected parliament (in 1997).",
        lat: 21.512583,
        lng: 55.923255,
        flag: "fi-om"
    },
    {
        name: "Pakistan",
        fact: "Pakistan has the world's largest irrigation system with over 56,000 km of canals.",
        lat: 30.375321,
        lng: 69.345116,
        flag: "fi-pk"
    },
    {
        name: "Palau",
        fact: "Palau created the world's first shark sanctuary in 2009, banning all commercial shark fishing in its waters.",
        lat: 7.51498,
        lng: 134.58252,
        flag: "fi-pw"
    },
    {
        name: "Panama",
        fact: "Panama is the only place in the world where you can see the sun rise on the Pacific and set on the Atlantic.",
        lat: 8.537981,
        lng: -80.782127,
        flag: "fi-pa"
    },
    {
        name: "Papua New Guinea",
        fact: "Papua New Guinea has over 850 indigenous languages, making it the most linguistically diverse country in the world.",
        lat: -6.314993,
        lng: 143.95555,
        flag: "fi-pg"
    },
    {
        name: "Paraguay",
        fact: "Paraguay is home to the world's largest water reserve - the Guarani Aquifer, which could supply fresh water to the world for 200 years.",
        lat: -23.442503,
        lng: -58.443832,
        flag: "fi-py"
    },
    {
        name: "Peru",
        fact: "Peru grows over 3,000 different varieties of potatoes, more than any other country.",
        lat: -9.189967,
        lng: -75.015152,
        flag: "fi-pe"
    },
    {
        name: "Philippines",
        fact: "The Philippines is the world's texting capital with over 400 million SMS sent daily - that's more than the US and Europe combined.",
        lat: 12.879721,
        lng: 121.774017,
        flag: "fi-ph"
    },
    {
        name: "Poland",
        fact: "Poland's Wieliczka Salt Mine has an entire underground town including a chapel carved from salt that's been in use for over 700 years.",
        lat: 51.919438,
        lng: 19.145136,
        flag: "fi-pl"
    },
    {
        name: "Portugal",
        fact: "Portugal is the world's largest cork producer, supplying about 50% of the world's cork every year.",
        lat: 39.399872,
        lng: -8.224454,
        flag: "fi-pt"
    },
    {
        name: "Qatar",
        fact: "Qatar is the world's richest country per capita and will host the first FIFA World Cup in the Middle East in 2022.",
        lat: 25.354826,
        lng: 51.183884,
        flag: "fi-qa"
    },
    {
        name: "Romania",
        fact: "Romania's Palace of the Parliament is the heaviest building in the world, weighing about 4.1 million tons.",
        lat: 45.943161,
        lng: 24.96676,
        flag: "fi-ro"
    },
    {
        name: "Russia",
        fact: "Russia spans 11 time zones and has the world's longest railway - the Trans-Siberian Railway at 9,289 km (5,772 miles).",
        lat: 61.52401,
        lng: 105.318756,
        flag: "fi-ru"
    },
    {
        name: "Rwanda",
        fact: "Rwanda is one of the cleanest countries in Africa with a monthly community clean-up day called Umuganda where even the president participates.",
        lat: -1.940278,
        lng: 29.873888,
        flag: "fi-rw"
    },
    {
        name: "Saint Kitts and Nevis",
        fact: "Saint Kitts and Nevis is the smallest country in the Western Hemisphere by both area and population.",
        lat: 17.357822,
        lng: -62.782998,
        flag: "fi-kn"
    },
    {
        name: "Saint Lucia",
        fact: "Saint Lucia is the only country in the world named after a woman - Saint Lucy of Syracuse.",
        lat: 13.909444,
        lng: -60.978893,
        flag: "fi-lc"
    },
    {
        name: "Saint Vincent and the Grenadines",
        fact: "Saint Vincent and the Grenadines was the last Caribbean island to gain independence from Britain (in 1979).",
        lat: 12.984305,
        lng: -61.287228,
        flag: "fi-vc"
    },
    {
        name: "Samoa",
        fact: "Samoa was the first country to see the new day until it moved west of the International Date Line in 2011, becoming the last to see it instead.",
        lat: -13.759029,
        lng: -172.104629,
        flag: "fi-ws"
    },
    {
        name: "San Marino",
        fact: "San Marino is the world's oldest republic, founded in 301 AD, and has the world's smallest army (about 80 soldiers).",
        lat: 43.94236,
        lng: 12.457777,
        flag: "fi-sm"
    },
    {
        name: "Sao Tome and Principe",
        fact: "São Tomé and Príncipe is Africa's second smallest country and was uninhabited until discovered by Portuguese explorers in the 15th century.",
        lat: 0.18636,
        lng: 6.613081,
        flag: "fi-st"
    },
    {
        name: "Saudi Arabia",
        fact: "Saudi Arabia has no rivers and is home to the world's largest sand desert (Rub' al Khali or Empty Quarter).",
        lat: 23.885942,
        lng: 45.079162,
        flag: "fi-sa"
    },
    {
        name: "Senegal",
        fact: "Senegal's Lake Retba (Lac Rose) is pink due to high salt content and is one of the few places in the world where people still harvest salt by hand.",
        lat: 14.497401,
        lng: -14.452362,
        flag: "fi-sn"
    },
    {
        name: "Serbia",
        fact: "Serbia is home to the world's largest gorge (Đerdap) on the Danube River and Europe's largest plain (Vojvodina).",
        lat: 44.016521,
        lng: 21.005859,
        flag: "fi-rs"
    },
    {
        name: "Seychelles",
        fact: "Seychelles has the world's smallest capital city (Victoria) and the heaviest land tortoise (Esmeralda at over 300 kg).",
        lat: -4.679574,
        lng: 55.491977,
        flag: "fi-sc"
    },
    {
        name: "Sierra Leone",
        fact: "Sierra Leone was founded as a home for freed slaves and has the third largest natural harbor in the world.",
        lat: 8.460555,
        lng: -11.779889,
        flag: "fi-sl"
    },
    {
        name: "Singapore",
        fact: "Singapore is one of only three surviving city-states in the world (along with Monaco and Vatican City).",
        lat: 1.352083,
        lng: 103.819836,
        flag: "fi-sg"
    },
    {
        name: "Slovakia",
        fact: "Slovakia has the world's highest number of castles and chateaux per capita with over 180 castles and 425 chateaux.",
        lat: 48.669026,
        lng: 19.699024,
        flag: "fi-sk"
    },
    {
        name: "Slovenia",
        fact: "Slovenia is the only country with 'love' in its name and has over 10,000 caves including the world's largest show cave (Postojna Cave).",
        lat: 46.151241,
        lng: 14.995463,
        flag: "fi-si"
    },
    {
        name: "Solomon Islands",
        fact: "The Solomon Islands are home to the world's largest raised coral atoll (East Rennell) and the most linguistically diverse area (with 70 languages in a population of 50,000).",
        lat: -9.64571,
        lng: 160.156194,
        flag: "fi-sb"
    },
    {
        name: "Somalia",
        fact: "Somalia has the longest coastline on mainland Africa (3,025 km) and is known as the 'Nation of Poets' with poetry being a key part of its culture.",
        lat: 5.152149,
        lng: 46.199616,
        flag: "fi-so"
    },
    {
        name: "South Africa",
        fact: "South Africa is the only country in the world with three capital cities: Pretoria (administrative), Cape Town (legislative), and Bloemfontein (judicial).",
        lat: -30.559482,
        lng: 22.937506,
        flag: "fi-za"
    },
    {
        name: "South Sudan",
        fact: "South Sudan is the world's newest country, gaining independence in 2011, and has the largest animal migration (antelope) after the Serengeti.",
        lat: 6.876991,
        lng: 31.306978,
        flag: "fi-ss"
    },
    {
        name: "Spain",
        fact: "Spain has the world's oldest restaurant still in operation - Sobrino de Botín in Madrid, open since 1725.",
        lat: 40.463667,
        lng: -3.74922,
        flag: "fi-es"
    },
    {
        name: "Sri Lanka",
        fact: "Sri Lanka was the first country in the world to have a female prime minister (Sirimavo Bandaranaike in 1960).",
        lat: 7.873054,
        lng: 80.771797,
        flag: "fi-lk"
    },
    {
        name: "Sudan",
        fact: "Sudan has more pyramids than Egypt with over 200 ancient Nubian pyramids still standing.",
        lat: 12.862807,
        lng: 30.217636,
        flag: "fi-sd"
    },
    {
        name: "Suriname",
        fact: "Suriname is the smallest country in South America and has the highest percentage of forest cover (over 90%).",
        lat: 3.919305,
        lng: -56.027783,
        flag: "fi-sr"
    },
    {
        name: "Sweden",
        fact: "Sweden has the world's largest scale model of the solar system - the Sweden Solar System - spanning the entire country.",
        lat: 60.128161,
        lng: 18.643501,
        flag: "fi-se"
    },
    {
        name: "Switzerland",
        fact: "Switzerland has the world's highest density of bunkers (one for every 1,000 people) and recycles over 90% of its glass and plastic.",
        lat: 46.818188,
        lng: 8.227512,
        flag: "fi-ch"
    },
    {
        name: "Syria",
        fact: "Syria's capital Damascus is the oldest continuously inhabited city in the world, with evidence of settlement dating back to 8,000-10,000 BC.",
        lat: 34.802075,
        lng: 38.996815,
        flag: "fi-sy"
    },
    {
        name: "Taiwan",
        fact: "Taiwan has the world's tallest green building - Taipei 101, which was also the world's tallest building from 2004 to 2010.",
        lat: 23.69781,
        lng: 120.960515,
        flag: "fi-tw"
    },
    {
        name: "Tajikistan",
        fact: "Tajikistan is home to the world's second highest dam (Nurek Dam at 300m) and over 90% of the country is mountainous.",
        lat: 38.861034,
        lng: 71.276093,
        flag: "fi-tj"
    },
    {
        name: "Tanzania",
        fact: "Tanzania is home to Mount Kilimanjaro, Africa's highest peak, and the world's largest intact volcanic caldera (Ngorongoro Crater).",
        lat: -6.369028,
        lng: 34.888822,
        flag: "fi-tz"
    },
    {
        name: "Thailand",
        fact: "Thailand's full name is the longest city name in the world: Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit (169 letters).",
        lat: 15.870032,
        lng: 100.992541,
        flag: "fi-th"
    },
    {
        name: "Togo",
        fact: "Togo is one of the world's largest phosphate producers and has the largest traditional market in West Africa (Grand Marché in Lomé).",
        lat: 8.619543,
        lng: 0.824782,
        flag: "fi-tg"
    },
    {
        name: "Tonga",
        fact: "Tonga is the only Pacific country never colonized by a European power and is the first country to see the new day.",
        lat: -21.178986,
        lng: -175.198242,
        flag: "fi-to"
    },
    {
        name: "Trinidad and Tobago",
        fact: "Trinidad and Tobago is home to the world's largest natural deposit of asphalt - the Pitch Lake - which never dries up.",
        lat: 10.691803,
        lng: -61.222503,
        flag: "fi-tt"
    },
    {
        name: "Tunisia",
        fact: "Tunisia was the setting for the original Star Wars film (as the planet Tatooine) and the sets are still preserved in the desert.",
        lat: 33.886917,
        lng: 9.537499,
        flag: "fi-tn"
    },
    {
        name: "Turkey",
        fact: "Turkey is home to the world's oldest known temple (Göbekli Tepe, built around 10,000 BC) and introduced tulips to the Netherlands.",
        lat: 38.963745,
        lng: 35.243322,
        flag: "fi-tr"
    },
    {
        name: "Turkmenistan",
        fact: "Turkmenistan has the 'Door to Hell' - a gas crater that's been burning continuously since 1971 - and was the first country to ban video games.",
        lat: 38.969719,
        lng: 59.556278,
        flag: "fi-tm"
    },
    {
        name: "Tuvalu",
        fact: "Tuvalu earns about 10% of its GDP from its .tv internet domain and is one of the smallest and most remote countries in the world.",
        lat: -7.109535,
        lng: 177.64933,
        flag: "fi-tv"
    },
    {
        name: "Uganda",
        fact: "Uganda is home to half of the world's remaining mountain gorillas and was called the 'Pearl of Africa' by Winston Churchill.",
        lat: 1.373333,
        lng: 32.290275,
        flag: "fi-ug"
    },
    {
        name: "Ukraine",
        fact: "Ukraine is home to the world's deepest subway station (Arsenalna in Kyiv at 105.5m deep) and the heaviest aircraft ever built (Antonov An-225).",
        lat: 48.379433,
        lng: 31.16558,
        flag: "fi-ua"
    },
    {
        name: "United Arab Emirates",
        fact: "The UAE has the world's tallest building (Burj Khalifa at 828m) and plans to build a city on Mars by 2117.",
        lat: 23.424076,
        lng: 53.847818,
        flag: "fi-ae"
    },
    {
        name: "United Kingdom",
        fact: "The UK has the world's shortest scheduled flight (Westray to Papa Westray in Scotland - just 2.7 km taking 90 seconds).",
        lat: 55.378051,
        lng: -3.435973,
        flag: "fi-gb"
    },
    {
        name: "United States",
        fact: "The US has the world's largest economy and more airports than any other country (over 13,000).",
        lat: 37.09024,
        lng: -95.712891,
        flag: "fi-us"
    },
    {
        name: "Uruguay",
        fact: "Uruguay was the first country in the world to provide a laptop for every primary school student and has the longest national anthem (105 bars of music).",
        lat: -32.522779,
        lng: -55.765835,
        flag: "fi-uy"
    },
    {
        name: "Uzbekistan",
        fact: "Uzbekistan is one of only two doubly landlocked countries in the world (the other is Liechtenstein) and was the center of the ancient Silk Road.",
        lat: 41.377491,
        lng: 64.585262,
        flag: "fi-uz"
    },
    {
        name: "Vanuatu",
        fact: "Vanuatu has the world's most accessible active volcano (Yasur on Tanna Island) and was the filming location for the reality show Survivor.",
        lat: -15.376706,
        lng: 166.959158,
        flag: "fi-vu"
    },
    {
        name: "Vatican City",
        fact: "Vatican City is the world's smallest country by both area and population and has the world's highest crime rate per capita (mostly pickpocketing).",
        lat: 41.902916,
        lng: 12.453389,
        flag: "fi-va"
    },
    {
        name: "Venezuela",
        fact: "Venezuela is home to the world's highest waterfall (Angel Falls at 979m) and has the largest oil reserves.",
        lat: 6.42375,
        lng: -66.58973,
        flag: "fi-ve"
    },
    {
        name: "Vietnam",
        fact: "Vietnam is the world's second largest coffee exporter and has the world's largest cave (Son Doong, big enough to fit a 40-story skyscraper).",
        lat: 14.058324,
        lng: 108.277199,
        flag: "fi-vn"
    },
    {
        name: "Yemen",
        fact: "Yemen's Socotra Island has the most unique flora in the world with over 700 endemic species including the dragon's blood tree.",
        lat: 15.552727,
        lng: 48.516388,
        flag: "fi-ye"
    },
    {
        name: "Zambia",
        fact: "Zambia is home to the world's largest waterfall by volume (Victoria Falls) and was the first country to change its name after independence (from Northern Rhodesia).",
        lat: -13.133897,
        lng: 27.849332,
        flag: "fi-zm"
    },
    {
        name: "Zimbabwe",
        fact: "Zimbabwe has the world's largest man-made lake (Lake Kariba) and the only country besides South Africa to have had hyperinflation in the 21st century.",
        lat: -19.015438,
        lng: 29.154857,
        flag: "fi-zw"
    }
];

// Sort countries alphabetically
countries.sort((a, b) => a.name.localeCompare(b.name));

// Initialize the dropdown menu
function initDropdown() {
    const dropdown = document.getElementById('country-dropdown');
    
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        option.textContent = country.name;
        dropdown.appendChild(option);
    });
    
    dropdown.addEventListener('change', function() {
        const selectedCountry = this.value;
        if (selectedCountry) {
            displayCountry(selectedCountry);
        }
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) return;
        
        const foundCountry = countries.find(country => 
            country.name.toLowerCase().includes(searchTerm)
        );
        
        if (foundCountry) {
            displayCountry(foundCountry.name);
            document.getElementById('country-dropdown').value = foundCountry.name;
        } else {
            alert('Country not found. Please try another search term.');
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Display country information
function displayCountry(countryName) {
    const country = countries.find(c => c.name === countryName);
    if (!country) return;
    
    const countryDisplay = document.getElementById('country-display');
    
    // Create country card HTML
    countryDisplay.innerHTML = `
        <div class="country-card active">
            <div class="country-header">
                <span class="country-flag fi ${country.flag}" aria-label="Flag of ${country.name}"></span>
                <h2 class="country-name">${country.name}</h2>
            </div>
            
            <div class="country-fact">
                <p><strong>Fun Fact:</strong> ${country.fact}</p>
            </div>
            
            <div class="map-container" id="map"></div>
        </div>
    `;
    
    // Initialize map
    initMap(country.lat, country.lng, country.name);
}

// Initialize Leaflet map
function initMap(lat, lng, countryName) {
    const map = L.map('map').setView([lat, lng], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([lat, lng]).addTo(map)
        .bindPopup(countryName)
        .openPopup();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initDropdown();
    initSearch();
});

