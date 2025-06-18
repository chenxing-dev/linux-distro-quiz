import type { Distro } from "./distros-en";

const distros: Distro[] = [
  {
    id: "macos",
    name: "macOS",
    description: "有钱就是任性，你非常乐于支付苹果税™，并享受被锁定在苹果生态系统里。",
    traits: ["富有", "颜值至上"],
    ascii: `
                     ..'
                 ,xNMM.
               .OMMMMo
               lMM"
     .;loddo:.  .olloddol;.
   cKMMMMMMMMMMNWMMMMMMMMMM0:
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.
 XMMMMMMMMMMMMMMMMMMMMMMMX.
;MMMMMMMMMMMMMMMMMMMMMMMM:
:MMMMMMMMMMMMMMMMMMMMMMMM:
.MMMMMMMMMMMMMMMMMMMMMMMMX.
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.
 'XMMMMMMMMMMMMMMMMMMMMMMMMMMk
  'XMMMMMMMMMMMMMMMMMMMMMMMMK.
    kMMMMMMMMMMMMMMMMMMMMMMd
     ;KMMMMMMMWXXWMMMMMMMk.
       "cooc*"    "*coo'"
    `,
    details: {
      packageManager: "Homebrew 或 App Store",
      releaseCycle: "每年更新",
      defaultDesktop: "Aqua",
      bestFor: "已被苹果生态圈住的用户"
    },
    note: () => (
      <div className="my-6 p-4 rounded-lg border-l-4">
        <p className="font-bold">你知道吗，MacBook一次维修的钱足够买：</p>
        <ul className="mt-2 list-disc pl-5">
          <li>两台不错的Thinkpad</li>
          <li>一次周末度假</li>
          <li>87杯咖啡</li>
          <li>1.5个月的买菜钱</li>
        </ul>
        <p className="mt-2 italic">"但它就是好用" - 直到它坏了，而你为一次简单的维修支付了2000元。</p>
      </div>
    )
  },
  {
    id: "arch",
    name: "Arch Linux",
    description: "你享受折磨并且沉迷于技术文档。你用花在系统配置上的时间作为自我价值衡量标准",
    traits: ["受虐倾向", "文档依赖症", "很闲"],
    ascii: ` 
                  -\`
                 .o+\`
                \`ooo/
               \`+oooo:
              \`+oooooo:
              -+oooooo+:
            \`/:-:++oooo+:
           \`/++++/+++++++:
          \`/++++++++++++++:
         \`/+++ooooooooooooo/\`
        ./ooosssso++osssssso+\`
       .oossssso-\`\`\`\`/ossssss+\`
      -osssssso.      :ssssssso.
     :osssssss/        osssso+++.
    /ossssssss/        +ssssooo/-
  \`/ossssso+/:-        -:/+osssso+-
 \`+sso+:-\`                 \`.-/+oso:
\`++:.                           \`-/+/
.\`                                 \`/
`,
    details: {
      packageManager: "Pacman",
      releaseCycle: "滚动发行",
      defaultDesktop: "无 (用户选择)",
      bestFor: "中级用户、折腾党、极简主义者"
    }
  },
  {
    id: "gentoo",
    name: "Gentoo",
    description: "你真心相信从源码编译能让你的电脑'更快'。相比使用编译后的软件，你更享受盯着进度条的过程。",
    traits: ["编译爱好者", "进度条观赏家", "时间浪费者"],
    ascii: `
         -/oyddmdhs+:.
     -odNMMMMMMMMNNmhy+-\`
   -yNMMMMMMMMMMMNNNmmdhy+-
 \`omMMMMMMMMMMMMNmdmmmmddhhy/\`
 omMMMMMMMMMMMNhhyyyohmdddhhhdo\`
.ydMMMMMMMMMMdhs++so/smdddhhhhdm+\`
 oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.
  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh
    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy
       /mMMMMMMNNNmmmdddhhhhhmMNhs:
    \`oNMMMMMMMNNNmmmddddhhdmMNhs+\`
  \`sNMMMMMMMMNNNmmmdddddmNMmhs/.
 /NMMMMMMMMNNNNmmmdddmNMNdso:\`
+MMMMMMMNNNNNmmmmdmNMNdso/-
yMMNNNNNNNmmmmmNNMmhs+/-\`
/hMMNNNNNNNNMNdhs++/-\`
\`/ohdmmddhys+++/:.\`
  \`-//////:--.
  `,
    details: {
      packageManager: "Portage (emerge)",
      releaseCycle: "滚动发行",
      defaultDesktop: "无 (用户编译)",
      bestFor: "高级用户、系统定制爱好者、性能调优师"
    }
  },
  {
    id: "popos",
    name: "Pop!_OS",
    description: "你叫自己'Gamer'而且觉得RGB灯效提升电脑性能。你的电脑的灯带数量远超CPU核数。",
    traits: ["Gamer身份", "RGB狂热粉", "帧率偏执狂"],
    ascii: `
             /////////////
         /////////////////////
      ///////*767////////////////
    //////7676767676*//////////////
   /////76767//7676767//////////////
  /////767676///*76767///////////////
 ///////767676///76767.///7676*///////
/////////767676//76767///767676////////
//////////76767676767////76767/////////
///////////76767676//////7676//////////
////////////,7676,///////767///////////
/////////////*7676///////76////////////
///////////////7676////////////////////
 ///////////////7676///767////////////
  //////////////////////'////////////
   //////.7676767676767676767,//////
    /////767676767676767676767/////
      ///////////////////////////
         /////////////////////
             /////////////
`,
    details: {
      packageManager: "APT (含定制仓库)",
      releaseCycle: "半年更新 + LTS",
      defaultDesktop: "COSMIC (基于GNOME)",
      bestFor: "游戏玩家、新手、NVIDIA显卡用户"
    }
  },
  {
    id: "debian",
    name: "Debian",
    description: "新功能诚可贵，稳定性价更高。你的电脑至今仍运行着2015年的软件。",
    traits: ["稳定性偏执狂", "抗拒改变", "FOSS极端分子"],
    ascii: `
        _,met$$$$$$$$$$gg.
     ,g$$$$$$$$$$$$$$$$$$$$P.
   ,g$$$$P""       """Y$$$$.".
  ,$$$$P'              \`$$$$$$.
',$$$$P       ,ggs.     \`$$$$b:
\`d$$$$'     ,$P"'   .    $$$$$$
 $$$$P      d$'     ,    $$$$P
 $$$$:      $$$.   -    ,d$$$$'
 $$$$;      Y$b._   _,d$P'
 Y$$$$.    \`.\`"Y$$$$$$$$P"'
 \`$$$$b      "-.__
  \`Y$$$$b
   \`Y$$$$.
     \`$$$$b.
       \`Y$$$$b.
         \`"Y$$b._
             \`""""
`,
    details: {
      packageManager: "APT",
      releaseCycle: "稳定版(3-5年)",
      defaultDesktop: "GNOME",
      bestFor: "服务器、稳定环境"
    }
  },

  {
    id: "mint",
    name: "Linux Mint",
    description: "你想尝试Linux，但怀念Windows且害怕改变，认为Windows 7的UI设计是巅峰之作。",
    traits: ["Windows难民", "舒适区囚徒"],
    ascii: `
             ...-:::::-...
          .-MMMMMMMMMMMMMMM-.
      .-MMMM\`..-:::::::-..\`MMMM-.
    .:MMMM.:MMMMMMMMMMMMMMM:.MMMM:.
   -MMM-M---MMMMMMMMMMMMMMMMMMM.MMM-
 \`:MMM:MM\`  :MMMM:....::-...-MMMM:MMM:\`
 :MMM:MMM\`  :MM:\`  \`\`    \`\`  \`:MMM:MMM:
.MMM.MMMM\`  :MM.  -MM.  .MM-  \`MMMM.MMM.
:MMM:MMMM\`  :MM.  -MM-  .MM:  \`MMMM-MMM:
:MMM:MMMM\`  :MM.  -MM-  .MM:  \`MMMM:MMM:
:MMM:MMMM\`  :MM.  -MM-  .MM:  \`MMMM-MMM:
.MMM.MMMM\`  :MM:--:MM:--:MM:  \`MMMM.MMM.
 :MMM:MMM-  \`-MMMMMMMMMMMM-\`  -MMM-MMM:
  :MMM:MMM:\`                \`:MMM:MMM:
   .MMM.MMMM:--------------:MMMM.MMM.
     '-MMMM.-MMMMMMMMMMMMMMM-.MMMM-'
       '.-MMMM\`\`--:::::--\`\`MMMM-.'
            '-MMMMMMMMMMMMM-'
               \`\`-:::::-\`\`
`,
    details: {
      packageManager: "APT",
      releaseCycle: "LTS(5年支持)",
      defaultDesktop: "Cinnamon/XFCE/MATE",
      bestFor: "Windows移民"
    }
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    description: "你的个性是毫无个性，堪称Linux用户中的路人甲。",
    traits: ["平庸", "无趣", "默认选择"],
    ascii: `
                             ....
              .',:clooo:  .:looooo:.
           .;looooooooc  .oooooooooo'
        .;looooool:,''.  :ooooooooooc
       ;looool;.         'oooooooooo,
      ;clool'             .cooooooc.  ,,
         ...                ......  .:oo,
  .;clol:,.                        .loooo'
 :ooooooooo,                        'ooool
'ooooooooooo.                        loooo.
'ooooooooool                         coooo.
 ,loooooooc.                        .loooo.
   .,;;;'.                          ;ooooc
       ...                         ,ooool.
    .cooooc.              ..',,'.  .cooo.
      ;ooooo:.           ;oooooooc.  :l.
       .coooooc,..      coooooooooo.
         .:ooooooolc:. .ooooooooooo'
           .':loooooo;  ,oooooooooc
               ..';::c'  .;loooo:'

`,
    details: {
      packageManager: "APT",
      releaseCycle: "半年版/两年LTS版",
      defaultDesktop: "GNOME",
      bestFor: "新手、开发者、企业用户"
    }
  },
  {
    id: "nixos",
    name: "NixOS",
    description: "你编写NixOS配置像写诗一般，可复现性是你的至高追求。你重装系统的频率比你眨眼还高。",
    traits: ["编写配置成瘾", "复现强迫症", "函数式程序员"],
    ascii: ` 
          ▗▄▄▄       ▗▄▄▄▄    ▄▄▄▖
          ▜███▙       ▜███▙  ▟███▛
           ▜███▙       ▜███▙▟███▛
            ▜███▙       ▜██████▛
     ▟█████████████████▙ ▜████▛     ▟▙
    ▟███████████████████▙ ▜███▙    ▟██▙
           ▄▄▄▄▖           ▜███▙  ▟███▛
          ▟███▛             ▜██▛ ▟███▛
         ▟███▛               ▜▛ ▟███▛
▟███████████▛                  ▟██████████▙
▜██████████▛                  ▟███████████▛
      ▟███▛ ▟▙               ▟███▛
     ▟███▛ ▟██▙             ▟███▛
    ▟███▛  ▜███▙           ▝▀▀▀▀
    ▜██▛    ▜███▙ ▜██████████████████▛
     ▜▛     ▟████▙ ▜████████████████▛
           ▟██████▙       ▜███▙
          ▟███▛▜███▙       ▜███▙
         ▟███▛  ▜███▙       ▜███▙
         ▝▀▀▀    ▀▀▀▀▘       ▀▀▀▘
`,
    details: {
      packageManager: "Nix",
      releaseCycle: "滚动更新+稳定通道",
      defaultDesktop: "Plasma (可选)",
      bestFor: "可复现环境、开发者"
    }
  },
  {
    id: "rhel",
    name: "Red Hat Enterprise Linux",
    description: "你穿西装上班并按小时计算工资，为从未用过的支持服务付费并因此感到高人一等。",
    traits: ["企业打工人", "付费支持用户", "商业思维"],
    ascii: `
           .MMM..:MMMMMMM
          MMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMM.
         MMMMMMMMMMMMMMMMMMMMMM
        ,MMMMMMMMMMMMMMMMMMMMMM:
        MMMMMMMMMMMMMMMMMMMMMMMM
  .MMMM'  MMMMMMMMMMMMMMMMMMMMMM
 MMMMMM    \`MMMMMMMMMMMMMMMMMMMM.
MMMMMMMM      MMMMMMMMMMMMMMMMMM .
MMMMMMMMM.       \`MMMMMMMMMMMMM' MM.
MMMMMMMMMMM.                     MMMM
\`MMMMMMMMMMMMM.                 ,MMMMM.
 \`MMMMMMMMMMMMMMMMM.          ,MMMMMMMM.
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM:
         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
            \`MMMMMMMMMMMMMMMMMMMMMMMM:
                \`\`MMMMMMMMMMMMMMMMM'
`,
    details: {
      packageManager: "DNF (YUM兼容)",
      releaseCycle: "3-5年大更新+6月小更新",
      defaultDesktop: "GNOME",
      bestFor: "企业用户"
    }
  },
  {
    id: "kali",
    name: "Kali Linux",
    description: "你至少有三件套头卫衣，并喜欢在命令行里打字「扮嘢」。你至少刷过两遍《黑客军团》。",
    traits: ["黑客coser", "卫衣收集家", "扮嘢利器"],
    ascii: `
..............
            ..,;:ccc,.
          ......''';lxO.
.....''''..........,:ld;
           .';;;:::;,,.x,
      ..'''.            0Xxoc:,.  ...
  ....                ,ONkc;,;cokOdc',.
 .                   OMo           ':ddo.
                    dMc               :OO;
                    0M.                 .:o.
                    ;Wd
                     ;XO,
                       ,d0Odlc;,..
                           ..',;:cdOOd::,.
                                    .:d;.':;.
                                       'd,  .'
                                         ;l   ..
                                          .o
                                            c
                                            .'
                                             .
    `,
    details: {
      packageManager: "APT",
      releaseCycle: "滚动更新(季度发布)",
      defaultDesktop: "GNOME (极简版)",
      bestFor: "模拟黑客、渗透测试"
    }
  },
  {
    id: "artix",
    name: "Artix Linux",
    description: "你宁肯调试3小时init脚本也不愿向'邪恶势力'systemd低头，Unix哲学是你的世界观的重要组成部分。",
    traits: ["init偏执狂", "反systemd斗士", "自虐型折腾家"],
    ascii: `
                   '
                  'o'
                 'ooo'
                'ooxoo'
               'ooxxxoo'
              'oookkxxoo'
             'oiioxkkxxoo'
            ':;:iiiioxxxoo'
               \`'.;::ioxxoo'
          '-.      \`':;jiooo'
         'oooio-..     \`'i:io'
        'ooooxxxxoio:,.   \`'-;'
       'ooooxxxxxkkxoooIi:-.  \`'
      'ooooxxxxxkkkkxoiiiiiji'
     'ooooxxxxxkxxoiiii:'\`     .i'
    'ooooxxxxxoi:::'\`       .;ioxo'
   'ooooxooi::'\`         .:iiixkxxo'
  'ooooi:'\`                \`'';ioxxo'
 'i:'\`                          '':io'
'\`                                   \`'
    `,
    details: {
      packageManager: "Pacman",
      releaseCycle: "滚动发行",
      defaultDesktop: "无 (用户选择)",
      bestFor: "systemd反对者"
    }
  }
];

export default distros;
