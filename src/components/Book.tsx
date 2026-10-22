import type { CSSProperties } from 'react';
import { chapterGroups, kids } from '../data/chapters';
import { links } from '../data/site';

export function Book() {
  return (
    <section id="book">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[56px] md:px-10 md:py-[84px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div data-reveal>
            <h2 className="h2">用完提示词，<br className="md:hidden" />再学怎么提问</h2>
            <p className="mt-4 max-w-[40em]">
              28 章中文手册，从角色设定写到 Agent 与 MCP。免费，有中文 PDF。
            </p>
          </div>
          <a
            href={links.book}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit underline decoration-ink/25 underline-offset-[5px] text-sm transition-colors hover:decoration-ink"
            data-reveal
            style={{ '--d': '80ms' } as CSSProperties}
          >
            免费读
          </a>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-2 md:mt-9 sm:grid-cols-3 lg:grid-cols-6">
          {chapterGroups.map((group, i) => (
            <div
              key={group.title}
              className="bg-surface p-5 md:p-6"
              data-reveal
              style={{ '--d': `${(i % 3) * 70}ms` } as CSSProperties}
            >
              <h3 className="text-lead font-medium">{group.title}</h3>
              <ul className="mt-3 space-y-0 text-sm leading-[1.7]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div
            className="bg-field p-4 text-field-ink md:p-5"
            data-reveal
            style={{ '--d': '140ms' } as CSSProperties}
          >
            <h3 className="text-lead font-medium">{kids.title}</h3>
            <ul className="mt-3 space-y-0 text-sm leading-[1.7] text-field-muted">
              {kids.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={links.kids}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm underline decoration-white/30 underline-offset-[5px] transition-colors hover:decoration-white"
            >
              去玩 Promi
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href={links.bookPdfZh}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-ink/30 underline-offset-[5px] transition-colors hover:decoration-ink"
          >
            中文 PDF
          </a>
          <a
            href={links.book}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-ink/30 underline-offset-[5px] transition-colors hover:decoration-ink"
          >
            交互式在线版
          </a>
          <a
            href={links.bookSource}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-ink/30 underline-offset-[5px] transition-colors hover:decoration-ink"
          >
            章节源码
          </a>
        </div>
      </div>
    </section>
  );
}
