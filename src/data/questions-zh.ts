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
    text: "选择一个命令行配色方案:",
    options: [
      { id: "a", text: "默认 - 我不怎么用命令行", traits: { macos: 3, mint: 2, ubuntu: 1 } },
      { id: "b", text: "我是来工作的，不是来欣赏颜色配搭的", traits: { gentoo: 3, debian: 3, rhel: 3 } },
      { id: "c", text: "黑底绿字 - 黑客风格", traits: { kali: 3 } },
      { id: "d", text: "自定义配色 - 完美匹配我的自定义桌面", traits: { arch: 3, nixos: 2, artix: 2 } }
    ]
  },
  {
    id: 5,
    text: "Your Saturday night usually involves:",
    options: [
      { id: "a", text: "Trying that new restaurant everyone's talking about", traits: {} },
      { id: "b", text: "Compiling software while watching a movie", traits: { gentoo: 3, artix: 3 } },
      { id: "c", text: "Gaming with friends online", traits: { popos: 3, macos: 2 } },
      { id: "d", text: "Explaining my favorite distro to uninterested friends", traits: { arch: 2, nixos: 3, ubuntu: 2, mint: 2 } },
      { id: "e", text: "Reorganizing my dotfiles", traits: { arch: 2, nixos: 3 } },
      { id: "f", text: "Hacking", traits: { kali: 2 } }
    ]
  },
  {
    id: 6,
    text: "How do you feel about systemd?",
    options: [
      { id: "a", text: "What's a systemd?", traits: { macos: 3, mint: 1, popos: 1 } },
      { id: "b", text: "It just works, no complaints", traits: {} },
      { id: "c", text: "Tolerate it under protest - it violates functional purity", traits: {} },
      { id: "d", text: "BURN IT WITH FIRE", traits: { gentoo: 3, artix: 5 } }
    ]
  },
  {
    id: 7,
    text: "Your approach to software updates:",
    options: [
      { id: "a", text: "Automatically install whatever the notification pushes", traits: { macos: 3, ubuntu: 1, popos: 2 } },
      { id: "b", text: "Wait 6 months to ensure stability", traits: { debian: 3, rhel: 2, mint: 2 } },
      { id: "c", text: "Update daily, break things, fix at 3AM", traits: { arch: 3, nixos: 2, gentoo: 2, kali: 3, artix: 3 } },
      { id: "d", text: "Upgrade every 2 years when the next LTS drops", traits: { mint: 2, ubuntu: 3 } }
    ]
  },
  {
    id: 8,
    text: "The monitor(s) you use:",
    options: [
      { id: "a", text: "Whatever's built into my laptop", traits: { macos: 1, mint: 1 } },
      { id: "b", text: "One decent 1080p monitor - does the job", traits: { ubuntu: 3, mint: 2, debian: 3, rhel: 2 } },
      { id: "c", text: "Ultrawide monitor", traits: { popos: 3, nixos: 3 } },
      { id: "d", text: "I don't need a monitor, I SSH from my phone", traits: { kali: 2 } }
    ]
  },
  {
    id: 9,
    text: "Your computer's most noticeable feature is:",
    options: [
      { id: "a", text: "The shiny logo on the lid", traits: { macos: 3 } },
      { id: "b", text: "The collection of obscure stickers", traits: { arch: 3, macos: 2, nixos: 3, kali: 3 } },
      { id: "c", text: "Custom RGB lighting synced to my music", traits: { popos: 3 } },
      { id: "d", text: "Dust bunnies from 2018", traits: { debian: 2 } },
      { id: "e", text: "The constant fan noise", traits: { gentoo: 3, debian: 2 } },
      { id: "f", text: "Complete lack of noticeable features", traits: { mint: 3, ubuntu: 2, debian: 1, rhel: 3 } }
    ]
  },
  {
    id: 10,
    text: "When you hear 'Linux':",
    options: [
      { id: "a", text: "Isn't that what hackers use?", traits: { macos: 3, kali: 1 } },
      { id: "b", text: "That thing I use instead of paying for Windows and macOS", traits: {} },
      { id: "c", text: "A cost-effective, supportable enterprise solution", traits: { rhel: 3 } },
      { id: "d", text: "My personal crusade against proprietary code", traits: { artix: 2 } }
    ]
  }
];

export default questions;
