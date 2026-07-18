import { businessFacts } from './business-facts';

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
  download?: { href: string; label: string; description: string };
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
    download: {
      href: '/downloads/knitwear-tech-pack-template.csv',
      label: 'Download the knitwear tech-pack template',
      description: 'A spreadsheet-ready CSV covering product identity, measurements, yarn, gauge, construction, branding, packing and approvals.',
    },
  },
  {
    slug: 'sweater-cardigan-moq-guide',
    title: 'Sweater and Cardigan MOQ Guide for Brands | YK Apparels',
    description:
      'Learn what determines sweater and cardigan MOQ, including yarn availability, colour, gauge, stitch complexity, sizing, trims and first-run planning.',
    h1: 'What determines MOQ for sweaters and cardigans?',
    lead:
      'MOQ is not only a factory preference. Yarn supply, colour, machine setup, construction, sizing and branded components each create minimums or fixed work that a focused first run must absorb.',
    published: '2026-07-17',
    updated: '2026-07-17',
    readTime: '7 minute read',
    sections: [
      {
        title: 'Separate garment quantity from material minimums',
        text: 'A factory may be able to make a small number of garments while a custom yarn colour, trim or packaging supplier requires more material than that run consumes. Identify each minimum before approving the product direction.',
        points: ['Available yarn versus custom-dyed yarn', 'Number of colours in the style and range', 'Buttons, zips, labels and packaging minimums', 'Material that can be retained safely for a repeat order'],
      },
      {
        title: 'Understand the setup behind each style',
        text: 'Programming, pattern preparation, sample development, machine setup and quality references happen before output scales. More styles and colourways divide that work across smaller quantities.',
        points: ['Gauge and stitch-program complexity', 'Separate setup for body, rib and special panels', 'Size range and grading requirements', 'Embroidery, closures and finishing operations'],
      },
      {
        title: 'Design a first run that can teach you something',
        text: 'A low-MOQ launch is most useful when it tests one clear product. Limit avoidable variation, approve a physical sample and record customer feedback against the same style before expanding.',
        points: ['Begin with one strong silhouette', 'Use a focused colour and size range', 'Keep the approved sample and specification', 'Plan how a successful style will repeat'],
      },
      {
        title: 'Ask for a quantity-specific feasibility answer',
        text: 'Send the target pieces per style, colour and size instead of asking only for the factory minimum. A useful reply explains what works at that quantity and which decisions would need to change.',
        points: ['Reference or tech pack', 'Pieces by style, colour and size', 'Yarn and branding requirements', 'Target delivery date and expected reorder path'],
      },
    ],
    faqs: [
      { q: 'What is YK Apparels’ sweater MOQ?', a: `${businessFacts.minimumOrder.value}. The actual style is reviewed for yarn, colour, gauge, stitch construction, sizes and trims before that quantity is confirmed.` },
      { q: 'Does each colour have its own minimum?', a: 'Colour can create a separate yarn or dyeing minimum. State pieces per colour so available material, custom colour work and any reusable balance can be reviewed.' },
      { q: 'Can the MOQ decrease on a repeat order?', a: 'A repeat can reuse approved development and setup information, but current material availability and supplier minimums still need confirmation.' },
    ],
    related: [
      { href: '/low-moq-clothing-manufacturer/', label: 'Low-MOQ production', text: 'See how YK Apparels structures a focused first run.' },
      { href: '/custom-sweater-manufacturer/', label: 'Sweater manufacturing', text: 'Review the development and production path for sweaters and cardigans.' },
      { href: '/contact/', label: 'Check a target quantity', text: 'Send the style, colour and size breakdown for feasibility review.' },
    ],
  },
  {
    slug: 'knitwear-sampling-timeline-checklist',
    title: 'Knitwear Sampling Timeline and Checklist | YK Apparels',
    description:
      'Plan a knitwear sample with a clear brief, yarn and gauge decisions, fit review, consolidated revisions, production approval and realistic timing.',
    h1: 'Knitwear sampling timeline and approval checklist',
    lead:
      'A sample date is useful only when the starting information, material availability, review time and number of revisions are visible. This checklist separates factory work from buyer approvals.',
    published: '2026-07-17',
    updated: '2026-07-17',
    readTime: '8 minute read',
    sections: [
      {
        title: 'Confirm the development starting point',
        text: 'Before timing begins, identify the exact style, sample size, reference, material direction and decisions the manufacturer is expected to recommend.',
        points: ['Style number and current revision', 'Tech pack, reference or annotated images', 'Sample size and measurement chart', 'Yarn, colour, gauge and finish direction'],
      },
      {
        title: 'Agree what the first sample must prove',
        text: 'A prototype may be intended to validate construction and fit before final colour, labels or packaging are ready. Write down its scope so missing components are not mistaken for errors.',
        points: ['Fit and proportion', 'Stitch and construction feasibility', 'Material hand-feel and weight', 'Components deferred to a later approval'],
      },
      {
        title: 'Consolidate feedback and response dates',
        text: 'Multiple message threads create contradictory changes. Use one numbered comment file, assign an owner and record when the factory confirms each requested revision.',
        points: ['One feedback owner for the brand', 'Numbered comments tied to images or measurements', 'Factory confirmation before remaking', 'Separate buyer review time from factory revision time'],
      },
      {
        title: 'Close every production-critical approval',
        text: 'Do not approve bulk production while fit, material, colour, trims, artwork, labels or packing remain assumed. Record which sample or document is the final reference.',
        points: ['Approved physical sample', 'Final measurement chart and tolerances', 'Material, colour, trims and artwork', 'Packing specification and production schedule'],
      },
    ],
    faqs: [
      { q: 'How long does knitwear sampling take?', a: `${businessFacts.samplingTime.value} is typical after the brief, material direction and scope are confirmed. Buyer review, sourcing changes and additional revisions extend the schedule.` },
      { q: 'Can YK Apparels make one prototype?', a: `Yes. Sampling is available ${businessFacts.samplingMinimum.value.toLowerCase()}.` },
      { q: 'Does approving a sample confirm the production date?', a: `The production plan is confirmed after approval. ${businessFacts.productionTime.value} is typical, subject to quantity, materials, complexity and agreed buyer approval dates.` },
    ],
    related: [
      { href: '/knitwear-sampling-development/', label: 'Sampling service', text: 'See how YK Apparels moves from brief to production reference.' },
      { href: '/guides/custom-knitwear-tech-pack-checklist/', label: 'Tech-pack checklist', text: 'Prepare the information needed before the timeline begins.' },
      { href: '/contact/', label: 'Submit a sample brief', text: 'Share the files, sample size, quantity and date already known.' },
    ],
  },
  {
    slug: 'knitwear-yarn-gauge-construction',
    title: 'Knitwear Yarn, Gauge and Construction Guide | YK Apparels',
    description:
      'Understand how yarn composition, count, gauge, stitch structure, density and finishing shape a custom sweater’s appearance, hand-feel, cost and durability.',
    h1: 'A brand buyer’s guide to knitwear yarn, gauge and construction',
    lead:
      'Yarn, gauge and stitch structure are connected decisions. Changing one can alter weight, drape, warmth, surface appearance, production feasibility and price, so the intended result should be defined before sampling.',
    published: '2026-07-17',
    updated: '2026-07-17',
    readTime: '9 minute read',
    sections: [
      {
        title: 'Describe the result before naming a yarn',
        text: 'Composition matters, but two yarns with the same fibre label can produce different softness, bulk, strength and appearance. Give the factory a physical or visual target alongside the fibre direction.',
        points: ['Fibre composition and blend direction', 'Softness, warmth and skin-contact expectations', 'Matte, clean, fuzzy or textured surface target', 'Care, pilling and durability expectations'],
      },
      {
        title: 'Use gauge to communicate scale and density',
        text: 'Gauge describes needle density, but it does not define the garment by itself. Yarn count, stitch and machine setup determine whether the result feels fine, compact, open or bulky.',
        points: ['Reference gauge when already tested', 'Target weight, drape or density when gauge is open', 'Separate body, rib, collar and detail requirements', 'Ask the sample record to state the proposed construction'],
      },
      {
        title: 'Document stitch structures by garment area',
        text: 'A sweater can combine structures with different stretch and take-up. Technical views should identify where each stitch starts, stops and connects to shaping or seams.',
        points: ['Body and sleeve structure', 'Rib dimensions and recovery', 'Cables, jacquard, mesh or texture placement', 'Linking, fully-fashioned or seam construction details'],
      },
      {
        title: 'Approve the interaction on a physical sample',
        text: 'The correct specification is the combination that produces the intended garment. Review measurements, weight, stretch, recovery, appearance and finishing together before locking production.',
        points: ['Measure before and after agreed finishing', 'Review hand-feel and surface appearance', 'Check rib and neckline recovery', 'Record the exact approved yarn and structure references'],
      },
    ],
    faqs: [
      { q: 'Do I need to specify sweater gauge in my tech pack?', a: 'Not if it is genuinely open. Describe the intended weight, drape, warmth and appearance, then ask the manufacturer to document the proposed yarn, gauge and stitch on the sample record.' },
      { q: 'Does a higher gauge always mean better quality?', a: 'No. Gauge is a construction choice, not a quality grade. Quality depends on whether the yarn, structure, density, measurements and workmanship suit the product and remain consistent.' },
      { q: 'Can a reference sweater be used to choose yarn and gauge?', a: 'Yes. A reference helps communicate hand-feel, density and construction, but the proposed material and structure should still be documented and approved on the new sample.' },
    ],
    related: [
      { href: '/custom-sweater-manufacturer/', label: 'Custom sweaters', text: 'See how these decisions enter development and production.' },
      { href: '/guides/custom-knitwear-tech-pack-checklist/', label: 'Tech-pack template', text: 'Record yarn, gauge and structure in a factory-ready brief.' },
      { href: '/contact/', label: 'Review a knit reference', text: 'Send the intended product, images and material direction.' },
    ],
  },
  {
    slug: 'knitwear-quality-control-checklist',
    title: 'Knitwear Quality-Control Checklist | YK Apparels',
    description:
      'Use this knitwear quality-control checklist to define approved references, measurements, workmanship, inline inspections, finishing and pre-pack evidence.',
    h1: 'Knitwear quality-control checklist for brand buyers',
    lead:
      'Inspection works best when the standard is measurable and agreed before production. Use this checklist to connect the approved sample to inline checks, corrective action and final packing approval.',
    published: '2026-07-17',
    updated: '2026-07-17',
    readTime: '8 minute read',
    sections: [
      {
        title: 'Create an inspectable production standard',
        text: 'The approved sample should be supported by written specifications so the production and inspection teams do not need to interpret visual preferences differently.',
        points: ['Final sample identified by style and revision', 'Measurement chart with methods and tolerances', 'Approved yarn, colour, trims and artwork', 'Finish, label and packing requirements'],
      },
      {
        title: 'Choose checkpoints based on product risk',
        text: 'Inspect high-risk decisions at the stage where they are created. The exact checkpoints vary by garment, but waiting until packing makes recurring issues expensive to correct.',
        points: ['Knitting structure, panels and visible defects', 'Linking, seams and construction details', 'Measurements across sizes and production stages', 'Washing, finishing, branding and trim application'],
      },
      {
        title: 'Define evidence and corrective action',
        text: 'Agree what the buyer receives and what happens when a recurring issue appears. A useful corrective-action record identifies the cause, affected quantity, immediate correction and prevention step.',
        points: ['Photographs or measurement records required', 'Responsible contact and response window', 'Recheck after a process correction', 'Escalation rule for unresolved or repeated defects'],
      },
      {
        title: 'Close the order with a pre-pack review',
        text: 'Final inspection should confirm appearance, measurements, trims, labels, quantity and packing against the approved order record before cartons are sealed and dispatched.',
        points: ['Final appearance and size checks', 'Branding, labels and trim confirmation', 'Folding, polybag, assortment and carton marks', 'Agreed release evidence recorded'],
      },
    ],
    faqs: [
      { q: 'Is final inspection enough for knitwear?', a: 'No. Final inspection is important, but inline checks make recurring construction and measurement issues easier to identify and correct before finishing and packing.' },
      { q: 'What should a buyer approve before production?', a: 'Approve the physical sample, measurements and tolerances, material and colour, construction, trims, artwork, labels, finish and packing specification.' },
      { q: 'Can an independent inspector be used?', a: 'Yes. Agree the inspection standard, timing, access, evidence and release responsibility before production so it is included in the delivery plan.' },
    ],
    related: [
      { href: '/knitwear-quality-control/', label: 'YK quality workflow', text: 'See how the checklist connects to production stages.' },
      { href: '/about/', label: 'Facility and process', text: 'Review the current production and quality approach.' },
      { href: '/contact/', label: 'Define inspection evidence', text: 'Share the standard and reporting your program requires.' },
    ],
  },
];
