import { useEffect, useRef, useState } from 'react';
import type { Prompt } from '../data/prompts';
import { copyText } from '../lib/clipboard';

type Props = {
  prompt: Prompt;
  index: number;
  total: number;
  onShuffle: () => void;
};

export function PromptSheet({ prompt, index, total, onShuffle }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    setCopied(false);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [prompt.id]);

  const onCopy = async () => {
    const ok = await copyText(prompt.text);
    if (!ok) return;
    setCopied(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="w-full max-w-[600px] bg-field px-6 pb-5 pt-6 text-field-ink sm:px-6" data-ui>
      <div className="flex flex-wrap items-center gap-2.5 text-xs text-field-muted">
        <span className="bg-[#3a322c] px-2 py-0.5 text-xs tracking-[0.02em] text-[#e3e1dc]">
          {prompt.type}
        </span>
        <span>
          试读第 {index + 1} 条 · 共 {total} 条
        </span>
      </div>

      <div key={prompt.id} className="sheet-swap">
        <h2 className="mt-3 text-lead font-medium leading-snug tracking-[-0.01em]">{prompt.zh}</h2>
        <p className="mt-1 text-xs text-field-muted">
          {prompt.en} · {prompt.text.length} 字 · 由 {prompt.by} 提交
        </p>

        <p className="sheet-clip caret mt-3.5 text-sm leading-[1.72] text-[#d3c9c0]">{prompt.text}</p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="text-xs text-field-muted">长按可选中全文</span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onShuffle}
            className="h-10 border border-[#3a322c] px-4 text-sm text-field-ink transition-colors hover:border-[#6b5f56] active:translate-y-px"
          >
            换一条
          </button>
          <button
            type="button"
            onClick={onCopy}
            className="h-10 bg-accent px-4 text-sm text-white transition-colors hover:bg-accent-deep active:translate-y-px"
          >
            {copied ? '已复制' : '复制'}
          </button>
        </div>
      </div>
      <span aria-live="polite" className="sr-only">
        {copied ? `${prompt.zh}的提示词已复制` : ''}
      </span>
    </div>
  );
}
