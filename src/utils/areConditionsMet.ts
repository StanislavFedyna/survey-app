export const areConditionsMet = (
  conditions: Record<string, string>,
  answers: Record<string, string>,
) => {
  return Object.keys(conditions).every((k) => {
    return conditions[k] === answers[k];
  });
};
