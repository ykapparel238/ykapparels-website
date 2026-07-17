/*
  Theme shown to first-time visitors: 'light' | 'dark' | 'system'.
  Override at build time with PUBLIC_DEFAULT_THEME (e.g. in .env or your
  host's environment settings). Once a visitor uses the header toggle,
  their own choice is stored in the browser and always wins — until they
  change it again or clear their browser data.
*/
const themeChoices = ['light', 'dark', 'system'] as const;
type ThemeChoice = (typeof themeChoices)[number];
const envTheme = import.meta.env.PUBLIC_DEFAULT_THEME as ThemeChoice | undefined;
export const defaultTheme: ThemeChoice =
  envTheme && themeChoices.includes(envTheme) ? envTheme : 'light';

// TODO: paste your GA4 Measurement ID (looks like "G-XXXXXXXXXX") from
// analytics.google.com → Admin → Data streams. While this is empty, the site
// loads NO analytics and shows NO cookie banner (fully cookie-free).
export const gaMeasurementId = '';

export const site = {
  name: 'YK Apparels',
  legalName: 'YK Apparels',
  tagline: 'Knitwear manufacturer in Lahore, Pakistan',
  description:
    'YK Apparels is a knitwear and garment manufacturer in Lahore, Pakistan, producing sweaters, knitted polos, kids wear and traditional wear for international and Pakistani brands since 2015 — with low MOQs from 5 pieces per style.',
  url: 'https://ykapparels.com',
  founded: 2015,
  email: 'contact@ykapparels.com',
  phone: '+92 300 8116143',
  phoneHref: 'tel:+923008116143',
  whatsapp: '923336264063',
  whatsappHref:
    'https://wa.me/923336264063?text=Hello%20YK%20Apparels%2C%20I%20would%20like%20to%20discuss%20a%20production%20inquiry.',
  address: {
    street: '238 Al Hamra Town, Raiwind Road',
    city: 'Lahore',
    country: 'Pakistan',
  },
  mapsHref:
    'https://www.google.com/maps/place/YK+APPAREL/@31.4486916,74.2556485,18z/data=!4m15!1m8!3m7!1s0x3919ab499cd98c13:0x5428db0101be0aaa!2sRaiwind+Rd,+Pakistan!3b1!8m2!3d31.3582862!4d74.2354641!16s%2Fg%2F1tj5jjt7!3m5!1s0x3919017a33627295:0x34ed2725c6e8ce5f!8m2!3d31.4487359!4d74.2556698!16s%2Fg%2F11xd9ylxy5?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D',
  socials: {
    facebook: 'https://www.facebook.com/ykapparels',
    instagram: 'https://www.instagram.com/ykapparels',
    linkedin: 'https://www.linkedin.com/company/ykapparels',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Capabilities', href: '/capabilities/' },
  { label: 'About & Facility', href: '/about/' },
  { label: 'Clients', href: '/clients/' },
  { label: 'Contact', href: '/contact/' },
] as const;
