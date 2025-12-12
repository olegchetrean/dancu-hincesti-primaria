import React, { useState, useEffect } from 'react';
import { ANNOUNCEMENTS, DANCUFARM_DATA, PTF_LEUSENI } from '../constants';
import { ArrowRight, Calendar, FileText, MapPin, ChevronRight, AlertCircle, Phone, Clock, Car, TreePine, Factory, Heart, Users, Star, ExternalLink } from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
  setView: (view: ViewState) => void;
  highContrast: boolean;
}

const HERO_IMAGES = [
  "https://picsum.photos/1920/1080?random=prut", // Prut valley
  "https://picsum.photos/1920/1080?random=farm", // Farm / DancuFarm
  "https://picsum.photos/1920/1080?random=forest"  // Forest reserve
];

export const Home: React.FC<HomeProps> = ({ setView, highContrast }) => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`space-y-16 pb-12 ${highContrast ? 'bg-black' : 'bg-white'}`}>

      {/* HERO SECTION - "Dancu Greeting" */}
      <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden bg-gray-900">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img}
              alt={`Dancu peisaj ${index + 1}`}
              className={`w-full h-full object-cover ${index === currentHeroIndex ? 'animate-ken-burns' : ''}`}
            />
          </div>
        ))}

        {/* Living Painting Overlay - Green theme for Dancu */}
        <div
          className="absolute inset-0"
          style={{
            background: highContrast
              ? 'rgba(0,0,0,0.8)'
              : 'linear-gradient(135deg, rgba(45,80,22,0.5) 0%, rgba(74,144,226,0.4) 100%)'
          }}
        ></div>

        {/* Gradient Veil for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight drop-shadow-lg ${highContrast ? 'text-yellow-400' : 'text-white'}`} style={{ letterSpacing: '0.05em' }}>
              Bine ați venit în Satul Dancu
            </h1>
            <p className={`text-xl md:text-2xl mb-4 tracking-widest uppercase font-light drop-shadow-md ${highContrast ? 'text-white' : 'text-white/90'}`} style={{ letterSpacing: '0.1em' }}>
              Raionul Hîncești • Poarta Moldovei către România
            </p>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${highContrast ? 'text-gray-300' : 'text-white/80'}`}>
              La 8 km de frontiera cu România, în valea pitorească a Prutului - un sat cu 441 de ani de istorie, casă a cașcavalurilor artizanale DancuFarm
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary Button - DancuFarm */}
              <a
                href="https://natykrav.wixsite.com/dancufarm"
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden px-8 py-3 rounded-md font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${highContrast ? 'bg-yellow-400 text-black' : 'bg-amber-500 text-white shadow-soft'}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  🧀 Descoperă DancuFarm
                </span>
                <div className={`absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-amber-600/50`}></div>
              </a>

              {/* Secondary Button */}
              <button
                onClick={() => setView('contact')}
                className={`px-8 py-3 rounded-md font-semibold text-lg border-2 transition-all duration-300 hover:bg-white/10 ${highContrast ? 'border-white text-white' : 'border-white text-white'}`}
              >
                Contact Primărie
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {HERO_IMAGES.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentHeroIndex ? (highContrast ? 'bg-yellow-400 w-6' : 'bg-amber-500 w-6') : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* KEY HIGHLIGHTS - 3 Cards */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* DancuFarm Card */}
          <div className={`p-6 rounded-xl transition-all hover:-translate-y-2 ${highContrast ? 'bg-gray-900 border-2 border-amber-500' : 'bg-white shadow-lg border-l-4 border-amber-500'}`}>
            <div className="text-4xl mb-4">🧀</div>
            <h3 className={`text-xl font-bold mb-2 ${highContrast ? 'text-amber-400' : 'text-amber-600'}`}>DancuFarm</h3>
            <p className={`text-sm mb-4 ${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>
              Cașcavaluri artizanale (Gouda, Cheddar, Geak) după rețete europene. ~300 vizitatori/an.
            </p>
            <a
              href="https://natykrav.wixsite.com/dancufarm"
              target="_blank"
              rel="noreferrer"
              className={`text-sm font-bold flex items-center gap-1 ${highContrast ? 'text-amber-400' : 'text-amber-600'}`}
            >
              Vizitează Fabrica <ExternalLink size={14} />
            </a>
          </div>

          {/* PTF Leușeni Card */}
          <div className={`p-6 rounded-xl transition-all hover:-translate-y-2 ${highContrast ? 'bg-gray-900 border-2 border-blue-500' : 'bg-white shadow-lg border-l-4 border-blue-500'}`}>
            <div className="text-4xl mb-4">🚗</div>
            <h3 className={`text-xl font-bold mb-2 ${highContrast ? 'text-blue-400' : 'text-blue-600'}`}>8 km de România</h3>
            <p className={`text-sm mb-4 ${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>
              PTF Leușeni-Albița la doar 10 minute. Control coordonat din 2023 - trecere rapidă UE.
            </p>
            <button
              onClick={() => setView('geography')}
              className={`text-sm font-bold flex items-center gap-1 ${highContrast ? 'text-blue-400' : 'text-blue-600'}`}
            >
              Află mai multe <ArrowRight size={14} />
            </button>
          </div>

          {/* Rezervația Silvică Card */}
          <div className={`p-6 rounded-xl transition-all hover:-translate-y-2 ${highContrast ? 'bg-gray-900 border-2 border-green-500' : 'bg-white shadow-lg border-l-4 border-green-500'}`}>
            <div className="text-4xl mb-4">🌲</div>
            <h3 className={`text-xl font-bold mb-2 ${highContrast ? 'text-green-400' : 'text-green-600'}`}>Rezervația Silvică</h3>
            <p className={`text-sm mb-4 ${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>
              131 hectare de pădure protejată de stat. Stejar, frasin, carpen - comoară naturală.
            </p>
            <button
              onClick={() => setView('institutions')}
              className={`text-sm font-bold flex items-center gap-1 ${highContrast ? 'text-green-400' : 'text-green-600'}`}
            >
              Explorează <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT COLUMN: Quick Links & Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className={`p-6 rounded-xl ${highContrast ? 'bg-gray-900 border border-yellow-400' : 'glass-card bg-white shadow-soft'}`}>
              <h3 className={`font-bold text-lg mb-4 flex items-center gap-2 ${highContrast ? 'text-yellow-400' : 'text-green-700'}`}>
                <AlertCircle size={20} /> Informații Rapide
              </h3>
              <div className={`space-y-4 text-sm ${highContrast ? 'text-gray-300' : 'text-moldova-steel'}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${highContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-700'}`}>
                     <Phone size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-wider text-gray-400">Telefon Primărie</p>
                    <p className="font-medium text-base">0-269-64236</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${highContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-700'}`}>
                     <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-wider text-gray-400">Program</p>
                    <p className="font-medium">09:00 - 16:00 (L-V)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${highContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-700'}`}>
                     <MapPin size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-wider text-gray-400">Adresă</p>
                    <p className="font-medium">MD-3424, Dancu, Hîncești</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Card */}
            <div className={`p-6 rounded-xl ${highContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-gradient-to-br from-green-600 to-green-800 text-white'}`}>
              <h3 className="font-bold text-lg mb-4">Dancu în Cifre</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">441</p>
                  <p className="text-xs opacity-80">Ani de istorie</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">1,206</p>
                  <p className="text-xs opacity-80">Locuitori</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">8 km</p>
                  <p className="text-xs opacity-80">Până în România</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">131 ha</p>
                  <p className="text-xs opacity-80">Pădure protejată</p>
                </div>
              </div>
            </div>

             <div className={`p-6 rounded-xl ${highContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-white shadow-soft'}`}>
               <h3 className={`font-bold text-lg mb-4 border-b pb-2 ${highContrast ? 'text-yellow-400' : 'text-green-700'}`}>
                 Meniu Rapid
               </h3>
               <ul className="space-y-1">
                 <li><button onClick={() => setView('documents')} className="w-full text-left py-2 px-3 rounded hover:bg-green-50 flex justify-between items-center group transition-colors text-moldova-charcoal"><span>Decizii Consiliu</span> <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-green-600" /></button></li>
                 <li><button onClick={() => setView('economy')} className="w-full text-left py-2 px-3 rounded hover:bg-green-50 flex justify-between items-center group transition-colors text-moldova-charcoal"><span>Economie & DancuFarm</span> <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-green-600" /></button></li>
                 <li><button onClick={() => setView('history')} className="w-full text-left py-2 px-3 rounded hover:bg-green-50 flex justify-between items-center group transition-colors text-moldova-charcoal"><span>Istoric (din 1584)</span> <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-green-600" /></button></li>
                 <li><button onClick={() => setView('institutions')} className="w-full text-left py-2 px-3 rounded hover:bg-green-50 flex justify-between items-center group transition-colors text-moldova-charcoal"><span>Instituții</span> <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-green-600" /></button></li>
               </ul>
             </div>
          </div>

          {/* MIDDLE COLUMN: Mayor's Greeting + Announcements */}
          <div className="lg:col-span-2">

            {/* Mayor Card */}
            <div className={`relative mb-12 rounded-lg p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1 ${highContrast ? 'bg-gray-900 border-l-4 border-yellow-400' : 'bg-white shadow-soft border-l-4 border-green-600'}`}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                 <div className="flex-shrink-0 relative group">
                    <div className={`absolute inset-0 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-500 ${highContrast ? 'bg-yellow-400' : 'bg-green-600'}`}></div>
                    <img
                      src="https://picsum.photos/400/400?random=mayor2"
                      alt="Primar Iurie Grigoreț"
                      className={`relative w-32 h-32 rounded-full object-cover border-4 shadow-lg ${highContrast ? 'border-yellow-400' : 'border-green-600'}`}
                    />
                 </div>
                 <div className="flex-1 text-center md:text-left">
                    <span className="absolute top-6 left-8 text-6xl opacity-10 font-serif text-green-600">"</span>
                    <h2 className={`text-2xl font-bold mb-1 ${highContrast ? 'text-yellow-400' : 'text-moldova-charcoal'}`}>Iurie GRIGOREȚ</h2>
                    <p className={`text-sm font-medium mb-2 ${highContrast ? 'text-gray-400' : 'text-moldova-steel'}`}>Primarul satului Dancu (PSDE, ales 2023)</p>

                    <p className={`text-lg italic font-serif leading-relaxed mb-6 ${highContrast ? 'text-gray-200' : 'text-moldova-charcoal'}`}>
                      Bine ați venit pe pagina oficială a Primăriei Dancu!
                      Suntem mândri de istoria noastră de 441 de ani, de DancuFarm -
                      bijuteria economică a satului, și de poziția strategică la 8 km de România.
                    </p>

                    <button
                      onClick={() => setView('contact')}
                      className={`inline-flex items-center px-6 py-2 rounded-md border transition-colors ${highContrast ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' : 'border-green-100 bg-green-50 text-green-700 hover:bg-green-600 hover:text-white'}`}
                    >
                      Contactează Primarul
                    </button>
                 </div>
              </div>
            </div>

            {/* DANCUFARM FEATURED SECTION */}
            <div className={`mb-12 rounded-xl overflow-hidden ${highContrast ? 'bg-gray-900 border border-amber-500' : 'bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200'}`}>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🧀</span>
                  <div>
                    <h3 className={`text-2xl font-bold ${highContrast ? 'text-amber-400' : 'text-amber-700'}`}>DancuFarm</h3>
                    <p className={`text-sm ${highContrast ? 'text-gray-400' : 'text-amber-600'}`}>Perla Satului Dancu - Cea mai mare poveste de succes!</p>
                  </div>
                </div>

                <p className={`mb-6 ${highContrast ? 'text-gray-300' : 'text-gray-700'}`}>
                  Asociația de Caritate "Dancu-Tabita" produce cașcavaluri artizanale după rețete europene
                  (training în SUA, Olanda, Irlanda, UK). 4 sortimente naturale, 100% lapte de la ferma proprie,
                  zero aditivi artificiali.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className={`text-center p-3 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className={`text-2xl font-bold ${highContrast ? 'text-amber-400' : 'text-amber-600'}`}>4</p>
                    <p className="text-xs">Sortimente</p>
                  </div>
                  <div className={`text-center p-3 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className={`text-2xl font-bold ${highContrast ? 'text-amber-400' : 'text-amber-600'}`}>50</p>
                    <p className="text-xs">Vaci (21 Jersey)</p>
                  </div>
                  <div className={`text-center p-3 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className={`text-2xl font-bold ${highContrast ? 'text-amber-400' : 'text-amber-600'}`}>300+</p>
                    <p className="text-xs">Vizitatori/an</p>
                  </div>
                  <div className={`text-center p-3 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-white'}`}>
                    <p className={`text-2xl font-bold ${highContrast ? 'text-amber-400' : 'text-amber-600'}`}>75</p>
                    <p className="text-xs">Familii ajutate</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://natykrav.wixsite.com/dancufarm"
                    target="_blank"
                    rel="noreferrer"
                    className={`px-6 py-2 rounded-md font-semibold transition-colors ${highContrast ? 'bg-amber-500 text-black hover:bg-amber-400' : 'bg-amber-500 text-white hover:bg-amber-600'}`}
                  >
                    Vizitează Website
                  </a>
                  <button
                    onClick={() => setView('economy')}
                    className={`px-6 py-2 rounded-md font-semibold border transition-colors ${highContrast ? 'border-amber-500 text-amber-500' : 'border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white'}`}
                  >
                    Află Mai Multe
                  </button>
                </div>
              </div>
            </div>

            {/* ANNOUNCEMENT CARDS */}
            <div className="mb-8 flex justify-between items-end">
               <h2 className={`text-2xl font-bold ${highContrast ? 'text-yellow-400' : 'text-moldova-charcoal'}`}>Noutăți și Anunțuri</h2>
               <button className={`text-sm font-semibold hover:underline ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>Vezi toate</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ANNOUNCEMENTS.slice(0, 4).map((item) => (
                <article
                  key={item.id}
                  className={`flex flex-col h-full rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${highContrast ? 'bg-gray-900 border border-gray-700' : 'bg-white shadow-soft'}`}
                >
                  <div className="mb-4">
                     <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
                        item.categorie === 'urgenta' ? 'bg-red-500' :
                        item.categorie === 'sedinta' ? 'bg-blue-500' :
                        item.categorie === 'eveniment' ? 'bg-amber-500' :
                        'bg-green-600'
                      }`}>
                        {item.categorie}
                     </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 leading-snug line-clamp-2 ${highContrast ? 'text-white' : 'text-moldova-charcoal'}`}>
                    {item.titlu}
                  </h3>

                  <div className={`flex items-center gap-2 text-sm mb-4 ${highContrast ? 'text-gray-400' : 'text-moldova-steel'}`}>
                    <Calendar size={14} />
                    <span>{item.data_publicare}</span>
                  </div>

                  <p className={`text-sm leading-relaxed line-clamp-3 mb-6 flex-grow ${highContrast ? 'text-gray-300' : 'text-moldova-steel'}`}>
                    {item.continut_scurt}
                  </p>

                  <button className={`text-sm font-bold flex items-center gap-1 mt-auto transition-transform hover:translate-x-1 ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>
                    Citește mai mult <ArrowRight size={14} />
                  </button>
                </article>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* PTF LEUȘENI SECTION */}
      <section className={`py-16 ${highContrast ? 'bg-gray-900' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Car className={`w-12 h-12 ${highContrast ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h2 className={`text-3xl font-bold ${highContrast ? 'text-blue-400' : 'text-blue-800'}`}>La 8 km de România</h2>
                  <p className={`${highContrast ? 'text-gray-400' : 'text-blue-600'}`}>PTF Leușeni-Albița - Avantaj Strategic</p>
                </div>
              </div>

              <p className={`mb-6 text-lg ${highContrast ? 'text-gray-300' : 'text-gray-700'}`}>
                Satul Dancu se află la doar <strong>8 kilometri</strong> de Punctul de Trecere a Frontierei
                Leușeni-Albița, unul dintre cele mai importante puncte vamale moldo-române.
              </p>

              <ul className={`space-y-3 mb-6 ${highContrast ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Control coordonat din aprilie 2023 (reducere timp 30-50%)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  3,6 milioane persoane/an (trafic 2022)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Deschis 24/7/365
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Proiect viitor: Pod nou cu 4 benzi
                </li>
              </ul>

              <div className={`p-4 rounded-lg ${highContrast ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`font-bold ${highContrast ? 'text-white' : 'text-gray-800'}`}>
                  Timp total Dancu → România:
                </p>
                <p className={`text-2xl font-bold ${highContrast ? 'text-blue-400' : 'text-blue-600'}`}>
                  25-35 minute
                </p>
                <p className="text-sm text-gray-500">8 km (10 min) + 15-25 min trecere frontieră</p>
              </div>
            </div>

            <div className={`rounded-xl overflow-hidden shadow-lg ${highContrast ? 'border border-blue-500' : ''}`}>
              <img
                src="https://picsum.photos/800/600?random=border"
                alt="PTF Leușeni-Albița"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH CARDS - Services */}
      <section className={`py-16 ${highContrast ? 'bg-black' : 'bg-green-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${highContrast ? 'text-yellow-400' : 'text-green-800'}`}>
            Servicii și Transparență
          </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`p-8 rounded-xl text-center transition-all hover:-translate-y-2 ${highContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-white shadow-soft'}`}>
                 <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${highContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-600'}`}>
                    <FileText size={32} />
                 </div>
                 <h3 className={`text-xl font-bold mb-3 ${highContrast ? 'text-white' : 'text-moldova-charcoal'}`}>Transparență</h3>
                 <p className={`text-sm mb-6 ${highContrast ? 'text-gray-400' : 'text-moldova-steel'}`}>Acces la decizii, buget și rapoarte de activitate.</p>
                 <a href="https://actelocale.gov.md" target="_blank" rel="noreferrer" className={`text-sm font-bold hover:underline ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>Vezi Registrul de Stat →</a>
              </div>

              <div className={`p-8 rounded-xl text-center transition-all hover:-translate-y-2 ${highContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-white shadow-soft'}`}>
                 <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${highContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-600'}`}>
                    <MapPin size={32} />
                 </div>
                 <h3 className={`text-xl font-bold mb-3 ${highContrast ? 'text-white' : 'text-moldova-charcoal'}`}>Servicii Online</h3>
                 <p className={`text-sm mb-6 ${highContrast ? 'text-gray-400' : 'text-moldova-steel'}`}>Solicită acte și certificate prin portalul guvernamental.</p>
                 <a href="https://servicii.gov.md" target="_blank" rel="noreferrer" className={`text-sm font-bold hover:underline ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>Accesează Portalul →</a>
              </div>

              <div className={`p-8 rounded-xl text-center transition-all hover:-translate-y-2 ${highContrast ? 'bg-gray-900 border border-yellow-400' : 'bg-white shadow-soft'}`}>
                 <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${highContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-600'}`}>
                    <AlertCircle size={32} />
                 </div>
                 <h3 className={`text-xl font-bold mb-3 ${highContrast ? 'text-white' : 'text-moldova-charcoal'}`}>Semnalează o Problemă</h3>
                 <p className={`text-sm mb-6 ${highContrast ? 'text-gray-400' : 'text-moldova-steel'}`}>Ai observat o neregulă în sat? Trimite o petiție online.</p>
                 <button onClick={() => setView('contact')} className={`text-sm font-bold hover:underline ${highContrast ? 'text-yellow-400' : 'text-green-600'}`}>Scrie Petiție →</button>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="container mx-auto px-4 py-12 text-center">
        <p className={`text-2xl font-serif italic ${highContrast ? 'text-gray-400' : 'text-gray-500'}`}>
          "Dancu - Poarta Moldovei către România"
        </p>
        <p className={`mt-2 ${highContrast ? 'text-gray-500' : 'text-gray-400'}`}>
          441 de ani de istorie | 1584 - 2025
        </p>
      </section>
    </div>
  );
};
