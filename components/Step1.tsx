
import React from 'react';
import { BriefingData } from '../types';
import { STRUCTURE_OPTIONS } from '../constants';
import { Sparkles, Monitor, Rocket, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step1: React.FC<Props> = ({ data, update }) => {
  const handleSelect = (id: 'Página de Vendas' | 'Site Profissional') => {
    // Apenas atualiza o dado, sem avançar de etapa
    update({ structureType: id });
  };

  return (
    <div className="space-y-12">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl">
          <Sparkles size={12} className="text-amber-400" /> Start Project
        </div>
        <h2 className="text-5xl font-black text-black mb-6 tracking-tighter leading-tight">
          O que vamos construir hoje?
        </h2>
        <p className="text-slate-500 font-medium text-lg leading-relaxed">
          Selecione a fundação estratégica do seu projeto. Clique na opção desejada e depois em "Avançar" para continuar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {STRUCTURE_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => handleSelect(opt.id as any)}
            className={`choice-card relative text-left p-10 rounded-[2.5rem] border-2 transition-all duration-500 outline-none ${
              data.structureType === opt.id 
              ? 'bg-black border-black text-white shadow-2xl scale-[1.02]' 
              : 'bg-white border-slate-100 text-slate-900 hover:border-slate-300 hover:shadow-xl'
            }`}
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 ${
              data.structureType === opt.id ? 'bg-white/10 text-white rotate-6' : 'bg-slate-50 text-slate-900'
            }`}>
              {opt.id === 'Página de Vendas' ? <Rocket size={40} strokeWidth={1.5} /> : <Monitor size={40} strokeWidth={1.5} />}
            </div>
            
            <h3 className="font-black text-2xl mb-3 tracking-tight">{opt.title}</h3>
            <p className={`font-medium text-sm leading-relaxed mb-6 ${data.structureType === opt.id ? 'text-slate-400' : 'text-slate-500'}`}>
              {opt.description}
            </p>

            <div className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${
              data.structureType === opt.id ? 'text-amber-400' : 'text-slate-400'
            }`}>
              {data.structureType === opt.id ? (
                <>
                  <CheckCircle2 size={16} className="text-amber-400" />
                  <span>Selecionado - Clique em Avançar</span>
                </>
              ) : (
                <>
                  <span>Configurar este modelo</span>
                  <ChevronRight size={14} />
                </>
              )}
            </div>

            {data.structureType === opt.id && (
              <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)] animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step1;
