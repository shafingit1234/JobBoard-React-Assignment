import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJobBoard = createAsyncThunk(
  "board/fetchBoards",
  async (id) => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const data = await response.json();
    return data;
  }
);

const jobBoardSlice = createSlice({
  name: "jobBoardSlice",
  initialState: {
    jobBoards: {},
    idx: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    loadJobs: (state, action) => {
      state.jobBoards = action.jobBoards;
    },
    setIdx: (state, action) => {
      state.idx = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchJobBoard.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchJobBoard.fulfilled, (state, action) => {
        state.status = "success";
        state.jobBoards = action.payload;
        state.idx = action.idx;
      })
      .addCase(fetchJobBoard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadJobs, setIdx } = jobBoardSlice.actions;
export default jobBoardSlice.reducer;
