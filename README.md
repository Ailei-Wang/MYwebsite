# Ailei Wang Portfolio

纯原生 HTML、CSS 与 JavaScript 制作的静态个人作品集，无框架、无构建步骤。

## 文件结构

```text
├── index.html
├── work.html
├── info.html
├── archive.html
├── styles.css
├── script.js
└── assets/
```

## 本地查看

下载或克隆仓库后，直接双击 `index.html` 即可浏览；也可以使用任意静态文件服务器预览。

## 修改内容

- 文字：直接编辑各 HTML 文件中的正文与 `data-en` / `data-zh` 属性。
- 双语：保留相同元素上的英文与中文属性，右上角按钮会自动切换。
- 项目图片：把图片放入 `assets/`，再修改 HTML 中对应 `<img src="...">`。
- 个人照片：把竖版照片放入 `assets/`，并在 `info.html` 中将 `profile-placeholder.svg` 替换为你的文件名；建议使用 4:5 比例。
- 颜色：在 `styles.css` 顶部修改 `--color-blue` 等变量。
- 邮箱与社交链接：搜索 `hello@aileiwang.com` 和链接占位符 `href="#"` 后替换。
- 简历：把 PDF 命名为 `cv-ailei-wang.pdf` 并放在网站根目录。

## 部署

仓库文件位于根目录，可直接使用 GitHub Pages、Vercel 或 Cloudflare Pages 部署，无需构建命令。
