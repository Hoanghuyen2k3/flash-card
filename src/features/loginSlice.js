import {createSlice} from "@reduxjs/toolkit"
const loginSlice = createSlice({
    name: 'login',
    initialState: false,
    reducers:{
        editLogin:(state)=>{
            return !state;
        }
    }
})
export const {editLogin} = loginSlice.actions;
export const selectLogin =(state)=>state.login;
export default loginSlice.reducer;