import { useState } from 'react';

const links = [['About', '#about'], ['Gallery', '#gallery'], ['Visit', '#visit']];

export default function Nav({ phoneHref }: { phoneHref: string }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 border-b border-black/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="font-serif text-2xl font-semibold">Signal <span className="text-ember">Station</span></a>
        <ul className="hidden gap-6 text-sm text-ink/70 md:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="hover:text-ink">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <a href={phoneHref} className="rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-white">Call to book</a>
          <button className="text-2xl md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        </div>
      </div>
      {open && (
        <ul className="border-t border-black/10 px-4 py-3 md:hidden">
          {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2">{l}</a></li>)}
        </ul>
      )}
    </nav>
  );
}
