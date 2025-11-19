import React from 'react';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${platform.url}`;

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-lg transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={faviconUrl}
            alt={`${platform.name} favicon`}
            className="w-6 h-6 rounded-md object-contain"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {platform.name}
          </h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      </div>
      <p className="mt-2 text-slate-400">{platform.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {platform.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium bg-slate-700 text-cyan-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default PlatformCard;