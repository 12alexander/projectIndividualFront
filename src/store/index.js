import { configureStore } from "@reduxjs/toolkit";
import reservation from "./slices/reservation";

const reducer = {
  reservation,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
