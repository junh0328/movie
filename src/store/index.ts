import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import genreReducer from '@/store/genre/genreSlice';

export const store = configureStore({
  reducer: {
    genre: genreReducer,
  },
});

//store dispatch type
export type AppDispatch = typeof store.dispatch;

//rootState type
export type RootState = ReturnType<typeof store.getState>;

//thunk type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
