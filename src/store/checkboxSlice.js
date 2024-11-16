import { createSlice } from '@reduxjs/toolkit'

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState: {
    checkedItems: {
      all: false,
      noTransfers: false,
      oneTransfer: false,
      twoTransfers: false,
      threeTransfers: false,
    },
  },
  reducers: {
    toggleCheckbox(state, action) {
      const { checkboxName } = action.payload

      if (checkboxName === 'all') {
        const newValue = !state.checkedItems.all
        console.log(newValue)
        for (const key in state.checkedItems) {
          state.checkedItems[key] = newValue
        }
      } else {
        if (state.checkedItems.all) {
          state.checkedItems.all = false
        }

        state.checkedItems[checkboxName] = !state.checkedItems[checkboxName]

        state.checkedItems.all = Object.keys(state.checkedItems)
          .filter((key) => key !== 'all')
          .every((key) => state.checkedItems[key])
      }
    },
  },
})

export const { toggleCheckbox } = checkboxSlice.actions

export default checkboxSlice.reducer
