/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Languages,
  X,
  Code2,
  Download,
} from "lucide-react";

type Translation = {
  viewProject: string;
};

type ProjectCardProps = {
  title: string;
  desc: string;
  tags: string[];
  url: string;
  t: Translation;
};

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [lang, setLang] = useState("FR");

  // Dictionnaire de traduction simple
  const content = {
    FR: {
      title: "Créer le",
      subtitle:
        "Bienvenue sur mon espace personnel. Explorez mes projets ci-dessous.",
      devTitle: "Développeur",
      intro: "Bonjour ! Moi c'est",
      description:
        "Je construis des expériences web modernes avec Next.js, Tailwind et beaucoup de passion.",
      projectsTitle: "Projets Sélectionnés",
      viewProject: "Voir le projet",
      downloadCV: "Télécharger CV",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    EN: {
      title: "Building the",
      subtitle: "Welcome to my personal space. Explore my projects below.",
      devTitle: "Fullstack Developer",
      intro: "Hi! I'm",
      description:
        "I build modern web experiences with Next.js, Tailwind and a lot of passion.",
      projectsTitle: "Selected Projects",
      viewProject: "View project",
      downloadCV: "Download CV",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    },
  };

  const projects = [
    {
      title: "Delivery Optimization App",
      desc: "Application d’optimisation de livraisons avec React et Node.js.",
      tags: ["React", "Node.js", "AI"],
      url: "https://easy-tatitra.vercel.app/",
    },
    {
      title: "Smart Schedule Manager",
      desc: "Application de gestion du temps avec prédiction intelligente.",
      tags: ["Next.js", "LSTM", "Tailwind"],
      url: "#",
    },
    {
      title: "Smart Schedule Managers",
      desc: "Application de gestion du temps avec prédiction intelligente.",
      tags: ["Next.js", "LSTM", "Tailwind"],
      url: "#",
    },
  ];

  const t = lang === "FR" ? content.FR : content.EN;

  const toggleDark = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");

    document.documentElement.classList.toggle("dark", next);
  };

  const toggleLang = () => {
    const next = lang === "FR" ? "EN" : "FR";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      {/* --- HEADER --- */}
      <nav className=" sticky top-0 z-40 w-full backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-white/70 dark:bg-slate-900/70">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setShowProfileModal(true)}
            className="flex items-center gap-3 group transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500 overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
              <img
                src="/IMG_5926.JPG"
                alt="Profil"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-lg dark:text-white">Henintsoa</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Languages size={14} /> {lang}
            </button>
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:scale-110 transition-transform"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MODAL PROFIL --- */}
      <AnimatePresence>
        {showProfileModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowProfileModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full dark:text-white"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-3xl bg-blue-100 mb-6 overflow-hidden shadow-lg">
                  <img
                    src="/IMG_5926.JPG"
                    alt="Grand Profil"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-1 dark:text-white text-slate-900">
                  Henintsoa ANDRIAMIFEHIMANJAKA
                </h2>

                <p className="text-blue-600 font-semibold mb-4">
                  {t.devTitle} • 25 ans
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {t.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                  Passionné par la création d'interfaces intuitives. Je
                  travaille actuellement sur des projets React et Node.js. Mon
                  objectif est de devenir expert en architecture logicielle.
                </p>

                <a
                  href="/CV_Henintsoa.pdf"
                  download
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Download size={18} /> {t.downloadCV}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* SIDEBAR */}
      <aside
        className="fixed z-50 left-0 top-0 h-screen w-20 md:w-28 
  flex flex-col justify-center items-center 
  "
      >
        {/* NAV */}
        <nav className="absolute top-24 flex flex-col gap-6 text-xs tracking-widest  text-[#000000] max-xl:hidden transition">
          <a href="#about" className="hover:text-blue-600 transition">
            ABOUT
          </a>
          <a href="#experience" className="hover:text-blue-600 transition">
            EXPERIENCE
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            PROJECTS
          </a>
        </nav>

        {/* SOCIALS */}
        <div className="fixed bottom-10 z-10 flex flex-col gap-4 ">
          {/* GitHub */}
          <a
            href="https://github.com/TON_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-200 dark:border-slate-700 rounded-2xl max-xl:bg-[#0062ff5f] hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            <Github size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/TON_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-200 dark:border-slate-700 rounded-2xl max-xl:bg-[#0062ff5f] hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            <Linkedin size={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:TON_EMAIL@gmail.com"
            className="p-3 border border-slate-200 dark:border-slate-700 rounded-2xl max-xl:bg-[#0062ff5f] hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            <Mail size={24} />
          </a>
        </div>
      </aside>
      <div className="">
        {/* tout ton contenu existant */}
        {/* --- MAIN CONTENT --- */}
        <main className="max-w-5xl ml-auto mr-auto py-16 px-6">
          {/* HERO */}
          <section className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                {t.title}{" "}
                <span className="text-blue-600 underline decoration-blue-200">
                  futur
                </span>
                .
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl">
                {t.intro}{" "}
                <span className="font-bold text-slate-900 dark:text-white text-2xl">
                  Henintsoa
                </span>
                . {t.description}
              </p>
            </div>
            <div className="w-56 h-56 bg-blue-600 rounded-[2rem] rotate-6 flex items-center justify-center shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-400 rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
              <Code2
                size={100}
                className="text-white -rotate-6 relative z-10"
              />
            </div>
          </section>
          {/* PROJECTS */}
          <section>
            <h2 className="text-3xl font-bold mb-12 dark:text-white">
              {t.projectsTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  desc={p.desc}
                  tags={p.tags}
                  url={p.url}
                  t={t}
                />
              ))}
            </div>
          </section>

          <footer className="mt-32 py-10 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500">
            © 2026 • Henintsoa ANDRIAMIFEHIMANJAKA
          </footer>
        </main>
      </div>
    </div>
  );
}

// Petit composant interne pour les cartes de projet
function ProjectCard({ title, desc, tags, url, t }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
      <div className="h-52 bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity"></div>
        <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono text-sm">
          IMAGE_PREVIEW
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
          {desc}
        </p>
        <div className="flex gap-2 mb-8">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={url}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline"
        >
          {t.viewProject} <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}