import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaRegEdit, FaCheck, FaBookReader, FaRegTrashAlt } from "react-icons/fa";
import {useDispatch } from 'react-redux';


function FolderCard({id, name, f, index, handle, remove, folder}) {
    const [edit, setEdit] = useState(
        {
            edit:false, 
            id: "", 
            name:""
        }
            );

    const dispatch = useDispatch();
  return (
        <div className="card" key={f.id} >
            {!edit.edit&&<Link to={id}>{name}</Link>}
            {edit.edit&&<input onChange={(e)=>setEdit(edit=>{
                return({
                ...edit, name:e.target.value})
            })
                } type="search" value={edit.name} required ></input>}

            <div className="adjust-button">
                {!edit.edit&&<div className='container' onClick={()=>setEdit({edit:true, id: f.id, name: f.name})}>
                    <p className="content">Edit</p>
                    <FaRegEdit />
                    </div>}
                {edit.edit&&<div
                    className='container'
                    onClick={()=>{
                    folder?dispatch(handle({
                        index: index,
                        id: edit.id,
                        name: edit.name,
                        folder: folder
                    })):dispatch(handle({
                        index: index,
                        id: edit.id,
                        name: edit.name}));
                    setEdit({edit: false, id:"", name:""})

                    }}>
                        <p className='content'>Submit</p>
                        <FaCheck />
                    </div>}
                <Link to={`learn/${id}`}><div className="container">
                    <p className="content">Learn</p>
                    <FaBookReader />
                </div></Link>

                <div onClick={()=>dispatch(remove(f))} className='container'>
                    <p className="content">Remove</p>
                    <FaRegTrashAlt />
                </div>

            </div>
            
        </div>

  )
}

export default FolderCard