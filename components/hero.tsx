export function Hero() {
  return (
    <header className="bg-[#111827] text-[#F3E9D8] py-24 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-serif mb-6">Ink with Roots. Modern Welsh Artistry.</h1>
      <p className="max-w-2xl mx-auto text-lg mb-10 opacity-90">
        *Croeso.* Welcome to Celf Tatŵ Cardiff. We specialize in transforming the rich tapestry of Welsh folklore, Celtic heritage, and native botany into timeless, custom skin art.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="/gallery" className="bg-[#C56A3C] text-white px-8 py-3 rounded-sm hover:bg-[#a3562e] transition">View Gallery</a>
        <a href="/booking" className="border border-[#C56A3C] text-[#C56A3C] px-8 py-3 rounded-sm hover:bg-[#C56A3C] hover:text-white transition">Book Consultation</a>
      </div>
    </header>
  );
}