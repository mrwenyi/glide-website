# 掌控 / Glide

掌控是一款在同一局域网内，用手机控制 Mac / Windows 的工具。这个公开仓库维护产品官网与电脑端发行附件，不包含应用源码。

- 官网：[mrwenyi.github.io/glide-website](https://mrwenyi.github.io/glide-website/)
- 安装包：[GitHub Releases](https://github.com/mrwenyi/glide-website/releases)
- 使用指南：[中文](https://mrwenyi.github.io/glide-website/help/) / [English](https://mrwenyi.github.io/glide-website/en/help/)
- 支持与反馈：[Issues](https://github.com/mrwenyi/glide-website/issues)

## 当前发行状态

| 平台 | 版本 | 说明 |
| --- | --- | --- |
| Mac | 0.1.24 / build 25 | 通用 PKG，最低 macOS 13；Apple Development 签名，PKG 未签名、未公证 |
| Windows | 0.2.8 | Windows 11 x64 / ARM64 测试包；尚未完成真机验收、正式签名 |
| iPhone | 尚未上架 | 暂无公开 App Store 安装地址；开发签名 ZIP 不是普通用户安装入口 |

电脑包可下载，但配对需要可用的手机客户端。当前版本只支持局域网，不提供跨网络访问或电脑系统声音传输。专业版内购与每日体验额度仍是计划内容。

## 官网维护

使用 Node.js 22 或更新版本，不需要安装第三方依赖。

```sh
npm run build
npm test
npm run preview
```

预览地址为 `http://127.0.0.1:4178/glide-website/`，与线上项目子路径一致。

- `site.config.mjs`：商店地址、发行版本、下载文件、校验值、系统要求、支持入口和更新日期。
- `scripts/content.mjs`：完整中英文文案。
- `scripts/build.mjs`：生成首页、下载、帮助与隐私共八个静态页面，以及 sitemap 和 `.nojekyll`。
- `assets/style.css` / `assets/app.js`：视觉样式、手机菜单与功能展示。

修改配置或文案后运行构建与测试，将生成的 HTML 一同提交。GitHub Pages 从 `main` 分支根目录发布；内部链接使用相对路径，适配 `/glide-website/`。生成的页面支持直接打开与刷新。

## 更新安装包

安装包只上传到 Release 附件，不提交进 Git。每个平台使用独立版本标签。

1. 检查包的系统要求、架构、签名与真实验收状态。
2. 为同一 Release 的附件生成 `SHA256SUMS`，文件名使用附件 basename。
3. 以预发布状态上传尚未正式验收的版本，例如：

```sh
gh release create mac-v0.1.24-preview /path/to/Glide-Mac-0.1.24.pkg /path/to/SHA256SUMS \
  --repo mrwenyi/glide-website --target main --prerelease \
  --title 'Glide for Mac 0.1.24 — Preview' --notes-file /path/to/release-notes.md
```

4. 更新 `site.config.mjs` 中的 tag、版本、附件名、文件大小和 SHA-256，以及双语文案中的发行状态。
5. 运行构建与测试，提交并推送 `main`。
6. 等待 Pages 部署成功，以未登录方式打开页面，并下载附件核对 SHA-256。

相同标签已存在时，先检查现有附件与校验值，不覆盖已经公布的不同内容。Windows x64 与 ARM64 的附件及校验文件放在同一 Windows Release。

## 素材与隐私

应用图标使用已选定的「折光」稿。`assets/control-{touch,text,voice,screen}-{zh,en}.jpg` 直接截取当前应用共用的网页控制界面：竖屏 390 × 844，横屏 874 × 402。通过应用项目的安全预览 fixture 展示，电脑画面采用已有测试文档，未采集真实桌面；这些是浏览器预览截图，不是真机截图。官网不在截图上叠加虚构控件或替换界面。

更新界面素材时，用当前控制界面的预览服务重新截取中英文四种视图，保留截图原始比例，并同步修改构建脚本中的尺寸。功能标签必须切换到对应截图。运行测试后，还应在手机、平板和桌面尺寸核对图片实际渲染比例、导航及键盘切换；仅检查页面是否溢出无法发现图片拉伸。本仓库不包含录音、配对令牌、证书私钥或完整诊断日志。

官网无账户、支付或自建统计服务。GitHub Pages、Releases 与 Issues 使用 GitHub 的托管服务。实际电脑端语音文件会保存在本地，并不会自动清理；详见[隐私说明](https://mrwenyi.github.io/glide-website/privacy/)。

---

Glide connects your phone to a Mac or Windows computer on the same local network. This repository hosts the bilingual static website and desktop preview releases. Run `npm run build`, `npm test`, and `npm run preview` to maintain it. The iPhone App Store release is not yet available; desktop installers are preview builds with the limitations described above.
