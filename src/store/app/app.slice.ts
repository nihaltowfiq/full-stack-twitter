import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';

const initialState: IInitialState = {
	isLoading: false,
	isAuthenticate: false,
	popup: {
		isActive: true,
		isLoading: false,
		type: 'register',
	},
};

// create a slice
const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		updatePopup: (state, action: PayloadAction<IPopup>) => {
			state.popup = { ...action.payload };
		},
		updateLoader: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export default slice.reducer;

export const { updatePopup, updateLoader } = slice.actions;

export const getAppState = (state: RootState): IInitialState => state.app;

type IPopup = {
	isActive: boolean;
	type: 'register' | 'signin' | 'forgot-password';
	isLoading?: boolean;
};

interface IInitialState {
	isLoading: boolean;
	isAuthenticate: boolean;
	popup: IPopup;
}
