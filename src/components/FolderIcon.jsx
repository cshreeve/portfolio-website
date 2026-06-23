import "./FolderIcon.css"
import folderIcon from "../assets/icons/folder.png";

function FolderIcon({ name, onClick }){
    return (
        <div className="folder-icon" onClick={onClick}>
            <img src={folderIcon} alt={name} className="folder-icon-image"/>
            <p className="folder-icon-label">{name}</p>
        </div>
    );
}

export default FolderIcon;