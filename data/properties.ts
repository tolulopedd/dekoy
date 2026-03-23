import { PropertyListing } from '@/lib/types';

export const properties: PropertyListing[] = [
  {
    id: 'property-1',
    slug: 'forthright-garden-estate-4-bedroom-terrace-duplex',
    status: 'For Sale',
    title: '4 Bedrooms Terrace Duplex',
    propertyType: 'Terrace Duplex',
    bedrooms: 4,
    location: 'Forthright Garden Estate, Behind Punch Newspaper, Lagos-Ibadan Expressway',
    estate: 'Forthright Garden Estate',
    summary:
      'Contemporary 4-bedroom terrace duplex in a secure gated estate with smart-home features, private parking, and strong family-living appeal.',
    overview:
      'This 4-bedroom terrace duplex is positioned within Forthright Garden Estate for buyers seeking a well-finished home with privacy, estate security, and practical day-to-day convenience. The home combines expansive living areas, private parking, smart-home readiness, and quality finishing details in a location with strong residential accessibility along the Lagos-Ibadan corridor.',
    titleDocument: 'Certificate of Occupancy',
    heroImage: '/assets/properties/forthright-garden-terrace-duplex/exterior-front.jpg',
    gallery: [
      '/assets/properties/forthright-garden-terrace-duplex/exterior-front.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/exterior-gate.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/living-room.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/kitchen.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/bathroom-main.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/powder-room.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/bedroom-1.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/bedroom-2.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/bedroom-3.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/bedroom-wardrobe.jpg',
      '/assets/properties/forthright-garden-terrace-duplex/ceiling-detail.jpg'
    ],
    features: [
      'Fully self compound',
      'Private parking slot',
      'All rooms en-suite design approach',
      'Expansive living rooms',
      'Smart home setup',
      'CCTV surveillance cameras',
      'Stamped concrete floor finish',
      'Good drainage system',
      'Constant electricity',
      'Children playground',
      'Green zone within the estate',
      'Secure gated estate with access control security network'
    ],
    highlights: [
      { label: 'Status', value: 'For Sale' },
      { label: 'Bedrooms', value: '4 Bedrooms' },
      { label: 'Title', value: 'C of O' },
      { label: 'Parking', value: 'Private Slot' }
    ],
    mapQuery: 'Forthright Garden Estate Behind Punch Newspaper Lagos Ibadan Express Way'
  }
];
