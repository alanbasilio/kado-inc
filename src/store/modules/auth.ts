import { createSlice } from '@reduxjs/toolkit'

var initialState = {
    email: '',
    password: '',
    user:''
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signin(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    signout(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { signin, signout } = authSlice.actions
export default authSlice.reducer