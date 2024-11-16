import { configureStore } from '@reduxjs/toolkit'

import listReducer from './listSlice'
import checkboxReducer from './checkboxSlice'

export default configureStore({
  reducer: {
    list: listReducer,
    checkbox: checkboxReducer,
  },
})
