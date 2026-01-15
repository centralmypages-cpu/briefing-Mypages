
import React from 'react';
import { BriefingData } from '../types';
import { SEO_OPTIONS } from '../constants';
import { Search, Globe, Check, ShieldCheck, Sparkles, MessageSquarePlus } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step6: React.FC<Props> = ({ data, update }) => {
  const labelClasses = "block text-[10px] font-black text-black uppercase tracking-[0.4em] mb-6 flex items-center gap-2";
  
  const choiceClasses = (selected: boolean) => `
    group relative p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 text-[11px] font-black uppercase tracking-widest
    ${selected 
      ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
      : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
    }
  `;

  return (
    <div className="space-y-20 step-fade pb-10">
      <header>
        <div className="flex items-center gap-2 text-slate-900 mb-4">
          <Search size={20} />
          <span className="text-xs font-black uppercase tracking-[0.4em]">Etapa 6: Visibilidade & Domínio</span>
        </div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">Presença Digital</h2>
        <p className="text-slate-500 font-medium mt-3 text-lg leading-relaxed">
          Otimização para busca e endereço oficial. Defina como seu site será encontrado e acessado.
        </p>
      </header>

      <div className="space-y-24">
        {/* Otimização SEO */}
        <section>
          <label className={labelClasses}><Sparkles size={14} /> Otimização básica para o Google (SEO)?</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SEO_OPTIONS.map(opt => (
              <div key={opt} onClick={() => update({ seoOptimization: opt })} className={choiceClasses(data.seoOptimization === opt)}>
                <span className="leading-tight">{opt}</span>
                {data.seoOptimization === opt && <Check size={16} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
        </section>

        {/* Domínio */}
        <section className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl opacity-50"></div>
          
          <label className={labelClasses}><Globe size={14} /> Endereço na Web</label>
          <h3 className="text-slate-900 text-2xl font-black mb-8 tracking-tight">Você já possui um domínio registrado?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {[
              { id: 'Sim', label: 'Sim' },
              { id: 'Não, preciso de ajuda para registrar', label: 'Não, preciso de ajuda para registrar' }
            ].map(opt => (
              <div 
                key={opt.id} 
                onClick={() => update({ hasDomain: opt.id as any })} 
                className={choiceClasses(data.hasDomain === opt.id)}
              >
                <span className="leading-tight">{opt.label}</span>
                {data.hasDomain === opt.id && <ShieldCheck size={18} strokeWidth={3} className="text-amber-400" />}
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
            <Check size={12} className="text-emerald-500" /> Domínio é o seu endereço "www.suaempresa.com.br"
          </p>
        </section>

        {/* Observações Importantes */}
        <section>
          <label className={labelClasses}><MessageSquarePlus size={14} /> Observações Importantes</label>
          <textarea 
            className="w-full px-8 py-8 rounded-[2rem] border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-black outline-none transition-all font-bold text-sm h-48 resize-none"
            placeholder="Alguma informação adicional ou dúvida que você queira compartilhar com nossa equipe? Sinta-se à vontade para escrever..."
            value={data.extraObservations}
            onChange={(e) => update({ extraObservations: e.target.value })}
          />
        </section>
      </div>
    </div>
  );
};

export default Step6;
