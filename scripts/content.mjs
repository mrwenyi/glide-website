export const copy = {
  zh: {
    brand: '掌控', tagline: '电脑掌控，尽在手中',
    nav: ['功能', '下载', '帮助'], footerNav: ['使用帮助', '隐私说明', '反馈与支持', 'GitHub'],
    download: '获取掌控', learn: '探索功能', menu: '打开导航', skip: '跳到主要内容',
    preview: '公开测试版', local: '同一局域网，轻松连接',
    heroLead: '电脑掌控，', heroAccent: '尽在手中',
    heroText: '手机化身触控板、键盘与无线麦克风。想看电脑画面，也只需轻轻一点。',
    heroNote: '适用于 Mac 和 Windows · iPhone 版尚未上架',
    illustration: '当前应用界面 · 浏览器预览，电脑画面为测试素材',
    portraitLabel: '触控板与快捷操作', landscapeLabel: '观看电脑与语音控制',
    interfaceText: '真实控制界面，横竖屏各有适合的布局。',
    strip: ['触控与手势', '随手输入', '按住说话', '观看电脑'],
    featureEyebrow: '一部手机，更多可能', featureTitle: '从指尖到桌面，自然衔接。',
    featureLead: '坐在沙发上、站在演示台前，或只是换个更舒服的姿势。让手边的手机，成为电脑的延伸。',
    features: [
      { id: 'touch', icon: 'pointer', label: '触控操作', title: '滑动、点击，随心掌控。', text: '移动鼠标、左右点击、滚动页面，用熟悉的手机手势操作电脑。撤销、删除与回车，也随手可达。', note: '手机触控 → 电脑操作' },
      { id: 'text', icon: 'keyboard', label: '文字输入', title: '用手机打字，在电脑落笔。', text: '在手机上输入文字，再送到电脑当前的输入位置。短消息、搜索词或一段灵感，都可以从手边开始。', note: '手机键盘 → 当前输入位置' },
      { id: 'voice', icon: 'mic', label: '无线麦克风', title: '按住说话，把声音送到电脑。', text: '手机采集声音，通过局域网送入电脑上的语音应用。识别与转写由接收声音的应用完成，掌控负责连接。', note: '手机麦克风 → 电脑语音应用' },
      { id: 'screen', icon: 'monitor', label: '观看电脑', title: '电脑画面，随时握在手里。', text: '按需开启观看，选择显示器、调整画质，并缩放查看细节。观看时仍能使用触控、文字和语音操作。', note: '选择屏幕 · 调整画质 · 缩放查看' }
    ],
    connectionEyebrow: '连接，不必复杂', connectionTitle: '同一个网络，三步开始。',
    steps: [
      ['安装电脑端', '在 Mac 或 Windows 上安装掌控，按提示完成必要权限。'],
      ['连接同一局域网', '让手机和电脑连接同一个本地网络。当前版本不支持跨网络远程连接。'],
      ['扫码配对', '使用手机 App 扫描电脑端二维码，也可以手动填写配对信息。']
    ],
    helpLink: '查看完整使用指南', bottomTitle: '让电脑，多一种打开方式。', bottomText: '先了解安装要求，再选择适合你电脑的版本。',
    footerText: '手机与电脑之间，一点自然的连接。', footerLocal: '基于局域网的电脑控制工具',
    downloadTitle: '选好设备，开始掌控。', downloadText: '手机端与电脑端配合使用。当前提供电脑测试包，iPhone 商店版本正在准备中。',
    coming: '暂未上架', iphoneText: 'iPhone 是掌控的随身控制端。App Store 地址尚未提供，当前开发签名构建不适用于普通用户安装。',
    iphoneRequirement: '现有开发版：iOS 16.0+；计划商业版：iOS 16.3+',
    macArch: 'Apple 芯片与 Intel · 通用安装包', macWarning: '测试版：App 使用 Apple Development 签名，PKG 未签名、未公证。首次运行可能需要按 macOS 提示确认允许。',
    macIncluded: '包含 BlackHole 2ch 虚拟音频驱动及图形卸载器。',
    macButton: '下载 Mac 测试版', winText: '选择与你电脑处理器匹配的版本。解压后运行 Install.cmd，首次连接允许防火墙的专用网络访问。',
    winWarning: '测试版：尚未完成 Windows 真机验收，未使用正式发布证书签名。',
    winAudio: '语音功能需要另行安装虚拟音频设备；包内不含驱动。', winButton: '下载 Windows',
    releaseNotes: '版本说明', checksums: 'SHA-256 校验文件', hashLabel: '查看文件校验值',
    downloadNoteTitle: '下载前，先了解这几件事。',
    downloadNotes: [
      ['手机端发行状态', '电脑包可下载，但普通用户目前尚无公开的 iPhone 商店安装入口。请在手机端可用后再开始配对。'],
      ['局域网使用', '手机和电脑需要在同一局域网。当前版本不提供云端连接，也不传输电脑系统声音。'],
      ['专业版规划', 'iOS 一次内购解锁及每日体验额度仍是计划内容，尚未实施。本站不提供购买或展示未经确认的价格。'],
      ['其他兼容入口', 'Android 和 Mac 上的 Safari 控制入口已用于开发测试；首版官网以 iPhone 配合电脑端为主，不提供其通用安装承诺。']
    ],
    helpTitle: '从连接到使用，一步一步来。', helpText: '先完成电脑端安装与权限设置，再用可用的手机 App 配对。手机商店版本当前尚未上架。',
    helpSections: [
      { title: '01 · 安装与授权', items: [
        ['Mac', '下载通用 PKG 并完成安装。从“应用程序”打开掌控，在“系统设置 → 隐私与安全性 → 辅助功能”授权掌控。第一次观看屏幕时，按提示允许屏幕录制。安装位置沿用 /Applications/MacRemote.app，请勿安装后移动应用。当前 PKG 未签名、未公证，首次运行按系统实际提示操作。'],
        ['Windows', '选择 x64 或 ARM64 ZIP，解压后运行 Install.cmd。程序安装到当前用户目录，无需单独安装 Node 或 .NET。首次启动允许防火墙的专用网络访问。当前包未在 Windows 真机验收，请按测试版使用。']
      ] },
      { title: '02 · 配对与连接', items: [
        ['扫码连接', '将手机和电脑接入同一局域网。电脑端服务启动并显示二维码后，在手机 App 中扫描。App 会验证二维码中的证书指纹，并将配对令牌存入手机安全存储。'],
        ['手动连接', '在手机配对页打开“手动连接”，粘贴电脑端复制的完整配对地址；也可填写 IPv4、实际端口、6 位配对码与 SHA-256 证书指纹。手动连接使用与扫码相同的证书验证。证书变化或配对失效时需重新配对。']
      ] },
      { title: '03 · 使用语音与观看', items: [
        ['Mac 无线麦克风', '完整安装包包含 BlackHole 2ch。在掌控中配置音频路由，接收语音的应用将麦克风设为系统默认，语音快捷键与掌控配置一致。开始语音时自动切换系统输入，结束或断线后恢复原输入。声音识别与转写由接收应用完成。'],
        ['Windows 无线麦克风', '自行安装虚拟音频设备。在掌控中选择其播放端，接收语音的应用选择对应录音端或虚拟麦克风，并对齐语音快捷键。Windows 包不含驱动，也不切换系统默认麦克风。'],
        ['观看电脑', '点击“观看电脑”，在更多菜单中选择显示器并调整画质。只观看选定的一块屏幕，不传系统声音；关闭观看、手机进入后台或连接中断后结束采集。实际画质和流畅度取决于设备与本地网络。']
      ] },
      { title: '04 · 卸载与清理', items: [
        ['Mac', '在“应用程序”中打开“卸载掌控”（内部路径沿用 /Applications/卸载 MacRemote.app）。图形卸载器会清理应用、设置、配对、录音与日志。默认保留 BlackHole，只有明确选择移除音频驱动时才尝试删除。'],
        ['Windows', '从“设置 → 应用”卸载掌控，或运行 Uninstall.cmd。先关闭程序；卸载时可选择是否删除设置、录音与手机配对。']
      ] }
    ],
    faqTitle: '常见问题', faqs: [
      ['能在外面控制家里的电脑吗？', '当前版本仅支持同一局域网，不提供跨网络或云端远程连接。'],
      ['已经连上 Wi-Fi，为什么没有二维码？', '先检查电脑端是否显示本地服务运行中。Mac 二维码使用当前 Wi-Fi IPv4 地址；配对服务可能仍在准备，可以等待或点击重新读取。'],
      ['能控制电脑，却不能输入语音？', '控制与音频是独立能力。检查虚拟音频设备、路由设置、接收应用的麦克风和语音快捷键；未完成音频配置时仍可使用基础控制。'],
      ['掌控会自动把语音识别成文字吗？', '掌控将手机声音送到电脑；识别由你选择的语音应用或输入法完成，其联网与隐私行为取决于该应用。'],
      ['Windows 的管理员窗口为什么无法操作？', '当前程序以普通用户权限运行，不能控制管理员权限窗口及安全桌面。'],
      ['遇到问题，怎样反馈？', '前往 GitHub Issues，说明系统版本、安装包版本、操作步骤与现象。不要提交录音、配对码、证书私钥或包含私人内容的完整日志。']
    ],
    supportTitle: '还需要帮助？', supportText: '把版本、操作步骤和遇到的现象告诉我们。', supportButton: '在 GitHub 提交反馈',
    privacyTitle: '隐私，从实际行为说起。', privacyText: '这份说明涵盖官网，以及当前公开测试版掌控的本地连接、录音与数据存储行为。', updated: '更新日期：2026 年 10 月 6 日',
    privacySections: [
      ['连接与权限', '手机与电脑通过同一局域网建立 HTTPS / WSS 连接。手机 App 使用配对信息验证电脑证书指纹。手机相机用于扫码，麦克风用于录音；Mac 辅助功能用于输入控制，屏幕录制权限用于按需观看。权限由系统管理。当前版本不提供云端远程连接。'],
      ['电脑会保存录音', '使用语音功能时，电脑服务会将接收到的音频分片写入本地会话目录，结束后保存 manifest.json。会话记录包含时间、分片数量、音频格式及快捷键等元数据。音频不会自动删除：当前实现没有按天到期清理。停止说话或关闭连接，不等于删除已有文件。'],
      ['本地存储位置', 'Mac 的录音位于 ~/Library/Application Support/com.example.macremote/recordings/，同一应用目录下还保存设置、配对、证书与日志。Windows 的应用数据位于 %LOCALAPPDATA%\\MobileRemote\\，录音在 recordings 子目录。手机配对令牌保存在系统安全存储；重新安装的保留行为取决于系统。'],
      ['如何清理', '先退出电脑端掌控，再通过文件管理器删除 recordings 目录中的会话文件。请勿把配对信息或证书目录当作录音删除。Mac 图形卸载器会清理应用数据；Windows 卸载时选择删除设置、录音与配对才会清理这些数据。自行安装的第三方音频驱动按其卸载流程处理。'],
      ['屏幕与文字', '屏幕采集只在开启观看时启动，画面发送到已配对手机；本项目的观看链路不保存屏幕录像。输入的文字发送到电脑当前焦点位置。接收输入的程序可能自行保存文字或进行网络处理，这由该程序决定。'],
      ['第三方语音应用', '掌控负责采集和路由声音，不自行提供语音识别服务。电脑上的输入法或语音应用可能把声音发送给其服务提供商，具体以你选择的第三方应用设置及隐私政策为准。'],
      ['官网、下载与反馈', '官网由 GitHub Pages 托管，安装包通过 GitHub Releases 提供。本网站未接入自建账户、访问统计或广告追踪脚本；GitHub 可能按其隐私声明处理访问相关信息。GitHub Issues 中提交的反馈公开可见，请避免上传私人录音、配对信息或完整诊断数据。'],
      ['购买功能与说明更新', '当前测试版尚未实施专业版内购或每日体验额度。相关规划不代表已上线服务。实际版本的数据处理发生变化时，会同步更新本说明。隐私相关反馈可通过官网仓库的 GitHub Issues 提交。']
    ]
  },
  en: {
    brand: 'Glide', tagline: 'Your computer. In your hands.',
    nav: ['Features', 'Download', 'Help'], footerNav: ['User guide', 'Privacy', 'Support', 'GitHub'],
    download: 'Get Glide', learn: 'Explore features', menu: 'Open navigation', skip: 'Skip to content',
    preview: 'Public preview', local: 'One local network. One easy connection.',
    heroLead: 'Your computer.', heroAccent: 'In your hands.',
    heroText: 'Turn your phone into a trackpad, keyboard and wireless microphone. Bring your computer’s screen along with a tap.',
    heroNote: 'For Mac and Windows · iPhone app not yet on the App Store',
    illustration: 'Current app interface · Browser preview with a test desktop image',
    portraitLabel: 'Touchpad & quick actions', landscapeLabel: 'Screen view & voice controls',
    interfaceText: 'The current controls, with layouts for portrait and landscape.',
    strip: ['Touch & gestures', 'Type from your phone', 'Hold to talk', 'View your screen'],
    featureEyebrow: 'ONE PHONE. MORE POSSIBILITIES.', featureTitle: 'A natural extension of your desktop.',
    featureLead: 'On the sofa, in front of a presentation, or simply in a more comfortable position. Put your computer within reach of the phone you already hold.',
    features: [
      { id: 'touch', icon: 'pointer', label: 'Touch control', title: 'Move, click, scroll. Make it yours.', text: 'Move the pointer, left-click, right-click and scroll using familiar phone gestures. Undo, Delete and Enter are always close at hand.', note: 'Phone gestures → computer actions' },
      { id: 'text', icon: 'keyboard', label: 'Text input', title: 'Type here. Write over there.', text: 'Enter text on your phone and send it to the focused input on your computer. A short message, a search or an idea can start right where you are.', note: 'Phone keyboard → focused input' },
      { id: 'voice', icon: 'mic', label: 'Wireless mic', title: 'Hold to talk. Let your computer hear.', text: 'Send your phone’s microphone audio over your local network to a voice app on your computer. That app handles recognition; Glide makes the connection.', note: 'Phone microphone → computer voice app' },
      { id: 'screen', icon: 'monitor', label: 'View computer', title: 'Your screen, close at hand.', text: 'Start viewing when you need it. Choose a display, adjust quality and zoom into details while keeping touch, text and voice controls available.', note: 'Choose a display · adjust quality · zoom' }
    ],
    connectionEyebrow: 'LESS SETUP. MORE CONNECTION.', connectionTitle: 'Same network. Three simple steps.',
    steps: [
      ['Install on your computer', 'Install Glide on Mac or Windows and enable the required system permissions.'],
      ['Join the same network', 'Connect your phone and computer to the same local network. Cross-network access is not supported.'],
      ['Scan to pair', 'Scan the computer’s QR code in the phone app, or enter the pairing information manually.']
    ],
    helpLink: 'Read the full setup guide', bottomTitle: 'A new way to reach your computer.', bottomText: 'Check the installation requirements, then choose the right desktop version.',
    footerText: 'A little connection. A lot within reach.', footerLocal: 'Computer control over your local network',
    downloadTitle: 'Pick your device. Get connected.', downloadText: 'Glide pairs a phone app with a desktop companion. Desktop preview packages are available; the iPhone App Store release is being prepared.',
    coming: 'Not yet on the App Store', iphoneText: 'Your iPhone is the handheld controller. No App Store link is available yet. Development-signed builds are not a general installation option.',
    iphoneRequirement: 'Current development build: iOS 16.0+; planned commercial build: iOS 16.3+',
    macArch: 'Apple silicon & Intel · universal package', macWarning: 'Preview: the app uses an Apple Development signature. The PKG is unsigned and not notarized. First launch may require confirmation in macOS settings.',
    macIncluded: 'Includes the BlackHole 2ch virtual audio driver and a graphical uninstaller.', macButton: 'Download Mac preview',
    winText: 'Choose the build for your processor. Extract the ZIP and run Install.cmd. Allow private-network access in the firewall on first connection.',
    winWarning: 'Preview: these packages have not been tested on Windows hardware and are not signed with a production release certificate.',
    winAudio: 'Voice requires a separately installed virtual audio device; no driver is bundled.', winButton: 'Download Windows',
    releaseNotes: 'Release notes', checksums: 'SHA-256 checksums', hashLabel: 'Show file checksums',
    downloadNoteTitle: 'A few things to know before installing.', downloadNotes: [
      ['Phone app availability', 'Desktop packages can be downloaded, but there is currently no public iPhone App Store installation link. Pairing requires an available phone app.'],
      ['Local-network use', 'Your phone and computer must be on the same local network. The current version offers no cloud connection and does not transmit computer system audio.'],
      ['Pro version plans', 'An iOS one-time purchase and daily trial limits are planned, not implemented. This site offers no purchase flow or unconfirmed pricing.'],
      ['Other compatible clients', 'Android and the Safari control page on Mac are used in development testing. This site focuses on iPhone with desktop companions, without promising general installation for those clients.']
    ],
    helpTitle: 'From setup to control, step by step.', helpText: 'Install the desktop companion and enable permissions, then pair an available phone app. The iPhone App Store release is not yet available.',
    helpSections: [
      { title: '01 · Installation & permissions', items: [
        ['Mac', 'Download the universal PKG and install. Open Glide in Applications, then allow it under System Settings → Privacy & Security → Accessibility. Allow Screen Recording when first viewing a display. The internal installation path remains /Applications/MacRemote.app; do not move the app after installation. The current PKG is unsigned and not notarized; follow the actual macOS prompts on first launch.'],
        ['Windows', 'Choose the x64 or ARM64 ZIP, extract it and run Install.cmd. Installation is per user; Node and .NET are bundled. Allow private-network firewall access. These packages have not been tested on Windows hardware and should be treated as preview builds.']
      ] },
      { title: '02 · Pairing & connection', items: [
        ['Scan a QR code', 'Join the same local network on your phone and computer. Once the desktop service is running and shows a QR code, scan it in the phone app. The app validates the computer certificate fingerprint and stores the pairing token in secure system storage.'],
        ['Pair manually', 'Open Manual connection on the phone pairing page and paste the full pairing URL copied from the desktop app. Alternatively, enter the IPv4 address, actual port, six-digit code and SHA-256 certificate fingerprint. Manual pairing uses the same certificate validation as scanning. Pair again when the certificate changes or pairing becomes invalid.']
      ] },
      { title: '03 · Voice & screen viewing', items: [
        ['Mac wireless microphone', 'The full installer includes BlackHole 2ch. Configure audio routing in Glide and select the system-default microphone in your receiving voice app. Match its voice hotkey with Glide. Glide switches the system input when voice starts and restores it after stopping or disconnection. The receiving app performs recognition and transcription.'],
        ['Windows wireless microphone', 'Install a virtual audio device separately. Select its playback endpoint in Glide and its recording endpoint or virtual microphone in the receiving app, then match voice hotkeys. No driver is bundled and Glide does not change the Windows default microphone.'],
        ['View your computer', 'Choose View computer, then select a display and quality in the More menu. Only the selected screen is transmitted, without system audio. Capture ends when viewing is closed, the phone goes to the background or the connection drops. Quality and smoothness depend on your devices and local network.']
      ] },
      { title: '04 · Uninstalling & cleanup', items: [
        ['Mac', 'Open the Glide uninstaller in Applications; its internal path remains /Applications/卸载 MacRemote.app. It removes the app, settings, pairing data, recordings and logs. BlackHole is kept by default unless you explicitly choose to remove the audio driver.'],
        ['Windows', 'Uninstall Glide in Settings → Apps, or run Uninstall.cmd. Close the program first. The uninstaller lets you choose whether to delete settings, recordings and pairing data.']
      ] }
    ],
    faqTitle: 'Frequently asked questions', faqs: [
      ['Can I control my home computer while away?', 'The current version only works on the same local network. It has no cross-network or cloud connection.'],
      ['I am on Wi-Fi. Why is there no QR code?', 'Check that the desktop service is running. On Mac the QR code uses the current Wi-Fi IPv4 address. Pairing may still be initializing; wait or choose Reload.'],
      ['Control works. Why does voice not work?', 'Control and audio are separate capabilities. Check your virtual device, routing, receiving-app microphone and voice hotkey. Basic control remains available without configured audio.'],
      ['Does Glide transcribe speech?', 'Glide routes audio to your computer. Your chosen voice app or input method performs recognition, with its own network and privacy behavior.'],
      ['Why can’t I control elevated Windows dialogs?', 'The app runs with normal user permissions and cannot control administrator windows or the secure desktop.'],
      ['How can I report a problem?', 'Open a GitHub issue with your OS, package version, steps and symptoms. Do not attach recordings, pairing codes, certificate private keys or full logs containing personal content.']
    ],
    supportTitle: 'Need a hand?', supportText: 'Tell us your version, the steps you took and what happened.', supportButton: 'Report an issue on GitHub',
    privacyTitle: 'Privacy, grounded in what happens.', privacyText: 'This notice covers this website and the current Glide preview’s local connections, recordings and data storage.', updated: 'Last updated: October 6, 2026',
    privacySections: [
      ['Connections & permissions', 'Phone and desktop communicate over HTTPS / WSS on the same local network. The phone app verifies the computer certificate fingerprint through pairing. The camera scans codes, the microphone records audio, Mac Accessibility enables input control and Screen Recording enables on-demand viewing. The operating system manages permissions. There is no cloud remote connection in the current version.'],
      ['Audio is stored on your computer', 'During voice use, the desktop service writes received audio chunks to local session folders and saves manifest.json when a session ends. Metadata includes timestamps, chunk count, audio format and hotkey information. Audio files are not automatically deleted: the current implementation has no age-based retention cleanup. Stopping voice or disconnecting does not delete existing files.'],
      ['Local storage locations', 'Mac recordings are under ~/Library/Application Support/com.example.macremote/recordings/. The same application directory also holds settings, pairing data, certificates and logs. Windows application data is under %LOCALAPPDATA%\\MobileRemote\\, with audio in the recordings subdirectory. Phone pairing tokens are kept in secure system storage; retention on reinstallation depends on the operating system.'],
      ['Deleting your data', 'Quit the desktop app before deleting session files in recordings using your file manager. Do not confuse pairing or certificate folders with recordings. The Mac graphical uninstaller removes application data; on Windows select deletion of settings, recordings and pairing data during uninstall. Separately installed third-party audio drivers have their own uninstall procedures.'],
      ['Screens & text', 'Screen capture starts only when viewing is enabled and is sent to the paired phone. This project’s viewing pipeline does not save screen recordings. Text is sent to the currently focused computer input. Receiving applications may store or process it over the network under their own policies.'],
      ['Third-party voice applications', 'Glide captures and routes sound; it does not provide its own speech recognition service. Computer input methods or voice apps may send audio to their providers. Check the settings and privacy policy of your chosen third-party application.'],
      ['Website, downloads & feedback', 'GitHub Pages hosts this website and GitHub Releases provides installers. The website adds no proprietary accounts, analytics or advertising trackers. GitHub may process access information under its privacy statement. GitHub Issues feedback is public; avoid attaching private recordings, pairing information or complete diagnostic data.'],
      ['Purchases & notice updates', 'The current preview has no implemented Pro purchase or daily trial limits. Plans are not live services. This notice will be updated when actual data handling changes. Privacy feedback can be submitted through the website repository’s GitHub Issues.']
    ]
  }
};
