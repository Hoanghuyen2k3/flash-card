import { createSlice } from "@reduxjs/toolkit";

const folder ={
    name: "folder",
    initialState: [{
        id:"f001efee-5760-4880-b156-e73e8ef48219",
        name:"Demo folder"
    }],
    reducers:{
        addFolder:(state, action)=>{
            return [...state, action.payload]
        },
        removeFolder:(state, action)=>{
            return state.filter(f => f.id!== action.payload.id);
        },
        editFolder:(state, action)=>{
            const newState = state.filter(f => f.id!== action.payload.id);
            const newFolder={
                id: action.payload.id,
                name: action.payload.name
            }
            console.log(action.payload.index)
            return [...newState.slice(0, action.payload.index), newFolder, ...newState.slice(action.payload.index)];     
        }
    }
}
const folderSlice = createSlice(folder);
export default folderSlice.reducer;
export const {addFolder, removeFolder, editFolder} = folderSlice.actions;
export const selectFolder = (state)=> state.folder;