import approvedBusinessFacts from './business-facts.json';

export interface ApprovedBusinessFact {
  label: string;
  value: string;
  detail: string;
}

export const businessFactsMeta = approvedBusinessFacts.meta;

export const businessFacts = approvedBusinessFacts.facts satisfies Record<string, ApprovedBusinessFact>;

export type BusinessFactKey = keyof typeof businessFacts;

export const commercialFactKeys: ReadonlyArray<BusinessFactKey> = [
  'minimumOrder',
  'samplingMinimum',
  'samplingTime',
  'productionTime',
];

export const keyFacts = [
  { label: 'Company', value: 'YK Apparels — custom knitwear and garment manufacturer' },
  { label: 'Location', value: 'Raiwind Road, Lahore, Pakistan' },
  { label: 'Founded', value: '2015' },
  {
    label: 'Products',
    value: 'Sweaters, cardigans, knitted polo shirts, kids wear, kurta shalwar, event and team knits',
  },
  {
    label: 'Services',
    value: 'Custom development, sampling, private-label production, in-house embroidery, yarn and fabric sourcing',
  },
  { label: businessFacts.minimumOrder.label, value: businessFacts.minimumOrder.value },
  {
    label: 'Sample minimum and timing',
    value: `${businessFacts.samplingMinimum.value}; ${businessFacts.samplingTime.value} typical`,
  },
  { label: businessFacts.productionTime.label, value: `${businessFacts.productionTime.value} (typical)` },
  { label: businessFacts.markets.label, value: businessFacts.markets.value },
  { label: businessFacts.solarCapacity.label, value: businessFacts.solarCapacity.value },
  { label: 'Contact', value: 'contact@ykapparels.com · WhatsApp +92 333 6264063' },
] as const;
