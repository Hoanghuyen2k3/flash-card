import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModule, addModule, removeModule, editModule } from '../../features/moduleSlice';
import {v4 as uuidv4} from 'uuid';
import FolderCard from './FolderCard';


const Module =(props)=>{
    console.log(props)
    const mod = useSelector(selectModule)
    const module = props.folder? props.modules: mod ;
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addModule({
            id: uuidv4(),
            name: name,
            folder: props.folder ? props.folder: ""
        }))
    }
    

    return(
        <div className="folder">
            <form>
                <input onChange={(e)=>setName(e.target.value)} type="search" 
                value={name} placeholder="Enter Module name..." required></input>
                <button type="submit" onClick={handleSubmit}>Add Module</button>

            </form>
            <div className="reverse">
                {
                    module.map((f, i)=>{
                        return(
                            <FolderCard key={f.id} id={f.id} name={f.name} f ={f} index={i} handle={editModule} remove={removeModule} folder={f.folder}/>)

                    })
                }
            </div>

        </div>
    )
}
export default Module;