export const calculateResult = answers => {
  const traitScores = {};

  answers.forEach(answer => {
    Object.entries(answer.traits).forEach(([trait, value]) => {
      traitScores[trait] = (traitScores[trait] || 0) + value;
    });
  });

  // Match distro with highest trait alignment
  return distros.reduce(
    (topMatch, distro) => {
      const score = distro.traits.reduce((sum, trait) => sum + (traitScores[trait] || 0), 0);
      return score > topMatch.score ? { distro, score } : topMatch;
    },
    { distro: null, score: -1 }
  ).distro;
};
