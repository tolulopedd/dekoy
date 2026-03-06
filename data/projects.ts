import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'dtt-comfort-development-project',
    name: 'DTT Comfort Development Project',
    divisionId: 'real-estate-development',
    location: 'Forthright Estate, Punch, Ogun State',
    year: '2025',
    summary: 'Modern residential development project delivered for premium living and long-term asset value.',
    scope: ['Development planning', 'Sales and leasing support', 'Post-handover facility operations'],
    solution:
      'DeKoy coordinated site execution, tenant acquisition, and a structured facilities model to stabilize occupancy within the first quarter after handover.',
    outcomes: [
      { label: 'Units Delivered', value: '3 Duplex Units' },
      { label: 'Handover in 24 Months', value: '100%' },
      { label: 'Schedule Adherence', value: 'On Target' }
    ],
    servicesUsed: ['property-development-management', 'sales-leasing-acquisition', 'facility-estate-support'],
    image: '/assets/project-dtt-comfort.jpg',
    gallery: [
      '/assets/project-dtt-comfort.jpg',
      '/assets/project-dtt-comfort-2.jpg',
      '/assets/project-dtt-comfort-3.jpg'
    ]
  },
  {
    id: 'proj-2',
    slug: 'base-station-mast-power-management',
    name: 'Base Station Mast & Power Management',
    divisionId: 'telecommunications',
    categoryLabel: 'Telecoms Project',
    location: 'Nigeria',
    year: '2026',
    summary: 'Partnering to manage base stations and mast across Nigeria',
    scope: [
      'Base station and mast operations support',
      'Power systems monitoring and uptime management',
      'Field inspection, preventive maintenance, and escalation response'
    ],
    solution:
      'DeKoy deployed coordinated field and technical support teams to maintain mast infrastructure, improve power reliability, and strengthen service continuity across multiple locations in Nigeria.',
    outcomes: [
      { label: 'Managed Sites', value: 'Nationwide Coverage' },
      { label: 'Power Reliability', value: 'Improved Uptime' },
      { label: 'Operational Delivery', value: 'Consistent Performance' }
    ],
    servicesUsed: [
      'network-rollout-site-implementation',
      'transmission-power-ict-support',
      'telecom-site-operations-maintenance'
    ],
    image: '/assets/project-bsm-power-1.jpg',
    gallery: [
      '/assets/project-bsm-power-1.jpg',
      '/assets/project-bsm-power-2.jpg',
      '/assets/project-bsm-power-3.jpg'
    ]
  },
  {
    id: 'proj-3',
    slug: 'instiq-technology-office-renovation',
    name: 'InstiQ Technology Office Renovation',
    divisionId: 'real-estate-agency',
    location: 'Mainland, Lagos Nigeria',
    year: '2026',
    summary:
      'Commercial Office Renovation project focused on delivering of comfortable office space for our client..',
    scope: [
      'Workspace redesign and interior finishing',
      'Meeting room and executive office fit-out',
      'External facelift and access-area improvement'
    ],
    solution:
      'DeKoy executed a phased renovation approach that minimized disruption to business operations while delivering upgraded workspaces, improved finishes, and functional collaboration areas.',
    outcomes: [
      { label: 'Office Spaces Delivered', value: 'Renovated and Ready' },
      { label: 'Handover', value: 'Completed on Schedule' },
      { label: 'Client Satisfaction', value: 'Excellent' }
    ],
    servicesUsed: ['facility-estate-support', 'property-development-management'],
    image: '/assets/project-instiq-renovation-1.jpg',
    gallery: [
      '/assets/project-instiq-renovation-1.jpg',
      '/assets/project-instiq-renovation-2.jpg',
      '/assets/project-instiq-renovation-3.jpg'
    ]
  }
];
