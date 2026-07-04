import { supabase } from '@/lib/supabaseClient';

export default async function GalleryPage() {
  const { data: designs } = await supabase.from('designs').select('*, artists(name)');

  return (
    <div className="min-h-screen bg-[#F3E9D8] py-16 px-6">
      <h1 className="text-4xl font-serif text-[#C56A3C] mb-12 text-center">The Archive</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {designs?.map((design) => (
          <div key={design.id} className="bg-white p-2 shadow-sm">
            <img src={design.image_url} alt={design.title} className="w-full aspect-square object-cover" />
            <div className="p-4">
              <h3 className="font-bold">{design.title}</h3>
              <p className="text-sm text-gray-600">{design.category} | {design.artists?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}