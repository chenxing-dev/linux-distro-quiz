#### **Component Structure**
```
src/
├── components/
│   ├── Quiz/
│   │   ├── WelcomeScreen.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── ProgressBar.tsx
│   │   └── ResultCard.tsx
│   └── ui/
│       ├── button.tsx (shadcn)
│       └── card.tsx (shadcn)
├── context/
│   └── QuizContext.tsx
├── data/
│   ├── distros.json
│   └── questions.json
└── App.tsx
```

#### **Key Features**
1. **Welcome Screen**

2. **Quiz Flow**:
   - Progress bar showing completion
   - Single-question-per-card layout
   - Responsive option grid (shadcn Card components)

3. **Result Display**:
   - Distro name with ASCII art logo
   - Personality match description
   - Shareable result link
   - "Retake quiz" CTA

#### **Responsive Design**
- Mobile-first layout (shadcn's responsive components)
- Animated transitions between questions
- Dark/light mode support (via shadcn theme)

### Deliverables Checklist:
1. Functional quiz with 7-10 personality questions
2. Results matching to 10+ Linux distros
3. Mobile-responsive UI with animations
4. Shareable result links
5. GitHub repository with README documentation
6. Live deployed version
