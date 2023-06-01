import { configureStore } from "@reduxjs/toolkit"   // Configures the Redux store
import themeReducer from './reducers/themeSlice'    // Client theme
import langReducer from './reducers/langSlice'      // Client language
import thunk from "redux-thunk"                     // todo Middleware interacting with cookies

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch