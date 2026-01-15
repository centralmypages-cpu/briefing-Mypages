
import React from 'react';
import { BriefingData } from '../types';
import { PAGE_STRUCTURE_OPTIONS, INTEGRATIONS_OPTIONS, LANGUAGE_OPTIONS, URGENCY_OPTIONS } from '../constants';
import { Layout, Check, Layers, Plug, Languages, Timer, Plus } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step5: React.FC<Props> = ({ data, update }) => {
  const labelClasses = "block text-[10px] font-black text-black uppercase tracking-[0.4em] mb-6 flex items-center gap-2";
  
  const choiceClasses = (selected: boolean) => `
    group relative p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-widest
    ${selected 
      ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
      : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
    }
  `;

  const toggleSelection = (field: keyof BriefingData, value: string) => {
    const current = (data[field] as string || "").split(', ').filter(Boolean);
    const next = current.includes(value) ? current.filter(x => x !== value) : [...current, value];
    update({ [field]: next.join(', ') });
  };

  return (
    <div className="space-y-20 step-fade pb-10">
      <header>
        <div className="flex items-center gap-2 text-slate-900 mb-4">
          <Layout size={20} />
          <span className="text-xs font-black uppercase tracking-[0.4em]">Etapa 5: Funcionalidades & Estrutura</span>
        </div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">O que seu site precisa ter</h2>
        <p className="text-slate-500 font-medium mt-3 text-lg leading-relaxed">
          Defina os blocos de construção e as ferramentas que darão vida ao seu projeto digital.
        </p>
      </header>

      <div className="space-y-24">
        {/* Estrutura da Página */}
        <section>
          <label className={labelClasses}><Layers size={14} /> Estrutura da página (Obrigatórias)</label>
          <p className="text-xs font-bold text-black mb-6 -mt-2">Selecione todas as seções que você deseja incluir na sua página.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {PAGE_STRUCTURE_OPTIONS.map(opt => (
              <div key={opt} onClick={() => toggleSelection('pageStructure', opt)} className={choiceClasses(data.pageStructure.includes(opt))}>
                <span className="leading-tight">{opt}</span>
                {data.pageStructure.includes(opt) && <Check size={14} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Integrações */}
        <section>
          <label className={labelClasses}><Plug size={14} /> Integrações desejadas</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {INTEGRATIONS_OPTIONS.map(opt => (
              <div key={opt} onClick={() => toggleSelection('integrations', opt)} className={choiceClasses(data.integrations.includes(opt))}>
                <span className="leading-tight">{opt}</span>
                {data.integrations.includes(opt) && <Check size={14} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Idiomas e Urgência */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Versão em outros idiomas */}
          <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <label className={labelClasses}><Languages size={14} /> Versão em outros idiomas?</label>
            <div className="space-y-3">
              {LANGUAGE_OPTIONS.map(opt => (
                <div key={opt} onClick={() => update({ languages: opt })} className={choiceClasses(data.languages === opt)}>
                  <span>{opt}</span>
                  {data.languages === opt && <Check size={14} strokeWidth={3} />}
                </div>
              ))}
              <div className="mt-4">
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white text-xs font-bold uppercase tracking-widest placeholder-slate-300 focus:border-black outline-none transition-all"
                  placeholder="Outros idiomas? Especifique..."
                  onChange={(e) => {
                    if (e.target.value) update({ languages: `Outros: ${e.target.value}` });
                  }}
                />
              </div>
            </div>
          </section>

          {/* Prazo de Entrega */}
          <section className="bg-black p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/30 rounded-full blur-[60px] -mr-16 -mt-16"></div>
            <label className="text-amber-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8 block flex items-center gap-2">
              <Timer size={14} /> Prazo de Entrega
            </label>
            <h3 className="text-white text-xl font-black mb-8 tracking-tight">Qual o nível de urgência?</h3>
            <div className="grid grid-cols-1 gap-4">
              {URGENCY_OPTIONS.map(opt => (
                <div 
                  key={opt} 
                  onClick={() => update({ deliveryUrgency: opt })} 
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between font-black uppercase text-xs tracking-widest
                    ${data.deliveryUrgency === opt 
                      ? 'bg-amber-400 border-amber-400 text-black' 
                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                >
                  <span>{opt === 'Padrão' ? '⏱️ Padrão' : '🚀 Urgente'}</span>
                  {data.deliveryUrgency === opt && <Check size={18} strokeWidth={4} />}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Step5;
