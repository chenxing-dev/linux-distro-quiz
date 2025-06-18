const questions = [
  {
    id: 1,
    text: "当你的电脑坏了，你会：",
    options: [
      { id: "a", text: "立即购买同款昂贵型号", traits: { macos: 3 } },
      { id: "b", text: "提交工单联系客服", traits: { macos: 2, rhel: 3 } },
      { id: "c", text: "做足功课买平替", traits: { arch: 2, gentoo: 2, nixos: 3 } },
      { id: "d", text: "趁机升级电脑，换张新显卡好好享受游戏", traits: { popos: 3 } },
      { id: "e", text: "边抱怨边继续使用", traits: { debian: 2, mint: 2, ubuntu: 1 } },
      { id: "f", text: "翻出3台旧笔记本拆装配件", traits: { kali: 3, gentoo: 2 } }
    ]
  },
  {
    id: 2,
    text: "你查阅技术文档的频率：",
    options: [
      { id: "a", text: "技术文档是什么？我直接问DeepSeek", traits: { macos: 3, ubuntu: 2, popos: 1 } },
      { id: "b", text: "我把技术文档当厕所读物", traits: { arch: 3, gentoo: 3, rhel: 2 } },
      { id: "c", text: "写技术文档是我的爱好", traits: { arch: 1, nixos: 3, debian: 2 } },
      { id: "d", text: "实在没有其他办法时查阅（比如百度小红书搜不到的时候）", traits: { mint: 2, popos: 2 } }
    ]
  },
  {
    id: 3,
    text: "你对电脑消费的态度是：",
    options: [
      { id: "a", text: "贵有贵的道理", traits: { macos: 3, rhel: 3, nixos: 3, kali: 3 } },
      { id: "b", text: "货比三家，找到性价比最高的", traits: { debian: 3, ubuntu: 3, popos: 2 } },
      { id: "c", text: "宁愿赞助开源贡献者", traits: { debian: 3, arch: 2 } },
      { id: "d", text: "宁愿花时间不愿花钱", traits: { arch: 3, gentoo: 3, artix: 2 } },
      { id: "e", text: "我只在乎有没有RGB灯效和炫酷外观", traits: { popos: 3 } },
      { id: "f", text: "钱？我还在用我的二手ThinkPad", traits: { arch: 3, gentoo: 2, mint: 2 } }
    ]
  },
  {
    id: 4,
    text: "选择一个命令行配色方案：",
    options: [
      { id: "a", text: "默认 - 我不怎么用命令行", traits: { macos: 3, mint: 2, ubuntu: 1 } },
      { id: "b", text: "我是来工作的，不是来欣赏颜色配搭的", traits: { gentoo: 3, debian: 3, rhel: 3 } },
      { id: "c", text: "黑底绿字 - 黑客风格", traits: { kali: 3 } },
      { id: "d", text: "自定义配色 - 完美匹配我的自定义桌面", traits: { arch: 3, nixos: 2, artix: 2 } }
    ]
  },
  {
    id: 5,
    text: "你的周六晚上通常：",
    options: [
      { id: "a", text: "打卡新网红餐厅", traits: {} },
      { id: "b", text: "一边编译软件一边看电影", traits: { gentoo: 3, artix: 3 } },
      { id: "c", text: "和朋友五排开黑", traits: { popos: 3, macos: 2 } },
      { id: "d", text: "向不感兴趣的朋友推荐我最爱的操作系统", traits: { arch: 2, nixos: 3, ubuntu: 2, mint: 2 } },
      { id: "e", text: "重新整理我的dotfiles配置文件", traits: { arch: 2, nixos: 3 } },
      { id: "f", text: "黑进公司服务器", traits: { kali: 2 } }
    ]
  },
  {
    id: 6,
    text: "你对systemd的看法是：",
    options: [
      { id: "a", text: "systemd是什么?", traits: { macos: 3, mint: 1, popos: 1 } },
      { id: "b", text: "能用就行", traits: {} },
      { id: "c", text: "勉强容忍", traits: {} },
      { id: "d", text: "始终坚持零容忍，用火烧了它！", traits: { gentoo: 3, artix: 5 } }
    ]
  },
  {
    id: 7,
    text: "你更新应用软件的频率：",
    options: [
      { id: "a", text: "系统推送通知更新时更新", traits: { macos: 3, ubuntu: 1, popos: 2 } },
      { id: "b", text: "等待6个月确保稳定性后更新", traits: { debian: 3, rhel: 2, mint: 2 } },
      { id: "c", text: "每日更新系统，凌晨3点修复更新导致的崩溃", traits: { arch: 3, nixos: 2, gentoo: 2, kali: 3, artix: 3 } },
      { id: "d", text: "每2年出LTS长期支持版时升级", traits: { mint: 2, ubuntu: 3 } }
    ]
  },
  {
    id: 8,
    text: "你使用的显示器：",
    options: [
      { id: "a", text: "笔记本自带屏幕", traits: { macos: 1, mint: 1 } },
      { id: "b", text: "一台1920p显示器 - 够用就行", traits: { ubuntu: 3, mint: 2, debian: 3, rhel: 2 } },
      { id: "c", text: "超宽曲面屏", traits: { popos: 3, nixos: 3 } },
      { id: "d", text: "不需要显示器，我用手机SSH连接", traits: { kali: 2 } }
    ]
  },
  {
    id: 9,
    text: "你电脑最显著的特点是：",
    options: [
      { id: "a", text: "闪亮的Logo", traits: { macos: 3 } },
      { id: "b", text: "各种小众贴纸", traits: { arch: 3, macos: 2, nixos: 3, kali: 3 } },
      { id: "c", text: "随音乐同步的自定义RGB灯光", traits: { popos: 3 } },
      { id: "d", text: "积攒自2018年的灰尘", traits: { debian: 2 } },
      { id: "e", text: "一刻不停的风扇噪音", traits: { gentoo: 3, debian: 2 } },
      { id: "f", text: "没有任何显著特点", traits: { mint: 3, ubuntu: 2, debian: 1, rhel: 3 } }
    ]
  },
  {
    id: 10,
    text: "当你听到'Linux'时：",
    options: [
      { id: "a", text: "Linux是什么?", traits: { macos: 3 } },
      { id: "b", text: "Windows和macOS的平替", traits: {} },
      { id: "c", text: "一个经济高效的企业解决方案", traits: { rhel: 3 } },
      { id: "d", text: "一次自我革命，走进自由开源新世界", traits: { artix: 2 } }
    ]
  }
];

export default questions;
