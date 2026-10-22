import type { CSSProperties } from 'react';
import { links } from '../data/site';

const shell = 'mx-auto w-full max-w-[1440px] px-5 md:px-10';

function Panel({
  children,
  className = '',
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`overflow-hidden bg-field text-field-ink ${className}`}
      data-ui
      role="figure"
      aria-label={label}
    >
      {children}
    </div>
  );
}

const rows = [
  {
    id: 'web',
    title: '网页',
    line: '打开就是全文，不用注册，也没有付费墙。',
    href: links.prompts,
    hrefLabel: 'prompts.chat/prompts',
    panel: (
      <Panel label="网页端的提示词列表片段" className="px-5 py-4">
        <p className="text-xs text-field-muted">prompts.chat/prompts</p>
        <ul className="mt-3 flex flex-col">
          {[
            ['Linux 终端', '文本'],
            ['代码审查员', '文本'],
            ['正则生成器', '结构化'],
          ].map(([name, kind]) => (
            <li
              key={name}
              className="flex items-baseline justify-between gap-4 py-2 text-sm"
            >
              <span>{name}</span>
              <span className="text-xs text-field-muted">{kind}</span>
            </li>
          ))}
        </ul>
      </Panel>
    ),
  },
  {
    id: 'data',
    title: '一次拿走整份数据',
    line: 'CSV 五列、PROMPTS.md、Hugging Face 数据集，随便挑一种。',
    href: links.csv,
    hrefLabel: 'prompts.csv',
    panel: (
      <Panel label="prompts.csv 的列结构" className="px-4 py-4 sm:px-5">
        <table className="w-full table-fixed border-collapse break-words text-left text-xs">
          <thead>
            <tr className="text-field-muted">
              <th className="w-[26%] pb-2 pr-2 font-normal">act</th>
              <th className="w-[38%] pb-2 pr-2 font-normal">prompt</th>
              <th className="w-[12%] pb-2 pr-2 font-normal">for_devs</th>
              <th className="w-[12%] pb-2 pr-2 font-normal">type</th>
              <th className="hidden w-[12%] pb-2 font-normal sm:table-cell">contributor</th>
            </tr>
          </thead>
          <tbody className="text-[#d3c9c0]">
            {[
              ['Linux Terminal', 'I want you to act as…', 'TRUE', 'TEXT', 'f'],
              ['Code Reviewer', 'I want you to act as…', 'TRUE', 'TEXT', 'rajudandigam'],
              ['Socratic Method', 'I want you to act as a Socrat…', 'FALSE', 'TEXT', 'devisasari'],
            ].map((r) => (
              <tr key={r[0]} className="odd:bg-[#151210]">
                <td className="py-2 pr-2 align-top">{r[0]}</td>
                <td className="py-2 pr-2 align-top text-[#a9a39a]">{r[1]}</td>
                <td className="py-2 pr-2 align-top">{r[2]}</td>
                <td className="py-2 pr-2 align-top">{r[3]}</td>
                <td className="hidden py-2 align-top sm:table-cell">{r[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-field-muted">
          2,586 行 · CC0 · 也可以读{' '}
          <a
            href={links.promptsMd}
            target="_blank"
            rel="noopener noreferrer"
            className="text-field-ink underline decoration-white/25 underline-offset-4 hover:decoration-white"
          >
            PROMPTS.md
          </a>
        </p>
      </Panel>
    ),
  },
  {
    id: 'cli',
    title: '命令行',
    line: '装完就能翻库，不必打开浏览器。',
    href: links.home,
    hrefLabel: 'npx prompts.chat',
    panel: (
      <Panel label="命令行用法" className="max-w-[460px] px-5 py-4">
        <pre className="overflow-x-auto font-mono text-[13px] leading-[1.9] text-[#d3c9c0]">
          <code>
            <span className="text-[#e58a5f]">$</span> npx prompts.chat{'\n'}
            <span className="text-field-muted"># 在终端里翻整个库</span>
            {'\n'}
            <span className="text-[#e58a5f]">$</span> npx prompts.chat mcp{'\n'}
            <span className="text-field-muted"># 以 MCP 服务器运行（本地）</span>
          </code>
        </pre>
      </Panel>
    ),
  },
  {
    id: 'plugin',
    title: 'Claude Code 插件',
    line: '两条命令，把整个库装进编辑器。',
    href: links.plugin,
    hrefLabel: '插件文档',
    panel: (
      <Panel label="Claude Code 插件安装命令" className="px-5 py-4">
        <pre className="overflow-x-auto font-mono text-[13px] leading-[2] text-[#d3c9c0]">
          <code>
            /plugin marketplace add f/prompts.chat{'\n'}
            /plugin install prompts.chat@prompts.chat
          </code>
        </pre>
      </Panel>
    ),
  },
  {
    id: 'mcp',
    title: 'MCP 服务器',
    line: '让任何 AI 工具直接读这个库，远程或本地都行。',
    href: links.mcp,
    hrefLabel: 'MCP 文档',
    panel: (
      <Panel label="MCP 远程配置" className="max-w-[560px] px-5 py-4">
        <pre className="overflow-x-auto font-mono text-[13px] leading-[1.85] text-[#d3c9c0]">
          <code>
            {'{\n  '}
            <span className="text-[#e9a583]">&quot;mcpServers&quot;</span>
            {': {\n    '}
            <span className="text-[#e9a583]">&quot;prompts.chat&quot;</span>
            {': {\n      '}
            <span className="text-[#e9a583]">&quot;url&quot;</span>
            {': '}
            <span className="text-[#d8c9a8]">&quot;https://prompts.chat/api/mcp&quot;</span>
            {'\n    }\n  }\n}'}
          </code>
        </pre>
      </Panel>
    ),
  },
];

export function Use() {
  return (
    <section id="use" className="bg-surface">
      <div className={`${shell} pb-5 pt-[56px] md:pb-6 md:pt-[84px]`}>
        <h2 className="h2" data-reveal>
          同一份数据，<br className="md:hidden" />五种取用方式
        </h2>
        <p className="mt-4 max-w-[40em]" data-reveal style={{ '--d': '80ms' } as CSSProperties}>
          网页、CSV、CLI、Claude Code 插件、MCP 服务器。挑一个已经在你工作流里的。
        </p>
      </div>

      <div>
        {rows.map((row, i) => (
          <div key={row.id} className={i % 2 === 1 ? 'bg-surface-2' : ''}>
            <div
              className={`${shell} grid items-center gap-6 py-7 md:grid-cols-12 md:gap-10 md:py-10`}
            >
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-2' : ''}`}
                data-reveal
              >
                <h3 className="text-lead font-medium tracking-[-0.01em]">{row.title}</h3>
                <p className="mt-2 max-w-[26em]">{row.line}</p>
                <a
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block underline decoration-ink/25 underline-offset-[5px] text-sm transition-colors hover:decoration-ink"
                >
                  {row.hrefLabel}
                </a>
              </div>
              <div
                className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-1' : ''}`}
                data-reveal
                style={{ '--d': '90ms' } as CSSProperties}
              >
                {row.panel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
