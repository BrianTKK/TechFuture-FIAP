import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FutureOfWorkSection from './components/FutureOfWorkSection';
import LearningPlatformsSection from './components/LearningPlatformsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="h-full bg-black font-sans antialiased relative flex flex-col overflow-x-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.2] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
       <div className="absolute top-[-30rem] left-[-30rem] w-[80rem] h-[80rem] bg-radial-gradient from-cyan-500/10 to-transparent -z-10 animate-pulse-bg"></div>
       <div className="absolute bottom-[-30rem] right-[-30rem] w-[80rem] h-[80rem] bg-radial-gradient from-purple-500/10 to-transparent -z-10 animate-pulse-bg [animation-delay:-4s]"></div>
       <Header />
       <main className="relative z-10 flex-grow">
        <Hero />
        <AnimatedSection id="about" className="py-20 sm:py-24">
          <FutureOfWorkSection />
        </AnimatedSection>
        <AnimatedSection id="platforms" className="py-20 sm:py-24">
          <LearningPlatformsSection />
        </AnimatedSection>
        <AnimatedSection id="faq" className="py-20 sm:py-24">
          <FaqSection />
        </AnimatedSection>
       </main>
       <Footer />
    </div>
  );
}

export default App;