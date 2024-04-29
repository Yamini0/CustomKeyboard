import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeyBoardType } from '@utils/enums';

type KeyBoardModeType = 'alphabetical' | 'numerical';

interface KeyBoardModeState {
  keyBoardMode: KeyBoardModeType;
}

const initialState: KeyBoardModeState = {
  keyBoardMode: KeyBoardType.ALPHABETICAL,
};

const keyBoardModeSlice = createSlice({
  name: 'keyBoardMode',
  initialState,
  reducers: {
    toggleKeyBoardMode(state) {
      state.keyBoardMode =
        state.keyBoardMode === KeyBoardType.ALPHABETICAL ? KeyBoardType.NUMERICAL : KeyBoardType.ALPHABETICAL;
    },
  },
});

export const { toggleKeyBoardMode } = keyBoardModeSlice.actions;
export const keyBoardModeReducer = keyBoardModeSlice.reducer;
