import {createSlice} from "@reduxjs/toolkit"
const loginSlice = createSlice({
    name: 'login',
    initialState: false,
    reducers:{
        editLogin:(state)=>{
            return true;
        },
        logout: (state)=>{
            console.log("logout")
            return false;
        }
    }
})
export const {editLogin, logout} = loginSlice.actions;
export const selectLogin =(state)=>state.login;
export default loginSlice.reducer;