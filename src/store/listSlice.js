import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: 'optima',
  },
  reducers: {
    changeList(state, action) {
      state.list = action.payload.list
    },
  },
})

export const { changeList } = listSlice.actions

export default listSlice.reducer
