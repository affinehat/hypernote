import { createSlice, createAction } from '@reduxjs/toolkit'

const namespace = 'notes'

const notesSlice = createSlice({
  name: namespace,
  initialState: [],
  reducers: {
    createNote: (state, action) => void (state.push({text: action.payload })),
    deleteNote: (state, action) => void (state.splice(action.payload, 1)),
  },
})

export default notesSlice.reducer
export const { createNote, deleteNote } = notesSlice.actions
