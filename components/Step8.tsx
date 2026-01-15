
import React from 'react';
import { BriefingData } from '../types';
import { Globe, ShieldCheck } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step8: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Domínio e Publicação</h2>
        <p className="text-slate-500 text-sm">O endereço digital do seu negócio.</p>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="text-indigo-600" size={20} />
            <span className="font-bold text-slate-700">Você já possui domínio?</span>
          </div>
          <div className="flex space-x-4">
            {['Sim', 'Não'].map(opt => (
              <button
                key={opt}
                onClick={() => update({ hasDomain: opt as any })}
                className={`flex-1 py-4 rounded-2xl border-2 font-bold transition-all ${
                  data.hasDomain === opt 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' 
                  : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <ShieldCheck className="text-indigo-600" size={20} />
            <span className="font-bold text-slate-700">Deseja suporte para configuração?</span>
          </div>
          <div className="flex space-x-4">
            {['Sim', 'Não'].map(opt => (
              <button
                key={opt}
                onClick={() => update({ domainSupport: opt as any })}
                className={`flex-1 py-4 rounded-2xl border-2 font-bold transition-all ${
                  data.domainSupport === opt 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' 
                  : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
          <p className="text-slate-600 text-sm leading-relaxed text-center italic">
            "Com base nas suas respostas, vamos estruturar um site pensado para posicionar, gerar confiança e atrair contatos qualificados."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step8;
