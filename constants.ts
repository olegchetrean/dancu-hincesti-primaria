import { ContactInfo, Decision, Announcement, Disposition, StaffMember, AdminLog, CouncilMember, GeographyData, DemographyData, InfrastructureData, HistoryEvent, EconomyData, Institution, Service } from './types';

// ═══════════════════════════════════════════════════════════════════════════════
//                         INFORMAȚII DE CONTACT - SATUL DANCU
// ═══════════════════════════════════════════════════════════════════════════════

export const CONTACT_INFO: ContactInfo = {
  address: "MD-3424, Dancu, Raionul Hîncești, Republica Moldova",
  postalCode: "MD-3424",
  phoneMayor: "0-269-64236",
  phoneSecretary: "0-269-64238",
  email: "danco@hincesti.md",
  emailMayor: "danco@hincesti.md",
  emailSecretary: "danco@hincesti.md",
  schedule: "Luni - Vineri: 09:00 - 16:00",
  audiences: "Program audiențe la primărie",
  coordinates: {
    lat: 46.757792,
    lng: 28.209999
  },
  emergencyPhone: "112",
  distances: {
    chisinau: "76-90 km (1.5-2 ore)",
    hincesti: "43-55 km (1 oră)",
    leuseni: "8 km (10 min)",
    frontieraRomania: "8 km"
  }
};

// Distanțe specifice pentru Dancu
export const DANCU_DISTANCES = {
  leuseni: "8 km (10 min) - PTF Leușeni-Albița",
  hincesti: "43-55 km (1 oră)",
  chisinau: "76-90 km (1.5-2 ore)",
  romania: "8 km până la frontieră"
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         GEOGRAFIE ȘI LOCALIZARE - DANCU
// ═══════════════════════════════════════════════════════════════════════════════

export const GEOGRAPHY_DATA: GeographyData = {
  numeOficial: "Satul Dancu",
  numeCyrillic: "Данку",
  alias: "Ușerești (denumirea istorică)",
  raion: "Hîncești",
  regiune: "Sud-Vest Moldova",
  fusOrar: "UTC+2 (EET), UTC+3 (EEST vara)",

  coordonate: {
    lat: 46.757792,
    lng: 28.209999
  },

  relief: {
    tip: "Colinare, specific zonei Prutului",
    altitudine: "47 m deasupra nivelului mării",
    topografie: "Coline pitorești cu vedere spre valea Prutului",
    sol: "Fertile, propice agriculturii și viticulturii",
    cursuriApa: "Râul Prut (~7 km de mal în hotarul satului)"
  },

  climat: {
    tip: "Continental temperat",
    vara: "Călduroasă (25-32°C)",
    iarna: "Moderată (-3 la -10°C)",
    precipitatii: "500-600 mm/an",
    vanturi: "Moderate din vest"
  },

  peisaj: [
    { emoji: "🏞️", descriere: "Valea pitorească a Prutului" },
    { emoji: "🌲", descriere: "Rezervația Silvică Dancu (131 ha protejați)" },
    { emoji: "🌾", descriere: "Câmpuri agricole și vii" },
    { emoji: "🏖️", descriere: "Plaje naturale: Vad și Ciulinosu" },
    { emoji: "🧀", descriere: "DancuFarm - fabrica de cașcavaluri artizanale" }
  ],

  flora: [
    "Păduri de stejar, frasin, carpen, tei (Rezervația Silvică)",
    "Viță de vie (podgorii locale)",
    "Pomi fructiferi (nuci, pruni, meri)",
    "Vegetație specifică silvo-stepei"
  ],

  fauna: [
    "Mamifere: căprioare, vulpi, iepuri (în rezervație)",
    "Păsări: diverse specii protejate",
    "Fauna acvatică în râul Prut",
    "Animale domestice: vaci (inclusiv rasa Jersey la DancuFarm)"
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         DATE DEMOGRAFICE (RECENSĂMÂNT 2014)
// ═══════════════════════════════════════════════════════════════════════════════

export const DEMOGRAPHY_DATA: DemographyData = {
  populatieTotal: 1206,
  dataRecensament: "2014",
  populatieEstimata2024: 1100,
  gospodarii: 496,

  structuraGen: {
    barbati: { numar: 590, procent: 48.9 },
    femei: { numar: 616, procent: 51.1 }
  },

  structuraVarsta: {
    copii: { interval: "0-14 ani", numar: 220, procent: 18.2 },
    adulti: { interval: "15-64 ani", numar: 780, procent: 64.7 },
    varstnici: { interval: "65+ ani", numar: 206, procent: 17.1 }
  },

  varstaMediana: 38.5,

  componentaEtnica: [
    { etnie: "Moldoveni/Români", numar: 1135, procent: 94.08 },
    { etnie: "Ucraineni", numar: 83, procent: 6.85 },
    { etnie: "Ruși", numar: 3, procent: 0.25 },
    { etnie: "Bulgari", numar: 1, procent: 0.06 }
  ],

  limbaMaterna: [
    { limba: "Română/Moldovenească", procent: 94.1 },
    { limba: "Ucraineană", procent: 5.5 },
    { limba: "Rusă", procent: 0.4 }
  ],

  religie: [
    { confesiune: "Ortodocși", procent: 98.5 },
    { confesiune: "Alții/Nicio religie", procent: 1.5 }
  ],

  educatie: [
    { nivel: "Fără educație", procent: 1.0 },
    { nivel: "Primară (1-4 clase)", procent: 8.0 },
    { nivel: "Gimnazială (5-9 clase)", procent: 35.0 },
    { nivel: "Liceu (10-12 clase)", procent: 40.0 },
    { nivel: "Profesională", procent: 12.0 },
    { nivel: "Superioară", procent: 4.0 }
  ],

  migratie: {
    trend: "Depopulare treptată (-24.9% între 2004-2014)",
    evolutie: "2004: 1.605 → 2014: 1.206",
    diaspora: "~200-300 persoane",
    destinatii: [
      { tara: "Italia", procent: 35, orase: "Îngrijire bătrâni, agricultură" },
      { tara: "Rusia", procent: 25, orase: "Moscova, construcții" },
      { tara: "România", procent: 20, orase: "Acces facil (8 km de frontieră)" },
      { tara: "Franța", procent: 10 },
      { tara: "Germania", procent: 5 },
      { tara: "Altele", procent: 5 }
    ],
    remitente: "~35% din bugetul familiilor primesc bani din diaspora"
  },

  natalitate: {
    nasteriPeAn: "10-15 copii",
    decesePeAn: "15-20 persoane",
    soldNatural: "NEGATIV (-5 la -8 persoane/an)"
  },

  sperantaViata: {
    barbati: 67,
    femei: 74,
    medie: 70
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         INFRASTRUCTURĂ ȘI UTILITĂȚI
// ═══════════════════════════════════════════════════════════════════════════════

export const INFRASTRUCTURE_DATA: InfrastructureData = {
  drumuri: {
    drumPrincipal: "Drum asfaltat de la Leușeni (8 km)",
    stare: "Bună - reabilitat în 2021 (0,5 km cu 1,74 mil lei din FNDRL)",
    lungimeRetea: "~10 km (străzi principale)",
    trotuare: "Parțiale, pe arterele principale",
    iluminatPublic: "Existant, în extindere"
  },

  transportPublic: [
    { ruta: "Dancu → Hîncești", frecventa: "2-3 curse/zi", durata: "~1 oră" },
    { ruta: "Dancu → Leușeni", frecventa: "La cerere", durata: "10 min" },
    { ruta: "Hîncești → Chișinău", frecventa: "Multiple/zi", durata: "~1.5 ore" }
  ],

  apaCanalizare: {
    reteaApa: { acoperire: 0, nota: "NU există apeduct centralizat" },
    apaDinFantani: { acoperire: 100, nota: "Fântâni individuale" },
    canalizare: { acoperire: 0, nota: "Fose septice individuale" },
    faraCanalizare: { acoperire: 100, nota: "Toate gospodăriile" },
    statiiEpurare: "INEXISTENTE"
  },

  energieElectrica: {
    acoperire: 100,
    furnizor: "Premier Energy",
    tensiune: "220V/50Hz",
    intreruperi: "Rare"
  },

  gazNatural: {
    reteaGaz: false,
    incalzire: [
      { tip: "Lemne", procent: 75 },
      { tip: "Cărbune", procent: 15 },
      { tip: "Electric", procent: 10 }
    ],
    gatit: "Butelii GPL, electric, sobă lemne"
  },

  telecomInternet: {
    telefonieFixa: { operator: "Moldtelecom", penetrare: 40 },
    telefonieMobila: [
      { operator: "Moldcell", acoperire: "4G (bună)" },
      { operator: "Orange", acoperire: "4G (bună)" },
      { operator: "Moldtelecom", acoperire: "3G/4G" }
    ],
    internetFix: {
      operator: "Moldtelecom + alții",
      viteza: "10-50 Mbps",
      penetrare: 60
    },
    vitezaMedie: "15-30 Mbps",
    wifiPublic: "La primărie și școală"
  },

  salubritate: {
    colectareGunoi: "Contract cu operator specializat",
    tomberoane: "Puncte de colectare în sat",
    reciclare: "În dezvoltare",
    gropaGunoi: "Eliminată - colectare centralizată"
  },

  cimitir: {
    locatie: "La marginea satului",
    suprafata: "~3 hectare",
    capela: "Existentă"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         PTF LEUȘENI-ALBIȚA - AVANTAJ STRATEGIC
// ═══════════════════════════════════════════════════════════════════════════════

export const PTF_LEUSENI = {
  distanta: "8 km de satul Dancu",
  timpCalatorie: "10 minute cu mașina",
  status: "Punct de Trecere Frontieră INTERNAȚIONAL RUTIER",
  implementareControlCoordonat: "15 aprilie 2023",

  trafic: {
    persoaneAnual: "3.6 milioane (2022)",
    vehiculeAnual: "500.000+",
    program: "24/7/365"
  },

  avantaje: [
    "Oprire unică pe partea română (reducere timp 30-50%)",
    "Acces rapid la România și UE",
    "Export facil produse locale (DancuFarm)",
    "Turism transfrontalier",
    "Oportunități business moldo-române"
  ],

  proiectViitor: "Pod nou cu 4 benzi (aprobat 2025)"
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         ISTORIC COMPLET 1584-2025
// ═══════════════════════════════════════════════════════════════════════════════

export const HISTORY_EVENTS: HistoryEvent[] = [
  {
    year: "1584",
    title: "Prima Atestare Documentară - UȘEREȘTI",
    description: "Satul este menționat documentar pentru prima dată la 5 Mai 1584 sub numele UȘEREȘTI, în timpul domniei lui Petru Vodă. Documentul original în slavonă face referire la satul din ținutul Lăpușnei.",
    period: "Întemeiere",
    important: true
  },
  {
    year: "Sec. XVIII",
    title: "Schimbarea Numelui în DANCU",
    description: "Moșia Ușerești devine proprietatea Mănăstirii Dancu din Iași. Cu timpul, localitatea este numită DANCU după numele mănăstirii proprietare, iar vechea denumire Ușerești este dată treptat uitării.",
    period: "Perioada Medievală",
    important: true
  },
  {
    year: "Mil. II î.Hr.",
    title: "Necropolă din Epoca Bronzului",
    description: "Descoperiri arheologice confirmă existența unui necropol datând din începutul mileniului II î.Hr., dovedind o istorie de locuire în zonă de peste 4000 de ani.",
    period: "Preistorie",
    important: true
  },
  {
    year: "1812",
    title: "Anexarea Basarabiei",
    description: "Prin Tratatul de la București, Basarabia este anexată de Imperiul Rus. Dancu trece sub administrație rusească.",
    period: "Imperiul Rus"
  },
  {
    year: "1918",
    title: "Unirea cu România",
    description: "La 27 martie, Basarabia se unește cu România. Dancu devine parte din România Mare.",
    period: "România Mare",
    important: true
  },
  {
    year: "1940",
    title: "Ocupația Sovietică",
    description: "Prin Pactul Ribbentrop-Molotov, Basarabia este ocupată de URSS. Începe perioada sovietică.",
    period: "Epoca Sovietică"
  },
  {
    year: "1991",
    title: "Independența Moldovei",
    description: "La 27 august, Moldova își declară independența. Dancu devine parte din raionul Hîncești.",
    period: "Independența",
    important: true
  },
  {
    year: "2011",
    title: "Înființarea DancuFarm",
    description: "Dumitru Cravcenco înființează ferma de bovine care va deveni celebra DancuFarm - fabrica de cașcavaluri artizanale.",
    period: "Epoca Modernă",
    important: true
  },
  {
    year: "2013-2014",
    title: "Grădinița Andrieș",
    description: "Este construită grădinița modernă 'Andrieș' cu capacitate de 45 copii.",
    period: "Epoca Modernă"
  },
  {
    year: "2015-2016",
    title: "Lansare Producție Cașcaval",
    description: "DancuFarm lansează producția de cașcaval artizanal după rețete europene (Gouda, Cheddar), devenind rapid un brand recunoscut.",
    period: "Epoca Modernă",
    important: true
  },
  {
    year: "2021",
    title: "Reabilitare Drum și Teren Joacă",
    description: "Proiecte de dezvoltare: 0,5 km drum reabilitat (1,74 mil lei din FNDRL) și teren de joacă modern la grădiniță (800.000 lei, program 'Satul European').",
    period: "Epoca Modernă"
  },
  {
    year: "2023",
    title: "Alegeri Locale - Noul Primar",
    description: "La 5 noiembrie 2023, Iurie GRIGOREȚ (PSDE) este ales primar al satului Dancu, după 16 ani de mandat al lui Vladimir Pretuleac.",
    period: "Epoca Modernă",
    important: true
  },
  {
    year: "2023",
    title: "Control Coordonat PTF Leușeni",
    description: "La 15 aprilie 2023 se implementează controlul coordonat moldo-român la PTF Leușeni-Albița (8 km de Dancu), reducând timpul de trecere cu 30-50%.",
    period: "Epoca Modernă"
  },
  {
    year: "2024",
    title: "Panouri Solare și Brutărie DancuFarm",
    description: "DancuFarm instalează sistem fotovoltaic de 30 kW și deschide brutărie artizanală. Investiții cu sprijin elvețian și PNUD.",
    period: "Epoca Modernă",
    important: true
  },
  {
    year: "2025",
    title: "Vizită Prim-ministru la DancuFarm",
    description: "La 16 Mai 2025, Prim-ministrul Dorin Recean vizitează DancuFarm, recunoscând modelul de afacere socială inovatoare și sustenabilă.",
    period: "Epoca Modernă",
    important: true
  }
];

// Pentru compatibilitate cu codul existent
export const HISTORY_HIGHLIGHTS = HISTORY_EVENTS.filter(e => e.important).map(e => ({
  year: e.year,
  text: e.description
}));

// ═══════════════════════════════════════════════════════════════════════════════
//                         DANCUFARM - AFACERE SOCIALĂ DE SUCCES
// ═══════════════════════════════════════════════════════════════════════════════

export const DANCUFARM_DATA = {
  numeOficial: "Asociația de Caritate Dancu-Tabita / DancuFarm",
  website: "natykrav.wixsite.com/dancufarm",
  fondator: "Dumitru CRAVCENCO",
  manager: "Natalia SIMAȘCO",
  anInfiintare: 2011,
  anLansareCascaval: "2015-2016",

  trainingInternational: [
    "Pennsylvania, SUA - tehnologii americane",
    "Olanda - metode tradiționale (Gouda)",
    "Irlanda - tehnici de maturare",
    "Marea Britanie - școala britanică de cheddar"
  ],

  ferma: {
    efectivTotal: "48-50 vaci lactifere",
    rasaJersey: "21 capete (lapte cu grăsime ridicată 5-6%)",
    alteRase: "27-29 capete mixte"
  },

  productie: {
    lunar: "600-700 kg cașcaval",
    anual: "8-10 tone",
    filosofie: "100% natural, zero aditivi artificiali"
  },

  sortimente: [
    { nume: "Gouda", descriere: "Stil olandez, maturare minim 2 luni, onctuos" },
    { nume: "Cheddar", descriere: "Stil englez, textură fermă, gust intens" },
    { nume: "Geak Clasic", descriere: "Rețetă proprietară, echilibrat, versatil" },
    { nume: "Geak cu Ardei Roșu Picant", descriere: "Gust iute, piper roșu integrat" }
  ],

  tehnologie: [
    "Cheag natural de BIVOL",
    "Maturare în camere frigorifice dedicate",
    "Zero conservanți sau coloranți",
    "Lapte 100% de la ferma proprie"
  ],

  inovatii2024: {
    panourtiFotovoltaice: "30 kW (economie ~180.000 lei/an)",
    brutarie: "Pâine artizanală, patiserie",
    produseNoi: "Smântână, unt de casă"
  },

  distributie: [
    "Chișinău: Supermarket Nr1, Fourchette",
    "Hîncești: Magazine locale",
    "Vânzări directe la fabrică"
  ],

  turism: {
    vizitatori: "~300/an (majoritate străini)",
    servicii: [
      "Tururi ghidate complete (90-120 min)",
      "Degustări toate sortimentele",
      "Workshop-uri interactive",
      "Vizită fermă și camere maturare"
    ],
    rezervari: "Prin primărie: 0-269-64236"
  },

  impactSocial: {
    batrani: "75 familii - 3 prânzuri/săptămână + lapte/pâine sâmbăta",
    studenti: "~30 burse anuale",
    copiiDizabilitati: "Îngrijire și sprijin",
    familiiVulnerabile: "Asistență alimentară și materială"
  },

  parteneri: [
    "Fundația Moldcell",
    "Ambasada Franței în Moldova",
    "Alianța Franceză",
    "Camera de Comerț și Industrie RM"
  ],

  recunoastere: [
    "16 Mai 2025: Vizită Prim-ministru Dorin Recean",
    "Acoperire media națională (TV8, Publika, Moldova 1)"
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         ECONOMIE ȘI AGRICULTURĂ
// ═══════════════════════════════════════════════════════════════════════════════

export const ECONOMY_DATA: EconomyData = {
  sectoare: [
    { sector: "Agricultură", procent: 60 },
    { sector: "Zootehnie/Lactate (DancuFarm)", procent: 20 },
    { sector: "Servicii", procent: 12 },
    { sector: "Comerț", procent: 8 }
  ],

  agricultura: {
    suprafataAgricola: "~1.088 ha (pământ arabil + culturi)",
    terenArabil: "889 ha",
    pasuni: "90 ha",
    viiLivezi: "199 ha",

    culturiPrincipale: [
      { cultura: "Grâu de toamnă", suprafata: 35, randament: "3-4 tone/ha", pret: "3,500-4,500 MDL/tonă" },
      { cultura: "Porumb", suprafata: 30, randament: "4-5 tone/ha", pret: "2,500-3,500 MDL/tonă" },
      { cultura: "Floarea-soarelui", suprafata: 20, randament: "2-2.5 tone/ha", pret: "7,000-9,000 MDL/tonă" },
      { cultura: "Viță de vie", suprafata: 15, randament: "variabil", pret: "piețele locale" }
    ],

    zootehnie: [
      { animal: "Bovine", numar: "200+ capete", nota: "inclusiv 50 la DancuFarm" },
      { animal: "Porcine", numar: "400-500 capete", nota: "gospodării individuale" },
      { animal: "Păsări", numar: "5000+", nota: "găini, rațe, gâște" },
      { animal: "Ovine", numar: "100-150 capete", nota: "creștere extensivă" },
      { animal: "Stupine", numar: "50+", nota: "miere naturală" }
    ],

    mecanizare: {
      tractoare: "20-25 (mix vechi și moderne)",
      combine: "5-7 (folosite cooperativ)",
      probleme: "Necesitate modernizare echipamente"
    }
  },

  agentiEconomici: {
    fermeFamiliale: "375 gospodării țărănești de fermier",
    srlAgricole: "5-7 (DancuFarm principal)",
    magazineAlimentare: 4,
    barCafenea: 2,
    brutarie: 1, // DancuFarm
    farmacie: 0,
    statieBenzina: 0
  },

  venituri: {
    venitMediuGospodarie: "35,000-50,000 MDL/an",
    surse: [
      { sursa: "Agricultură", suma: "15,000-25,000 MDL" },
      { sursa: "Remitențe diaspora", suma: "10,000-15,000 MDL" },
      { sursa: "Salarii locale", suma: "8,000-12,000 MDL" },
      { sursa: "Pensii", suma: "3,000-6,000 MDL" }
    ]
  },

  salarii: [
    { functie: "Primar", salariu: "~12,000 MDL/lună" },
    { functie: "Secretar primărie", salariu: "~8,000 MDL/lună" },
    { functie: "Profesor/Educator", salariu: "8,000-10,000 MDL/lună" },
    { functie: "Asistent medical", salariu: "~7,000 MDL/lună" },
    { functie: "Angajat DancuFarm", salariu: "6,000-9,000 MDL/lună" }
  ],

  pensii: {
    medie: "~2,800 MDL/lună",
    maxima: "~4,500 MDL/lună",
    minima: "~2,000 MDL/lună"
  },

  probleme: [
    "Lipsa apeductului centralizat (100% fântâni)",
    "Lipsa gazeificării",
    "Depopulare (emigrație tineri)",
    "Infrastructură parțial dezvoltată",
    "Lipsa farmacie și stație benzină"
  ],

  oportunitati: [
    "DANCUFARM - model de succes pentru agroturism",
    "Proximitate frontieră România (8 km) - export, turism",
    "Rezervația Silvică (131 ha) - ecoturism",
    "Plaje naturale pe Prut",
    "Potențial viticol neexploatat"
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         INSTITUȚII PUBLICE
// ═══════════════════════════════════════════════════════════════════════════════

export const INSTITUTIONS: Institution[] = [
  {
    id: "primaria",
    nume: "Primăria Satului Dancu",
    tip: "Administrație publică locală",
    adresa: "MD-3424, Dancu, Raionul Hîncești",
    telefon: "0-269-64236",
    email: "danco@hincesti.md",
    program: "Luni-Vineri: 09:00-16:00",
    descriere: "Autoritatea administrației publice locale care gestionează treburile publice ale satului Dancu.",
    personal: 5
  },
  {
    id: "gimnaziu",
    nume: "Gimnaziul Dancu",
    tip: "Instituție de învățământ",
    adresa: "Dancu, Raionul Hîncești",
    telefon: "0-269-64389",
    descriere: "Instituție de învățământ primar și gimnazial. Director: Nivireanschi Vasile Petru. 14 pedagogi, ~220 elevi (93 primar + 127 gimnaziu).",
    personal: 30,
    detalii: {
      elevi: "~220 (în scădere ușoară)",
      limbiPredare: "Română",
      director: "Nivireanschi Vasile Petru",
      monument: "Monument 'Eroii căzuți pentru Apărarea Patriei' în curte"
    }
  },
  {
    id: "gradinita",
    nume: "Grădinița 'Andrieș'",
    tip: "Instituție de învățământ",
    adresa: "Dancu, Raionul Hîncești",
    telefon: "0-269-64349",
    descriere: "Grădiniță modernă construită în 2013-2014. Capacitate 45 copii. Șef: Rachiu Lilia. Teren de joacă modern instalat în 2021.",
    personal: 8,
    detalii: {
      capacitate: "45 copii",
      sef: "Rachiu Lilia",
      renovari: "Teren joacă modern (2021, 800.000 lei, 'Satul European')"
    }
  },
  {
    id: "punct-medical",
    nume: "Punctul Medical Dancu",
    tip: "Instituție medicală",
    adresa: "Dancu, Raionul Hîncești",
    telefon: "0-269-64403",
    descriere: "Oferă servicii medicale de bază: consultații, vaccinări, prim ajutor. Personal: 1 asistent medical, 1 infirmieră.",
    personal: 3,
    detalii: {
      personal: "1 asistent medical + 1 infirmieră + 1 paznic",
      urgente: "Ambulanță din Hîncești (43-55 km)",
      spital: "Spitalul Raional Hîncești"
    }
  },
  {
    id: "casa-cultura",
    nume: "Casa de Cultură Dancu",
    tip: "Instituție culturală",
    adresa: "Dancu, centru",
    descriere: "Centrul cultural al satului. Director: Robu Sergiu. Găzduiește evenimente culturale, sărbători, spectacole.",
    personal: 2,
    detalii: {
      director: "Robu Sergiu",
      activitati: [
        "Sărbători religioase și naționale",
        "Spectacole și concerte",
        "Ședințe consiliu local",
        "Evenimente comunitare"
      ]
    }
  },
  {
    id: "biblioteca",
    nume: "Biblioteca Publică Dancu",
    tip: "Instituție culturală",
    adresa: "Dancu",
    program: "Luni-Vineri 09:00-17:00",
    descriere: "Bibliotecă publică cu fond de carte diversificat. Șef: Gosav Maria Pavel. Servicii de împrumut, lectură copii, evenimente literare.",
    personal: 1,
    detalii: {
      sef: "Gosav Maria Pavel",
      servicii: "Împrumut cărți, lectură copii, evenimente literare"
    }
  },
  {
    id: "dancufarm",
    nume: "DancuFarm - Fabrica de Cașcavaluri",
    tip: "Afacere socială",
    adresa: "Dancu, Raionul Hîncești",
    descriere: "CEA MAI IMPORTANTĂ AFACERE DIN SAT! Producție de cașcavaluri artizanale (Gouda, Cheddar, Geak), turism educațional, impact social major. ~300 vizitatori/an.",
    personal: 15,
    detalii: {
      website: "natykrav.wixsite.com/dancufarm",
      fondator: "Dumitru Cravcenco",
      manager: "Natalia Simașco",
      produse: "Gouda, Cheddar, Geak Clasic, Geak Picant",
      turism: "~300 vizitatori/an, tururi ghidate, degustări"
    }
  },
  {
    id: "rezervatia",
    nume: "Rezervația Silvică Dancu",
    tip: "Arie naturală protejată",
    descriere: "131 hectare de pădure protejată de stat (Categorie IV IUCN). Păduri de stejar, frasin, carpen, tei. Administrare: Gospodăria Silvică de Stat Hîncești.",
    detalii: {
      suprafata: "131 hectare",
      status: "Arie Naturală Protejată de Stat",
      categorieIUCN: "IV",
      specii: "Stejar, frasin, carpen, tei",
      activitatiPermise: "Plimbări, fotografiere, cercetări științifice",
      interzis: "Tăiere arbori, vânătoare, focuri, deșeuri"
    }
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         CONDUCEREA ȘI PERSONALUL
// ═══════════════════════════════════════════════════════════════════════════════

export const STAFF: StaffMember[] = [
  {
    id: "mayor",
    name: "Iurie GRIGOREȚ",
    role: "Primar",
    phone: "0-269-64236",
    email: "danco@hincesti.md",
    image: "https://picsum.photos/200/200?random=mayor",
    bio: "Ales primar la 5 noiembrie 2023 pe listele PSDE. Conduce satul Dancu cu viziune pentru dezvoltare și transparență. Preia mandatul după 16 ani de conducere a predecesorului.",
    partid: "PSDE",
    mandatStart: "2023",
    mandatEnd: "2027"
  },
  {
    id: "secretary",
    name: "Secretar Consiliu Local",
    role: "Secretarul Consiliului Local",
    phone: "0-269-64238",
    email: "danco@hincesti.md",
    image: "https://picsum.photos/200/200?random=secretary",
    bio: "Asigură funcționarea zilnică a primăriei și legătura cu cetățenii. Responsabil de documentația oficială și evidența actelor."
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         CONSILIUL LOCAL (2023-2027)
// ═══════════════════════════════════════════════════════════════════════════════

export const COUNCIL_MEMBERS: CouncilMember[] = [
  { id: "c1", name: "Consilier 1", partid: "PSDE", functie: "Consilier" },
  { id: "c2", name: "Consilier 2", partid: "PSDE", functie: "Consilier" },
  { id: "c3", name: "Consilier 3", partid: "PSDE", functie: "Consilier" },
  { id: "c4", name: "Consilier 4", partid: "PSDE", functie: "Consilier" },
  { id: "c5", name: "Consilier 5", partid: "PSDE", functie: "Consilier" },
  { id: "c6", name: "Consilier 6", partid: "PAS", functie: "Consilier" },
  { id: "c7", name: "Consilier 7", partid: "PAS", functie: "Consilier" },
  { id: "c8", name: "Consilier 8", partid: "PAS", functie: "Consilier" },
  { id: "c9", name: "Consilier 9", partid: "PAS", functie: "Consilier" }
];

export const COUNCIL_COMPOSITION = [
  { partid: "PSDE", mandate: 5, procent: 55.6, culoare: "#3498db" },
  { partid: "PAS", mandate: 4, procent: 44.4, culoare: "#FFD700" }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         SERVICII PUBLICE
// ═══════════════════════════════════════════════════════════════════════════════

export const SERVICES: Service[] = [
  {
    id: "acte",
    icon: "FileText",
    titlu: "Acte și Certificate",
    descriere: "Eliberare certificate de urbanism, componență familie, titluri de proprietate.",
    documente: ["Certificat de urbanism", "Certificat de componență a familiei", "Extras din registrul agricol"],
    program: "Luni-Vineri 09:00-16:00",
    taxe: true
  },
  {
    id: "social",
    icon: "Users",
    titlu: "Asistență Socială",
    descriere: "Suport pentru persoane vârstnice, ajutor social, compensații pentru perioada rece.",
    documente: ["Cerere ajutor social", "Compensații BASS"],
    program: "Luni-Vineri 09:00-16:00"
  },
  {
    id: "funciar",
    icon: "Home",
    titlu: "Fond Funciar",
    descriere: "Înregistrare contracte arendă, modificări titluri, cadastru.",
    documente: ["Contract de arendă", "Certificat de proprietate", "Extras cadastral"],
    program: "Luni-Vineri 09:00-16:00",
    taxe: true
  },
  {
    id: "salubritate",
    icon: "Truck",
    titlu: "Salubritate",
    descriere: "Gestionare deșeuri, iluminat stradal, întreținere drumuri locale.",
    program: "Permanent"
  },
  {
    id: "stare-civila",
    icon: "Heart",
    titlu: "Stare Civilă",
    descriere: "Înregistrare nașteri, căsătorii, decese. Certificate duplicate.",
    documente: ["Certificat naștere", "Certificat căsătorie", "Certificat deces"],
    program: "Luni-Vineri 09:00-16:00",
    linkExtern: "https://servicii.gov.md"
  },
  {
    id: "autorizatii",
    icon: "FileCheck",
    titlu: "Autorizații și Avize",
    descriere: "Autorizații de construcție, avize pentru activități comerciale.",
    documente: ["Autorizație de construire", "Aviz activitate comercială"],
    program: "Luni-Vineri 09:00-16:00",
    taxe: true
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         EVENIMENTE CULTURALE
// ═══════════════════════════════════════════════════════════════════════════════

export const CULTURAL_EVENTS = [
  {
    id: "hram",
    nume: "Hramul Satului",
    data: "Toamnă (după calendar bisericesc)",
    descriere: "Principala sărbătoare a satului. Liturghie specială, procesiune religioasă, masă comună, muzică populară și dansuri tradiționale.",
    traditie: true
  },
  {
    id: "dancufarm-tour",
    nume: "Tururi DancuFarm",
    data: "Tot anul (cu programare)",
    descriere: "Turism educațional la fabrica de cașcavaluri: vizită fermă, proces producție, degustări, workshop-uri. ~300 vizitatori/an.",
    traditie: false
  },
  {
    id: "ziua-independentei",
    nume: "Ziua Independenței",
    data: "27 august",
    descriere: "Sărbătoare națională cu evenimente în centrul satului.",
    traditie: false
  },
  {
    id: "craciun",
    nume: "Crăciunul",
    data: "25 decembrie / 7 ianuarie",
    descriere: "Sărbătoare religioasă cu colinde tradiționale.",
    traditie: true
  },
  {
    id: "paste",
    nume: "Paștele",
    data: "Primăvară (după calendar ortodox)",
    descriere: "Cea mai importantă sărbătoare religioasă. Liturghie, tradițiile pascale.",
    traditie: true
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         BUGET LOCAL
// ═══════════════════════════════════════════════════════════════════════════════

export const BUDGET_DATA = {
  an: 2025,
  total: 4500000, // MDL
  moneda: "MDL",

  venituri: [
    { categorie: "Impozite și taxe locale", suma: 1000000, procent: 22 },
    { categorie: "Transferuri de la bugetul de stat", suma: 2500000, procent: 56 },
    { categorie: "Venituri proprii", suma: 600000, procent: 13 },
    { categorie: "Alte venituri", suma: 400000, procent: 9 }
  ],

  cheltuieli: [
    { categorie: "Administrație publică", suma: 800000, procent: 18 },
    { categorie: "Învățământ", suma: 1500000, procent: 33 },
    { categorie: "Cultură", suma: 400000, procent: 9 },
    { categorie: "Infrastructură", suma: 1200000, procent: 27 },
    { categorie: "Asistență socială", suma: 400000, procent: 9 },
    { categorie: "Rezervă", suma: 200000, procent: 4 }
  ],

  proiecte: [
    { nume: "Întreținere drumuri locale", suma: 500000, status: "în execuție" },
    { nume: "Extindere iluminat public", suma: 300000, status: "planificat" },
    { nume: "Dotări școală și grădiniță", suma: 400000, status: "în execuție" }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         DECIZII ȘI DISPOZIȚII (MOCK DATA)
// ═══════════════════════════════════════════════════════════════════════════════

export const LATEST_DECISIONS: Decision[] = [
  {
    id: "dec-24",
    numar: "24",
    data_emitere: "2024-11-30",
    titlu: "Cu privire la aprobarea bugetului local pentru anul 2025",
    descriere: "Consiliul Local aprobă bugetul local pentru anul 2025 în sumă totală de 4.500.000 MDL, conform anexelor la prezenta decizie.",
    tip: "normativ",
    document_pdf: "/documents/decizii/decizie_24_2024.pdf",
    publicat_rsal: true,
    status: "Adoptat"
  },
  {
    id: "dec-23",
    numar: "23",
    data_emitere: "2024-11-15",
    titlu: "Cu privire la aprobarea planului de activitate pentru 2025",
    descriere: "Se aprobă planul de activitate al primăriei pentru anul 2025.",
    tip: "normativ",
    document_pdf: "/documents/decizii/decizie_23_2024.pdf",
    publicat_rsal: true,
    status: "Adoptat"
  },
  {
    id: "dec-22",
    numar: "22",
    data_emitere: "2024-10-20",
    titlu: "Cu privire la aprobarea Planului de achiziții pentru anul 2025",
    descriere: "Se aprobă Planul anual de achiziții publice pentru anul 2025 conform anexei.",
    tip: "normativ",
    document_pdf: "/documents/decizii/decizie_22_2024.pdf",
    publicat_rsal: true,
    status: "Adoptat"
  },
  {
    id: "dec-21",
    numar: "21",
    data_emitere: "2024-09-25",
    titlu: "Cu privire la întreținerea drumurilor locale",
    descriere: "Se alocă suma de 500.000 MDL pentru întreținerea drumurilor locale în anul 2025.",
    tip: "normativ",
    document_pdf: "/documents/decizii/decizie_21_2024.pdf",
    publicat_rsal: true,
    status: "Adoptat"
  }
];

export const LATEST_DISPOSITIONS: Disposition[] = [
  {
    id: "disp-45",
    numar: "45",
    data_emitere: "2024-12-05",
    titlu: "Cu privire la programul de lucru pentru sărbătorile de iarnă",
    descriere: "Se aprobă graficul de funcționare a primăriei în perioada sărbătorilor de iarnă 2024-2025.",
    tip: "normativ",
    document_pdf: "/documents/dispozitii/dispozitie_45_2024.pdf",
    depersonalizat: false,
    publicat_rsal: true
  },
  {
    id: "disp-44",
    numar: "44",
    data_emitere: "2024-11-28",
    titlu: "Cu privire la convocarea ședinței Consiliului Local",
    descriere: "Se convoacă ședința ordinară a Consiliului Local pentru data de 15 decembrie 2024.",
    tip: "normativ",
    document_pdf: "/documents/dispozitii/dispozitie_44_2024.pdf",
    depersonalizat: false,
    publicat_rsal: true
  },
  {
    id: "disp-43",
    numar: "43",
    data_emitere: "2024-11-15",
    titlu: "Cu privire la constituirea comisiei de inventariere",
    descriere: "Se constituie comisia de inventariere a bunurilor primăriei pentru anul 2024.",
    tip: "normativ",
    document_pdf: "/documents/dispozitii/dispozitie_43_2024.pdf",
    depersonalizat: false,
    publicat_rsal: true
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         ANUNȚURI
// ═══════════════════════════════════════════════════════════════════════════════

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "news-1",
    titlu: "Vizitați DancuFarm - Fabrica de Cașcavaluri Artizanale",
    categorie: "eveniment",
    data_publicare: "2024-12-11",
    continut: "Vă invităm să descoperiți DancuFarm, mândria satului nostru! Tururi ghidate, degustări de cașcaval Gouda, Cheddar și Geak, vizită la fermă. Rezervări la primărie: 0-269-64236.",
    continut_scurt: "Vă invităm să descoperiți DancuFarm, mândria satului nostru! Tururi ghidate, degustări...",
    prioritate: true,
    views: 320
  },
  {
    id: "news-2",
    titlu: "Ședința Consiliului Local - 15 decembrie 2024",
    categorie: "sedinta",
    data_publicare: "2024-12-10",
    continut: "Consiliul Local al satului Dancu vă invită la ședința ordinară care va avea loc pe data de 15 decembrie 2024, ora 15:00, în sala de ședințe a Primăriei.",
    continut_scurt: "Consiliul Local al satului Dancu vă invită la ședința ordinară...",
    prioritate: true,
    views: 85
  },
  {
    id: "news-3",
    titlu: "La 8 km de România - Avantajul Strategic al Satului Dancu",
    categorie: "info",
    data_publicare: "2024-12-05",
    continut: "Satul Dancu se află la doar 8 km de Punctul de Trecere a Frontierei Leușeni-Albița. Cu controlul coordonat implementat în aprilie 2023, timpul de trecere s-a redus cu 30-50%.",
    continut_scurt: "Satul Dancu se află la doar 8 km de frontiera cu România...",
    prioritate: true,
    views: 150
  },
  {
    id: "news-4",
    titlu: "Rezervația Silvică Dancu - 131 hectare protejate",
    categorie: "info",
    data_publicare: "2024-12-01",
    continut: "Descoperă comoara verde a satului nostru: Rezervația Silvică Dancu, 131 hectare de pădure protejată de stat. Trasee pentru plimbări, biodiversitate unică, educație ecologică.",
    continut_scurt: "Descoperă comoara verde a satului: 131 hectare de pădure protejată...",
    imagine_url: "https://picsum.photos/800/400?random=forest",
    prioritate: false,
    views: 180
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         LINK-URI UTILE (HG 728/2023)
// ═══════════════════════════════════════════════════════════════════════════════

export const USEFUL_LINKS = [
  {
    categorie: "Registre de Stat",
    links: [
      { nume: "RSAL - Registrul de Stat al Actelor Locale", url: "https://actelocale.gov.md", descriere: "Decizii și dispoziții publicate" },
      { nume: "Registrul de Stat", url: "https://asp.gov.md", descriere: "Agenția Servicii Publice" }
    ]
  },
  {
    categorie: "Servicii Electronice",
    links: [
      { nume: "Servicii.gov.md", url: "https://servicii.gov.md", descriere: "Portalul serviciilor publice" },
      { nume: "MTender", url: "https://mtender.gov.md", descriere: "Achiziții publice" },
      { nume: "Particip.gov.md", url: "https://particip.gov.md", descriere: "Consultări publice" }
    ]
  },
  {
    categorie: "Autorități",
    links: [
      { nume: "Consiliul Raional Hîncești", url: "https://hincesti.md", descriere: "Administrația raională" },
      { nume: "Guvernul Republicii Moldova", url: "https://gov.md", descriere: "Portal guvernamental" },
      { nume: "DancuFarm", url: "https://natykrav.wixsite.com/dancufarm", descriere: "Fabrica de cașcavaluri artizanale" }
    ]
  },
  {
    categorie: "Urgențe",
    links: [
      { nume: "112 - Număr unic de urgență", url: "tel:112", descriere: "Ambulanță, Pompieri, Poliție" },
      { nume: "Poliție Sector Dancu", url: "tel:0-269-64338", descriere: "Poliție locală" }
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         ADMIN LOGS (MOCK)
// ═══════════════════════════════════════════════════════════════════════════════

export const MOCK_LOGS: AdminLog[] = [
  { id: 1, user: "Admin", action: "login_success", details: "Autentificare cu succes", timestamp: "2024-12-11 08:30:00", ip: "192.168.1.5" },
  { id: 2, user: "Admin", action: "create_anunt", details: "Publicat anunț: DancuFarm", timestamp: "2024-12-11 08:45:12", ip: "192.168.1.5" },
  { id: 3, user: "Admin", action: "create_decizie", details: "Publicat decizia nr. 24/2024", timestamp: "2024-12-10 14:20:00", ip: "192.168.1.5" },
  { id: 4, user: "System", action: "backup_db", details: "Backup automat baza de date", timestamp: "2024-12-11 00:00:00", ip: "System" }
];

// ═══════════════════════════════════════════════════════════════════════════════
//                         SIMBOLURI OFICIALE
// ═══════════════════════════════════════════════════════════════════════════════

export const OFFICIAL_SYMBOLS = {
  stema: {
    aprobare: "Conform legislației în vigoare",
    descriere: "Stema satului Dancu reflectă istoria, natura și tradițiile comunității.",
    culori: ["Verde (pădure)", "Albastru (Prutul)", "Auriu (câmpuri)"],
    semnificatie: "Tradiție, natură, prosperitate"
  },
  drapel: {
    aprobare: "Conform legislației în vigoare",
    descriere: "Drapelul satului reflectă culorile și simbolurile stemei.",
    culori: ["Verde", "Albastru", "Auriu"]
  },
  motto: "Dancu - Poarta Moldovei către România | 441 de ani de istorie (1584-2025)"
};

// ═══════════════════════════════════════════════════════════════════════════════
//                         NUMERE UTILE DANCU
// ═══════════════════════════════════════════════════════════════════════════════

export const NUMERE_UTILE = {
  institutii: {
    primarie: "0-269-64236",
    primarieSecretar: "0-269-64238",
    contabilitate: "0-269-64448",
    gimnaziu: "0-269-64389",
    gimnaziuCancelarie: "0-269-64463",
    gradinita: "0-269-64349",
    punctMedical: "0-269-64403",
    politieSector: "0-269-64338",
    posta: "0-269-92671"
  },
  urgente: {
    unicUrgenta: "112",
    pompieri: "901",
    politie: "902",
    salvare: "903"
  },
  online: {
    emailPrimarie: "danco@hincesti.md",
    dancufarm: "natykrav.wixsite.com/dancufarm"
  }
};
