<h1 align="center">
  <a href="https://prompts.chat">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://prompts.chat/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://prompts.chat/logo.svg">
      <img height="60" alt="prompts.chat" src="https://prompts.chat/logo.svg">
    </picture>
    <br>
    prompts.chat
  </a>
</h1>

<p align="center">
  <strong>全球最大的开源 AI 提示词库</strong><br>
  <sub>适用于 ChatGPT、Claude、Gemini、Llama、Mistral 等</sub>
</p>
<p align="center">
  <sub>原名 Awesome ChatGPT Prompts</sub>
</p>

<p align="center">
  <a href="https://prompts.chat"><img src="https://img.shields.io/badge/Website-prompts.chat-blue?style=flat-square" alt="Website"></a>
  <a href="https://github.com/sindresorhus/awesome"><img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome"></a>
  <a href="https://huggingface.co/datasets/fka/prompts.chat"><img src="https://img.shields.io/badge/🤗-Hugging_Face-yellow?style=flat-square" alt="Hugging Face"></a>
  <a href="https://deepwiki.com/f/prompts.chat"><img src="https://img.shields.io/badge/Ask%20DeepWiki-4F46E5?style=flat-square" alt="Ask DeepWiki"></a>
</p>

<p align="center">
  <a href="https://prompts.chat/prompts">🌐 浏览提示词</a> •
  <a href="https://fka.gumroad.com/l/art-of-chatgpt-prompting">📖 阅读手册</a> •
  <a href="https://raw.githubusercontent.com/f/prompts.chat/main/PROMPTS.md">📄 在 GitHub 查看</a> •
  <a href="#-self-hosting">🚀 自建部署</a>
</p>

<p align="center">
  <sub>
    🏆 获 <a href="https://www.forbes.com/sites/tjmccue/2023/01/19/chatgpt-success-completely-depends-on-your-prompt/">Forbes</a> 报道 ·
    🎓 被 <a href="https://www.huit.harvard.edu/news/ai-prompts">Harvard</a>、<a href="https://etc.cuit.columbia.edu/news/columbia-prompt-library-effective-academic-ai-use">Columbia</a> 引用 ·
    📄 <a href="https://scholar.google.com/citations?user=AZ0Dg8YAAAAJ&hl=en">40+ 学术引用</a> ·
    ❤️ Hugging Face 上<a href="https://huggingface.co/datasets/fka/prompts.chat">最受喜欢的数据集</a><br>
    ⭐ 143k+ GitHub 星标 ·
    🏅 <a href="https://spotlights-feed.github.com/spotlights/prompts-chat/index/">GitHub 官方精选</a> ·
    🚀 首个提示词库（2022 年 12 月）
  </sub>
</p>

<p align="center">
  <sub><strong>深受 AI 先驱喜爱：</strong></sub><br>
  <sub>
    <a href="https://x.com/gdb/status/1602072566671110144"><strong>Greg Brockman</strong></a>（OpenAI 联合创始人） ·
    <a href="https://x.com/woj_zaremba/status/1601362952841760769"><strong>Wojciech Zaremba</strong></a>（OpenAI 联合创始人） ·
    <a href="https://x.com/clementdelangue/status/1830976369389642059"><strong>Clement Delangue</strong></a>（Hugging Face 首席执行官） ·
    <a href="https://x.com/ashtom/status/1887250944427237816"><strong>Thomas Dohmke</strong></a>（GitHub 前首席执行官）
  </sub>
</p>

---

## 这是什么？

一个精选的 AI 聊天模型**提示词**合集。最初为 ChatGPT 创建，这些提示词适用于任何现代 AI 助手。

| 浏览提示词 | 数据格式 |
|------------|----------|
| [prompts.chat](https://prompts.chat/prompts) | [prompts.csv](https://github.com/f/prompts.chat/blob/main/prompts.csv) |
| [PROMPTS.md](https://raw.githubusercontent.com/f/prompts.chat/main/PROMPTS.md) | [Hugging Face 数据集](https://huggingface.co/datasets/fka/prompts.chat) |

**想要贡献？** 在 [prompts.chat/prompts/new](https://prompts.chat/prompts/new) 添加提示词 —— 它们会自动同步到这里。

---

## 📖 交互式提示工程手册

通过我们**免费的交互式指南**学习提示工程 —— 28+ 章节，涵盖从基础到思维链推理、少样本学习、AI 智能体等高级技巧。

**[开始阅读 →](https://fka.gumroad.com/l/art-of-chatgpt-prompting)**（源码：https://github.com/f/prompts.chat/tree/main/src/content/book）

---

## 🎮 给孩子用的提示工程

<p>
  <a href="https://prompts.chat/kids">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://prompts.chat/promi-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://prompts.chat/promi.svg">
      <img height="60" alt="Promi" src="https://prompts.chat/promi.svg" align="left">
    </picture>
  </a>
</p>

一个互动、游戏化的冒险，通过有趣的谜题和故事，教 8-14 岁的孩子如何与 AI 交流。

**[开始游戏 →](https://prompts.chat/kids)**

<br clear="left">

---

## 🚀 自建部署

部署你自己的私有提示词库，支持自定义品牌、主题与身份认证。

**快速开始：**
```bash
npx prompts.chat new my-prompt-library
cd my-prompt-library
```

**手动搭建：**
```bash
git clone https://github.com/f/prompts.chat.git
cd prompts.chat
npm install && npm run setup
```

设置向导会配置品牌、主题、身份认证（GitHub/Google/Azure AD）以及各项功能。

**推荐数据库：** prompts.chat 使用 PostgreSQL。如需托管数据库，我们推荐 [Neon](https://get.neon.com/VqfnMo4)。

<div>
  <p>赞助商</p>
  <a href="https://get.neon.com/VqfnMo4">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/neon-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/neon.svg">
      <img width="250px" alt="Neon Logo 备用图" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/neon-dark.svg">
    </picture>
  </a>
</div>

📖 **[完整自建部署指南](https://github.com/f/prompts.chat/blob/main/SELF-HOSTING.md)** • 🐳 **[Docker 指南](https://github.com/f/prompts.chat/blob/main/DOCKER.md)**

---

## 🔌 集成

### 命令行（CLI）
```bash
npx prompts.chat
```

### Claude Code 插件
```
/plugin marketplace add f/prompts.chat
/plugin install prompts.chat@prompts.chat
```
📖 [插件文档](https://github.com/f/prompts.chat/blob/main/CLAUDE-PLUGIN.md)

### MCP 服务器
在你的 AI 工具中将 prompts.chat 作为 MCP 服务器使用。

**远程（推荐）：**
```json
{
  "mcpServers": {
    "prompts.chat": {
      "url": "https://prompts.chat/api/mcp"
    }
  }
}
```

**本地：**
```json
{
  "mcpServers": {
    "prompts.chat": {
      "command": "npx",
      "args": ["-y", "prompts.chat", "mcp"]
    }
  }
}
```

📖 [MCP 文档](https://prompts.chat/docs/api)

---

## 💖 赞助商

<p align="center">
  <!-- Neon (py-1) -->
  <a href="https://get.neon.com/VqfnMo4">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/neon-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/neon.svg">
      <img height="30" alt="Neon" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/neon.svg">
    </picture>
  </a>&nbsp;&nbsp;
  <!-- Clemta -->
  <a href="https://clemta.com/?utm_source=prompts.chat">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/clemta-dark.webp">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/clemta.webp">
      <img height="35" alt="Clemta" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/clemta.webp">
    </picture>
  </a>&nbsp;&nbsp;
  <!-- Wiro (py-1) -->
  <a href="https://wiro.ai/?utm_source=prompts.chat">
    <img height="30" alt="Wiro" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/wiro.png">
  </a>&nbsp;&nbsp;
  <!-- Cognition -->
  <a href="https://wind.surf/prompts-chat">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/cognition-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/cognition.svg">
      <img height="35" alt="Cognition" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/cognition.svg">
    </picture>
  </a>&nbsp;&nbsp;
  <!-- CodeRabbit (py-1) -->
  <a href="https://coderabbit.link/fatih">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/coderabbit-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/coderabbit.svg">
      <img height="30" alt="CodeRabbit" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/coderabbit.svg">
    </picture>
  </a>&nbsp;&nbsp;
  <!-- Sentry (py-1) -->
  <a href="https://sentry.io/?utm_source=prompts.chat">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/sentry-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/sentry.svg">
      <img height="30" alt="Sentry" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/sentry.svg">
    </picture>
  </a>&nbsp;&nbsp;
  <!-- Each Labs (py-[6px]) -->
  <a href="https://www.eachlabs.ai/?utm_source=promptschat&utm_medium=referral">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/eachlabs-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/eachlabs.png">
      <img height="28" alt="Each Labs" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/eachlabs.png">
    </picture>
  </a>&nbsp;&nbsp;
  <!-- CommandCode (py-1) -->
  <a href="https://commandcode.ai/?utm_source=prompts.chat">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/commandcode-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/commandcode.svg">
      <img height="30" alt="CommandCode" src="https://raw.githubusercontent.com/f/prompts.chat/main/public/sponsors/commandcode.svg">
    </picture>
  </a>
</p>

<p align="center">
  <sub>基于 <a href="https://wind.surf/prompts-chat">Windsurf</a> 与 <a href="https://devin.ai">Devin</a> 构建</sub><br>
  <a href="https://github.com/sponsors/f/sponsorships?sponsor=f&tier_id=558224&preview=false"><strong>成为赞助商 →</strong></a>
</p>

---

## 👥 贡献者

<a href="https://github.com/f/prompts.chat/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=f/prompts.chat" />
</a>

---

## 📜 许可证

本项目采用双重许可：

- **源代码与站点原创内容**采用 [MIT 许可证](https://github.com/f/prompts.chat/blob/main/LICENSE-MIT)，
  包括 [`src/content/book`](https://github.com/f/prompts.chat/tree/main/src/content/book) 中的交互式手册内容。
- **提示词内容与数据**（prompts.csv、PROMPTS.md、用户提交的提示词）以 [CC0 1.0 Universal](https://github.com/f/prompts.chat/blob/main/LICENSE-CC0) 协议贡献至公共领域。

详见 [LICENSE](https://github.com/f/prompts.chat/blob/main/LICENSE)。
