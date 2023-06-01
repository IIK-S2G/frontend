import { createSlice } from "@reduxjs/toolkit"

interface LangState {
    lang: number
}

const initialState: LangState = {
    lang: 0
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLang: (state) => { state.lang++ },
        resetLang: (state) => { state.lang = 0 },
        setLang: (state, action) => { state.lang = action.payload }
    }
})

export const { changeLang, resetLang, setLang } = langSlice.actions

export default langSlice.reducer