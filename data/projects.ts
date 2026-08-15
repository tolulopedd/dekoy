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
    name: 'Telecommunications Mast & Power Management',
    divisionId: 'telecommunications',
    categoryLabel: 'Telecoms Project',
    location: 'Nigeria',
    year: '2026',
    summary: 'Providing innovative, dependable and cost-effective solutions that enable our clients to build, operate and maintain reliable communications networks.',
    scope: [
      'Telecom infrastructure deployment, installation, integration and site implementation',
      'Base station, tower/mast and associated infrastructure engineering support',
      'Power systems installation, maintenance, optimization and uptime management',
      'Preventive and corrective maintenance of telecom infrastructure',
      'Technical Site Surveys (TSS), site audits, inspections and infrastructure assessments',
      'Network rollout, upgrade, expansion and modernization support',
      'Equipment installation, commissioning, testing and acceptance',
      'Project implementation, coordination and technical supervision',
      'Vendor, contractor and field resource management',
      'Quality assurance, HSSE compliance and project documentation'
    ],
    solution:
      'DeKoy delivers integrated telecom infrastructure engineering solutions covering site implementation, infrastructure deployment, power systems, technical support, maintenance and project coordination. Our engineering and field teams work across multiple locations to enhance infrastructure reliability, operational performance and service continuity.',
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
    image: '/assets/project-telecom-mast-1.jpg',
    gallery: [
      '/assets/project-telecom-mast-1.jpg',
      '/assets/project-telecom-mast-2.jpg',
      '/assets/project-telecom-mast-3.jpg',
      '/assets/project-telecom-collage.jpg'
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
