
import React from 'react';
import { BriefingData } from '../types';
import { 
  OBJECTIVE_OPTIONS, 
  AGE_RANGE_OPTIONS, 
  MATERIALS_OPTIONS, 
  MAIN_ACTION_OPTIONS
} from '../constants';
import { Target, Users, Search, MousePointer2, FileText, Check, Layers, Sparkles, Image as ImageIcon, MessageSquareText, HelpCircle } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step2: React.FC<Props> = ({ data, update }) => {
  const labelClasses = "block text-[10px] font-black text-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2";
  const textareaClasses = "w-full px-8 py-6 rounded-[1.5rem] border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-black outline-none transition-all font-medium text-sm resize-none";
  
  const choiceClasses = (selected: boolean) => `
    group relative p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest
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
    <div className="space-y-20 pb-10 step-fade">
      <header>
        <div className="flex items-center gap-2 text-slate-900 mb-4">
          <Layers size={20} />
          <span className="text-xs font-black uppercase tracking-[0.4em]">Etapa 3: Sobre o Projeto</span>
        </div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">Engenharia de Negócio</h2>
        <p className="text-slate-500 font-medium mt-3 text-lg leading-relaxed">
          Vamos aprofundar na estratégia. Responda com clareza para construirmos uma máquina de conversão.
        </p>
      </header>

      <div className="space-y-24">
        {/* Objetivo do Projeto */}
        <section>
          <label className={labelClasses}><Target size={14} className="text-slate-900" /> Qual o principal objetivo do site?</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OBJECTIVE_OPTIONS.map(opt => (
              <div key={opt} onClick={() => update({ mainObjective: opt })} className={choiceClasses(data.mainObjective === opt)}>
                <span>{opt}</span>
                {data.mainObjective === opt && <Check size={16} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Público-Alvo - Segmento Premium */}
        <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 space-y-12">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
            <Users className="text-slate-900" size={24} />
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Análise de Público-Alvo</h3>
          </div>

          <div className="space-y-10">
            <section>
              <label className={labelClasses}>Faixa etária aproximada</label>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {AGE_RANGE_OPTIONS.map(opt => (
                  <div key={opt} onClick={() => update({ targetAgeRange: opt })} className={choiceClasses(data.targetAgeRange === opt)}>
                    <span className="text-[10px]">{opt}</span>
                    {data.targetAgeRange === opt && <Check size={12} strokeWidth={3} />}
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <section>
                <label className={labelClasses}><MessageSquareText size={14} /> Principais dores ou problemas</label>
                <textarea 
                  className={`${textareaClasses} h-40`}
                  placeholder="O que tira o sono do seu cliente hoje?"
                  value={data.targetPainPoints}
                  onChange={(e) => update({ targetPainPoints: e.target.value })}
                />
              </section>

              <section>
                <label className={labelClasses}><Search size={14} /> O que essa pessoa busca ao contratar você?</label>
                <textarea 
                  className={`${textareaClasses} h-40`}
                  placeholder="Qual o desejo final dele?"
                  value={data.targetGoals}
                  onChange={(e) => update({ targetGoals: e.target.value })}
                />
              </section>
            </div>
          </div>
        </div>

        {/* Oferta Dinâmica */}
        <section className="bg-black p-10 md:p-16 rounded-[3.5rem] shadow-3xl relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10 space-y-8">
            <label className="text-amber-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Oferta Estratégica</label>
            <h3 className="text-white text-3xl font-black mb-8 tracking-tighter">Você já possui uma oferta definida?</h3>
            <div className="flex gap-4">
              {['Sim', 'Não'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => update({ hasDefinedOffer: opt as any })}
                  className={`px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${data.hasDefinedOffer === opt ? 'bg-amber-400 text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {data.hasDefinedOffer === 'Sim' && (
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white placeholder-slate-600 outline-none focus:ring-4 focus:ring-amber-400/20 focus:border-amber-400 transition-all font-medium text-lg mt-6 h-40 resize-none"
                placeholder="Descreva sua oferta (Serviço, produto ou pacote que será apresentado no site)..."
                value={data.offerDetails}
                onChange={(e) => update({ offerDetails: e.target.value })}
              />
            )}
          </div>
        </section>

        {/* Proposta de Valor e Diferenciais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <label className={labelClasses}><HelpCircle size={14} /> Diferenciais (Por que escolher você?)</label>
            <textarea 
              className={`${textareaClasses} h-60`}
              placeholder="O que faz você ser diferente ou melhor que outros profissionais da sua área?"
              value={data.differentiator}
              onChange={(e) => update({ differentiator: e.target.value })}
            />
          </section>

          <section>
            <label className={labelClasses}><Sparkles size={14} /> Proposta de Valor</label>
            <textarea 
              className={`${textareaClasses} h-60`}
              placeholder="O que exatamente você oferece para o seu cliente hoje?"
              value={data.valueProposition}
              onChange={(e) => update({ valueProposition: e.target.value })}
            />
          </section>
        </div>

        {/* Materiais */}
        <section>
          <label className={labelClasses}><ImageIcon size={14} className="text-slate-900" /> Materiais Disponíveis</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MATERIALS_OPTIONS.map(opt => (
              <div key={opt} onClick={() => toggleSelection('availableMaterials', opt)} className={choiceClasses(data.availableMaterials.includes(opt))}>
                <span className="text-[11px]">{opt}</span>
                {data.availableMaterials.includes(opt) && <Check size={16} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Ação Principal */}
        <section>
          <label className={labelClasses}><MousePointer2 size={14} className="text-slate-900" /> Ação Principal do Cliente</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAIN_ACTION_OPTIONS.map(opt => (
              <div key={opt} onClick={() => update({ mainAction: opt })} className={choiceClasses(data.mainAction === opt)}>
                <span>{opt}</span>
                {data.mainAction === opt && <Check size={16} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Referências */}
        <section>
          <label className={labelClasses}><Search size={14} className="text-slate-900" /> Tem alguma referência de SITE? (Links)</label>
          <input 
            type="text" 
            className="w-full px-8 py-6 rounded-[1.5rem] border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-black outline-none transition-all font-bold text-sm"
            placeholder="Cole os links de sites que você admira..."
            value={data.referenceLinks}
            onChange={(e) => update({ referenceLinks: e.target.value })}
          />
        </section>
      </div>
    </div>
  );
};

export default Step2;
