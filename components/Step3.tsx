
import React from 'react';
import { BriefingData } from '../types';
import { User, Shield, Phone, Mail, Instagram, MapPin, Briefcase, Globe } from 'lucide-react';

interface Props {
  data: BriefingData;
  update: (updates: Partial<BriefingData>) => void;
}

const Step3: React.FC<Props> = ({ data, update }) => {
  const labelClasses = "block text-[10px] font-black text-black uppercase tracking-[0.3em] mb-3 px-1";
  const inputWrapperClasses = "group relative transition-all mb-6";
  const iconClasses = "absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-black transition-colors";
  const inputClasses = "w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-black focus:ring-0 outline-none transition-all font-bold text-sm hover:border-slate-200";

  return (
    <div className="space-y-8 step-fade">
      <header>
        <div className="flex items-center gap-2 text-black mb-2">
          <User size={18} />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Etapa 2: Identificação</span>
        </div>
        <h2 className="text-3xl font-black text-black tracking-tighter leading-tight">Dados do Cliente</h2>
        <p className="text-slate-500 font-medium mt-2 text-sm md:text-base">
          Esses dados são essenciais para formalizarmos nossa parceria.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <div className={inputWrapperClasses}>
          <label className={labelClasses}>Nome Completo *</label>
          <div className="relative">
            <User className={iconClasses} size={18} />
            <input type="text" className={inputClasses} placeholder="Ex: Ana Clara Silva" value={data.clientName} onChange={(e) => update({ clientName: e.target.value })} />
          </div>
        </div>

        <div className={inputWrapperClasses}>
          <label className={labelClasses}>Nome da Empresa / Marca</label>
          <div className="relative">
            <Briefcase className={iconClasses} size={18} />
            <input type="text" className={inputClasses} placeholder="Ex: Studio Digital Pro" value={data.companyName} onChange={(e) => update({ companyName: e.target.value })} />
          </div>
        </div>
        
        <div className={inputWrapperClasses}>
          <label className={labelClasses}>WhatsApp *</label>
          <div className="relative">
            <Phone className={iconClasses} size={18} />
            <input type="tel" className={inputClasses} placeholder="+55 (11) 99999-9999" value={data.whatsapp} onChange={(e) => update({ whatsapp: e.target.value })} />
          </div>
        </div>

        <div className={inputWrapperClasses}>
          <label className={labelClasses}>E-mail Comercial</label>
          <div className="relative">
            <Mail className={iconClasses} size={18} />
            <input type="email" className={inputClasses} placeholder="contato@suaempresa.com" value={data.email} onChange={(e) => update({ email: e.target.value })} />
          </div>
        </div>

        <div className="col-span-full">
          <label className={labelClasses}>Redes Sociais</label>
          <div className={inputWrapperClasses}>
            <Instagram className={iconClasses} size={18} />
            <input type="text" className={inputClasses} placeholder="Ex: @seuperfil" value={data.socialMedia} onChange={(e) => update({ socialMedia: e.target.value })} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
