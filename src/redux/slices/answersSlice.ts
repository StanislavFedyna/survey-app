import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Answers } from '@/types';

interface PollState {
  prevSteps: number[];
  currentIndex: number;
  isFinished: boolean;
  answers: Answers;
}

const initialState: PollState = {
  prevSteps: [],
  currentIndex: 0,
  isFinished: false,
  answers: {},
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{ stepId: string; answerValue: string }>,
    ) => {
      state.answers[action.payload.stepId] = action.payload.answerValue;
    },

    resetAnswers: (state) => {
      state.answers = {};
      state.prevSteps = [];
      state.currentIndex = 0;
      state.isFinished = false;
    },

    proceed: (state, action: PayloadAction<number>) => {
      state.prevSteps.push(state.currentIndex);
      state.currentIndex = action.payload;
    },

    back: (state) => {
      const lastIndex = state.prevSteps.pop();

      if (lastIndex !== undefined) {
        state.currentIndex = lastIndex;
      }
    },

    finish: (state) => {
      state.isFinished = true;
    },
  },
});

export const { setAnswer, resetAnswers, proceed, back, finish } =
  answersSlice.actions;
export default answersSlice.reducer;
