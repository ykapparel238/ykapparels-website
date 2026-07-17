import type { ImageKey } from './images';

/*
  All page copy lives here so text edits never touch markup.
  Values marked TODO are placeholders awaiting real figures from YK Apparels.
*/

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
  // TODO: replace placeholder figures with real numbers from YK Apparels
  { value: '2015', label: 'Operating since' },
  { value: '10+', label: 'Years of production' },
  { value: '30+', label: 'Brands served' },
  { value: '1000s', label: 'Of orders delivered' },
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
  // TODO: add remaining client brands (with permission to display)
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
  { label: 'Minimum order (MOQ)', value: 'From 5 pieces', note: 'One of the lowest MOQs among clothing manufacturers in Pakistan — and sampling starts from a single piece.' },
  { label: 'Sampling', value: '7–14 days', note: 'Proto and fit samples, revised until approved.' },
  { label: 'Production lead time', value: '30–60 days', note: 'Depending on style complexity and quantity.' },
] as const;

export const smallRuns = [
  {
    audience: 'Sampling & prototypes',
    moq: 'It starts with one.',
    text: 'Every partnership begins with a single sample. A prototype, a special piece, an idea you want to hold in your hands — we develop it with you, one or two pieces at a time, until it’s exactly right.',
  },
  {
    audience: 'Your first production run',
    moq: 'From 5 pieces',
    text: 'A launch collection, a team in its colours, festival or event merch — five pieces per style is enough to begin, produced with the same care as our largest programs.',
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
    a: 'Our MOQ is 5 pieces per style — one of the lowest minimum order quantities among clothing manufacturers in Pakistan. Startups can launch a collection with five pieces per style, and event or team orders can start from as few as two. When you are ready to scale, the same lines run hundreds or thousands of pieces.',
  },
  {
    q: 'How does sampling work?',
    a: 'Every program starts with a sample. Send us your tech pack — or even a reference photo — and we develop a proto sample within roughly 7–14 days, then revise it with you until it is approved for production. One-off samples and prototypes are welcome; you do not need a production commitment to sample with us.',
  },
  {
    q: 'What are your production lead times?',
    a: 'Typical production lead time is 30–60 days after sample approval, depending on style complexity, quantity and yarn availability. We track output daily by style, stage and shift, so the date we commit to is a date we can defend — and you get honest updates, not surprises.',
  },
  // TODO: confirm real shipping terms (FOB/CIF, ports) with YK Apparels
  {
    q: 'Do you ship internationally?',
    a: 'Yes. We regularly work with international brands and ship worldwide from Lahore, Pakistan, with full export documentation. Shipping terms are agreed per order — ask us about FOB or door-to-door options for your destination when you send your inquiry.',
  },
  {
    q: 'What products do you manufacture?',
    a: 'We are a knitwear manufacturer first: flat-knit sweaters and cardigans, knitted polo shirts, kids wear, kurta shalwar and traditional wear, plus custom event, festival and team knits. Embroidery is done in-house, and we source yarn and fabric through our supplier network in Pakistan.',
  },
  {
    q: 'Do you work with new brands and startups?',
    a: 'Gladly — some of our strongest partnerships began with a founder and a handful of pieces. With a 5-piece MOQ, sampling from a single piece and honest feasibility feedback before you commit, we are built to be the first manufacturer a new brand works with, and the last one it needs.',
  },
  {
    q: 'How do I start working with YK Apparels?',
    a: 'Send an inquiry through our contact form or WhatsApp with whatever you have — a tech pack is ideal, but a reference photo and a target quantity is enough. We reply within 1–2 business days with honest feedback on feasibility, pricing and timelines, then move to sampling.',
  },
] as const;
