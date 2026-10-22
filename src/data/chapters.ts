// 章节名取自官方中文版手册（src/content/book/zh），按主题分组，顺序沿用原书。
export type ChapterGroup = {
  title: string;
  items: string[];
  extra?: string;
};

export const chapterGroups: ChapterGroup[] = [
  {
    title: '基础',
    items: [
      '前言',
      '历史',
      '介绍',
      '理解 AI 模型',
      '有效提示词的结构',
      '提示词核心原则',
      '基于角色的提示词',
    ],
  },
  {
    title: '技巧',
    items: [
      '结构化输出',
      '思维链',
      '少样本学习',
      '迭代改进',
      'JSON 和 YAML 提示词',
      '系统提示词和人设',
      '提示词链',
      '处理边界情况',
      '多模态提示词',
    ],
  },
  {
    title: '进阶',
    items: [
      '上下文工程',
      '循环工程',
      '常见陷阱',
      '伦理和负责任使用',
      '提示词优化',
    ],
  },
  {
    title: '场景',
    items: [
      '写作和内容',
      '编程和开发',
      '教育和学习',
      '商业和生产力',
      '创意艺术',
      '研究和分析',
    ],
  },
  {
    title: '未来',
    items: [
      '提示词的未来',
      'Agent 和技能',
      '运行框架（Harness）',
      '工具、MCP 与连接器',
    ],
  },
];

export const kids = {
  title: 'Promi',
  items: [
    '给 8–14 岁的提示词游戏',
    '用谜题和故事教孩子跟 AI 说话',
    '免费，直接在浏览器里玩',
  ],
};
