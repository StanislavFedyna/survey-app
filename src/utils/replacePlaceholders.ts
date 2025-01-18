import { Answer } from '@/types';

/**
 * Replaces placeholders in the given text with corresponding values from the answers object.
 *
 * @param {string} text - The text containing placeholders in the format {key}.
 * @param {Answer} answers - An object containing key-value pairs where the key corresponds to the placeholder.
 * @returns {string} - The text with placeholders replaced by their corresponding values from the answers object.
 */

export const replacePlaceholders = (text: string, answers: Answer) =>
  text.replace(/{(\w+)}/g, (_, key) => answers[key] || `{${key}}`);
