import { useEffect, useRef, useState } from 'react';
import type { Prompt } from '../data/prompts';
import { copyText } from '../lib/clipboard';

const typeLabel: Record<Prompt['type'], string> = {
  TEXT: '文本',
  STRUCTURED: '结构化',
  IMAGE: '图像',
};

export function PromptPage({ prompt, inline = false }: { prompt: Prompt; inline?: boolean }) {
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

  const meta = (
    <>
      <span className="bg-ink px-2 py-0.5 text-bg">{typeLabel[prompt.type]}</span>
      <span className="tabular-nums">{prompt.text.length} 字</span>
      <span>@{prompt.by}</span>
      <span>CC0</span>
    </>
  );

  return (
    <article className={`flex h-full flex-col bg-bg text-ink ${inline ? 'px-3 pb-4 pt-3' : 'p-5 md:p-7'}`}>
      {!inline && (
        <>
          <h3 className="text-h1 font-medium leading-[1.15] tracking-[-0.02em]" aria-live="polite">
            {prompt.zh}
          </h3>
          <p className="mt-1.5 text-xs text-muted">{prompt.en}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
            {meta}
          </div>
          <p className="mt-4 text-base text-muted">{prompt.note}</p>
        </>
      )}

      <p className={`whitespace-pre-wrap text-base leading-[1.7] ${inline ? '' : 'mt-5'}`}>
        {prompt.text}
      </p>

      <div
        className={`mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6 ${
          inline ? 'text-xs text-muted' : ''
        }`}
      >
        {inline && meta}
        <button
          type="button"
          onClick={onCopy}
          className={`inline-flex h-10 items-center bg-accent px-4 text-sm text-white transition-colors hover:bg-accent-deep active:translate-y-px ${
            inline ? 'ml-auto' : ''
          }`}
        >
          {copied ? '已复制' : '复制全文'}
        </button>
      </div>
      <span aria-live="polite" className="sr-only">
        {copied ? `${prompt.zh}的提示词已复制` : ''}
      </span>
    </article>
  );
}
