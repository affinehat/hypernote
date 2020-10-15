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
  },
})

export default notesSlice.reducer
export const { createNote, deleteNote } = notesSlice.actions
