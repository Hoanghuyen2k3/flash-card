import React from 'react'
import Module from './Module'
import {useParams} from 'react-router-dom'
import { selectModule } from '../../features/moduleSlice';
import { selectFolder } from '../../features/folderSlice';
import { useSelector } from 'react-redux';
function FolderModule() {
    const param = useParams();
    const module = useSelector(selectModule);
    const folders = useSelector(selectFolder);
    const folder = folders.filter(folder => folder.id ===param.folder);
    console.log(param.folder)
    const modules = module.filter(m=> m.folder ===param.folder)
    console.log(folder)
  return (
    <div>
        <h1 className="folderTitle">{folder[0]&&folder[0].name.toUpperCase()}</h1>
        <Module folder={param.folder} modules = {modules} />
    </div>
  )
}

export default FolderModule