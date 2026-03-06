export type Division = {
  id: string;
  name: string;
  summary: string;
  description: string;
  icon: string;
};

export type Service = {
  id: string;
  divisionId: string;
  title: string;
  shortDescription: string;
  capabilities: string[];
  deliverables: string[];
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  divisionId: string;
  categoryLabel?: string;
  location: string;
  year: string;
  summary: string;
  scope: string[];
  solution: string;
  outcomes: Array<{ label: string; value: string }>;
  servicesUsed: string[];
  image: string;
  gallery: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
