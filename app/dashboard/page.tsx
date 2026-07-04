'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AdminDashboard() {
  const [designs, setDesigns] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('designs').select('*');
      if (data) setDesigns(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-[#F3E9D8]">
      <h1 className="text-3xl font-serif mb-8">Studio Dashboard</h1>
      <div className="bg-white p-6 shadow-sm">
        <h2 className="text-xl mb-4">Manage Gallery</h2>
        {designs.map(d => (
          <div key={d.id} className="flex justify-between py-2 border-b">
            <span>{d.title}</span>
            <button className="text-red-600">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}