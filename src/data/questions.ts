const questions = [
  {
    id: 1,
    text: "When your computer breaks, you:",
    options: [
      { id: "a", text: "Immediately buy the same expensive model again", traits: { "macos": 3 } },
      { id: "b", text: "Open a support ticket", traits: { "macos": 2, "rhel": 3 } },
      { id: "c", text: "Spend 3 weeks researching the perfect replacement", traits: { "arch": 2, "gentoo": 2, "nixos": 3 } },
      { id: "d", text: "Use it as an excuse to upgrade your gaming rig", traits: { "popos": 3 } },
      { id: "e", text: "Keep using it broken while complaining", traits: { "debian": 2, "mint": 2, "ubuntu": 1 } }
    ]
  },
  {
    id: 2,
    text: "Your relationship with documentation is:",
    options: [
      { id: "a", text: "What's documentation? I just ask ChatGPT", traits: { "macos": 3, "ubuntu": 2, "popos": 1 } },
      { id: "b", text: "Toilet reading material", traits: { "arch": 3, "gentoo": 3, "rhel": 3 } },
      { id: "c", text: "I write documentation as a hobby", traits: { "arch": 1, "nixos": 3, "debian": 2 } },
      { id: "d", text: "Only for emergencies (like when Google fails)", traits: { "mint": 2, "popos": 2 } }
    ]
  },
  {
    id: 3,
    text: "How do you feel about spending money on computers?",
    options: [
      { id: "a", text: "Premium experiences are worth the premium price", traits: { "macos": 3, "rhel": 3, "nixos": 3 } },
      { id: "c", text: "I'll pay for convenience - but only after reading 10 comparison blogs", traits: { "debian": 3, "ubuntu": 3, "popos": 2 } },
      { id: "b", text: "I'd rather spend time than money", traits: { "arch": 3, "gentoo": 3, "artix": 2 } },
      { id: "c", text: "Only if it has RGB lighting", traits: { "popos": 3 } },
      { id: "d", text: "Money? I run Linux on a secondhand ThinkPad", traits: { "arch": 3, "gentoo": 2, "mint": 2 } }
    ]
  },
  {
    id: 4,
    text: "Choose a terminal color scheme:",
    options: [
      { id: "a", text: "Default - I'm not a terminal person.", traits: { "macos": 3, "mint": 2, "ubuntu": 1 } },
      { id: "b", text: "I'm here to get work done, not admire colors", traits: { "gentoo": 3, "debian": 2, "rhel": 3 } },
      { id: "c", text: "Green text on black - it's hacker aesthetic", traits: { "kali": 3 } },
      { id: "d", text: "Custom scheme that matches my riced desktop perfectly", traits: { "arch": 3, "nixos": 2, "artix": 2 } },
    ]
  },
  {
    id: 5,
    text: "Your Saturday night usually involves:",
    options: [
      { id: "a", text: "Trying that new restaurant everyone's talking about", traits: {} },
      { id: "b", text: "Compiling software while watching a movie", traits: { "gentoo": 3, "artix": 3 } },
      { id: "c", text: "Gaming with friends online", traits: { "popos": 3, "macos": 2 } },
      { id: "d", text: "Explaining my favorite distro to uninterested friends", traits: { "arch": 2, "nixos": 3 } }
    ]
  },
  {
    id: 6,
    text: "How do you feel about systemd?",
    options: [
      { id: "a", text: "What's a systemd?", traits: { "macos": 3, "mint": 1, "popos": 1 } },
      { id: "b", text: "It just works, no complaints", traits: {} },
      { id: "c", text: "Tolerate it under protest - it violates functional purity", traits: {} },
      { id: "d", text: "BURN IT WITH FIRE", traits: { "gentoo": 3, "artix": 10 } },
    ]
  },
  {
    id: 7,
    text: "Your approach to software updates:",
    options: [
      { id: "a", text: "Automatically install whatever the notification pushes", traits: { "macos": 3, "ubuntu": 1, "popos": 2 } },
      { id: "b", text: "Wait 6 months to ensure stability", traits: { "debian": 3, "rhel": 2, "mint": 2 } },
      { id: "c", text: "Update daily, break things, fix at 3AM", traits: { "arch": 3, "nixos": 2, "gentoo": 2 } },
      { id: "d", text: "Upgrade every 2 years when the next LTS drops", traits: { "mint": 2, "ubuntu": 3 } }
    ]
  },
  {
    id: 8,
    text: "The monitor(s) you use:",
    options: [
      { id: "a", text: "Whatever's built into my laptop", traits: { "macos": 1, "mint": 1 } },
      { id: "b", text: "One decent 1080p monitor - does the job", traits: { "ubuntu": 3, "mint": 2, "debian": 2, "rhel": 3 } },
      { id: "c", text: "Ultrawide monitor", traits: { "popos": 3, "nixos": 3 } },
      { id: "d", text: "I don't need a monitor, I SSH from my phone", traits: { "kali": 2 } }
    ]
  },
  {
    id: 9,
    text: "Your computer's most noticeable feature is:",
    options: [
      { id: "a", text: "The shiny logo on the lid", traits: { "macos": 3 } },
      { id: "b", text: "The collection of obscure stickers", traits: { "arch": 3, "macos": 2, "nixos": 3 } },
      { id: "c", text: "Custom RGB lighting synced to my music", traits: { "popos": 3 } },
      { id: "d", text: "Dust bunnies from 2018", traits: { "debian": 2 } },
      { id: "e", text: "The constant fan noise", traits: { "gentoo": 3, "debian": 2 } },
      { id: "f", text: "Complete lack of noticeable features", traits: { "mint": 3, "ubuntu": 2, "debian": 1, "rhel": 3 } }
    ]
  },
  {
    id: 10,
    text: "When you hear 'Linux':",
    options: [
      { id: "a", text: "Isn't that what hackers use?", traits: { "macos": 3, "kali": 1 } },
      { id: "b", text: "That thing I use instead of paying for Windows and macOS", traits: {} },
      { id: "c", text: "A cost-effective, supportable enterprise solution", traits: { "rhel": 3 } },
    ]
  }
];

export default questions