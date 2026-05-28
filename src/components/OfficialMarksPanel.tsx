"use client";

import type { BrandAssetRef } from "@/data/brandAssets";

export function OfficialMarksPanel({ assets }: { assets: BrandAssetRef[] }) {
  return (
    <section className="brand-vault" aria-labelledby="brand-vault-title">
      <div className="brand-vault-head">
        <div>
          <p className="eyebrow">marcas e creditos</p>
          <h3 id="brand-vault-title">Logos oficiais referenciados</h3>
        </div>
        <span className="badge badge-gold">FAN PROJECT</span>
      </div>

      <p className="brand-vault-warning">
        Este arquivo e um trabalho de fa, gratuito e nao oficial. Para evitar parecer produto autorizado ou redistribuir
        material proprietario, os cards abaixo usam monogramas do proprio dossie e links para referencias oficiais ou bases
        de pesquisa. Slots de assets ficam documentados para uso futuro apenas com permissao/licenca ou material fornecido
        legitimamente.
      </p>

      <div className="brand-mark-grid">
        {assets.map((asset) => (
          <article className="brand-mark-card" key={asset.id}>
            <div className="brand-emblem" data-category={asset.category}>
              <span>{asset.mark}</span>
            </div>
            <div>
              <div className="card-topline">
                <span className="badge badge-muted">{asset.category}</span>
                {asset.assetSlot && <span className="badge badge-blue">slot visual</span>}
              </div>
              <h4>{asset.name}</h4>
              <p>{asset.usageNote}</p>
              <a href={asset.referenceUrl} target="_blank" rel="noreferrer">
                Abrir referencia
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
