export type Distro = {
  id: string;
  name: string;
  description: string;
  traits: string[];
  ascii: string;
};

const distros: Distro[] = [
  {
    id: "macos",
    name: "macOS",
    description: "You prioritize aesthetics over functionality and have more money than sense. You enjoy paying the Apple Tax™ and being locked into an ecosystem.",
    traits: ["wealthy", "aesthetic-driven", "ecosystem-locked"],
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
  },
  {
    id: "arch",
    name: "Arch Linux",
    description: "You enjoy pain and have an unhealthy relationship with documentation. You measure your worth by how many hours you've spent configuring your system.",
    traits: ["masochistic", "documentation-obsessed", "time-rich"],
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
  },
  {
    id: "gentoo",
    name: "Gentoo",
    description: "You genuinely believe compiling everything from source makes your computer 'faster'. You enjoy watching progress bars more than using actual software.",
    traits: ["compiler-fetishist", "progress-bar-enjoyer", "time-waster"],
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
  },
  {
    id: "popos",
    name: "Pop!_OS",
    description: "You unironically call yourself a 'Gamer' and think RGB lighting improves performance. Your computer has more LEDs than processing power.",
    traits: ["gamer-identity", "rgb-enthusiast", "frame-rate-obsessed"],
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
  },
  {
    id: "debian",
    name: "Debian",
    description: "You value stability over everything, including new features and your own happiness. You still run software from 2015.",
    traits: ["stability-obsessed", "change-resistant", "foss-purist"],
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
  },

  {
    id: "mint",
    name: "Linux Mint",
    description: "You came from Windows and are afraid of change. You think the start menu is peak UI design.",
    traits: ["change-averse", "windows-refugee", "comfort-seeker"],
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
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    description: "You have zero personality and just want things to work. You're the vanilla ice cream of Linux users.",
    traits: ["vanilla", "personality-void", "default-chooser"],
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
  },
  {
    id: "nixos",
    name: "NixOS",
    description: "You spend more time writing configuration files than using your computer. You believe reproducibility is more important than actually getting work done.",
    traits: ["configuration-obsessed", "reproducibility-fanatic", "functional-programmer"],
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
  },
  {
    id: "rhel",
    name: "Red Hat Enterprise Linux",
    description: "You wear a suit to work and bill by the hour. You pay for support you never use and feel powerful because of it.",
    traits: ["corporate-lackey", "support-payer", "enterprise-mindset"],
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
  },
  {
    id: "kali",
    name: "Kali Linux",
    description: "You own at least three hoodies and type really fast in terminals to impress people. You've watched Mr. Robot at least twice.",
    traits: ["hacker-wannabe", "hoodie-collector", "terminal-poser"],
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
  },
  {
    id: "artix",
    name: "Artix Linux",
    description: "You think systemd is literally Satan and enjoy spending 3 hours debugging init scripts just to boot your toaster. You consider 'rc.conf' poetry and believe OpenRC is a spiritual experience.",
    traits: ["init-obsessive", "anti-systemd-crusader", "masochistic-tinkerer"],
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
    `}
];

export default distros;
