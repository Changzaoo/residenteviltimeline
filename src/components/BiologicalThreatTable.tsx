"use client";

import type { Biohazard } from "@/data";

const score: Record<Biohazard["threatLevel"], number> = {
  baixo: 1,
  médio: 2,
  alto: 3,
  extremo: 4,
  apocalíptico: 5
};

export function BiologicalThreatTable({
  items,
  onOpen
}: {
  items: Biohazard[];
  onOpen: (item: Biohazard) => void;
}) {
  return (
    <section className="section-block">
      <div className="section-title">
        <div>
          <p className="eyebrow">matriz laboratorial</p>
          <h2>Ameaças biológicas</h2>
        </div>
        <span className="counter">{items.length} amostras</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ameaça</th>
              <th>Tipo</th>
              <th>Origem</th>
              <th>Organização</th>
              <th>Primeira aparição</th>
              <th>Nível</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} onClick={() => onOpen(item)}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.origin}</td>
                <td>{item.organization ?? "não confirmado"}</td>
                <td>{item.firstAppearance}</td>
                <td>
                  <div className="threat-bars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className={index < score[item.threatLevel] ? "on" : ""} />
                    ))}
                    <em>{item.threatLevel}</em>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
