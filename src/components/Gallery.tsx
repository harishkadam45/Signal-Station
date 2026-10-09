import { useState } from 'react';

type Photo = { src: string; alt: string; source: string };

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  if (!photos.length) {
    return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="aspect-square rounded-2xl bg-gradient-to-br from-[#7da1b8] to-[#f3c9a0] opacity-70" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {photos.map((p, i) => (
          <button key={p.src} onClick={() => setOpen(i)} className="group relative aspect-square overflow-hidden rounded-2xl">
            <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute bottom-2 left-2 rounded-full bg-black/55 px-2 py-0.5 text-[11px] text-white">{p.source}</span>
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <img src={photos[open].src} alt={photos[open].alt} className="max-h-[90vh] max-w-full rounded-xl" />
          <button className="absolute right-4 top-4 text-3xl text-white" aria-label="Close">×</button>
        </div>
      )}
    </>
  );
}
