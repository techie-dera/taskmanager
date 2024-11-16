import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
	name: "state",
	initialState: {
		dashboardSection: "board",
	},
	reducers: {
		updateDashboardSection: (state, action) => {
			state.dashboardSection = action.payload;
		},
	},
});
export const { updateDashboardSection } = stateSlice.actions;
export default stateSlice.reducer;
