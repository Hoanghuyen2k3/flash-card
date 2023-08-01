import { createSlice } from "@reduxjs/toolkit";
const moduleSlice = createSlice({
    name:'module', 
    initialState: [{
        id:"9bc1a55d-51a2-400c-b8b4-1615c41ccf67",
        name:"Demo Module",
        folder:"f001efee-5760-4880-b156-e73e8ef48219"
    }],
    reducers:{
        addModule: (state, action)=>{
            
            return [...state, action.payload]
        },
        removeModule: (state, action)=>{
            return state.filter((module)=>module.id !== action.payload.id)
        },
        editModule:(state, action)=>{
            const newState = state.filter(f => f.id!== action.payload.id);
            const newModule={
                id: action.payload.id,
                name: action.payload.name,
                folder: action.payload.folder
            }
            console.log(action.payload.index)
            return [...newState.slice(0, action.payload.index), newModule, ...newState.slice(action.payload.index)];     
        }
    }
});
export const {addModule, removeModule, editModule} = moduleSlice.actions;
export const selectModule =(state)=>state.module;
export default moduleSlice.reducer;