import type { CSSProperties } from 'react';
import { links } from '../data/site';

export function Licence() {
  return (
    <section id="licence" className="on-field bg-field text-field-ink">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[56px] md:px-10 md:py-[84px]">
        <div className="max-w-[760px]" data-reveal>
          <h2 className="h2">
            2,586 条提示词，
            <br />
            以 CC0 进入公共领域。
          </h2>
          <p className="mt-5 max-w-[44em] text-field-ink">
            源代码与站点原创内容走 MIT 许可，手册也在其中。提示词与数据是 CC0：复制、改写、商用，都不需要署名。
          </p>
        </div>

        <div className="mt-7 grid gap-2 md:grid-cols-2">
          <div className="bg-band p-5 md:p-6" data-reveal>
            <p className="text-lead font-medium">MIT</p>
            <p className="mt-1 text-sm text-field-muted">
              源代码、站点原创内容、交互式手册
            </p>
            <a
              href={links.licenseMit}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block underline decoration-[#3a322c] underline-offset-[5px] text-sm transition-colors hover:decoration-field-ink"
            >
              读 MIT 许可证
            </a>
          </div>
          <div className="bg-band p-5 md:p-6" data-reveal style={{ '--d': '70ms' } as CSSProperties}>
            <p className="text-lead font-medium">CC0 1.0</p>
            <p className="mt-1 text-sm text-field-muted">
              prompts.csv、PROMPTS.md、用户提交的提示词
            </p>
            <a
              href={links.licenseCc0}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block underline decoration-[#3a322c] underline-offset-[5px] text-sm transition-colors hover:decoration-field-ink"
            >
              读 CC0 许可证
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3" data-reveal>
          <a
            href={links.contribute}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center bg-accent px-6 text-white transition-colors hover:bg-accent-deep active:translate-y-px"
          >
            提交一条提示词
          </a>
          <a
            href={links.license}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#3a322c] underline-offset-[5px] text-sm transition-colors hover:decoration-field-ink"
          >
            许可证总览
          </a>
        </div>

        <div className="mt-10 md:mt-12" data-reveal>
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 text-sm text-field-muted">
            <a
              href={links.contributors}
              target="_blank"
              rel="noopener noreferrer"
              className="text-field-ink underline decoration-white/25 underline-offset-[5px] transition-colors hover:decoration-field-ink"
            >
              贡献者名单
            </a>
            <a
              href={links.deepwiki}
              target="_blank"
              rel="noopener noreferrer"
              className="text-field-ink underline decoration-white/25 underline-offset-[5px] transition-colors hover:decoration-field-ink"
            >
              用 DeepWiki 提问
            </a>
            <span>基于 Windsurf 与 Devin 构建</span>
          </div>
        </div>
      </div>
    </section>
  );
}
