const questions = [
  {
    id: 1,
    text: "What's your ideal workspace?",
    options: [
      { id: "a", text: "Ready-to-use setup", traits: { "user-friendly": 2 } },
      { id: "b", text: "Build everything from scratch", traits: { "customizable": 2 } },
      { id: "c", text: "Experimental tech lab", traits: { "cutting-edge": 2 } },
      { id: "d", text: "Minimalist and distraction-free", traits: { "minimalist": 2 } }
    ]
  },
  {
    id: 2,
    text: "How do you approach new technology?",
    options: [
      { id: "a", text: "Wait for it to be stable and tested", traits: { "stable": 2 } },
      { id: "b", text: "Jump in immediately - I love bleeding edge", traits: { "bleeding-edge": 2 } },
      { id: "c", text: "Research thoroughly before trying", traits: { "reliable": 2 } },
      { id: "d", text: "Only if it solves a specific need", traits: { "pragmatic": 2 } }
    ]
  },
  {
    id: 3,
    text: "What's your priority in an OS?",
    options: [
      { id: "a", text: "Ease of use and accessibility", traits: { "user-friendly": 2 } },
      { id: "b", text: "Complete control and customization", traits: { "customizable": 2 } },
      { id: "c", text: "Security and privacy", traits: { "secure": 2 } },
      { id: "d", text: "Performance and resource efficiency", traits: { "efficient": 2 } }
    ]
  },
  {
    id: 4,
    text: "How do you feel about the terminal?",
    options: [
      { id: "a", text: "I avoid it whenever possible", traits: { "gui-focused": 2 } },
      { id: "b", text: "It's my primary interface - I live in it", traits: { "cli-focused": 2 } },
      { id: "c", text: "I use it when necessary", traits: { "balanced": 2 } },
      { id: "d", text: "I'm learning to use it more", traits: { "learning": 2 } }
    ]
  },
  {
    id: 5,
    text: "What's your hardware like?",
    options: [
      { id: "a", text: "Modern powerhouse with top specs", traits: { "resource-heavy": 2 } },
      { id: "b", text: "Older or budget machine", traits: { "lightweight": 2 } },
      { id: "c", text: "Something in the middle", traits: { "balanced": 2 } },
      { id: "d", text: "I use multiple devices with different specs", traits: { "versatile": 2 } }
    ]
  }
];

export default questions