import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import stateSlice from "./slices/stateSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		state: stateSlice,
	},
});

export default store;
