import {
  configureStore,
  combineReducers, // redux의 Reducer 의 집합과 같다.
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import logger from 'redux-logger'
import user from 'features/user/reducer/userSlice';
import history from 'features/history/reducer/historySlice'
import garden from 'features/review/reducer/gardenSlice'
import diary from 'features/diary/reducer/diarySlice'

export const rootReducer = combineReducers({ user, history, garden, diary }) //리듀서에 유저스라는 이름으로있지만 리듀서밖에서는 유저라고부를거야!

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});