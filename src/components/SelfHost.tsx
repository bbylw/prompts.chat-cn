import { useEffect, useRef, useState } from 'react';
import { links } from '../data/site';

const steps = [
  {
    title: '生成项目',
    line: 'npx 一条命令，或 clone 官方仓库后 npm install。两种方式最后都会落到 npm run setup。',
  },
  {
    title: '配置品牌与登录',
    line: '向导里填品牌、主题，接 GitHub、Google 或 Azure AD。这些都在你的仓库里，改一次就行。',
  },
  {
    title: '接上数据库',
    line: '需要 PostgreSQL。托管库推荐 Neon，也可以用 Docker 在本地跑一份。',
  },
];

export function SelfHost() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      let best = 0;
      let bestGap = Number.POSITIVE_INFINITY;
      const anchor = window.innerHeight * 0.42;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const gap = Math.abs(rect.top + rect.height / 2 - anchor);
        if (gap < bestGap) {
          bestGap = gap;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="self" className="bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-[56px] md:px-10 md:py-[84px]">
        <div data-reveal>
          <h2 className="h2">一条命令，<br className="md:hidden" />拥有自己的库</h2>
          <p className="mt-4 max-w-[40em]">
            品牌、主题、登录方式都由你定，数据放在自己的数据库里。也可以先看
            <a
              href={links.selfHosting}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 underline decoration-ink/30 underline-offset-[5px] transition-colors hover:decoration-ink"
            >
              完整自建指南
            </a>
            再决定。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-12 md:gap-12">
          <div className="order-2 flex flex-col gap-10 md:order-1 md:col-span-5 md:gap-0 md:pb-[16vh]">
            {steps.map((step, i) => (
              <div
                key={step.title}
                data-step={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="md:flex md:min-h-[46vh] md:flex-col md:justify-center"
              >
                <p
                  className={`text-lead font-medium tracking-[-0.01em] transition-colors md:text-lead ${
                    active === i ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {step.title}
                </p>
                <p className="mt-2 max-w-[26em]">{step.line}</p>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2 md:col-span-7">
            <div className="stage-sticky" data-reveal>
              <div className="bg-field p-5 text-field-ink md:p-6" data-ui>
                <div className="flex items-center justify-between gap-4 text-xs text-field-muted">
                  <span>my-prompt-library</span>
                  <span>第 {active + 1} / 3 步</span>
                </div>

                <div key={active} className="swap-in mt-4 min-h-[260px]">
                  {active === 0 && (
                    <pre className="whitespace-pre-wrap break-words font-mono text-[13px] leading-[1.95] text-[#d3c9c0]">
                      <code>
                        <span className="text-[#e58a5f]">$</span> npx prompts.chat new my-prompt-library{'\n'}
                        <span className="text-field-muted"># 生成项目目录</span>
                        {'\n'}
                        <span className="text-[#e58a5f]">$</span> cd my-prompt-library{'\n'}
                        <span className="text-[#e58a5f]">$</span> npm run setup{'\n'}
                        {'\n'}
                        <span className="text-field-muted"># 或者从仓库开始</span>
                        {'\n'}
                        <span className="text-[#e58a5f]">$</span> git clone
                        https://github.com/f/prompts.chat.git{'\n'}
                        <span className="text-[#e58a5f]">$</span> npm install && npm run setup
                      </code>
                    </pre>
                  )}

                  {active === 1 && (
                    <dl className="flex flex-col gap-1.5 text-sm">
                      {[
                        ['品牌名称', '站点标题、标志与文案'],
                        ['主题', '颜色与字体，整站外观'],
                        ['身份认证', 'GitHub · Google · Azure AD'],
                        ['功能', '按需开启，不必一次配完'],
                      ].map(([k, v]) => (
                        <div key={k} className="flex flex-col gap-1 bg-[#171412] px-3 py-2.5 sm:flex-row sm:gap-6">
                          <dt className="w-24 shrink-0 text-field-muted">{k}</dt>
                          <dd className="text-[#d3c9c0]">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {active === 2 && (
                    <div className="text-sm">
                      <pre className="overflow-x-auto font-mono text-[13px] leading-[1.9] text-[#d3c9c0]">
                        <code>DATABASE_URL=postgres://user:pass@host:5432/db</code>
                      </pre>
                      <ul className="mt-5 flex flex-col gap-3 text-field-muted">
                        <li>需要 PostgreSQL。</li>
                        <li>
                          托管库推荐{' '}
                          <a
                            href="https://get.neon.com/VqfnMo4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-field-ink underline decoration-[#3a322c] underline-offset-4 hover:decoration-field-ink"
                          >
                            Neon
                          </a>
                          （托管，免自己运维）。
                        </li>
                        <li>
                          想在本地跑，看{' '}
                          <a
                            href={links.docker}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-field-ink underline decoration-[#3a322c] underline-offset-4 hover:decoration-field-ink"
                          >
                            Docker 指南
                          </a>
                          。
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href={links.selfHosting}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-ink/30 underline-offset-[5px] transition-colors hover:decoration-ink"
                >
                  完整自建指南
                </a>
                <a
                  href={links.docker}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-ink/30 underline-offset-[5px] transition-colors hover:decoration-ink"
                >
                  Docker 指南
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
