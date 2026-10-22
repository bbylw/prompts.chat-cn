export const totals = {
  prompts: 2586,
  text: 2227,
  structured: 338,
  image: 21,
  dev: 182,
  sample: 64,
  stars: '143k+',
  citations: '40+',
  chapters: 28,
} as const;

export const links = {
  prompts: 'https://prompts.chat/prompts',
  home: 'https://prompts.chat',
  csv: 'https://github.com/f/prompts.chat/blob/main/prompts.csv',
  promptsMd: 'https://raw.githubusercontent.com/f/prompts.chat/main/PROMPTS.md',
  huggingface: 'https://huggingface.co/datasets/fka/prompts.chat',
  book: 'https://fka.gumroad.com/l/art-of-chatgpt-prompting',
  bookPdfZh:
    'https://github.com/f/prompts.chat/blob/main/public/book-pdf/book-zh-print.pdf',
  bookSource: 'https://github.com/f/prompts.chat/tree/main/src/content/book',
  kids: 'https://prompts.chat/kids',
  github: 'https://github.com/f/prompts.chat',
  selfHosting:
    'https://github.com/f/prompts.chat/blob/main/SELF-HOSTING.md',
  docker: 'https://github.com/f/prompts.chat/blob/main/DOCKER.md',
  plugin: 'https://github.com/f/prompts.chat/blob/main/CLAUDE-PLUGIN.md',
  mcp: 'https://prompts.chat/docs/api',
  contribute: 'https://prompts.chat/prompts/new',
  license: 'https://github.com/f/prompts.chat/blob/main/LICENSE',
  licenseMit: 'https://github.com/f/prompts.chat/blob/main/LICENSE-MIT',
  licenseCc0: 'https://github.com/f/prompts.chat/blob/main/LICENSE-CC0',
  deepwiki: 'https://deepwiki.com/f/prompts.chat',
  contributors: 'https://github.com/f/prompts.chat/graphs/contributors',
  byTheNumbers:
    'https://scholar.google.com/citations?user=AZ0Dg8YAAAAJ&hl=en',
} as const;

export const nav = [
  { label: '提示词库', href: '#lib' },
  { label: '可信度', href: '#proof' },
  { label: '取用', href: '#use' },
  { label: '手册', href: '#book' },
  { label: '自建', href: '#self' },
] as const;

export type ProofTile =
  | { kind: 'stat'; value: string; label: string; dark?: boolean }
  | { kind: 'name'; value: string; label: string; dark?: boolean }
  | { kind: 'heading'; value: string };

export const proofTiles: ProofTile[] = [
  { kind: 'heading', value: '首创于 2022 年 12 月' },
  { kind: 'stat', value: '143k+', label: 'GitHub 星标' },
  { kind: 'stat', value: '40+', label: '学术论文引用', dark: true },
  { kind: 'name', value: 'Hugging Face', label: '最受喜欢的数据集' },
  {
    kind: 'name',
    value: 'Forbes\nHarvard\nColumbia',
    label: '报道与课堂引用',
    dark: true,
  },
  { kind: 'name', value: 'Greg Brockman', label: 'OpenAI 联合创始人' },
  {
    kind: 'name',
    value: 'Wojciech Zaremba',
    label: 'OpenAI 联合创始人',
    dark: true,
  },
  { kind: 'name', value: 'Clement Delangue', label: 'Hugging Face 首席执行官' },
  { kind: 'name', value: 'Thomas Dohmke', label: 'GitHub 前首席执行官', dark: true },
  { kind: 'name', value: 'GitHub 官方精选', label: 'Spotlights 收录' },
  { kind: 'name', value: '2,586 条', label: '提示词，全部 CC0', dark: true },
];

export const integrations = [
  {
    id: 'web',
    title: '网页',
    line: '打开就是全文，不用注册，也没有付费墙。',
    href: links.prompts,
    hrefLabel: 'prompts.chat/prompts',
  },
  {
    id: 'data',
    title: '一次拿走整份数据',
    line: 'CSV 五列、PROMPTS.md、Hugging Face 数据集，随便挑一种。',
    href: links.csv,
    hrefLabel: 'prompts.csv',
  },
  {
    id: 'cli',
    title: '命令行',
    line: '装完就能翻库，不必打开浏览器。',
    href: links.home,
    hrefLabel: 'npx prompts.chat',
  },
  {
    id: 'plugin',
    title: 'Claude Code 插件',
    line: '两条命令，把整个库装进编辑器。',
    href: links.plugin,
    hrefLabel: '插件文档',
  },
  {
    id: 'mcp',
    title: 'MCP 服务器',
    line: '让任何 AI 工具直接读这个库，远程或本地都行。',
    href: links.mcp,
    hrefLabel: 'MCP 文档',
  },
] as const;
