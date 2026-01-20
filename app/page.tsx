/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- HERO SECTION --- */}
      <header className="max-w-5xl mx-auto pt-20 pb-16 px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
              Développeur <span className="text-blue-600">Fullstack</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Salut ! Moi c'est{" "}
              <span className="font-semibold text-slate-900">Henintsoa ANDRIAMIFEHIMNAJA</span>. Je
              construis des expériences web modernes avec Next.js, Tailwind et
              beaucoup de passion.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 bg-white border border-slate-200 rounded-full hover:shadow-md transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-2 bg-white border border-slate-200 rounded-full hover:shadow-md transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:email@exemple.com"
                className="p-2 bg-white border border-slate-200 rounded-full hover:shadow-md transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="w-48 h-48 bg-blue-100 rounded-3xl rotate-3 flex items-center justify-center">
            <Code2 size={80} className="text-blue-600 -rotate-3" />
          </div>
        </div>
      </header>

      {/* --- PROJETS --- */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12">Projets Sélectionnés</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Carte de Projet 1 */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
            <div className="h-48 bg-slate-200 overflow-hidden">
              {/* Ici tu pourras mettre une image plus tard */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                Preview Projet
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Nom du Projet</h3>
              <p className="text-slate-600 mb-4">
                Une description courte et efficace de ce que fait ton
                application et des technologies utilisées.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-full">
                  Tailwind
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
              >
                Voir le projet <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Carte de Projet 2 */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
            <div className="h-48 bg-slate-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">
                Preview Projet
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Deuxième Projet</h3>
              <p className="text-slate-600 mb-4">
                Un autre exemple de réalisation pour montrer l'étendue de tes
                compétences.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-full">
                  API
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
              >
                Voir le projet <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-5xl mx-auto py-20 px-6 border-t border-slate-200 text-center">
        <p className="text-slate-500">© 2026 • Créé avec Next.js par Henintsoa ANDRIAMIFEHIMANJAKA</p>
      </footer>
    </div>
  );
}