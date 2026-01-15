
import React from 'react';
import { BriefingData } from '../types';
import { WHATSAPP_TARGET_NUMBER } from '../constants';
import { MessageSquare, Copy, Rocket, Share2, CheckCircle2 } from 'lucide-react';

interface Props {
  data: BriefingData;
}

const Summary: React.FC<Props> = ({ data }) => {
  const generateSummaryText = () => {
    return `🚀 BRIEFING MYPAGES - ESTRATÉGIA PRONTA

ESTRUTURA: ${data.structureType}

--- 👤 DADOS DO CLIENTE ---
NOME: ${data.clientName}
EMPRESA: ${data.companyName}
CNPJ: ${data.cnpj || 'Não informado'}
WHATSAPP: ${data.whatsapp}
EMAIL: ${data.email}
SITE ATUAL: ${data.currentSite || 'Não possui'}
REDES: ${data.socialMedia}

--- 🎯 SOBRE O PROJETO ---
OBJETIVO: ${data.mainObjective}
AÇÃO PRINCIPAL: ${data.mainAction}
PÚBLICO: ${data.targetAgeRange}
DORES DO PÚBLICO: ${data.targetPainPoints}
FOCO DO CLIENTE: ${data.targetGoals}
OFERTA DEFINIDA: ${data.hasDefinedOffer}
DETALHES DA OFERTA: ${data.offerDetails || 'N/A'}
PROPOSTA DE VALOR: ${data.valueProposition}
DIFERENCIAIS: ${data.differentiator}
MATERIAIS: ${data.availableMaterials}
REFERÊNCIAS: ${data.referenceLinks}

--- 🎨 IDENTIDADE VISUAL & ESTÉTICA ---
POSSUI IDENTIDADE: ${data.visualIdentityStatus}
ESTILO DESEJADO: ${data.visualStyle}
REFERÊNCIAS VISUAIS: ${data.visualReferences || 'Nenhuma'}
DIREÇÃO VISUAL: ${data.visualDirection}
RESTRIÇÕES: ${data.visualRestrictions || 'Nenhuma'}

--- 🧱 FUNCIONALIDADES & ESTRUTURA ---
SEÇÕES OBRIGATÓRIAS: ${data.pageStructure}
INTEGRAÇÕES: ${data.integrations}
IDIOMAS: ${data.languages}
URGÊNCIA: ${data.deliveryUrgency}

--- 📈 SEO & ESTRATÉGIA ---
OTIMIZAÇÃO SEO: ${data.seoOptimization}

--- 🌐 DOMÍNIO & INFRA ---
POSSUI DOMÍNIO: ${data.hasDomain}

--- ✍️ OBSERVAÇÕES FINAIS ---
${data.extraObservations || 'Sem observações adicionais.'}

-------------------------
Protocolo seguro gerado via Briefing MyPages Experience.`;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateSummaryText());
    window.open(`https://wa.me/${WHATSAPP_TARGET_NUMBER}?text=${text}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSummaryText());
    alert("Protocolo copiado com sucesso para a área de transferência.");
  };

  return (
    <div className="space-y-12 text-center animate-in zoom-in duration-700">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-slate-900 text-white rounded-[2.5rem] flex items-center justify-center mb-10 shadow-3xl shadow-slate-200">
          <Rocket size={60} strokeWidth={1.5} />
        </div>
        <h2 className="text-5xl font-black text-black mb-4 tracking-tighter">Missão Cumprida.</h2>
        <p className="text-slate-500 max-w-lg mx-auto font-medium text-lg leading-relaxed">
          Seu briefing foi estruturado com os mais altos padrões de conversion design e estratégia digital Briefing MyPages.
        </p>
      </div>

      <div className="max-w-xl mx-auto py-6 px-10 bg-slate-900 rounded-[2rem] text-white flex items-center gap-6 shadow-2xl">
        <div className="bg-amber-400 p-3 rounded-xl text-black">
          <CheckCircle2 size={24} />
        </div>
        <p className="text-left text-sm font-bold leading-relaxed italic opacity-90">
          "Com base nas suas respostas, vamos estruturar um site pensado para posicionar, gerar confiança e atrair contatos qualificados."
        </p>
      </div>

      <div className="bg-white border-2 border-slate-100 p-10 rounded-[3rem] text-left relative overflow-hidden shadow-2xl group max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-black rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-black uppercase tracking-[0.4em]">Protocolo Estratégico MyPages</span>
          </div>
          <button onClick={handleCopy} className="p-3 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-2xl transition-all shadow-sm">
            <Copy size={20} />
          </button>
        </div>
        
        <div className="max-h-[350px] overflow-y-auto custom-scrollbar pr-6">
          <pre className="text-sm font-inter whitespace-pre-wrap leading-loose text-slate-700 font-medium">
            {generateSummaryText()}
          </pre>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 pb-10">
        <button
          onClick={handleSendWhatsApp}
          className="w-full md:w-auto flex items-center justify-center gap-4 px-14 py-6 bg-black text-white rounded-[1.5rem] font-black shadow-3xl hover:scale-[1.03] transition-all active:scale-95 text-lg"
        >
          <MessageSquare size={24} />
          <span>Enviar para Mypages</span>
        </button>
        
        <button
          onClick={handleCopy}
          className="w-full md:w-auto flex items-center justify-center gap-4 px-10 py-6 bg-white text-slate-900 rounded-[1.5rem] font-black border-2 border-slate-100 hover:border-black transition-all shadow-xl"
        >
          <Share2 size={24} />
          <span>Copiar</span>
        </button>
      </div>

      <footer className="pt-16 border-t border-slate-100">
        <div className="flex flex-col items-center gap-4 text-slate-300">
           <p className="text-[10px] font-black uppercase tracking-[0.5em] italic text-black">Protocolo seguro • Transmissão finalizada • Briefing MyPages Studio</p>
        </div>
      </footer>
    </div>
  );
};

export default Summary;
