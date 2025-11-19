import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { FaqItem } from '../types';

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

// Fix: Explicitly typed component as React.FC to correctly handle the 'key' prop, which is managed by React and should not be part of the component's props interface.
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-slate-700">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full py-5 text-left font-medium text-slate-200 hover:text-cyan-400"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${item.question.replace(/\s+/g, '-')}`}
        >
          <span>{item.question}</span>
          <svg
            className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </h2>
      <div
        id={`faq-panel-${item.question.replace(/\s+/g, '-')}`}
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
             <div className="pb-5 pr-4 text-slate-400">
                {item.answer}
             </div>
        </div>
      </div>
    </div>
  );
};


const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Perguntas Frequentes</h2>
        <p className="mt-4 text-lg text-slate-400">
          Tudo o que você precisa saber para começar sua jornada no mundo da tecnologia.
        </p>
      </div>
      <div className="mt-12">
          {FAQ_DATA.map((item, index) => (
              <AccordionItem 
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleClick(index)}
              />
          ))}
      </div>
    </div>
  );
};

export default FaqSection;