'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from('inquiries').insert({
      name: formData.get('name'),
      email: formData.get('email'),
      design_concept: formData.get('concept'),
      placement: formData.get('placement'),
      budget: formData.get('budget'),
    });

    setLoading(false);
    setStatus(error ? 'error' : 'success');
  }

  return (
    <div className="min-h-screen bg-[#F3E9D8] py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-serif text-[#C56A3C] mb-6">Start Your Journey</h1>
        {status === 'success' ? (
          <p className="text-green-700">Diolch! Your inquiry has been received. We will be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" required placeholder="Name" className="w-full p-3 border border-gray-300" />
            <input name="email" type="email" required placeholder="Email" className="w-full p-3 border border-gray-300" />
            <textarea name="concept" required placeholder="Design Concept" className="w-full p-3 border border-gray-300 h-32" />
            <input name="placement" placeholder="Placement (e.g. Forearm)" className="w-full p-3 border border-gray-300" />
            <input name="budget" placeholder="Estimated Budget" className="w-full p-3 border border-gray-300" />
            <button disabled={loading} className="w-full bg-[#111827] text-white py-4 font-bold">
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
          </form>
        )}
      </div>
    </div>
  );
}