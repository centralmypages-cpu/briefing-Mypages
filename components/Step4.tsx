
import React from 'react';
import { BriefingData } from '../types';
import { VISUAL_IDENTITY_OPTIONS, VISUAL_OPTIONS, VISUAL_DIRECTION_OPTIONS } from '../constants';
import { Palette, Star, Zap, Image as ImageIcon, Check, Sliders, EyeOff } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step4: React.FC<Props> = ({ data, update }) => {
  const labelClasses = "block text-[10px] font-black text-black uppercase tracking-[0.4em] mb-6 flex items-center gap-2";
  const inputClasses = "w-full px-8 py-5 rounded-[1.5rem] border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-black outline-none transition-all font-bold text-sm hover:border-slate-200";

  const choiceClasses = (selected: boolean) => `
    group relative p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 text-[11px] font-black uppercase tracking-widest
    ${selected 
      ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
      : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
    }
  `;

  return (
    <div className="space-y-20 step-fade">
      <header>
        <div className="flex items-center gap-2 text-slate-900 mb-4">
          <Palette size={20} />
          <span className="text-xs font-black uppercase tracking-[0.4em]">Etapa 4: Identidade Visual</span>
        </div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">O estilo da sua marca</h2>
        <p className="text-slate-500 font-medium mt-3 text-lg leading-relaxed">
          Defina a estética que fará sua marca ser impossível de ignorar. Design é a primeira camada de confiança.
        </p>
      </header>

      <div className="space-y-24">
        {/* Identidade Visual Definida */}
        <section>
          <label className={labelClasses}><ImageIcon size={14} /> Você já possui uma identidade visual definida?</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {VISUAL_IDENTITY_OPTIONS.map(opt => (
              <div key={opt} onClick={() => update({ visualIdentityStatus: opt })} className={choiceClasses(data.visualIdentityStatus === opt)}>
                <span className="leading-tight">{opt}</span>
                {data.visualIdentityStatus === opt && <Check size={16} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Estilo Visual Desejado */}
        <section>
          <label className={labelClasses}><Star size={14} /> Qual estilo mais combina com você e seu público?</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VISUAL_OPTIONS.map(opt => (
              <div key={opt} onClick={() => update({ visualStyle: opt })} className={choiceClasses(data.visualStyle === opt)}>
                <span className="leading-tight">{opt}</span>
                {data.visualStyle === opt && <Zap size={16} className="text-amber-400 fill-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Referências Visuais */}
        <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
          <label className={labelClasses}><Star size={14} /> Referências visuais (opcional)</label>
          <p className="text-xs font-bold text-black mb-6 -mt-2">Você tem sites ou marcas como referência visual? (Do seu mercado ou não)</p>
          <input 
            type="text" 
            className={inputClasses} 
            placeholder="🔗 Cole links ou nomes de marcas..." 
            value={data.visualReferences} 
            onChange={(e) => update({ visualReferences: e.target.value })} 
          />
        </section>

        {/* Direção Visual da Página */}
        <section>
          <label className={labelClasses}><Sliders size={14} /> Qual caminho você quer que sua página siga?</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VISUAL_DIRECTION_OPTIONS.map(opt => (
              <div key={opt} onClick={() => update({ visualDirection: opt })} className={choiceClasses(data.visualDirection === opt)}>
                <span className="leading-tight">{opt}</span>
                {data.visualDirection === opt && <Check size={16} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Restrições Visuais */}
        <section className="bg-black p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-slate-800/30 rounded-full blur-[80px] -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <label className="text-amber-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6 flex items-center gap-2">
              <EyeOff size={14} /> Restrições Visuais
            </label>
            <h3 className="text-white text-2xl font-black mb-6 tracking-tight">Existe algo que você NÃO quer ver no site?</h3>
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white placeholder-slate-600 outline-none focus:ring-4 focus:ring-amber-400/20 focus:border-amber-400 transition-all font-medium text-sm h-32 resize-none"
              placeholder="Ex: cores específicas, visual infantil, poluído, sério demais, etc."
              value={data.visualRestrictions}
              onChange={(e) => update({ visualRestrictions: e.target.value })}
            />
            <p className="mt-4 text-[9px] font-black text-slate-500 uppercase tracking-widest">✍️ Escreva um texto curto e objetivo</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Step4;
