import React, { useState } from 'react';
import { HISTORY_EVENTS, OFFICIAL_SYMBOLS } from '../constants';
import { Clock, Flag, Award, ChevronDown, ChevronUp, BookOpen, MapPin, Calendar } from 'lucide-react';

interface Props {
  highContrast: boolean;
}

const PERIOD_COLORS: Record<string, string> = {
  'Preistorie': '#8B4513',
  'Întemeiere': '#8B4513',
  'Perioada Medievală': '#6B4423',
  'Imperiul Rus': '#4A90D9',
  'România Mare': '#FFD700',
  'Epoca Sovietică': '#C41E3A',
  'Independența': '#3498db',
  'Epoca Modernă': '#27ae60'
};

export const History: React.FC<Props> = ({ highContrast }) => {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);

  const cardClass = `rounded-xl p-6 ${highContrast ? 'bg-gray-900 border border-yellow-400 text-white' : 'bg-white shadow-soft'}`;
  const textClass = highContrast ? 'text-gray-300' : 'text-moldova-steel';

  // Group events by period
  const eventsByPeriod = HISTORY_EVENTS.reduce((acc, event) => {
    if (!acc[event.period]) {
      acc[event.period] = [];
    }
    acc[event.period].push(event);
    return acc;
  }, {} as Record<string, typeof HISTORY_EVENTS>);

  const periods = Object.keys(eventsByPeriod);

  return (
    <div className={`min-h-screen ${highContrast ? 'bg-black' : 'bg-moldova-cloud'}`}>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://picsum.photos/1920/800?random=historic"
          alt="Istorie Dancu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Istoric și Identitate</h1>
            <p className="text-2xl opacity-90 mb-4">
              Dancu: <span className="text-yellow-400 font-bold">441 de ani</span> de istorie documentată
            </p>
            <p className="text-lg opacity-80">
              De la prima atestare documentară în 1584 (sub numele Ușerești) până în prezent - un sat mândru de rădăcinile sale.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">

        {/* Document Istoric Section - Featured */}
        <section className={`rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row ${highContrast ? 'bg-gray-900 border-2 border-yellow-400' : 'bg-white'}`}>
          <div className="md:w-1/2 relative min-h-[400px]">
            <img
              src="https://picsum.photos/800/800?random=document"
              alt="Document Istoric 1584"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="bg-amber-600 px-3 py-1 text-xs font-bold uppercase rounded mb-2 inline-block">
                  Prima Atestare Documentară
                </span>
                <h3 className="text-2xl font-bold">5 Mai 1584 - UȘEREȘTI</h3>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className={`text-3xl font-bold mb-6 ${highContrast ? 'text-white' : 'text-green-700'}`}>
              <BookOpen className="inline mr-2" /> Originea Numelui Dancu
            </h2>
            <p className={`mb-4 leading-relaxed ${textClass}`}>
              Satul este atestat documentar pentru prima dată la <strong>5 Mai 1584</strong> sub numele
              <strong> UȘEREȘTI</strong>, în timpul domniei lui Petru Vodă, în ținutul Lăpușnei.
            </p>
            <p className={`mb-4 leading-relaxed ${textClass}`}>
              În <strong>secolul al XVIII-lea</strong>, moșia Ușerești devine proprietatea
              <strong> Mănăstirii Dancu</strong> din Iași (ctitorită în 1541 de boierul Jurie Dancu).
            </p>
            <p className={`mb-6 leading-relaxed ${textClass}`}>
              Cu timpul, localitatea capătă numele <strong>DANCU</strong> după mănăstirea proprietară,
              iar vechea denumire Ușerești este dată treptat uitării.
            </p>
            <div className={`p-4 rounded-lg border-l-4 ${highContrast ? 'bg-gray-800 border-amber-400' : 'bg-amber-50 border-amber-500'}`}>
              <p className="font-serif italic text-sm">
                "Înștiințare facem prin aciasta carte a noastră... pe satul Ușereștii, în ținutul Lăpușnei..."
              </p>
              <p className="text-xs mt-2 opacity-70">— Fragment din documentul original, 1584</p>
            </div>
          </div>
        </section>

        {/* DancuFarm & Impact Modern */}
        <section className={`rounded-3xl overflow-hidden ${highContrast ? 'bg-gray-900 border-2 border-amber-500' : 'bg-gradient-to-r from-amber-50 to-orange-50'}`}>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🧀</span>
              <div>
                <h2 className={`text-3xl font-bold ${highContrast ? 'text-amber-400' : 'text-amber-700'}`}>
                  DancuFarm - Renașterea Economică
                </h2>
                <p className={textClass}>2011-prezent: Cea mai mare poveste de succes a satului</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className={`mb-4 ${textClass}`}>
                  În <strong>2011</strong>, Dumitru Cravcenco înființează ferma de bovine care va deveni
                  celebra <strong>DancuFarm</strong> - fabrica de cașcavaluri artizanale după rețete europene.
                </p>
                <p className={`mb-4 ${textClass}`}>
                  Cu training internațional în <strong>SUA, Olanda, Irlanda și Marea Britanie</strong>,
                  DancuFarm produce acum 4 sortimente de cașcaval (Gouda, Cheddar, Geak) - 100% natural.
                </p>
                <p className={textClass}>
                  La <strong>16 Mai 2025</strong>, Prim-ministrul Dorin Recean a vizitat fabrica,
                  recunoscând modelul de afacere socială inovatoare.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${highContrast ? 'bg-gray-800' : 'bg-white'}`}>
                <h4 className="font-bold mb-4">Impact Social DancuFarm:</h4>
                <ul className={`space-y-2 ${textClass}`}>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    75 familii de bătrâni - prânz cald 3x/săptămână
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    ~30 studenți cu burse anuale
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    ~300 vizitatori/an (turism educațional)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Panouri solare 30 kW (2024)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Simboluri Oficiale */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-3 rounded-full ${highContrast ? 'bg-yellow-400 text-black' : 'bg-green-600 text-white'}`}>
              <Flag size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${highContrast ? 'text-yellow-400' : 'text-moldova-charcoal'}`}>
              Simboluri Oficiale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stema */}
            <div className={cardClass}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-amber-500" size={32} />
                <h3 className={`text-2xl font-bold ${highContrast ? 'text-white' : 'text-moldova-charcoal'}`}>
                  Stema Satului
                </h3>
              </div>
              <p className={`mb-4 ${textClass}`}>{OFFICIAL_SYMBOLS.stema.descriere}</p>
              <div className="flex gap-2 mb-4">
                {OFFICIAL_SYMBOLS.stema.culori.map((culoare, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm ${idx === 0 ? 'bg-green-100 text-green-700' :
                        idx === 1 ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                      }`}
                  >
                    {culoare}
                  </span>
                ))}
              </div>
              <p className={`text-sm ${textClass}`}>
                <strong>Semnificație:</strong> {OFFICIAL_SYMBOLS.stema.semnificatie}
              </p>
            </div>

            {/* Drapel */}
            <div className={cardClass}>
              <div className="flex items-center gap-3 mb-4">
                <Flag className="text-green-600" size={32} />
                <h3 className={`text-2xl font-bold ${highContrast ? 'text-white' : 'text-moldova-charcoal'}`}>
                  Drapelul Satului
                </h3>
              </div>
              <p className={`mb-4 ${textClass}`}>{OFFICIAL_SYMBOLS.drapel.descriere}</p>
              <div className="flex gap-2 mb-4">
                {OFFICIAL_SYMBOLS.drapel.culori.map((culoare, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm ${idx === 0 ? 'bg-green-100 text-green-700' :
                        idx === 1 ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                      }`}
                  >
                    {culoare}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Motto */}
          <div className={`${cardClass} mt-6 text-center`}>
            <p className={`text-2xl font-serif italic ${highContrast ? 'text-yellow-400' : 'text-green-700'}`}>
              "{OFFICIAL_SYMBOLS.motto}"
            </p>
          </div>
        </section>

        {/* Timeline by Period */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-3 rounded-full ${highContrast ? 'bg-yellow-400 text-black' : 'bg-amber-500 text-white'}`}>
              <Clock size={24} />
            </div>
            <h2 className={`text-3xl font-bold ${highContrast ? 'text-yellow-400' : 'text-moldova-charcoal'}`}>
              Cronologia Localității (1584-2025)
            </h2>
          </div>

          {/* Period Legend */}
          <div className="flex flex-wrap gap-3 mb-8">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setExpandedPeriod(expandedPeriod === period ? null : period)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${expandedPeriod === period
                    ? 'ring-2 ring-offset-2 ring-gray-400'
                    : 'hover:opacity-80'
                  }`}
                style={{
                  backgroundColor: PERIOD_COLORS[period] || '#666',
                  color: ['România Mare', 'Epoca Modernă'].includes(period) ? '#000' : '#fff'
                }}
              >
                {period} ({eventsByPeriod[period].length})
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 ${highContrast ? 'bg-yellow-400' : 'bg-gray-300'}`} />

            {/* Events */}
            <div className="space-y-8">
              {HISTORY_EVENTS.map((event, idx) => {
                const isExpanded = expandedPeriod === null || expandedPeriod === event.period;
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`relative transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-30 scale-95'}`}
                  >
                    {/* Year Marker */}
                    <div
                      className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full border-4 border-white transform md:-translate-x-1/2 z-10 flex items-center justify-center text-xs font-bold text-white`}
                      style={{ backgroundColor: PERIOD_COLORS[event.period] || '#666' }}
                    >
                      {event.important && '★'}
                    </div>

                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 ${isLeft ? 'md:mr-[52%] md:pr-8' : 'md:ml-[52%] md:pl-8'}`}>
                      <div
                        className={`${cardClass} ${event.important ? 'ring-2 ring-amber-400' : ''}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span
                            className="text-sm font-bold px-2 py-1 rounded"
                            style={{
                              backgroundColor: PERIOD_COLORS[event.period] || '#666',
                              color: ['România Mare', 'Epoca Modernă'].includes(event.period) ? '#000' : '#fff'
                            }}
                          >
                            {event.year}
                          </span>
                          <span className={`text-xs ${textClass}`}>{event.period}</span>
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${highContrast ? 'text-white' : 'text-moldova-charcoal'}`}>
                          {event.title}
                        </h3>
                        <p className={textClass}>{event.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`${cardClass} text-center`}>
            <p className={`text-4xl font-bold ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>441</p>
            <p className={textClass}>Ani de istorie</p>
          </div>
          <div className={`${cardClass} text-center`}>
            <p className={`text-4xl font-bold ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>1584</p>
            <p className={textClass}>Prima atestare</p>
          </div>
          <div className={`${cardClass} text-center`}>
            <p className={`text-4xl font-bold ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>8 km</p>
            <p className={textClass}>Până în România</p>
          </div>
          <div className={`${cardClass} text-center`}>
            <p className={`text-4xl font-bold ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>131 ha</p>
            <p className={textClass}>Pădure protejată</p>
          </div>
        </section>

        {/* Descoperiri Arheologice */}
        <section className={`${cardClass} border-l-4 border-amber-600`}>
          <h2 className={`text-2xl font-bold mb-4 ${highContrast ? 'text-yellow-400' : 'text-moldova-charcoal'}`}>
            Descoperiri Arheologice - Necropolă Epoca Bronzului
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className={`mb-4 leading-relaxed ${textClass}`}>
                Lângă satul actual Dancu a fost descoperită o <strong>necropolă</strong> datând din
                <strong> începutul epocii bronzului</strong> (mileniul II î.Hr.).
              </p>
              <p className={`mb-4 leading-relaxed ${textClass}`}>
                Această descoperire demonstrează că zona a fost locuită <strong>de peste 4000 de ani</strong>,
                mult înainte de prima atestare documentară din 1584.
              </p>
              <p className={textClass}>
                Situl arheologic confirmă importanța strategică a văii Prutului ca zonă de locuire și
                tranzit încă din cele mai vechi timpuri.
              </p>
            </div>
            <div className={`p-6 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-amber-50'}`}>
              <p className="text-center font-serif text-lg italic mb-4">
                "O istorie de peste 4000 de ani"
              </p>
              <p className="text-center font-bold text-xl">Mileniul II î.Hr.</p>
              <div className="mt-4 text-center">
                <span className={`text-sm ${textClass}`}>
                  Necropolă descoperită lângă satul Dancu
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mănăstirea Dancu din Iași */}
        <section className={`${cardClass} border-l-4 border-green-600`}>
          <h2 className={`text-2xl font-bold mb-4 ${highContrast ? 'text-yellow-400' : 'text-moldova-charcoal'}`}>
            Mănăstirea Dancu din Iași - Originea Numelui
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className={`mb-4 leading-relaxed ${textClass}`}>
                Mănăstirea Dancu din Iași a fost ctitorită în <strong>1541</strong> de boierul
                <strong> Jurie Dancu</strong> și soția sa <strong>Sofronia</strong>.
              </p>
              <p className={`mb-4 leading-relaxed ${textClass}`}>
                Hramul: <strong>"Sfinții Voievozi Mihail și Gavriil"</strong>
              </p>
              <p className={textClass}>
                În secolul XVIII, mănăstirea deținea 10 sate în Moldova, inclusiv moșia Ușerești
                (actualul Dancu). De aici provine numele actual al satului.
              </p>
            </div>
            <div className={`p-6 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-green-50'}`}>
              <h4 className="font-bold mb-3">Moșii Mănăstirii Dancu:</h4>
              <ul className={`text-sm space-y-1 ${textClass}`}>
                <li>• Ușerești (azi Dancu) - Republica Moldova</li>
                <li>• Ursărești și Bârlădeni - raionul Cahul</li>
                <li>• Buciumeni - județul Vaslui</li>
                <li>• Moara Dancului - județul Iași</li>
                <li>• Bârzul și Vladnicul - județul Galați</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
