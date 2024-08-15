import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface Bug {
	id: string;
	title: string;
	status: "open" | "closed";
	priority: string;
	assignee: string;
	attachment: object;
}

interface BugsState {
	bugs: Bug[];
}

const initialState: BugsState = {
	bugs: [],
};

const bugsSlice = createSlice({
	name: "bugs",
	initialState,
	reducers: {
		addBug: (state, action: PayloadAction<Bug>) => {
			state.bugs.push(action.payload);
			if (typeof window !== "undefined") {
				localStorage.setItem("bugs", JSON.stringify(state.bugs));
			}
		},
		updateBug: (state, action: PayloadAction<Bug>) => {
			const index = state.bugs.findIndex((bug) => bug.id === action.payload.id);
			if (index !== -1) {
				state.bugs[index] = action.payload;
				if (typeof window !== "undefined") {
					localStorage.setItem("bugs", JSON.stringify(state.bugs));
				}
			}
		},
		deleteBug: (state, action: PayloadAction<string>) => {
			state.bugs = state.bugs.filter((bug) => bug.id !== action.payload);
			if (typeof window !== "undefined") {
				localStorage.setItem("bugs", JSON.stringify(state.bugs));
			}
		},
	},
});

export const { addBug, updateBug, deleteBug } = bugsSlice.actions;

export const selectBugs = (state: RootState) => state.bugs.bugs;

export default bugsSlice.reducer;
