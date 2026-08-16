/**
 * Central SVG icon set.
 *
 * Every icon is a stroke/fill-based component that inherits `currentColor` and
 * accepts a `className` (for sizing) plus any other SVG props (e.g. aria-hidden).
 * Keeping icons here avoids an icon-library dependency and keeps markup semantic.
 */

function Svg({ children, viewBox = "0 0 24 24", ...props }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CheckCircleIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Full star, used by the rating component. */
export function StarIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5-4.8-4.6 6.6-.9L12 2.5z"
        fill="currentColor"
      />
    </Svg>
  );
}

/** Half-filled star (left half filled) for fractional ratings. */
export function StarHalfIcon(props) {
  return (
    <Svg {...props}>
      <defs>
        <linearGradient id="starHalf" x1="0" x2="1" y1="0" y2="0">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5-4.8-4.6 6.6-.9L12 2.5z"
        fill="url(#starHalf)"
      />
    </Svg>
  );
}

export function MenuIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function CloseIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/* ---- Hero stats-bar icons ---- */

export function OfficeIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 21V9h3a1 1 0 0 1 1 1v11M8 8h2M8 12h2M8 16h2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SupportIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M4 13a8 8 0 0 1 16 0M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Zm16 0v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Zm-3 5a5 5 0 0 1-5 3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TrackingIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M21 8.5 12 3 3 8.5m18 0v7L12 21m9-12.5L12 14M3 8.5v7L12 21M3 8.5 12 14m0 7v-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function NetworkIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/* ---- Social icons (footer) ---- */

export function LinkedinIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.9 8.65 22 10.9 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function FacebookIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.7.1 15.7 0 14.6 0 12.2 0 10.5 1.4 10.5 4v2H8v3h2.5v9H14V9Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function TwitterIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.5a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.05a4.1 4.1 0 0 0 3.3 4c-.6.2-1.2.2-1.8.1a4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.1a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4a2.5 2.5 0 0 0 1.7-1.7C23 15.2 23 12 23 12Zm-13 3V9l5.2 3-5.2 3Z"
        fill="currentColor"
      />
    </Svg>
  );
}

/* ---- Interface / affordance icons ---- */

export function ChevronDownIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function UploadIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M12 16V4m0 0L8 8m4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ShieldCheckIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6l-7-3Z"
        fill="currentColor"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/* ---- "Our story" accordion icons ---- */

export function EyeIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
    </Svg>
  );
}

export function HistoryIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4M12 8v4l3 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TargetIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </Svg>
  );
}

export function HeartIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M12 20s-7-4.3-9.3-8.5C1.2 8.7 2.6 5.5 5.7 5.5c1.9 0 3.2 1.1 4.3 2.6C11.1 6.6 12.4 5.5 14.3 5.5c3.1 0 4.5 3.2 3 6C19 15.7 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/* ---- Feature / approach icons ---- */

export function ClockIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 7v5l3.5 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function UsersIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a3 3 0 1 0 0-6M3 20v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v1M16 14h.5a5 5 0 0 1 5 5v1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TagIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M3 12.5V4a1 1 0 0 1 1-1h8.5L21 11.5a1.5 1.5 0 0 1 0 2.1l-6.4 6.4a1.5 1.5 0 0 1-2.1 0L3 12.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" />
    </Svg>
  );
}

export function ChatIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5h8M8 13h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function TruckIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M3 6h11v9H3V6Zm11 3h4l3 3v3h-7V9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function GlobeIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.7 3.8 5.8 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.8-3.8-9S9.5 5.7 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ClipboardIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M9 4h6v2H9V4Zm-2 1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12h7M8.5 16h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function BulbIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.5.7.5 1.1v1h6v-1c0-.4 0-.7.5-1.1A6 6 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function GearIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9 19 19M19 5l-2.1 2.1M7.1 16.9 5 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function BoxIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 4 8-4M12 21V11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/* ---- Services section icons ---- */

export function PlaneIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M12 2.5c-.8 0-1.4 1-1.4 2.2v5L2.5 14v2l8.1-2.4V19l-2.2 1.5V22L12 21l3.6 1v-1.5L13.4 19v-5.4L21.5 16v-2l-8.1-4.3v-5c0-1.2-.6-2.2-1.4-2.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SendIcon(props) {
  return (
    <Svg {...props}>
      <path
        d="M21.5 2.5 10.5 13.5M21.5 2.5 14.5 21.5l-4-8.5-8.5-4 19.5-6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function RouteIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="18.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="5.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.2 18.5H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="0.1 3"
      />
    </Svg>
  );
}

export function InstagramIcon(props) {
  return (
    <Svg {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </Svg>
  );
}

// Lookup used where icons are referenced by string name in data/config.
export const iconMap = {
  office: OfficeIcon,
  support: SupportIcon,
  tracking: TrackingIcon,
  network: NetworkIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  // Why Us feature cards
  clock: ClockIcon,
  users: UsersIcon,
  shieldCheck: ShieldCheckIcon,
  tag: TagIcon,
  chat: ChatIcon,
  truck: TruckIcon,
  globe: GlobeIcon,
  // Our approach steps
  clipboard: ClipboardIcon,
  bulb: BulbIcon,
  gear: GearIcon,
  box: BoxIcon,
  // About "Our story" accordion
  eye: EyeIcon,
  history: HistoryIcon,
  target: TargetIcon,
  heart: HeartIcon,
  // Services section
  plane: PlaneIcon,
  send: SendIcon,
  route: RouteIcon,
};
