# Ailei Wang Portfolio

纯原生 HTML、CSS 与 JavaScript 制作的静态个人作品集，无框架、无构建步骤。

## 文件结构

```text
dist/
├── index.html       # 首页
├── work.html        # 作品列表
├── info.html        # 关于页
├── archive.html     # 归档页
├── styles.css       # 全站样式
├── script.js        # 淡入、语言切换、年份
└── assets/          # 作品图片占位文件
```

## 本地查看

直接双击 `dist/index.html` 即可浏览。也可以在 `dist` 目录启动任意静态文件服务器。

## 修改内容

- 文字：在四个 HTML 文件中搜索项目标题或段落并替换。
- 双语：带 `data-en` 和 `data-zh` 的元素分别存放英文与中文。
- 图片：把真实图片放进 `dist/assets/`，然后替换 HTML 中对应 `<img>` 的 `src`。建议首页横图使用约 2:1 比例，作品页图片使用约 1.18:1 比例。
- 颜色：在 `styles.css` 顶部 `:root` 中修改 `--color-blue` 等变量。
- 邮箱与社交链接：全局搜索 `hello@aileiwang.com` 和 `href="#"` 后替换。
- 简历：把 PDF 命名为 `cv-ailei-wang.pdf` 并放在 `dist/` 中。

## GitHub 与部署

1. 在 GitHub 新建空仓库。
2. 在本项目目录依次运行：`git init`、`git add .`、`git commit -m "Initial portfolio"`。
3. 按 GitHub 新仓库页面提示添加远程地址并推送。
4. Vercel：导入该 GitHub 仓库，Framework Preset 选择 `Other`，Output Directory 填 `dist`，无需 Build Command。
5. Cloudflare Pages：连接该仓库，Framework preset 选择 `None`，Build output directory 填 `dist`，无需 Build command。

以后每次修改后提交并推送，Vercel 或 Cloudflare Pages 会自动重新部署。
