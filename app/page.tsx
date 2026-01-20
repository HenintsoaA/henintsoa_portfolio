export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Henintsoa</h1>
        <p className="text-xl text-gray-400 mb-6">
          Développeur Full Stack • React • Next.js
        </p>
        <a
          href="#projects"
          className="rounded-xl bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition"
        >
          Voir mes projets
        </a>
      </section>
    </main>
  );
}
