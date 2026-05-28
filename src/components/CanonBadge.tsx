"use client";

import type { CanonStatus, ContinuityId } from "@/data";

const continuityLabels: Record<ContinuityId, string> = {
  "games-canon": "CANON JOGOS",
  "cgi-canon": "CGI CANON",
  "live-action-anderson": "LIVE-ACTION",
  "welcome-to-raccoon-city": "REBOOT",
  "netflix-series": "CONTINUIDADE ALTERNATIVA",
  novelization: "NOVELIZAÇÃO",
  "comic-manga": "HQ/MANGÁ",
  alternate: "CONTINUIDADE ALTERNATIVA",
  "non-canon": "NÃO-CANÔNICO",
  uncertain: "INCERTO"
};

const toneByContinuity: Record<ContinuityId, string> = {
  "games-canon": "badge badge-green",
  "cgi-canon": "badge badge-blue",
  "live-action-anderson": "badge badge-red",
  "welcome-to-raccoon-city": "badge badge-gold",
  "netflix-series": "badge badge-purple",
  novelization: "badge badge-gold",
  "comic-manga": "badge badge-purple",
  alternate: "badge badge-red",
  "non-canon": "badge badge-muted",
  uncertain: "badge badge-muted"
};

export function getCanonStatus(continuity: ContinuityId): CanonStatus {
  if (continuity === "games-canon") return "Canon dos jogos";
  if (continuity === "cgi-canon") return "Continuidade CGI/canon próximo aos jogos";
  if (continuity === "live-action-anderson") return "Continuidade dos filmes live-action";
  if (continuity === "welcome-to-raccoon-city") return "Reboot";
  if (continuity === "novelization") return "Novelização";
  if (continuity === "comic-manga") return "HQ/mangá";
  if (continuity === "non-canon") return "Não-canônico";
  if (continuity === "uncertain") return "Interpretação";
  return "Continuidade alternativa";
}

export function CanonBadge({
  continuity,
  label
}: {
  continuity?: ContinuityId;
  label?: string;
}) {
  if (!continuity && !label) return null;
  return (
    <span className={continuity ? toneByContinuity[continuity] : "badge badge-muted"}>
      {label ?? continuityLabels[continuity as ContinuityId]}
    </span>
  );
}
