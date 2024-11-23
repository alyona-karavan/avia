import { configureStore } from '@reduxjs/toolkit'

import listReducer from './listSlice'
import checkboxReducer from './checkboxSlice'
import serviceReducer from './serviceSlice'

export default configureStore({
  reducer: {
    list: listReducer,
    checkbox: checkboxReducer,
    service: serviceReducer,
  },
})
