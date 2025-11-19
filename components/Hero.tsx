import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fadeInUp" style={{ animationDelay: '0.1s', opacity: 0 }}>
          O Futuro do Trabalho é{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Tecnológico
          </span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 sm:text-xl md:text-2xl animate-fadeInUp" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Prepare-se para uma nova era. Todas as profissões serão impactadas pela tecnologia. A hora de se adaptar e aprender é agora.
        </p>
        <div className="mt-10 animate-fadeInUp" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <a
            href="#platforms"
            className="inline-block rounded-md bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-cyan-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black glow-shadow"
          >
            Comece sua Jornada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;