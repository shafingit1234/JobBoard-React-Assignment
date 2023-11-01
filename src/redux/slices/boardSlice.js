import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchListId = createAsyncThunk("board/fetchIds", async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/jobstories.json"
  );
  const data = await response.json();

  return data;
});

const boardSlice = createSlice({
  name: "boardSlice",
  initialState: {
    ids: [],
    joba: [],
    status: "idle",
    error: null,
  },
  reducers: {
    loadIds: (state, action) => {
      state.ids = action.ids;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchListId.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchListId.fulfilled, (state, action) => {
        state.status = "success";
        state.ids = action.payload;
      })
      .addCase(fetchListId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadIds } = boardSlice.actions;
export default boardSlice.reducer;
