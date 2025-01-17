import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Answers } from '@/types';

const initialState: Answers = {};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{ stepId: string; answerValue: string }>,
    ) => {
      const { stepId, answerValue } = action.payload;

      state[stepId] = answerValue;
    },

    resetAnswers: () => initialState,
  },
});

export const { setAnswer, resetAnswers } = answersSlice.actions;
export default answersSlice.reducer;