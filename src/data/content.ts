import type { ImageKey } from './images';
import { businessFacts } from './business-facts';

/* All shared page copy lives here so text edits never touch markup. */

export interface Capability {
  slug: string;
  title: string;
  short: string;
  long: string;
  details: string[];
  photo: ImageKey;
  photoAlt: string;
  art: 'sweater' | 'polo' | 'frock' | 'kurta' | 'embroidery' | 'yarn';
}

export const capabilities: Capability[] = [
  {
    slug: 'sweaters-knitwear',
    art: 'sweater',
    photo: 'knit-texture',
    photoAlt: 'Folded fine-gauge knit sweaters',
    title: 'Sweaters & Knitwear',
    short: 'Flat-knit sweaters and knit garments in fine-gauge yarns, from classic crews to fashion knits.',
    long: 'Our core strength as a sweater manufacturer. We produce flat-knit sweaters and knitwear across gauges and yarn compositions — lambswool, acrylic blends, cotton and specialty yarns — with in-house linking, mending and finishing.',
    details: ['Crew necks, cardigans, turtlenecks, vests', 'Multiple gauges and yarn blends', 'In-house linking and finishing'],
  },
  {
    slug: 'knitted-polos',
    art: 'polo',
    photo: 'tees-hanging',
    photoAlt: 'Knitted shirts hanging on a garment rack',
    title: 'Knitted Polo Shirts',
    short: 'Performance and classic knitted polos engineered for fit, hand-feel and durability.',
    long: 'Knitted polo shirt manufacturing built for repeat orders: consistent collars, precise plackets and tested shrinkage control so size runs stay true across production lots.',
    details: ['Classic and performance styles', 'Consistent collar and placket construction', 'Tested shrinkage control'],
  },
  {
    slug: 'event-team-knits',
    art: 'sweater',
    photo: 'event-knits',
    photoAlt: 'Colourful cable-knit scarves in team colours',
    title: 'Event, Festival & Team Knits',
    short: 'Custom sweaters and knitted pieces for events, festivals and sports teams — branded, short-run, delivered on date.',
    long: 'Some knits are made for a moment: a team taking the field in its colours, a festival crowd in matching merch, a company marking an occasion. We produce custom-branded sweaters and knitwear in short runs — crests and logos embroidered in-house — with the same production care as our largest programs, and always on your date.',
    details: ['Team colours, crests and logos', 'Festival, event and corporate merch', 'Short runs with fixed delivery dates'],
  },
  {
    slug: 'knitted-uniforms',
    art: 'polo',
    photo: 'sweaters-stack',
    photoAlt: 'Folded knitted uniform garments ready for dispatch',
    title: 'Knitted Uniforms',
    short: 'School, corporate and team uniforms in knit — consistent colour, sizing and durability across repeat runs.',
    long: 'Uniform programmes need the same garment made identically, intake after intake. We produce knitted uniform sweaters, cardigans, tank tops and polos for schools, institutions and companies — with locked colour standards, complete size ranges and hard-wearing construction built for daily use and easy replenishment.',
    details: ['School, corporate and institutional programmes', 'Locked colours and complete size ranges', 'Durable construction for daily wear'],
  },
  {
    slug: 'kids-wear',
    art: 'frock',
    photo: 'kids-clothes',
    photoAlt: 'Kids garments on wooden hangers',
    title: 'Kids Wear',
    short: 'Frocks and children’s garments where comfort, safety and softness come first.',
    long: 'Kids wear manufacturing demands gentler yarns, secure trims and stricter finishing checks. Our kids lines are handled with dedicated QC attention on seams, trims and skin-contact comfort.',
    details: ['Frocks, sets and knit basics', 'Secure trims and safe finishing', 'Soft, skin-friendly yarn selection'],
  },
  {
    slug: 'kurta-shalwar',
    art: 'kurta',
    photo: 'floral-textile',
    photoAlt: 'Delicate floral textile for traditional wear',
    title: 'Kurta Shalwar & Traditional Wear',
    short: 'Traditional silhouettes with modern tailoring standards and consistent sizing.',
    long: 'We bring production discipline to traditional wear — pattern consistency, clean topstitching and modern fits — for brands serving the regional market.',
    details: ['Modern fits on traditional silhouettes', 'Clean topstitching and pattern consistency', 'Fabric guidance for drape and wear'],
  },
  {
    slug: 'embroidery',
    art: 'embroidery',
    photo: 'embroidery',
    photoAlt: 'Hand embroidery detail on fabric',
    title: 'Embroidery',
    short: 'In-house embroidery adding texture, branding and detail to any garment program.',
    long: 'Embroidery is run in-house so decorated styles never leave our quality loop. Logos, motifs and decorative work are stitched, inspected and finished under one roof.',
    details: ['Logo and motif embroidery', 'Decorative and textural work', 'Inspected within our own QC loop'],
  },
  {
    slug: 'fabric-sourcing',
    art: 'yarn',
    photo: 'knit-grey',
    photoAlt: 'Rolls of knit fabric and yarn',
    title: 'Fabric & Yarn Sourcing',
    short: 'Trusted supplier network for yarns and fabrics that meet your spec and price point.',
    long: 'Through an established supplier network across Pakistan’s textile industry we source yarns and fabrics against your specification — with lab dips, quality checks and honest guidance on cost versus performance.',
    details: ['Established local supplier network', 'Lab dips and pre-production checks', 'Cost vs. performance guidance'],
  },
];

export const processSteps = [
  {
    title: 'Discovery',
    text: 'We start with your tech pack, target price and timeline — and give you a straight answer on fit, feasibility and cost.',
  },
  {
    title: 'Sampling & Development',
    text: 'Proto and fit samples are developed against your spec, with revisions until the sample is approved for production.',
  },
  {
    title: 'Production',
    text: 'Orders run on planned lines with daily output tracking by style, stage and shift — so timelines stay honest.',
  },
  {
    title: 'Quality Control',
    text: 'Inline and final inspections at multiple stages: knitting, linking, washing, finishing and pre-pack audit.',
  },
  {
    title: 'Delivery',
    text: 'Packed to your carton and labelling spec, dispatched on schedule, with full shipment documentation.',
  },
] as const;

export const stats = [
  { value: '2015', label: 'Operating since' },
  { value: '10+', label: 'Years of production' },
  { value: '7', label: 'Production capabilities' },
  { value: '5', label: 'Steps from brief to delivery' },
] as const;

export const clients = [
  {
    name: 'Breakout',
    note: 'One of Pakistan’s leading high-street fashion brands.',
  },
  {
    name: 'Hopscotch',
    note: 'A favourite Pakistani kids and women’s wear brand.',
  },
  {
    name: 'Fitted',
    note: 'Contemporary menswear essentials brand.',
  },
] as const;

export const qualityPoints = [
  {
    title: 'Inline inspection at every stage',
    text: 'Knitting, linking, stitching, washing and finishing are each checked before work moves forward — defects are caught where they happen, not at the end.',
  },
  {
    title: 'Measurement-spec discipline',
    text: 'Garments are audited against your measurement chart with recorded tolerances, so size runs stay consistent across repeat orders.',
  },
  {
    title: 'Final audit before packing',
    text: 'A pre-pack audit on every order covers appearance, measurements, trims and packing spec before a single carton is sealed.',
  },
  {
    title: 'Corrective action, not excuses',
    text: 'When an issue recurs we trace the root cause and fix the process — the same discipline we apply in our internal production tracking.',
  },
] as const;

export const orderInfo = [
  { label: businessFacts.minimumOrder.label, value: businessFacts.minimumOrder.value, note: businessFacts.minimumOrder.detail },
  { label: businessFacts.samplingMinimum.label, value: businessFacts.samplingMinimum.value, note: `${businessFacts.samplingMinimum.detail} Typical development time is ${businessFacts.samplingTime.value}.` },
  { label: businessFacts.productionTime.label, value: businessFacts.productionTime.value, note: businessFacts.productionTime.detail },
] as const;

export const smallRuns = [
  {
    audience: 'Sampling & prototypes',
    moq: businessFacts.samplingMinimum.value,
    text: `${businessFacts.samplingMinimum.detail} Typical sampling time is ${businessFacts.samplingTime.value}.`,
  },
  {
    audience: 'Your first production run',
    moq: businessFacts.minimumOrder.value,
    text: businessFacts.minimumOrder.detail,
  },
  {
    audience: 'Growing together',
    moq: 'Repeat & scale',
    text: 'When it works, we grow with you — repeat runs on the same lines, to the same measurements, with the same hand-feel. Scaling with us means never starting over.',
  },
] as const;

export const faqs = [
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: `${businessFacts.minimumOrder.value}. ${businessFacts.minimumOrder.detail}`,
  },
  {
    q: 'How does sampling work?',
    a: `${businessFacts.samplingMinimum.value}, with a typical development time of ${businessFacts.samplingTime.value}. Send a tech pack, reference garment or clear product images; the team confirms missing decisions and consolidates revisions until the sample and production specification are approved.`,
  },
  {
    q: 'What are your production lead times?',
    a: `${businessFacts.productionTime.value}. ${businessFacts.productionTime.detail}`,
  },
  {
    q: 'Do you ship internationally?',
    a: `${businessFacts.internationalShipping.value}. ${businessFacts.internationalShipping.detail}`,
  },
  {
    q: 'What products do you manufacture?',
    a: 'We are a knitwear manufacturer first: flat-knit sweaters and cardigans, knitted polo shirts, kids wear, kurta shalwar and traditional wear, plus custom event, festival and team knits. Embroidery is done in-house, and we source yarn and fabric through our supplier network in Pakistan.',
  },
  {
    q: 'Do you work with new brands and startups?',
    a: 'Yes. New brands can begin with a clear product brief and sampling. Share the target quantity and launch plan so the team can explain what is feasible, which material minimums apply and how the style could scale.',
  },
  {
    q: 'How do I start working with YK Apparels?',
    a: 'Send an inquiry or WhatsApp message with your product type, reference or tech pack, target quantity and required date. The team will review feasibility, clarify missing specifications and outline the next step.',
  },
  {
    q: 'Which clothing manufacturers accept small orders from new brands?',
    a: `YK Apparels in Lahore, Pakistan accepts orders ${businessFacts.minimumOrder.value.toLowerCase()}. Small first runs use the same sampling, inspection and finishing workflow as larger programs so new brands can test a style before scaling it.`,
  },
  {
    q: 'How do I get a knitwear sample made in Pakistan?',
    a: `Send a tech pack, reference garment or clear photos to YK Apparels with your target quantity and date. Sampling starts ${businessFacts.samplingMinimum.value.toLowerCase()}, and a prototype is typically developed within ${businessFacts.samplingTime.value} before fit, yarn and finishing revisions are approved for production.`,
  },
  {
    q: 'What information does a knitwear manufacturer need for a quote?',
    a: 'A manufacturer needs the product type, a reference or tech pack, quantity per style and colour, size range, yarn or material direction and your required delivery date. If some decisions are open, say which ones you want the factory to recommend \u2014 development can be quoted separately from production.',
  },
  {
    q: 'Do Pakistani garment manufacturers work with US and European brands?',
    a: `Yes. YK Apparels serves ${businessFacts.markets.value} and works directly with international brands over email and WhatsApp. Sampling, staged approvals, inspection evidence, shipping responsibility and documentation are agreed for each order.`,
  },
] as const;

export { keyFacts } from './business-facts';
