
import React from 'react';
import { BriefingData } from '../types';
import { WHATSAPP_TARGET_NUMBER } from '../constants';
import { MessageSquare, Copy, Rocket, Share2, CheckCircle2, RefreshCcw } from 'lucide-react';

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
    alert("Protocolo copiado com sucesso!");
  };

  const handleReset = () => {
    if (confirm("Deseja iniciar um novo briefing? Isso apagará os dados atuais.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 md:space-y-12 text-center animate-in zoom-in duration-700 pb-10">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 text-white rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mb-6 md:mb-10 shadow-3xl shadow-slate-200">
          <Rocket size={48} md:size={60} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-black mb-4 tracking-tighter">Missão Cumprida.</h2>
        <p className="text-slate-500 max-w-lg mx-auto font-medium text-base md:text-lg leading-relaxed px-4">
          Seu briefing foi estruturado com os mais altos padrões de conversion design MyPages.
        </p>
      </div>

      <div className="max-w-xl mx-auto py-5 px-6 md:py-6 md:px-10 bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] text-white flex items-center gap-4 md:gap-6 shadow-2xl">
        <div className="bg-amber-400 p-2 md:p-3 rounded-xl text-black shrink-0">
          <CheckCircle2 size={20} md:size={24} />
        </div>
        <p className="text-left text-xs md:text-sm font-bold leading-relaxed italic opacity-90">
          "Estratégia finalizada. Envie agora para nossa equipe via WhatsApp."
        </p>
      </div>

      <div className="bg-white border-2 border-slate-100 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-left relative overflow-hidden shadow-2xl group max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6 md:mb-10 border-b border-slate-50 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span className="text-[8px] md:text-[10px] font-black text-black uppercase tracking-[0.4em]">Protocolo Estratégico</span>
          </div>
          <button onClick={handleCopy} className="p-2 md:p-3 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-xl transition-all">
            <Copy size={18} md:size={20} />
          </button>
        </div>
        
        <div className="max-h-[300px] md:max-h-[350px] overflow-y-auto custom-scrollbar pr-4">
          <pre className="text-xs md:text-sm font-inter whitespace-pre-wrap leading-relaxed text-slate-700 font-medium">
            {generateSummaryText()}
          </pre>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-6 mt-10 md:mt-16">
        <button
          onClick={handleSendWhatsApp}
          className="w-full md:w-auto flex items-center justify-center gap-4 px-10 py-5 md:px-14 md:py-6 bg-black text-white rounded-[1.5rem] font-black shadow-3xl hover:scale-[1.03] transition-all active:scale-95 text-base md:text-lg"
        >
          <MessageSquare size={20} md:size={24} />
          <span>Enviar WhatsApp</span>
        </button>
        
        <div className="flex flex-wrap justify-center gap-3 w-full">
          <button
            onClick={handleCopy}
            className="flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 bg-white text-slate-900 rounded-[1.2rem] font-black border-2 border-slate-100 hover:border-black transition-all shadow-xl text-xs uppercase tracking-widest"
          >
            <Share2 size={18} />
            <span>Copiar</span>
          </button>

          <button
            onClick={handleReset}
            className="flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 bg-slate-50 text-slate-400 rounded-[1.2rem] font-black border-2 border-transparent hover:text-red-500 hover:bg-red-50 transition-all text-xs uppercase tracking-widest"
          >
            <RefreshCcw size={18} />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
