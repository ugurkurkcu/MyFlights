import { configureStore } from "@reduxjs/toolkit";
import flight from "./flightSlice";

export default configureStore({
  reducer: { flight },
});
