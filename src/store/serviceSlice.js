import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getSearchId = createAsyncThunk('tickets/searchId', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search', {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    return data.searchId
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const getTickets = createAsyncThunk('tickets/tickets', async function (_, { getState, rejectWithValue }) {
  const state = getState()
  const searchId = state.service.searchId

  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    tickets: [],
    status: null,
    isLoading: null,
    error: null,
    searchId: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchId.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getSearchId.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.searchId = action.payload
        state.tickets = []
      })
      .addCase(getSearchId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.tickets = [...state.tickets, ...action.payload.tickets]
        state.status = action.payload.stop ? 'completed' : 'inProgress'
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export default serviceSlice.reducer
