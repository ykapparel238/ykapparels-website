export interface Guide {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  published: string;
  updated: string;
  readTime: string;
  sections: ReadonlyArray<{
    title: string;
    text: string;
    points: ReadonlyArray<string>;
  }>;
  faqs: ReadonlyArray<{ q: string; a: string }>;
  related: ReadonlyArray<{ href: string; label: string; text: string }>;
}

export const guides: Guide[] = [
  {
    slug: 'choosing-custom-knitwear-manufacturer-asia',
    title: 'Choose a Custom Knitwear Manufacturer in Asia | YK Apparels',
    description:
      'A practical evaluation guide for brands comparing custom knitwear manufacturers in Asia, from product fit and sampling to quality control and repeat orders.',
    h1: 'How to choose a custom knitwear manufacturer in Asia',
    lead:
      'The best factory is not the one with the broadest product list or the lowest first quote. It is the one whose real equipment, material network and production controls match the knitwear your brand needs to repeat.',
    published: '2026-07-17',
    updated: '2026-07-17',
    readTime: '8 minute read',
    sections: [
      {
        title: 'Define your product before building a supplier list',
        text: '“Knitwear” can describe products with very different machines, yarns and construction methods. A useful sourcing brief narrows the problem before factories are compared.',
        points: [
          'State whether the product is flat-knit, cut-and-sew knit, knitted polo or another construction',
          'Include gauge or fabric weight when known, plus yarn composition and hand-feel intent',
          'Show the fit, size range, stitch details, trims and branded elements',
          'Give a realistic target quantity, delivery window and market positioning',
        ],
      },
      {
        title: 'Verify capability with product-specific evidence',
        text: 'A factory tour is useful only when you know what to look for. Ask the supplier to connect your product to actual machinery, operators, samples and checkpoints.',
        points: [
          'Request recent examples with comparable construction—not only a general company profile',
          'Confirm which stages are in-house and which are handled by external suppliers',
          'Ask how yarn, colour, measurements and workmanship are approved and recorded',
          'Verify any required certificate with its current scope and expiry date',
        ],
      },
      {
        title: 'Treat sampling as a communication test',
        text: 'The sample matters, but the path to the sample reveals even more. Strong suppliers identify missing information, explain trade-offs and keep a clear revision history.',
        points: [
          'Send one consolidated feedback document with numbered comments',
          'Ask the factory to confirm each change before the next sample begins',
          'Separate fit approval from colour, trim and packaging approval',
          'Keep the final approved sample and specification as the production reference',
        ],
      },
      {
        title: 'Compare total order risk, not just unit price',
        text: 'Two quotations are comparable only when they include the same material, construction, testing, packing, delivery responsibility and revision assumptions.',
        points: [
          'List what the quote includes and excludes before choosing a supplier',
          'Confirm material minimums, substitutions and continuity for repeat orders',
          'Agree inspection evidence and the process for correcting recurring defects',
          'Use a focused first order to test execution before expanding the range',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which country in Asia is best for knitwear manufacturing?',
        a: 'No country is universally best. Compare the individual factory’s experience with your construction, yarn access, required quantity, quality controls, communication and logistics.',
      },
      {
        q: 'What should I ask during a knitwear factory call?',
        a: 'Ask which machines and production stages apply to your product, what information is missing from your brief, how samples are approved, how measurements are checked and who owns delivery communication.',
      },
      {
        q: 'Should I place a bulk order after the first sample?',
        a: 'Approve the full production specification first. A good-looking prototype does not replace confirmed materials, grading, labels, packing, tolerances and production-quality checkpoints.',
      },
    ],
    related: [
      { href: '/custom-knitwear-manufacturer/', label: 'Custom knitwear manufacturing', text: 'See how YK Apparels structures development and production.' },
      { href: '/guides/custom-knitwear-tech-pack-checklist/', label: 'Knitwear tech-pack checklist', text: 'Prepare a brief that factories can quote and sample accurately.' },
      { href: '/garment-manufacturer-asia/', label: 'Garment sourcing in Asia', text: 'Use a broader framework for comparing garment factories.' },
    ],
  },
  {
    slug: 'custom-knitwear-tech-pack-checklist',
    title: 'Custom Knitwear Tech Pack Checklist for Brands | YK Apparels',
    description:
      'Use this custom knitwear tech-pack checklist to brief a sweater manufacturer on fit, yarn, gauge, construction, colour, branding, labels and packing.',
    h1: 'Custom knitwear tech-pack checklist for a clearer factory quote',
    lead:
      'A useful knitwear tech pack does not need to be beautiful. It needs to remove ambiguity: what is being made, how it should fit, which decisions are fixed and where the manufacturer should recommend an option.',
    published: '2026-07-17',
    updated: '2026-07-17',
    readTime: '7 minute read',
    sections: [
      {
        title: 'Start with product identity and intended use',
        text: 'Give every style a stable name or number and explain the customer, season and use case. That context helps the factory identify conflicts before sampling.',
        points: [
          'Style name, version, date and responsible contact',
          'Product category, target customer and intended season',
          'Reference images with notes explaining what should be copied or changed',
          'Target quantity by colour and a required delivery window',
        ],
      },
      {
        title: 'Specify fit with measurements, not adjectives',
        text: 'Words such as relaxed, slim or oversized are useful direction but not production measurements. Define the base size, measurement method and acceptable tolerance.',
        points: [
          'Front and back technical views with key construction callouts',
          'Point-of-measure diagram and measurement chart for the base size',
          'Size range and grade rules between sizes',
          'Fit reference, stretch expectations and areas where tolerance is critical',
        ],
      },
      {
        title: 'Define the knit structure and material intent',
        text: 'Gauge, yarn and stitch structure interact. If you are unsure, state the result you want and ask the manufacturer to document the proposed construction before sampling.',
        points: [
          'Yarn composition, count or reference, colour standard and hand-feel target',
          'Gauge and stitch structure for body, rib, collar, cuffs and hem',
          'Target garment weight or density when it matters to the design',
          'Washing, shrinkage, pilling or performance expectations that need testing',
        ],
      },
      {
        title: 'Close the brief with branding, packing and approvals',
        text: 'A garment is not production-ready when the body is approved but labels, artwork and packing remain undefined. List these components and who must approve each one.',
        points: [
          'Embroidery or artwork files, placement dimensions and colour references',
          'Main label, size label, care label, hangtag and attachment method',
          'Folding, polybag, barcode, carton ratio and shipping-mark requirements',
          'Approval table for fit, colour, material, trims, artwork and pre-production sample',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I contact a knitwear factory without a complete tech pack?',
        a: 'Yes. Send a clear reference, target quantity, size range, material direction and delivery target. Ask the factory to identify the missing decisions and quote development separately from production.',
      },
      {
        q: 'Do I need to specify knitwear gauge myself?',
        a: 'Not always. If gauge is not fixed, describe the intended look, weight, drape and use, then ask the manufacturer to state the proposed gauge, yarn and structure on the sample record.',
      },
      {
        q: 'What should be approved before bulk production?',
        a: 'At minimum, approve fit and measurements, construction, material and colour, trims and artwork, labels, packing instructions and the final production specification.',
      },
    ],
    related: [
      { href: '/custom-knitwear-manufacturer/', label: 'Custom knitwear workflow', text: 'Understand how a product moves from brief to repeat production.' },
      { href: '/private-label-clothing-manufacturer/', label: 'Private-label manufacturing', text: 'Coordinate product, branding and packaging as one program.' },
      { href: '/contact/', label: 'Send your production brief', text: 'Share your current files, quantity and target date for review.' },
    ],
  },
];
