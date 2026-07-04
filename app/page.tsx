import { Hero } from '@/components/Hero';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F3E9D8] text-[#111827]">
      <Hero />
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-[#C56A3C] mb-8">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-4 shadow-sm border border-[#C56A3C]/20">
            <div className="h-64 bg-slate-200 mb-4" />
            <h3 className="font-serif text-xl">Celtic Knotwork</h3>
          </div>
          <div className="bg-white p-4 shadow-sm border border-[#C56A3C]/20">
            <div className="h-64 bg-slate-200 mb-4" />
            <h3 className="font-serif text-xl">Welsh Poppy</h3>
          </div>
          <div className="bg-white p-4 shadow-sm border border-[#C56A3C]/20">
            <div className="h-64 bg-slate-200 mb-4" />
            <h3 className="font-serif text-xl">Folklore Illustration</h3>
          </div>
        </div>
      </section>
    </main>
  );
}