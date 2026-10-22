import type { Prompt } from '../data/prompts';
import { prompts } from '../data/prompts';
import { links, totals } from '../data/site';
import { PromptSheet } from './PromptSheet';

type Props = {
  prompt: Prompt;
  index: number;
  onShuffle: () => void;
};

const ledger = [
  { value: totals.text.toLocaleString('en-US'), label: '条文本' },
  { value: String(totals.structured), label: '条结构化输出' },
  { value: String(totals.image), label: '条图像' },
  { value: String(totals.dev), label: '条写给开发' },
];

export function Hero({ prompt, index, onShuffle }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col pb-10 pt-6 lg:order-1 lg:pb-10 lg:pr-12 lg:pt-9">
          <h1 className="mask-title text-[clamp(32px,3.4vw,50px)] font-bold leading-[1.06] tracking-[-0.03em]">
            <span>全球最大的开源提示词库</span>
          </h1>
          <p className="mt-3 max-w-[34em] text-ink">
            2,586 条提示词，2022 年 12 月起开源。复制、改写、商用，都不用许可。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={links.prompts}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center bg-accent px-6 text-white transition-colors hover:bg-accent-deep active:translate-y-px"
            >
              打开提示词库
            </a>
            <a
              href="#self"
              className="text-sm text-ink underline decoration-ink/30 underline-offset-[5px] transition-colors hover:decoration-ink"
            >
              自建一个库
            </a>
          </div>

          <div className="mt-10 lg:mt-auto lg:pt-10">
            <p className="text-xs text-muted">全库 {totals.prompts.toLocaleString('en-US')} 条的构成</p>
            <dl className="mt-2 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
              {ledger.map((item) => (
                <div key={item.label}>
                  <dd className="text-lead font-medium tabular-nums tracking-[-0.02em]">
                    {item.value}
                  </dd>
                  <dt className="mt-0.5 text-xs text-muted">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="order-1 -mx-5 flex items-center justify-center bg-surface px-5 py-5 md:-mx-10 md:px-10 lg:order-2 lg:ml-0 lg:mr-[-2.5rem] lg:px-10 lg:py-6">
          <PromptSheet
            prompt={prompt}
            index={index}
            total={prompts.length}
            onShuffle={onShuffle}
          />
        </div>
      </div>
    </section>
  );
}
