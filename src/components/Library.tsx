import { useEffect, useState, type CSSProperties } from 'react';
import { categories, prompts, type PromptCategory } from '../data/prompts';
import { links } from '../data/site';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { PromptPage } from './PromptPage';

type Props = {
  filter: PromptCategory | 'all';
  onFilter: (key: PromptCategory | 'all') => void;
};

const PAGE = 12;

export function Library({ filter, onFilter }: Props) {
  const isWide = useMediaQuery('(min-width: 1024px)');
  const [visible, setVisible] = useState(PAGE);
  const [selectedId, setSelectedId] = useState(prompts[0].id);
  const [openId, setOpenId] = useState<string | null>(prompts[0].id);

  const list = filter === 'all' ? prompts : prompts.filter((p) => p.cat === filter);
  const active = list.find((p) => p.id === selectedId) ?? list[0];

  useEffect(() => {
    setVisible(PAGE);
    const first = filter === 'all' ? prompts[0] : prompts.find((p) => p.cat === filter);
    if (first) {
      setSelectedId(first.id);
      setOpenId(first.id);
    }
  }, [filter]);

  const countFor = (key: PromptCategory | 'all') =>
    key === 'all' ? prompts.length : prompts.filter((p) => p.cat === key).length;

  const shown = list.slice(0, visible);
  const chips: { key: PromptCategory | 'all'; label: string }[] = [
    { key: 'all', label: '全部' },
    ...categories,
  ];

  return (
    <section id="lib" className="on-field bg-field text-field-ink">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[56px] md:px-10 md:py-[84px]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div data-reveal>
            <h2 className="h2">
              <span className="soft on-field">2,586 条里</span>先看这 64 条
            </h2>
            <p className="mt-3 max-w-[40em] text-field-muted">
              挑一条，读全文，复制带走。
            </p>
          </div>
          <a
            href={links.prompts}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm underline decoration-[#3a322c] underline-offset-[5px] transition-colors hover:decoration-field-ink"
            data-reveal
            style={{ '--d': '90ms' } as CSSProperties}
          >
            打开完整库
          </a>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-1.5 md:mt-7"
          role="group"
          aria-label="按主题筛选"
          data-reveal
        >
          {chips.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => onFilter(c.key)}
              aria-pressed={filter === c.key}
              className={`flex h-9 items-center gap-2 px-3 text-sm transition-colors ${
                filter === c.key
                  ? 'bg-bg font-medium text-ink'
                  : 'bg-[#171412] text-field-muted hover:text-field-ink'
              }`}
            >
              {c.label}
              <span className="text-xs tabular-nums">{countFor(c.key)}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:mt-7 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="flex flex-col gap-[3px] lg:col-span-6" data-reveal>
            {shown.map((p) => {
              const isActive = isWide && active?.id === p.id;
              const isOpen = !isWide && openId === p.id;
              return (
                <div key={p.id}>
                  <button
                    type="button"
                    onClick={() =>
                      isWide ? setSelectedId(p.id) : setOpenId(isOpen ? null : p.id)
                    }
                    aria-current={isActive ? 'true' : undefined}
                    aria-expanded={isWide ? undefined : isOpen}
                    className={`flex w-full flex-col gap-0.5 px-3 py-2.5 text-left transition-colors sm:flex-row sm:items-baseline sm:gap-4 ${
                      isActive || isOpen
                        ? 'bg-bg text-ink'
                        : 'bg-[#171412] text-field-ink hover:bg-[#241d18]'
                    }`}
                  >
                    <span className="text-base font-medium leading-snug sm:w-[8.5em] sm:shrink-0 sm:truncate">
                      {p.zh}
                    </span>
                    <span
                      className={`line-clamp-1 text-xs leading-snug sm:flex-1 sm:text-sm ${
                        isActive || isOpen ? 'text-muted' : 'text-field-muted'
                      }`}
                    >
                      {p.note}
                    </span>
                  </button>

                  {isOpen && <PromptPage prompt={p} inline />}
                </div>
              );
            })}

            {visible < list.length && (
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE)}
                className="mt-3 h-11 self-start border border-[#3a322c] px-5 text-sm text-field-ink transition-colors hover:border-accent hover:text-white active:translate-y-px"
              >
                再看 {Math.min(PAGE, list.length - visible)} 条 · 还有 {list.length - visible} 条
              </button>
            )}

            {list.length === 0 && (
              <p className="py-10 text-sm text-field-muted">这个分类还没有纳入试读。</p>
            )}
          </div>

          <div
            className="hidden lg:col-span-6 lg:block"
            data-reveal
            style={{ '--d': '90ms' } as CSSProperties}
          >
            {active && (
              <div className="sticky top-[88px] min-h-[380px]">
                <PromptPage prompt={active} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
