import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@/store";

import { Movie, StatusType } from "@/types/common";
import { Genre } from "@/apis";
import { fetchApi } from "@/utils/fetchApi";

interface GenreType {
  genre: Movie[];
  status: StatusType;
}

const initialState: GenreType = {
  genre: [],
  status: "idle",
};

export const genreAsync = createAsyncThunk<Movie[]>(
  "genre/fetchGenre",
  async () => {
    try {
      const {
        data: { genres },
      } = await axios.get(Genre);
      return genres;
    } catch (e) {
      console.log(e);
    }
  }
);

//slice
export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(genreAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        genreAsync.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.status = "idle";
          state.genre = action.payload;
        }
      );
  },
});

export const getGenre = (state: RootState) => state.genre;

export default genreSlice.reducer;
