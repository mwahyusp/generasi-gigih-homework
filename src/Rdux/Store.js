import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from './tokenSlice'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice
  },
})