import { useId, type ReactNode } from "react";

export function BrowserFrame({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className="relative bg-card" dir="ltr">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_8px_#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_8px_#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_8px_#28c840]" />
        <span className="ms-2 truncate font-mono text-[11px] font-medium tracking-wide text-white/55">
          {caption}
        </span>
      </div>
      <div className="aspect-[16/10]">{children}</div>
    </div>
  );
}

export function NetworkVisual() {
  const uid = useId().replace(/:/g, "");
  const steps = [
    { x: 32, y: 66, n: "01", title: "Data / Trigger", detail: "Email, Form, Webhook", color: "#00C2FF" },
    { x: 338, y: 66, n: "02", title: "AI Agent", detail: "Analyze & Decision", color: "#10B981" },
    { x: 338, y: 222, n: "03", title: "Systems Action", detail: "Update CRM, ERP, Slack", color: "#00C2FF" },
    { x: 32, y: 222, n: "04", title: "Done / Report", detail: "Verified Output", color: "#10B981" },
  ];

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id={`${uid}-cyan`} cx="22%" cy="28%" r="46%">
          <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-green`} cx="78%" cy="72%" r="46%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${uid}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0 H0 V24" fill="none" stroke="white" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="640" height="400" fill="#131B2E" />
      <rect width="640" height="400" fill={`url(#${uid}-grid)`} />
      <rect width="640" height="400" fill={`url(#${uid}-cyan)`} />
      <rect width="640" height="400" fill={`url(#${uid}-green)`} />

      <path d="M302 122 H330" stroke="#00C2FF" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M330 122 l-8 -5 v10 z" fill="#00C2FF" />
      <path d="M473 178 V214" stroke="#10B981" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M473 214 l-5 -8 h10 z" fill="#10B981" />
      <path d="M338 278 H310" stroke="#00C2FF" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M310 278 l8 -5 v10 z" fill="#00C2FF" />

      {steps.map((step) => (
        <g key={step.n}>
          <rect x={step.x} y={step.y} width="270" height="112" rx="16" fill="#10182A" stroke={step.color} strokeOpacity="0.95" />
          <circle cx={step.x + 28} cy={step.y + 40} r="14" fill={step.color} opacity="0.22" />
          <circle cx={step.x + 28} cy={step.y + 40} r="8" fill={step.color} />
          <text
            x={step.x + 52}
            y={step.y + 36}
            fill={step.color}
            fontSize="12"
            fontFamily="ui-monospace, monospace"
            fontWeight="700"
          >
            {step.n}
          </text>
          <text
            x={step.x + 52}
            y={step.y + 56}
            fill="#F9FAFB"
            fontSize="18"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontWeight="700"
          >
            {step.title}
          </text>
          <text x={step.x + 22} y={step.y + 86} fill="#CBD5E1" fontSize="13" fontFamily="ui-monospace, monospace">
            {step.detail}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function FlowVisual() {
  const uid = useId().replace(/:/g, "");
  const steps = [
    { x: 36, label: "Signal", detail: "intake", color: "#8B5CF6" },
    { x: 232, label: "Model", detail: "reason", color: "#F59E0B" },
    { x: 428, label: "Action", detail: "deliver", color: "#00C2FF" },
  ];

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id={`${uid}-violet`} cx="22%" cy="40%" r="42%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-amber`} cx="78%" cy="55%" r="40%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${uid}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0 H0 V24" fill="none" stroke="white" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="640" height="400" fill="#131B2E" />
      <rect width="640" height="400" fill={`url(#${uid}-grid)`} />
      <rect width="640" height="400" fill={`url(#${uid}-violet)`} />
      <rect width="640" height="400" fill={`url(#${uid}-amber)`} />
      <path d="M188 168 H226" stroke="#8B5CF6" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M384 168 H422" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M220 168 l-8 -5 v10 z" fill="#8B5CF6" />
      <path d="M416 168 l-8 -5 v10 z" fill="#F59E0B" />
      {steps.map((step) => (
        <g key={step.label}>
          <rect x={step.x} y="118" width="156" height="100" rx="16" fill="#10182A" stroke={step.color} strokeOpacity="0.9" />
          <circle cx={step.x + 28} cy="150" r="16" fill={step.color} opacity="0.25" />
          <circle cx={step.x + 28} cy="150" r="9" fill={step.color} />
          <text x={step.x + 46} y="155" fill="#F9FAFB" fontSize="16" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="700">
            {step.label}
          </text>
          <text x={step.x + 20} y="190" fill="#CBD5E1" fontSize="12" fontFamily="ui-monospace, monospace">
            {step.detail}
          </text>
        </g>
      ))}
      {steps.map((step) => (
        <circle key={step.detail} cx={step.x + 78} cy="286" r="6" fill={step.color} />
      ))}
      <path d="M120 286 H500" stroke="#00C2FF" strokeOpacity="0.45" strokeDasharray="4 7" />
    </svg>
  );
}

function IsoCube({
  x,
  y,
  size,
  top,
  left,
  right,
}: {
  x: number;
  y: number;
  size: number;
  top: string;
  left: string;
  right: string;
}) {
  const w = size;
  const h = size * 0.5;
  const d = size * 0.72;
  return (
    <g transform={`translate(${x} ${y})`}>
      <polygon points={`${w},${h * 0.15} ${w * 2},${h} ${w},${h * 2 - h * 0.15} 0,${h}`} fill={top} />
      <polygon points={`0,${h} ${w},${h * 2 - h * 0.15} ${w},${h * 2 - h * 0.15 + d} 0,${h + d}`} fill={left} />
      <polygon points={`${w * 2},${h} ${w},${h * 2 - h * 0.15} ${w},${h * 2 - h * 0.15 + d} ${w * 2},${h + d}`} fill={right} />
    </g>
  );
}

export function SpatialVisual() {
  const uid = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id={`${uid}-magenta`} cx="62%" cy="38%" r="46%">
          <stop offset="0%" stopColor="#D946EF" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-cyan`} cx="28%" cy="70%" r="40%">
          <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-top-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0ABFC" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient id={`${uid}-top-b`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id={`${uid}-top-c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7BE4FF" />
          <stop offset="100%" stopColor="#00C2FF" />
        </linearGradient>
        <pattern id={`${uid}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0 H0 V24" fill="none" stroke="white" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="640" height="400" fill="#131B2E" />
      <rect width="640" height="400" fill={`url(#${uid}-grid)`} />
      <rect width="640" height="400" fill={`url(#${uid}-magenta)`} />
      <rect width="640" height="400" fill={`url(#${uid}-cyan)`} />
      <IsoCube x={230} y={48} size={92} top={`url(#${uid}-top-a)`} left="#7E22CE" right="#4C1D95" />
      <IsoCube x={390} y={150} size={64} top={`url(#${uid}-top-c)`} left="#1D4ED8" right="#0E7490" />
      <IsoCube x={132} y={168} size={54} top={`url(#${uid}-top-b)`} left="#6D28D9" right="#86198F" />
    </svg>
  );
}
