import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Icon = {
  flame: (p: IconProps) => (
    <svg {...base} {...p}><path d="M12 3c.5 3 2.5 4 3.5 6a4.5 4.5 0 1 1-9 1.5C6.5 8 9 7 12 3Z" /><path d="M12 18a2 2 0 0 1-2-2c0-1.5 2-2.5 2-4 1 1.5 2 2.2 2 4a2 2 0 0 1-2 2Z" /></svg>
  ),
  laptop: (p: IconProps) => (
    <svg {...base} {...p}><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 20h20" /></svg>
  ),
  dumbbell: (p: IconProps) => (
    <svg {...base} {...p}><path d="M6 8v8M3 10v4M18 8v8M21 10v4M6 12h12" /></svg>
  ),
  sun: (p: IconProps) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>
  ),
  washer: (p: IconProps) => (
    <svg {...base} {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="13" r="4" /><path d="M8 6h.01M11 6h.01" /></svg>
  ),
  bike: (p: IconProps) => (
    <svg {...base} {...p}><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M6 17 10 8h4l2 4M9 8h5" /></svg>
  ),
  store: (p: IconProps) => (
    <svg {...base} {...p}><path d="M4 9h16l-1-5H5L4 9Z" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></svg>
  ),
  tree: (p: IconProps) => (
    <svg {...base} {...p}><path d="M12 3c-3 0-5 2.5-5 5 0 .7.1 1.3.4 2C5.5 11 5 12.5 5 14a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4c0-1.5-.5-3-2.4-4 .3-.7.4-1.3.4-2 0-2.5-2-5-5-5Z" /><path d="M12 18v3" /></svg>
  ),
  landmark: (p: IconProps) => (
    <svg {...base} {...p}><path d="M3 21h18M4 10h16M12 3 4 10M12 3l8 7M6 10v11M10 10v11M14 10v11M18 10v11" /></svg>
  ),
  utensils: (p: IconProps) => (
    <svg {...base} {...p}><path d="M5 3v7a2 2 0 0 0 4 0V3M7 11v10M17 3c-1.5 0-2.5 1.8-2.5 4s1 4 2.5 4v10" /></svg>
  ),
  ticket: (p: IconProps) => (
    <svg {...base} {...p}><path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4 2 2 0 0 1 0-4Z" /><path d="M14 5v14" strokeDasharray="2 2" /></svg>
  ),
  shopping: (p: IconProps) => (
    <svg {...base} {...p}><path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
  ),
  waves: (p: IconProps) => (
    <svg {...base} {...p}><path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></svg>
  ),
  bus: (p: IconProps) => (
    <svg {...base} {...p}><rect x="4" y="4" width="16" height="13" rx="2" /><path d="M4 11h16M8 17v2M16 17v2" /><circle cx="8" cy="14" r="0.6" /><circle cx="16" cy="14" r="0.6" /></svg>
  ),
  whatsapp: (p: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" /></svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  close: (p: IconProps) => (
    <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
  ),
  chevronL: (p: IconProps) => (
    <svg {...base} {...p}><path d="M15 6l-6 6 6 6" /></svg>
  ),
  chevronR: (p: IconProps) => (
    <svg {...base} {...p}><path d="M9 6l6 6-6 6" /></svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  pin: (p: IconProps) => (
    <svg {...base} {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  download: (p: IconProps) => (
    <svg {...base} {...p}><path d="M12 4v11M7 11l5 4 5-4M5 19h14" /></svg>
  ),
  info: (p: IconProps) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
  ),
};

export type IconName = keyof typeof Icon;
