'use client';

import { Answers, Option, Question } from '@/types';

/**
 * Replaces placeholders in the question text with corresponding answer labels.
 *
 * @param {Question['question']} text - The question text containing placeholders.
 * @param {Record<Option['id'], Option>} optionsByValue - A record of options indexed by their IDs.
 * @param {Answers} answers - An object containing the answers, where keys are question IDs and values are answer IDs.
 * @returns {string} The question text with placeholders replaced by answer labels.
 */
export const getQuestionContent = (
  text: Question['question'],
  optionsByValue: Record<Option['id'], Option>,
  answers: Answers,
) => {
  return text.replace(/{(\w+)}/g, (search, questionId) => {
    const answerId = answers[questionId];

    return optionsByValue?.[answerId]?.label || search;
  });
};
