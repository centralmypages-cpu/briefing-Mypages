
import React, { useState, useCallback, useMemo } from 'react';
import { BriefingData, StepKey } from './types';
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
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<BriefingData>(INITIAL_DATA);

  const updateFormData = useCallback((updates: Partial<BriefingData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  const totalSteps = 7;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const progress = useMemo(() => (step / totalSteps) * 100, [step, totalSteps]);

  const renderStep = () => {
    const props = { data: formData, update: updateFormData };
    switch (step) {
      case 1: return <Step1 {...props} />;
      case 2: return <Step3 {...props} />;
      case 3: return <Step2 {...props} />;
      case 4: return <Step4 {...props} />;
      case 5: return <Step5 {...props} />;
      case 6: return <Step6 {...props} />;
      case 7: return <Summary data={formData} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 md:py-20 max-w-7xl mx-auto">
      <div className="w-full max-w-4xl">
        <header className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded-xl text-white shadow-2xl">
              <Hexagon size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-black leading-none uppercase">Briefing MyPages</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-2 text-black">Conversion Experience v2.0</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col items-end">
              <p className="text-[10px] font-black text-black uppercase tracking-widest mb-2">Progresso Estratégico</p>
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-black">{Math.round(progress)}%</span>
                <div className="w-40 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black transition-all duration-1000 ease-in-out" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
            <div className="flex items-center gap-2 text-emerald-600 px-4 py-2 bg-emerald-50 rounded-full">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-black uppercase tracking-wider">Secure Protocol</span>
            </div>
          </div>
        </header>

        <main className="glass-ui rounded-[3rem] p-8 md:p-16 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50 overflow-hidden">
            <div 
              className="h-full bg-black/5 transition-all duration-700" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          
          <div className="step-fade">
            {renderStep()}
          </div>
        </main>

        {step < totalSteps && (
          <nav className="flex items-center justify-between px-6">
            <button
              type="button"
              onClick={prevStep}
              className={`flex items-center gap-2 px-8 py-5 rounded-2xl font-bold transition-all text-sm
                ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-black hover:bg-white border border-transparent hover:border-slate-100 shadow-sm hover:shadow-lg'}`}
            >
              <ChevronLeft size={18} />
              <span>Voltar</span>
            </button>

            <button
              type="button"
              onClick={nextStep}
              disabled={step === 1 && !formData.structureType}
              className="group flex items-center gap-3 px-12 py-5 bg-black text-white rounded-2xl font-bold text-sm shadow-2xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-30 disabled:grayscale disabled:pointer-events-none"
            >
              <span>{step === totalSteps - 1 ? 'Gerar Briefing Final' : 'Avançar'}</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>
        )}
      </div>

      <footer className="mt-24 border-t border-slate-200 pt-8 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4 opacity-40">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">Briefing MyPages Elite Studio &copy; {new Date().getFullYear()}</p>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">Design & Conversion Expert Unit</p>
      </footer>
    </div>
  );
};

export default App;
