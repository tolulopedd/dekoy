import { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'property-development-management',
    divisionId: 'real-estate-development',
    title: 'Property Development and Management',
    shortDescription:
      'Structured development delivery from concept validation to occupancy and post-handover asset management.',
    capabilities: [
      'Feasibility planning and development strategy',
      'Contractor coordination and quality tracking',
      'Tenant onboarding and operations stabilization'
    ],
    deliverables: ['Development schedule', 'Cost and risk register', 'Operational handover pack']
  },
  {
    id: 'master-planning-design-coordination',
    divisionId: 'real-estate-development',
    title: 'Master Planning and Design Coordination',
    shortDescription:
      'Integrated planning coordination that aligns design, approvals, and phased execution for predictable project outcomes.',
    capabilities: [
      'Master planning support and concept alignment',
      'Consultant and authority coordination',
      'Design review, milestones, and change control'
    ],
    deliverables: ['Development brief', 'Design coordination tracker', 'Approval status register']
  },
  {
    id: 'real-estate-consultancy',
    divisionId: 'real-estate-agency',
    title: 'Real Estate Consultancy and Advisory Services',
    shortDescription:
      'Data-backed advisory support for acquisitions, investment positioning, and portfolio optimization.',
    capabilities: [
      'Market intelligence and highest-best-use studies',
      'Portfolio diagnostics and restructuring insights',
      'Transaction support documentation'
    ],
    deliverables: ['Advisory brief', 'Investment memo', 'Decision matrix']
  },
  {
    id: 'sales-leasing-acquisition',
    divisionId: 'real-estate-agency',
    title: 'Property Sales, Leasing, and Acquisition',
    shortDescription:
      'Commercial support for property sales, tenant leasing pipelines, and strategic acquisitions.',
    capabilities: [
      'Property marketing and lead qualification',
      'Lease negotiation support and closure tracking',
      'Acquisition due-diligence coordination'
    ],
    deliverables: ['Sales and leasing plan', 'Acquisition checklist', 'Deal closure report']
  },
  {
    id: 'facility-estate-support',
    divisionId: 'real-estate-agency',
    title: 'Facility and Estate Management Support',
    shortDescription:
      'Reliable estate operations support with preventive maintenance, vendor governance, and service quality controls.',
    capabilities: [
      'Service-level monitoring across facility vendors',
      'Planned preventive maintenance scheduling',
      'Incident response and compliance documentation'
    ],
    deliverables: ['Maintenance calendar', 'Vendor performance report', 'Compliance checklist']
  },
  {
    id: 'civil-electrical-infrastructure',
    divisionId: 'engineering-services',
    title: 'Civil, Electrical, and Infrastructure Support Services',
    shortDescription:
      'Integrated field engineering support for civil works, electrical systems, and infrastructure reliability.',
    capabilities: [
      'Site surveys and condition assessments',
      'Civil works coordination and supervision',
      'Electrical infrastructure checks and upgrades'
    ],
    deliverables: ['Engineering assessment report', 'Infrastructure support plan', 'Quality assurance logs']
  },
  {
    id: 'project-execution-supervision',
    divisionId: 'engineering-services',
    title: 'Engineering Project Execution and Supervision',
    shortDescription:
      'Disciplined project execution services with schedule control, technical supervision, and governance reporting.',
    capabilities: [
      'Project work breakdown and resource planning',
      'On-site supervision and contractor governance',
      'Progress, risk, and quality reporting'
    ],
    deliverables: ['Execution plan', 'Weekly progress dashboard', 'Final completion dossier']
  },
  {
    id: 'installations-maintenance',
    divisionId: 'engineering-services',
    title: 'Technical Installations and Maintenance',
    shortDescription:
      'Technical installations delivered to specification, with preventive and corrective maintenance services.',
    capabilities: [
      'System installation and commissioning',
      'Preventive maintenance routines',
      'Corrective maintenance and troubleshooting'
    ],
    deliverables: ['Commissioning certificate', 'Maintenance SLA plan', 'Fault resolution report']
  },
  {
    id: 'network-rollout-site-implementation',
    divisionId: 'telecommunications',
    title: 'Network Rollout and Site Implementation Support',
    shortDescription:
      'Regional rollout support for telecom expansion programs with fast, controlled site implementation.',
    capabilities: [
      'Site readiness audits and mobilization',
      'Field deployment coordination',
      'Acceptance testing and handover support'
    ],
    deliverables: ['Rollout tracker', 'Site acceptance pack', 'Deployment completion report']
  },
  {
    id: 'telecom-site-operations-maintenance',
    divisionId: 'telecommunications',
    title: 'Telecom Site Operations and Maintenance',
    shortDescription:
      'Structured field maintenance for base stations and related telecom assets to sustain uptime and service continuity.',
    capabilities: [
      'Routine field inspections and preventive maintenance',
      'Corrective response management and escalation handling',
      'Site condition reporting and service performance tracking'
    ],
    deliverables: ['Site maintenance schedule', 'Incident and restoration log', 'Operations performance report']
  },
  {
    id: 'it-installation-integration-maintenance',
    divisionId: 'information-technology',
    title: 'IT Installation, Integration, and Maintenance Services',
    shortDescription:
      'Installation and systems integration services that improve performance and reduce downtime.',
    capabilities: [
      'Hardware and software integration',
      'Configuration validation and optimization',
      'Routine and emergency maintenance support'
    ],
    deliverables: ['Integration checklist', 'Performance baseline report', 'Maintenance incident log']
  },
  {
    id: 'transmission-power-ict-support',
    divisionId: 'information-technology',
    title: 'Transmission, Power, and ICT Infrastructure Support',
    shortDescription:
      'Critical support services for transmission paths, backup power, and ICT infrastructure resilience.',
    capabilities: [
      'Transmission and backhaul support operations',
      'Power systems and redundancy assessments',
      'ICT infrastructure monitoring and stabilization'
    ],
    deliverables: ['Infrastructure health report', 'Power resilience checklist', 'Support service summary']
  },
  {
    id: 'project-planning-controls',
    divisionId: 'project-management',
    title: 'Project Planning, Scheduling, and Controls',
    shortDescription:
      'Structured delivery controls that keep projects aligned on scope, schedule, cost, and accountability.',
    capabilities: [
      'Integrated work planning and baseline scheduling',
      'Progress tracking and variance control',
      'Budget monitoring and forecast reporting'
    ],
    deliverables: ['Execution baseline schedule', 'Project controls dashboard', 'Variance and recovery plan']
  },
  {
    id: 'risk-procurement-stakeholder-management',
    divisionId: 'project-management',
    title: 'Risk, Procurement, and Stakeholder Management',
    shortDescription:
      'Governance support for risk handling, procurement coordination, and stakeholder alignment throughout execution.',
    capabilities: [
      'Risk register setup and mitigation tracking',
      'Procurement planning and vendor coordination',
      'Stakeholder reporting and governance routines'
    ],
    deliverables: ['Risk and issue register', 'Procurement tracker', 'Stakeholder communication plan']
  }
];
