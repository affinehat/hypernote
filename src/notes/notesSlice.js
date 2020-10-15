import { createSlice, createAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const namespace = 'notes'

const notesSlice = createSlice({
  name: namespace,
  initialState: [],
  reducers: {
    createNote: (state, action) => void (state.push({id: v4(), text: action.payload})),
    deleteNote: (state, action) => void (state.splice(action.payload, 1)),
  },
})

export default notesSlice.reducer
export const { createNote, deleteNote } = notesSlice.actions
