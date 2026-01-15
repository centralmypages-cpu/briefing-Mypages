
import React from 'react';
import { BriefingData } from '../types';
import { TRAFFIC_PLATFORM_OPTIONS } from '../constants';
import { Megaphone, Check, Rocket } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step7: React.FC<Props> = ({ data, update }) => {
  const labelClasses = "block text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 flex items-center gap-2";
  
  const choiceClasses = (selected: boolean) => `
    group relative p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-widest
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
          <Megaphone size={20} />
          <span className="text-xs font-black uppercase tracking-[0.4em]">Etapa 7: Tráfego & Lançamento</span>
        </div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">Estratégia de Aquisição</h2>
        <p className="text-slate-500 font-medium mt-3 text-lg leading-relaxed">
          Como os clientes chegarão até você. Defina seus canais de tráfego para o novo projeto.
        </p>
      </header>

      <div className="space-y-24">
        {/* Tráfego Ativo */}
        <section className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100 space-y-12">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
            <Megaphone className="text-slate-900" size={24} />
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Canais de Aquisição</h3>
          </div>

          <div className="space-y-10">
            <section>
              <label className={labelClasses}>Você já possui campanhas de tráfego rodando hoje?</label>
              <div className="flex gap-4">
                {['Sim', 'Não'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => update({ activeTraffic: opt as any })}
                    className={`px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${data.activeTraffic === opt ? 'bg-black text-white shadow-xl' : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-100'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </section>

            {data.activeTraffic === 'Sim' && (
              <section className="animate-in fade-in slide-in-from-top-4 duration-500">
                <label className={labelClasses}>Em qual plataforma?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {TRAFFIC_PLATFORM_OPTIONS.map(opt => (
                    <div key={opt} onClick={() => toggleSelection('trafficPlatforms', opt)} className={choiceClasses(data.trafficPlatforms.includes(opt))}>
                      <span>{opt}</span>
                      {data.trafficPlatforms.includes(opt) && <Check size={14} strokeWidth={3} className="text-amber-400" />}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>

        {/* Mensagem de Apoio */}
        <div className="bg-black p-10 rounded-[3rem] text-center border border-white/10 shadow-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 text-amber-400">
            <Rocket size={32} />
          </div>
          <p className="text-white font-medium text-lg leading-relaxed max-w-xl mx-auto italic opacity-80">
            "Com base nas suas respostas, vamos estruturar um site pensado para posicionar, gerar confiança e atrair contatos qualificados."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step7;
