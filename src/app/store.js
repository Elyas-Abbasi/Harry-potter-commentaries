import { configureStore } from '@reduxjs/toolkit'
import livresReducer from '../features/livres/LivresSlice'

export const store = configureStore({
    reducer: {
        livres: livresReducer,
    },
})
