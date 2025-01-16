import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Answer {
  questionId: string;
  answer: string;
}

interface QuestionnaireState {
  answers: Answer[];
}

const initialState: QuestionnaireState = {
  answers: [],
};

// Створення slice для опитувальника
const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<Answer>) => {
      const existingAnswerIndex = state.answers.findIndex(
        (a) => a.questionId === action.payload.questionId,
      );

      if (existingAnswerIndex >= 0) {
        state.answers[existingAnswerIndex] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
    clearAnswers: (state) => {
      state.answers = [];
    },
  },
});

export const { saveAnswer, clearAnswers } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
