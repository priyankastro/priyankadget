import { createSlice } from '@reduxjs/toolkit'

export interface GlobalState {
  openNav: any
}

const initialState: GlobalState = {
  openNav: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggle: (state) => {
        state.openNav? state.openNav = false: state.openNav = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = globalSlice.actions

export default globalSlice.reducer