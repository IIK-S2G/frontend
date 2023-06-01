import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface ThemeState {
    theme: number
}

const initialState: ThemeState = {
    theme: 0
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => { state.theme++ },
        resetTheme: (state) => { state.theme = 0 },
        setTheme: (state, action: PayloadAction<number>) => { state.theme = action.payload }
    }
})

export const { changeTheme, resetTheme, setTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer