import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
	name: "state",
	initialState: {
		dashboardSection: "board",
		loading: false,
	},
	reducers: {
		updateDashboardSection: (state, action) => {
			state.dashboardSection = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});
export const { updateDashboardSection, setLoading } = stateSlice.actions;
export default stateSlice.reducer;
