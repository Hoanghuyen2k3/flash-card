import React from 'react'
import FolderCard from '../folderModule/FolderCard'
import { selectFolder, addFolder, editFolder, removeFolder} from '../../features/folderSlice';
import { selectModule, addModule, removeModule, editModule } from '../../features/moduleSlice';
import { useSelector } from 'react-redux'
function RecentAdded() {
    const folders = useSelector(selectFolder);
    const modules = useSelector(selectModule);
    let folder =[]
    let module=[]
    if (folders.length>3){
        folder = [folders[folders.length - 3], folders[folders.length -2], folders[folders.length -1]]
    }
    else {
        folder= folders;
    }
    if (modules.length>3){
        module = [modules[modules.length - 3], modules[modules.length -2], modules[modules.length -1]]
    }
    else {
        module= modules;
    }
    
    
  return (
    <div>
        <div className="reverse">
                {
                    folder.map((f, i)=>{
                        return(
                            <FolderCard key ={f.id} id={f.id} name={f.name} f ={f} index={i} handle={editFolder} remove={removeFolder}/>
                            
                            )
                    })
                }
            </div>
            <div className="reverse">
                {
                    module.map((f, i)=>{
                        return(
                            <FolderCard key ={f.id} id={f.id} name={f.name} f ={f} index={i} handle={editModule} remove={removeModule}/>
                            
                            )
                    })
                }
            </div>
    </div>
  )
}

export default RecentAdded