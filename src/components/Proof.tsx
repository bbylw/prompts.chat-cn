import type { CSSProperties } from 'react';
import { proofTiles, type ProofTile } from '../data/site';

function Tile({ tile, delay }: { tile: ProofTile; delay: number }) {
  if (tile.kind === 'heading') {
    return (
      <div
        className="col-span-2 flex min-h-[120px] flex-col justify-end bg-field p-4 text-field-ink md:min-h-[150px] md:p-5"
        data-reveal
        style={{ '--d': `${delay}ms` } as CSSProperties}
      >
        <p className="text-h1 font-bold leading-[1.05] tracking-[-0.03em]">
          首创于
          <br />
          2022 年 12 月
        </p>
      </div>
    );
  }

  const dark = Boolean(tile.dark);
  return (
    <div
      className={`flex min-h-[120px] flex-col justify-center p-4 md:min-h-[150px] md:p-5 ${
        dark ? 'bg-surface-2' : 'bg-surface'
      }`}
      data-reveal
      style={{ '--d': `${delay}ms` } as CSSProperties}
    >
      {tile.kind === 'stat' ? (
        <>
          <p className="text-h1 font-medium leading-none tracking-[-0.03em] tabular-nums">
            {tile.value}
          </p>
          <p className="mt-2 text-lead leading-snug text-muted">{tile.label}</p>
        </>
      ) : (
        <>
          <p className="whitespace-pre-line text-lead font-medium leading-[1.25]">{tile.value}</p>
          <p className="mt-2 text-base leading-snug text-muted">{tile.label}</p>
        </>
      )}
    </div>
  );
}

export function Proof() {
  return (
    <section id="proof">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[56px] md:px-10 md:py-[84px]">
        <div data-reveal>
          <h2 className="h2">被引用，也被收藏</h2>
          <p className="mt-4 max-w-[40em]">143k 星标、40+ 学术引用、四位 AI 先驱公开推荐。</p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-2 md:mt-9 lg:grid-cols-4">
          {proofTiles.map((tile, i) => (
            <Tile key={i} tile={tile} delay={(i % 4) * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
