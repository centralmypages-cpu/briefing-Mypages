
import React from 'react';
import { BriefingData } from '../types';
import { User, Shield, Phone, Mail, Instagram, MapPin, Briefcase, Globe } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step3: React.FC<Props> = ({ data, update }) => {
  const labelClasses = "block text-[10px] font-black text-black uppercase tracking-[0.3em] mb-3 px-2";
  const inputWrapperClasses = "group relative transition-all";
  const iconClasses = "absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-black transition-colors";
  const inputClasses = "w-full pl-16 pr-8 py-5 rounded-[1.5rem] border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-black focus:ring-0 outline-none transition-all font-bold text-sm hover:border-slate-200";

  return (
    <div className="space-y-16 step-fade">
      <header>
        <div className="flex items-center gap-2 text-black mb-4">
          <User size={20} />
          <span className="text-xs font-black uppercase tracking-[0.4em]">Etapa 2: Identificação da Marca</span>
        </div>
        <h2 className="text-4xl font-black text-black tracking-tighter leading-tight">Dados do Cliente</h2>
        <p className="text-slate-500 font-medium mt-3 text-lg leading-relaxed">
          Precisamos desses detalhes para construir uma fundação sólida para o seu projeto.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        <div>
          <label className={labelClasses}>Nome Completo</label>
          <div className={inputWrapperClasses}>
            <User className={iconClasses} size={20} />
            <input type="text" className={inputClasses} placeholder="Ex: Ana Clara Silva" value={data.clientName} onChange={(e) => update({ clientName: e.target.value })} />
          </div>
        </div>

        <div>
          <label className={labelClasses}>Nome da Empresa / Marca</label>
          <div className={inputWrapperClasses}>
            <Briefcase className={iconClasses} size={20} />
            <input type="text" className={inputClasses} placeholder="Ex: Studio Digital Pro" value={data.companyName} onChange={(e) => update({ companyName: e.target.value })} />
          </div>
        </div>
        
        <div>
          <label className={labelClasses}>CNPJ (Caso tenha)</label>
          <div className={inputWrapperClasses}>
            <Shield className={iconClasses} size={20} />
            <input type="text" className={inputClasses} placeholder="00.000.000/0001-00" value={data.cnpj} onChange={(e) => update({ cnpj: e.target.value })} />
          </div>
        </div>
        
        <div>
          <label className={labelClasses}>WhatsApp para Contato</label>
          <div className={inputWrapperClasses}>
            <Phone className={iconClasses} size={20} />
            <input type="tel" className={inputClasses} placeholder="+55 (11) 99999-9999" value={data.whatsapp} onChange={(e) => update({ whatsapp: e.target.value })} />
          </div>
        </div>

        <div className="col-span-full">
          <label className={labelClasses}>E-mail Comercial</label>
          <div className={inputWrapperClasses}>
            <Mail className={iconClasses} size={20} />
            <input type="email" className={inputClasses} placeholder="contato@suaempresa.com" value={data.email} onChange={(e) => update({ email: e.target.value })} />
          </div>
        </div>

        <div className="col-span-full">
          <label className={labelClasses}>Site Atual (Caso exista)</label>
          <div className={inputWrapperClasses}>
            <Globe className={iconClasses} size={20} />
            <input type="text" className={inputClasses} placeholder="www.seusiteatual.com.br" value={data.currentSite} onChange={(e) => update({ currentSite: e.target.value })} />
          </div>
        </div>

        <div className="col-span-full">
          <label className={labelClasses}>Redes Sociais da Marca</label>
          <div className={inputWrapperClasses}>
            <Instagram className={iconClasses} size={20} />
            <input type="text" className={inputClasses} placeholder="Ex: @instagram, @tiktok, youtube.com/canal" value={data.socialMedia} onChange={(e) => update({ socialMedia: e.target.value })} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
