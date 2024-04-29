import { Action, combineReducers } from '@reduxjs/toolkit';
import store from '@redux/store';

import { keyBoardModeReducer } from './keyboardMode';
import { capsLockReducer } from './capsLockSlice';
import { displayAreaReducer } from './displayAreaSlice';

const reducer = {
  keyBoardMode: keyBoardModeReducer,
  capsLock: capsLockReducer,
  displayArea: displayAreaReducer,
};

const _combineReducers = combineReducers(reducer);

const rootReducer = (state: {} | Partial<{}> | undefined, action: Action) => {
  return _combineReducers(state, action);
};

export default rootReducer;
