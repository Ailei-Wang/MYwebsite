# Ailei Wang Portfolio

纯原生 HTML、CSS 与 JavaScript 制作的静态个人作品集，无框架、无构建步骤。

## 文件结构

```text
├── index.html       # 首页
├── work.html        # 作品列表
├── info.html        # 关于页
├── archive.html     # 归档页
├── styles.css       # 全站样式
├── script.js        # 淡入、语言切换、年份
└── assets/          # 作品图片占位文件
```

## 本地查看

下载或克隆仓库后，直接双击 `index.html` 即可浏览，也可以用任意静态文件服务器打开仓库根目录。

## 修改内容

- 文字：在四个 HTML 文件中搜索项目标题或段落并替换。
- 双语：带 `data-en` 和 `data-zh` 的元素分别存放英文与中文。
- 图片：把真实图片放进 `assets/`，然后替换 HTML 中对应 `<img>` 的 `src`。
- 颜色：在 `styles.css` 顶部 `:root` 中修改颜色和间距变量。
- 邮箱与社交链接：全局搜索 `hello@aileiwang.com` 和 `href="#"` 后替换。
- 简历：把 PDF 命名为 `cv-ailei-wang.pdf` 并放在仓库根目录。

## 部署

仓库文件已按静态网站根目录组织，可直接用于 GitHub Pages、Vercel 或 Cloudflare Pages，不需要构建命令。
