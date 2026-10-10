export const ids = ['tito', 'rico', 'nino'];
export function calculateResult(answers) {
  if (answers.length !== 6 || answers.some(id => !ids.includes(id))) throw new Error('Responda às seis perguntas.');
  const counts = Object.fromEntries(ids.map(id => [id, answers.filter(answer => answer === id).length]));
  const max = Math.max(...Object.values(counts));
  const winner = [...answers].reverse().find(id => counts[id] === max);
  const percentages = Object.fromEntries(ids.map(id => [id, Math.round(counts[id] / 6 * 100)]));
  percentages[winner] += 100 - Object.values(percentages).reduce((sum, value) => sum + value, 0);
  return { winner, percentages, counts };
}
export function shuffle(values) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
  return result;
}
