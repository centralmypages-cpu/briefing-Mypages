
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { BriefingData } from './types';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import Summary from './components/Summary';
import { ChevronRight, ChevronLeft, Hexagon, ShieldCheck } from 'lucide-react';

const INITIAL_DATA: BriefingData = {
  structureType: '',
  clientName: '',
  companyName: '',
  cnpj: '',
  whatsapp: '',
  email: '',
  currentSite: '',
  socialMedia: '',
  businessArea: '',
  location: '',
  mainObjective: '',
  targetAgeRange: '',
  targetPainPoints: '',
  targetGoals: '',
  hasDefinedOffer: '',
  offerDetails: '',
  valueProposition: '',
  differentiator: '',
  availableMaterials: '',
  mainAction: '',
  referenceLinks: '',
  visualIdentityStatus: '',
  visualStyle: '',
  visualReferences: '',
  visualDirection: '',
  visualRestrictions: '',
  pageStructure: '',
  integrations: '',
  languages: 'Não (Apenas Português)',
  deliveryUrgency: 'Padrão',
  seoOptimization: 'Apenas configuração básica',
  keywords: '',
  searchPhrase: '',
  trackingTools: '',
  adPixels: '',
  hasDomain: '',
  domainSupport: '',
  activeTraffic: '',
  trafficPlatforms: '',
  extraObservations: '',
  contactChannel: ''
};

const App: React.FC = () => {
  const [step, setStep] = useState<number>(() => {
    try {
      const savedStep = localStorage.getItem('briefing_step');
      return savedStep ? Math.min(parseInt(savedStep, 10), 7) : 1;
    } catch { return 1; }
  });

  const [formData, setFormData] = useState<BriefingData>(() => {
    try {
      const savedData = localStorage.getItem('briefing_data');
      return savedData ? { ...INITIAL_DATA, ...JSON.parse(savedData) } : INITIAL_DATA;
    } catch { return INITIAL_DATA; }
  });

  useEffect(() => {
    localStorage.setItem('briefing_data', JSON.stringify(formData));
    localStorage.setItem('briefing_step', step.toString());
  }, [formData, step]);

  const updateFormData = useCallback((updates: Partial<BriefingData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  const totalSteps = 7;

  // Validação em tempo real para evitar travamentos ao tentar avançar com dados nulos
  const isCurrentStepValid = useMemo(() => {
    switch (step) {
      case 1: return !!formData.structureType;
      case 2: return !!formData.clientName && !!formData.whatsapp; // Step 3 (Identificação)
      default: return true;
    }
  }, [step, formData]);

  const nextStep = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!isCurrentStepValid) return;

    setStep(prev => {
      const next = Math.min(prev + 1, totalSteps);
      // Timeout curto garante que o DOM atualizou antes de rolar, evitando "engasgos" no mobile
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
      return next;
    });
  }, [totalSteps, isCurrentStepValid]);

  const prevStep = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setStep(prev => {
      const next = Math.max(prev - 1, 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
      return next;
    });
  }, []);

  const progress = useMemo(() => (step / totalSteps) * 100, [step, totalSteps]);

  const renderStep = () => {
    const props = { data: formData, update: updateFormData };
    switch (step) {
      case 1: return <Step1 {...props} />;
      case 2: return <Step3 {...props} />; // Identificação
      case 3: return <Step2 {...props} />; // Sobre o Projeto
      case 4: return <Step4 {...props} />; // Visual
      case 5: return <Step5 {...props} />; // Estrutura
      case 6: return <Step6 {...props} />; // SEO/Domínio
      case 7: return <Summary data={formData} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col items-center py-4 px-4 md:py-12 max-w-7xl mx-auto min-h-screen selection:bg-black selection:text-white">
      <div className="w-full max-w-4xl flex flex-col min-h-[85vh]">
        <header className="mb-6 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-4 px-2">
          <div className="flex items-center gap-4">
            <div className="bg-black p-2.5 rounded-xl text-white shadow-2xl shrink-0">
              <Hexagon size={22} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-black tracking-tighter text-black leading-none uppercase">Briefing MyPages</h1>
              <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-1">Mobile Optimized v2.2</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex flex-col items-end">
              <p className="text-[8px] font-black text-black uppercase tracking-widest mb-1">Progresso</p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-black">{Math.round(progress)}%</span>
                <div className="w-20 md:w-40 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black transition-all duration-1000 ease-in-out" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full shrink-0">
              <ShieldCheck size={12} />
              <span className="text-[8px] font-black uppercase tracking-wider">Secure</span>
            </div>
          </div>
        </header>

        <main className="glass-ui rounded-[2rem] md:rounded-[3rem] p-4 md:p-16 mb-6 relative overflow-hidden flex-grow shadow-3xl shadow-slate-200/40">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-50/50">
            <div 
              className="h-full bg-black/10 transition-all duration-700" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          
          <div className="step-fade h-full overflow-y-auto max-h-[65vh] md:max-h-none custom-scrollbar">
            {renderStep()}
          </div>
        </main>

        {step < totalSteps && (
          <nav className="flex items-center justify-between px-2 gap-4 pb-6 mt-auto">
            <button
              type="button"
              onClick={prevStep}
              className={`flex items-center justify-center gap-2 h-12 px-5 md:px-8 rounded-xl font-bold transition-all text-xs
                ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-black hover:bg-white border border-transparent hover:border-slate-100'}`}
            >
              <ChevronLeft size={16} />
              <span>Voltar</span>
            </button>

            <button
              type="button"
              onClick={nextStep}
              disabled={!isCurrentStepValid}
              className={`group flex items-center justify-center gap-2 h-12 flex-grow md:flex-none md:px-12 bg-black text-white rounded-xl font-bold text-xs shadow-2xl transition-all active:scale-95 disabled:opacity-20 disabled:pointer-events-none
              ${!isCurrentStepValid ? 'grayscale' : 'hover:scale-[1.02] shadow-black/10'}`}
            >
              <span>{step === totalSteps - 1 ? 'Finalizar Briefing' : 'Avançar'}</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>
        )}
      </div>

      <footer className="mt-2 border-t border-slate-100 pt-4 w-full max-w-4xl flex items-center justify-center opacity-20 pb-6">
        <p className="text-[7px] font-bold uppercase tracking-[0.4em] text-black">MyPages Elite Experience &copy; 2025</p>
      </footer>
    </div>
  );
};

export default App;
