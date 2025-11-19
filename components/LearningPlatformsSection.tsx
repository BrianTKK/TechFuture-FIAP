import React, { useState, useMemo } from 'react';
import { PLATFORMS, CATEGORIES } from '../constants';
import PlatformCard from './PlatformCard';
import { Platform } from '../types';

const LearningPlatformsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredPlatforms = useMemo(() => {
    return PLATFORMS.filter(platform => {
      const searchMatch =
        platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        platform.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const tagsMatch =
        activeTags.length === 0 ||
        activeTags.every(tag => platform.tags.includes(tag));

      return searchMatch && tagsMatch;
    });
  }, [searchTerm, activeTags]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Encontre sua Plataforma Ideal</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Explore uma lista de sites e recursos para começar ou aprimorar suas habilidades em programação.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar por nome ou descrição..."
            aria-label="Pesquisar plataformas"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-10 py-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-500"
          />
           <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-slate-400 mb-3">Filtrar por categoria:</h3>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                  activeTags.includes(tag)
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {tag}
              </button>
            ))}
            {activeTags.length > 0 && (
               <button
                onClick={() => setActiveTags([])}
                className="px-3 py-1 text-sm font-medium rounded-full transition-colors bg-purple-600 text-white hover:bg-purple-500"
              >
                Limpar Filtros &times;
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlatforms.length > 0 ? (
          filteredPlatforms.map(platform => (
            <PlatformCard key={platform.name} platform={platform} />
          ))
        ) : (
           <div className="md:col-span-2 lg:col-span-3 text-center py-16">
              <p className="text-xl text-slate-400">Nenhuma plataforma encontrada.</p>
              <p className="text-slate-500">Tente ajustar sua busca ou filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPlatformsSection;