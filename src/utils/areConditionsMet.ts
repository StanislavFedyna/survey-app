/**
 * Checks if all conditions are met based on the provided answers.
 *
 * @param {Record<string, string>} conditions - An object containing key-value pairs representing the conditions to be met.
 * @param {Record<string, string>} answers - An object containing key-value pairs representing the answers to check against the conditions.
 * @returns {boolean} - Returns true if all conditions are met, otherwise false.
 */
export const areConditionsMet = (
  conditions: Record<string, string>,
  answers: Record<string, string>,
) => {
  return Object.keys(conditions).every((k) => conditions[k] === answers[k]);
};
