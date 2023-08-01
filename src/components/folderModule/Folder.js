import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFolder, addFolder, editFolder, removeFolder} from '../../features/folderSlice';
import {v4 as uuidv4} from 'uuid';
import "./Folder.scss";
import FolderCard from './FolderCard';
const Folder =()=>{
    const Folder = useSelector(selectFolder);
    const dispatch = useDispatch();
    const [name, setName] = useState("");  
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addFolder({
            id: uuidv4(),
            name: name
        }))
    }
    return(
        <div className="folder">
            <form>
                <input onChange={(e)=>setName(e.target.value)} type="search" value={name} placeholder="Enter folder name..." required ></input>
                <button type="submit" onClick={handleSubmit}>Add Folder</button>

            </form>
            <div className="reverse">
                {
                    Folder.map((f, i)=>{
                        return(
                            <FolderCard key ={f.id} id={f.id} name={f.name} f ={f} index={i} handle={editFolder} remove={removeFolder}/>
                            
                            )
                    })
                }
            </div>

        </div>
    )
}
export default Folder;