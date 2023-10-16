import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from './homeslice'

export const store = configureStore({
  reducer: {
    home:HomeReducer
  },
})