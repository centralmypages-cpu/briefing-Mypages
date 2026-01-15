
export interface BriefingData {
  // Step 1: Estrutura
  structureType: 'Página de Vendas' | 'Site Profissional' | '';

  // Step 2: Identificação do Cliente
  clientName: string;
  companyName: string;
  cnpj?: string;
  whatsapp: string;
  email: string;
  currentSite?: string;
  socialMedia: string;
  businessArea: string;
  location: string;

  // Step 3: Sobre o Projeto
  mainObjective: string;
  targetAgeRange: string;
  targetPainPoints: string;
  targetGoals: string;
  hasDefinedOffer: 'Sim' | 'Não' | '';
  offerDetails: string;
  valueProposition: string;
  differentiator: string;
  availableMaterials: string; 
  mainAction: string;
  referenceLinks: string;

  // Step 4: Identidade Visual
  visualIdentityStatus: string; 
  visualStyle: string; 
  visualReferences: string; 
  visualDirection: string; 
  visualRestrictions: string; 

  // Step 5: Funcionalidades e Estrutura
  pageStructure: string; 
  integrations: string; 
  languages: string; 
  deliveryUrgency: string; 

  // Step 6: SEO & Estratégia
  seoOptimization: string;
  keywords: string;
  searchPhrase: string;
  trackingTools: string;
  adPixels: string;

  // Step 7: Domínio e Publicação (Agora integrado na Step 6)
  hasDomain: 'Sim' | 'Não, preciso de ajuda para registrar' | '';
  domainSupport: 'Sim' | 'Não' | '';
  activeTraffic: 'Sim' | 'Não' | '';
  trafficPlatforms: string;
  extraObservations: string;
  
  // Campo legado
  contactChannel: string;
}

export type StepKey = 1 | 2 | 3 | 4 | 5 | 6 | 7;
