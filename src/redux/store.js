import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import jobReducer from "./slices/jobBoardSlice";
export default configureStore({
  reducer: {
    boardReducer,
    jobReducer,
  },
});
