const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  'https://dekoyng.com';

export const siteConfig = {
  companyName: 'DeKoy Limited',
  legalName: 'DeKoy Limited',
  tagline: 'Engineering Connectivity. Delivering Dependability.',
  url: resolvedSiteUrl.replace(/\/$/, ''),
  email: 'info@dekoyng.com',
  phone: '+234-8099444003',
  phones: ['+234-8099444003', '+234-8022224824'],
  addressLines: ['House 5B, Block 1,', 'Sapphire Lane,', 'Howson Wright Estate,', 'Olusesun, Ojota, Oregun, Lagos'],
  socials: {
    instagramHandle: '@DeKoyLimited',
    instagramUrl: 'https://www.instagram.com/DeKoyLimited',
    facebookName: 'DeKoy Limited',
    facebookUrl: 'https://www.facebook.com/DeKoyLimited'
  }
};

export const divisionLabels: Record<string, string> = {
  'real-estate-development': 'Real Estate Development',
  'real-estate-agency': 'Real Estate Agency',
  'engineering-services': 'Engineering Services',
  telecommunications: 'Telecommunications',
  'information-technology': 'Information Technology',
  'project-management': 'Project Management'
};
