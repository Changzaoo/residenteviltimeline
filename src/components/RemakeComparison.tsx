"use client";

import type { RemakeComparisonItem } from "@/data";

function row(title: string, values: string[]) {
  return (
    <div className="remake-row">
      <strong>{title}</strong>
      <ul>
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export function RemakeComparison({ items }: { items: RemakeComparisonItem[] }) {
  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">canon e versões</p>
          <h2>Remakes vs Originais</h2>
        </div>
      </div>
      <div className="remake-list">
        {items.map((item) => (
          <article className="remake-card" key={item.id}>
            <div className="card-topline">
              <span className="badge badge-gold">{item.original}</span>
              <span className="badge badge-blue">{item.remake}</span>
            </div>
            <h3>{item.title}</h3>
            <div className="remake-grid">
              {row("Mudanças de história", item.storyChanges)}
              {row("Mudanças de personagem", item.characterChanges)}
              {row("Conteúdo removido", item.removedContent)}
              {row("Conteúdo expandido", item.expandedContent)}
              {row("Mudanças de tom", item.toneChanges)}
              <div className="remake-row">
                <strong>Como tratar na timeline</strong>
                <p>{item.timelineTreatment}</p>
              </div>
            </div>
            <p className="canon-note-inline">{item.canonNote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
