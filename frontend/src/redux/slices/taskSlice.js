import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
	name: "task",
	initialState: {
		backlog: [],
		todo: [],
		inProgress: [],
		done: [],
	},
	reducers: {
		setBacklog: (state, action) => {
			state.backlog = action.payload;
		},
		setTodo: (state, action) => {
			state.todo = action.payload;
		},
		setInProgress: (state, action) => {
			state.inProgress = action.payload;
		},
		setDone: (state, action) => {
			state.done = action.payload;
		},
		addTodoTask: (state, action) => {
			state.todo = [...state.todo, action.payload];
		},
	},
});
export const { setBacklog, setTodo, setInProgress, setDone, addTodoTask } =
	taskSlice.actions;
export default taskSlice.reducer;
