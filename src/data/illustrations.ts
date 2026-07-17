/*
  Line-art SVG artwork for the PhotoSlot/Illustration components.
  Primary strokes (.s) render in the ink color; highlight strokes (.d) in gold.
*/

export type IllustrationVariant =
  | 'sweater'
  | 'polo'
  | 'frock'
  | 'kurta'
  | 'embroidery'
  | 'yarn'
  | 'machine'
  | 'inspect'
  | 'carton';

export const illustrationArt: Record<IllustrationVariant, string> = {
  sweater: `
    <path class="s" d="M62 34c5 8 31 8 36 0" />
    <path class="s" d="M62 34 45 42 30 76l17 8 6-12v54h54V72l6 12 17-8-15-34-17-8" />
    <path class="s" d="M53 116h54" stroke-dasharray="2 6" />
    <path class="d" d="M68 66l12 9 12-9M68 86l12 9 12-9" />
    <path class="s" d="M30 76l17 8M130 76l-17 8" opacity="0.4" />`,
  polo: `
    <path class="s" d="M64 32 45 40 32 72l16 7 5-10v57h54V69l5 10 16-7-13-32-19-8" />
    <path class="s" d="M64 32l16 26 16-26" />
    <path class="s" d="M64 32l-4 12 12-3" />
    <path class="s" d="M96 32l4 12-12-3" />
    <path class="d" d="M80 66v22" />
    <circle class="d" cx="80" cy="74" r="1.6" />
    <circle class="d" cx="80" cy="84" r="1.6" />
    <path class="s" d="M53 114h54" stroke-dasharray="2 6" />`,
  frock: `
    <path class="s" d="M66 34c4 6 24 6 28 0" />
    <path class="s" d="M66 34l-10 6-6 16 12 5" />
    <path class="s" d="M94 34l10 6 6 16-12 5" />
    <path class="s" d="M62 61l4-21M98 61l-4-21" />
    <path class="s" d="M62 61l-14 55c10 8 54 8 64 0L98 61" />
    <path class="d" d="M52 100c9 6 47 6 56 0" opacity="0.9" />
    <path class="s" d="M50 116c4 4 12 6 20 6m40-6c-4 4-12 6-20 6" opacity="0.5" />
    <circle class="d" cx="80" cy="52" r="2" />`,
  kurta: `
    <path class="s" d="M68 30c2 4 22 4 24 0" />
    <path class="s" d="M68 30 52 38 46 94l12 3 2-24v55h40V73l2 24 12-3-6-56-16-8" />
    <path class="s" d="M80 34v30" />
    <circle class="d" cx="80" cy="42" r="1.6" />
    <circle class="d" cx="80" cy="50" r="1.6" />
    <circle class="d" cx="80" cy="58" r="1.6" />
    <path class="d" d="M60 114v14M100 114v14" opacity="0.8" />
    <path class="s" d="M60 128h40" stroke-dasharray="2 6" />`,
  embroidery: `
    <circle class="s" cx="78" cy="82" r="42" />
    <circle class="s" cx="78" cy="82" r="35" opacity="0.5" />
    <rect class="s" x="72" y="32" width="12" height="10" rx="3" />
    <path class="s" d="M78 42v-4" />
    <g class="d">
      <path d="M78 82c-8-4-10-14-4-18M78 82c4-9 14-9 17-3M78 82c9 3 10 13 4 17M78 82c-9 1-14-7-11-14" />
      <circle cx="78" cy="82" r="2.4" />
    </g>
    <path class="d" d="M104 58c14 10 10 34-6 52" stroke-dasharray="3 7" opacity="0.9" />
    <path class="s" d="M112 50l8-8" />`,
  yarn: `
    <path class="s" d="M42 118 34 62l24 0-8 56z" />
    <path class="s" d="M36 74h20M37 86h18M39 100h15" opacity="0.5" />
    <circle class="s" cx="98" cy="94" r="26" />
    <path class="d" d="M76 84c14-8 32-4 44 6M74 96c14-8 34-6 46 2M78 108c12-8 28-8 40-2" opacity="0.85" />
    <path class="d" d="M122 86c10-16 4-30-10-38" stroke-dasharray="3 7" />
    <path class="s" d="M30 122h100" opacity="0.4" />`,
  machine: `
    <rect class="s" x="26" y="66" width="108" height="18" rx="5" />
    <path class="s" d="M34 84v10M126 84v10M30 94h100" opacity="0.6" />
    <rect class="s" x="62" y="50" width="36" height="16" rx="4" />
    <path class="s" d="M80 50V38" />
    <path class="d" d="M80 38c-10-8-24-6-34 2" stroke-dasharray="3 7" />
    <path class="s" d="M40 42 32 30l16 2-8 10z" />
    <path class="s" d="M56 84v34h48V84" opacity="0.9" />
    <path class="d" d="M64 94l8 6 8-6 8 6 8-6M64 106l8 6 8-6 8 6 8-6" opacity="0.9" />`,
  inspect: `
    <rect class="s" x="34" y="40" width="64" height="64" rx="10" />
    <path class="s" d="M44 56l9 7 9-7 9 7 9-7M44 72l9 7 9-7 9 7 9-7" opacity="0.45" />
    <circle class="s" cx="94" cy="86" r="26" />
    <path class="s" d="M113 105l17 17" stroke-width="5" />
    <path class="d" d="M84 86l7 7 14-14" />`,
  carton: `
    <path class="s" d="M36 64l44-20 44 20v52l-44 20-44-20V64z" />
    <path class="s" d="M36 64l44 20 44-20M80 84v52" />
    <path class="d" d="M58 54l44 20v16" opacity="0.9" />
    <path class="s" d="M46 96l14 7M46 106l10 5" opacity="0.5" />
    <path class="d" d="M96 40c6-8 18-8 22 0" stroke-dasharray="3 6" opacity="0.8" />`,
};
