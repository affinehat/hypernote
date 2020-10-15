import { createSlice, createAction } from '@reduxjs/toolkit'

const namespace = 'notes'

const notesSlice = createSlice({
  name: namespace,
  initialState: [],
  reducers: {
    addNote: (state, action) => void (state.push({text: action.payload }))
  },
})

export default notesSlice.reducer
export const { addNote } = notesSlice.actions
