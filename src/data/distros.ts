export type Distro = {
  id: string;
  name: string;
  description: string;
  traits: string[];
  color: string;
  ascii: string;
  personality: string;
};

const distros: Distro[] = [
  {
    id: "ubuntu",
    name: "Ubuntu",
    description: "Friendly, stable, and community-focused. Perfect for beginners!",
    traits: ["user-friendly", "stable", "community-driven"],
    color: "from-orange-500 to-orange-700",
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
    personality: "You're approachable and value simplicity and reliability. Ubuntu matches your preference for a system that just works without unnecessary complexity. Like Ubuntu, you believe technology should empower everyone."
  },
  {
    id: "arch",
    name: "Arch Linux",
    description: "Minimalist DIY enthusiast. You build exactly what you want.",
    traits: ["customizable", "minimalist", "bleeding-edge"],
    color: "from-blue-400 to-blue-600",
    ascii: ` 
       .
      / \\
     /   \\
    /^.   \\
   /  .-.  \\
  /  (   ) _\\
 / _.~   ~._^\\
/.^         ^.\\
`,
    personality: "You're a tinkerer who loves complete control. Arch Linux matches your desire to build things exactly your way. Like Arch, you value simplicity, transparency and having full control over your environment."
  },
  {
    id: "fedora",
    name: "Fedora",
    description: "Innovator who loves new tech. The pioneer's choice.",
    traits: ["cutting-edge", "developer-friendly", "modern"],
    color: "from-blue-500 to-blue-700",
    ascii: `
          /:-------------:\\
       :-------------------::
     :-----------/shhOHbmp---:\\
   /-----------omMMMNNNMMD  ---:
  :-----------sMMMMNMNMP.    ---:
 :-----------:MMMdP-------    ---\\
,------------:MMMd--------    ---:
:------------:MMMd-------    .---:
:----    oNMMMMMMMMMNho     .----:
:--     .+shhhMMMmhhy++   .------/
:-    -------:MMMd--------------:
:-   --------/MMMd-------------;
:-    ------/hMMMy------------:
:-- :dMNdhhdNMMNo------------;
:---:sdNMMMMNds:------------:
:------:://:-------------::
:---------------------://

`,
    personality: "You're an innovator who loves being on the cutting edge. Fedora matches your enthusiasm for new technologies and forward-thinking approaches. Like Fedora, you're not afraid to embrace change and push boundaries."
  },
  {
    id: "mint",
    name: "Linux Mint",
    description: "Practical, comfortable, and efficient. The reliable workhorse.",
    traits: ["user-friendly", "efficient", "pragmatic"],
    color: "from-green-500 to-green-700",
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
    personality: "You value practicality and comfort over flashy features. Linux Mint matches your preference for a system that just gets out of your way and lets you work. Like Mint, you believe technology should serve you, not the other way around."
  },
  {
    id: "kali",
    name: "Kali Linux",
    description: "Security-focused expert with specialized needs.",
    traits: ["secure", "specialized", "powerful"],
    color: "from-purple-500 to-purple-700",
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
    personality: "You're a security-conscious professional who needs powerful tools. Kali Linux matches your focus on penetration testing and digital forensics. Like Kali, you're not afraid to dive deep into complex systems."
  },
  {
    id: "tails",
    name: "Tails OS",
    description: "Privacy advocate who values anonymity above all.",
    traits: ["private", "secure", "portable"],
    color: "from-yellow-500 to-yellow-700",
    ascii: `
      \`\`
  ./yhNh
syy/Nshh         \`:o/
N:dsNshh  █   \`ohNMMd
N-/+Nshh      \`yMMMMd
N-yhMshh       yMMMMd
N-s:hshh  █    yMMMMd so//.
N-oyNsyh       yMMMMd d  Mms.
N:hohhhd:.     yMMMMd  syMMM+
Nsyh+-..+y+-   yMMMMd   :mMM+
+hy-      -ss/\`yMMMM     \`+d+
  :sy/.     ./yNMMMMm      \`\`
    .+ys- \`:+hNMMMMMMy/\`
      \`hNmmMMMMMMMMMMMMdo.
       dMMMMMMMMMMMMMMMMMNh:
       +hMMMMMMMMMMMMMMMMMmy.
         -oNMMMMMMMMMMmy+.\`
           \`:yNMMMds/.\`
              .//\`

    `,
    personality: "You prioritize privacy and security in everything you do. Tails OS matches your need for anonymity and leaving no digital footprint. Like Tails, you believe privacy is a fundamental right."
  },
  {
    id: "gentoo",
    name: "Gentoo",
    description: "Ultimate control seeker who builds from source.",
    traits: ["customizable", "optimized", "source-based"],
    color: "from-cyan-400 to-blue-600",
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
    personality: "You're a perfectionist who wants complete control over your system. Gentoo matches your desire to compile everything from source for ultimate optimization. Like Gentoo, you believe in doing things your way."
  }
];

export default distros;
