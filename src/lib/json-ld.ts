import { Metadata } from 'next';

// Define the JSON-LD schema for Organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Neurelix",
  "alternateName": "Neurelix Soluções Full-Stack",
  "url": "https://neurelix.com.br",
  "logo": "https://neurelix.com.br/logo.png",
  "description": "Neurelix entrega páginas, apps e funcionalidades de IA/sistemas sob medida com custo acessível.",
  "email": process.env.EMAIL_PROFISSIONAL || "contato@neurelix.com.br",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-66-XXXXXXXXX",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": ["Portuguese", "English"]
  },
  "sameAs": [
    "https://github.com/Giuseph66",
    process.env.LINKEDIN_URL || "https://linkedin.com/in/giuseph-giangareli"
  ],
  "foundingDate": "2022",
  "founder": {
    "@type": "Person",
    "name": "Giuseph Giangareli"
  },
  "knowsAbout": [
    "IA",
    "Automação",
    "Desenvolvimento Full-Stack",
    "Sistemas Web",
    "APIs",
    "Aplicações sob medida",
    "WhatsApp Business API",
    "Integrações"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Brazil"
  },
  "serviceType": [
    "Software Development",
    "AI Solutions",
    "Automation",
    "Web Development",
    "App Development",
    "API Integrations"
  ]
};

// Define the JSON-LD schema for Person
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Giuseph Giangareli",
  "jobTitle": "Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Neurelix"
  },
  "url": "{{LINKEDIN_URL}}",
  "sameAs": [
    "https://github.com/Giuseph66",
    process.env.LINKEDIN_URL || "https://linkedin.com/in/giuseph-giangareli"
  ]
};

// Function to get organization JSON-LD script tag
export const getOrganizationJsonLd = () => {
  return {
    __html: JSON.stringify(organizationSchema)
  };
};

// Function to get person JSON-LD script tag
export const getPersonJsonLd = () => {
  return {
    __html: JSON.stringify(personSchema)
  };
};