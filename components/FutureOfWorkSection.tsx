import React, { useState } from 'react';

const formatTextWithBold = (text: string) => {
  const parts = text.split(/(\*.*?\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return <strong key={index}>{part.slice(1, -1)}</strong>;
    }
    return part;
  });
};

const adaptedProfessions = [
  {
    title: 'Médicos',
    description: 'Usarão IA para analisar exames e prever doenças com uma precisão antes inimaginável, permitindo que se concentrem no cuidado ao paciente.',
    colorClasses: {
      bg: 'bg-green-900/30',
      border: 'border-green-500/60',
      hoverBorder: 'hover:border-green-400',
      text: 'text-green-300',
      circle: 'bg-green-500/10'
    }
  },
  {
    title: 'Advogados',
    description: 'Utilizarão softwares para analisar milhares de documentos em minutos, identificando precedentes cruciais para seus casos.',
    colorClasses: {
      bg: 'bg-cyan-900/30',
      border: 'border-cyan-500/60',
      hoverBorder: 'hover:border-cyan-400',
      text: 'text-cyan-300',
      circle: 'bg-cyan-500/10'
    }
  },
  {
    title: 'Designers e Arquitetos',
    description: 'Criarão protótipos em realidade virtual, permitindo que clientes "entrem" em seus projetos antes da primeira pedra ser assentada.',
    colorClasses: {
      bg: 'bg-purple-900/30',
      border: 'border-purple-500/60',
      hoverBorder: 'hover:border-purple-400',
      text: 'text-purple-300',
      circle: 'bg-purple-500/10'
    }
  },
  {
    title: 'Profissionais de Marketing',
    description: 'Deixarão de depender da intuição e usarão análise de dados para entender o comportamento do consumidor em tempo real.',
    colorClasses: {
      bg: 'bg-indigo-900/30',
      border: 'border-indigo-500/60',
      hoverBorder: 'hover:border-indigo-400',
      text: 'text-indigo-300',
      circle: 'bg-indigo-500/10'
    }
  },
];

const newCareers = [
  {
    title: 'Engenheiro(a) de Prompt',
    description: 'Especialistas em "conversar" com IAs para extrair os melhores resultados.',
  },
  {
    title: 'Especialista em Ética de IA',
    description: 'Garantindo que os sistemas de inteligência artificial sejam justos, transparentes e não perpetuem preconceitos.',
  },
  {
    title: 'Desenvolvedor(a) de AR/VR',
    description: 'Criando as experiências imersivas que definirão o futuro do entretenimento, educação e trabalho.',
  },
  {
    title: 'Cientista de Dados',
    description: 'O "tradutor" do bem mais valioso do século XXI: os dados.',
  }
];


const FutureOfWorkSection = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">A Encruzilhada do Amanhã: Adapte-se ou Fique Para Trás</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
          {formatTextWithBold("Estamos vivendo a mais profunda transformação no mercado de trabalho da história. Não é uma onda passageira, é uma mudança de era. A questão não é *se* a tecnologia vai impactar sua carreira, mas *como* e *quando*.")}
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-24 text-slate-300 text-lg leading-relaxed">
        <div>
           <h3 className="text-3xl font-bold text-cyan-400">O Fim de uma Era</h3>
           <p className="text-xl text-purple-400 font-medium mt-1 mb-4">Profissões em Risco</p>
           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-6">
            <div className="flex flex-col">
                <p className="text-justify">
                A automação e a Inteligência Artificial (IA) estão se tornando incrivelmente eficientes em tarefas repetitivas e baseadas em regras. Funções que antes exigiam um ser humano para entrada de dados, operação de caixa, telemarketing ou até mesmo certas análises contábeis estão sendo rapidamente assumidas por algoritmos. Isso não é motivo para pânico, mas para um despertar: o valor humano está se deslocando de tarefas de "fazer" para tarefas de "pensar", "criar" e "conectar".
                </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 border-2 border-cyan-500/20 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop" 
                alt="Robô simbolizando a automação e o futuro do trabalho" 
                className="relative rounded-xl shadow-lg glow-shadow"
                loading="lazy"
              />
            </div>
          </div>
           <blockquote className="mt-12 p-6 bg-slate-800/50 border-l-4 border-purple-500 text-slate-300 rounded-r-lg shadow-inner">
              <p className="text-xl italic font-serif mb-4">
              "A automação aplicada a uma operação eficiente aumentará a eficiência. A automação aplicada a uma operação ineficiente aumentará a ineficiência."
            </p>
            <footer className="text-right text-purple-400 font-semibold">- Bill Gates</footer>
          </blockquote>
        </div>

        <div>
           <h3 className="text-3xl font-bold text-center text-white mb-2">Profissões Adaptadas pela Tecnologia</h3>
           <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">A maioria das profissões não desaparecerá, mas será radicalmente transformada. A tecnologia se tornará uma parceira, uma ferramenta que amplifica nossas capacidades.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adaptedProfessions.map((prof, index) => (
                <div
                    key={prof.title}
                    className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer overflow-hidden ${
                        prof.colorClasses.bg
                    } ${
                        openCard === index ? prof.colorClasses.border : `border-slate-700 ${prof.colorClasses.hoverBorder}`
                    }`}
                    onClick={() => setOpenCard(openCard === index ? null : index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => { if (e.key === 'Enter') setOpenCard(openCard === index ? null : index) }}
                    aria-expanded={openCard === index}
                >
                    <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full ${prof.colorClasses.circle} transition-transform duration-500 ${openCard === index ? 'scale-[3]' : 'scale-100'}`}></div>
                    <div className={`absolute -bottom-16 -right-8 w-40 h-40 rounded-full ${prof.colorClasses.circle} transition-transform duration-500 delay-100 ${openCard === index ? 'scale-[3]' : 'scale-100'}`}></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-center">
                            <h4 className={`text-2xl font-bold ${prof.colorClasses.text}`}>{prof.title}</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 shrink-0 text-slate-400 transition-transform duration-300 ${openCard === index ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className={`grid transition-all duration-500 ease-in-out ${openCard === index ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
                             <div className="overflow-hidden">
                                <p className="text-slate-300">
                                    {prof.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          </div>
           <p className="mt-8 text-center text-lg text-slate-400">
             Em todos esses cenários, o profissional que dominar as ferramentas tecnológicas terá uma vantagem competitiva imensa. A tecnologia não os substitui, ela os torna melhores, mais rápidos e mais eficazes.
          </p>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-cyan-400">O Novo Horizonte: As Carreiras do Futuro</h3>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-6">
            <div className="flex flex-col">
              <p className="mb-6 text-justify">
                Paralelamente à transformação, um universo de novas carreiras está surgindo. Funções que pareciam ficção científica há uma década são hoje algumas das mais promissoras:
              </p>
              <ul className="space-y-5">
                {newCareers.map((career) => (
                  <li key={career.title}>
                    <h4 className="font-semibold text-white text-xl">{career.title}</h4>
                    <p className="text-slate-400 mt-1">{career.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 border-2 border-purple-500/20 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" 
                alt="Pessoa trabalhando em um computador, simbolizando as novas carreiras de tecnologia" 
                className="relative rounded-xl shadow-lg glow-shadow-purple"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="!mt-16 pt-8 border-t border-slate-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">O Fio Condutor: A Alfabetização Digital é o Novo Normal</h3>
          <p className="max-w-3xl mx-auto">
            Seja qual for o seu caminho, o denominador comum é a tecnologia. Aprender a programar, entender a lógica por trás dos sistemas, analisar dados e ter fluência digital não são mais habilidades de nicho para "pessoas de TI". São competências fundamentais, como ler e escrever foram no século passado.
          </p>
          <p className="mt-4 max-w-3xl mx-auto font-semibold text-cyan-300">
            Aprender tecnologia não é sobre se tornar um programador. É sobre se tornar um profissional preparado para o futuro, seja ele qual for. É o caminho para não ser apenas um espectador, mas um criador ativo na nova economia digital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureOfWorkSection;