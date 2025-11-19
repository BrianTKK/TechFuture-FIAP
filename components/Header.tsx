import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter text-cyan-400">
              TechFuture
            </a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <a href="#about" className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">
              O Futuro
            </a>
            <a href="#platforms" className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">
              Plataformas
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;