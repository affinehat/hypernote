import { createSlice, createAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const namespace = 'notes'

const notesSlice = createSlice({
  name: namespace,
  initialState: {},
  reducers: {
    createNote: (state, action) => {
      const id = v4()
      state[id] = {
        id,
        ...action.payload
      }
    },
    deleteNote: (state, action) => void (delete state[action.payload]),
    editNote: (state, action) => void (state[action.payload.id].text = action.payload.value),
    editTitle: (state, action) => {
      state[action.payload].editing = !state[action.payload].editing
    },
    updateTitle: (state, action) => {
      state[action.payload.id].title = action.payload.value
    },
  },
})

export default notesSlice.reducer
export const { createNote, deleteNote, editNote, editTitle, updateTitle } = notesSlice.actions
