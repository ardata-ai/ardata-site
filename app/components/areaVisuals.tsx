import type { ServiceId } from "../i18n/types";
import { FlowVisual, NetworkVisual, SpatialVisual } from "./VisualFrames";

export const areaGlow: Record<ServiceId, string> = {
  strategy: "from-violet-500/30 via-amber-400/20 to-transparent",
  workflows: "from-cyan-400/30 via-emerald-400/25 to-transparent",
  web: "from-fuchsia-500/30 via-violet-500/25 to-transparent",
};

export function AreaVisual({ id }: { id: ServiceId }) {
  if (id === "strategy") return <FlowVisual />;
  if (id === "workflows") return <NetworkVisual />;
  return <SpatialVisual />;
}
