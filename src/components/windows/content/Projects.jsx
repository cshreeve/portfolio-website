import FileIcon from "../../icons/FileIcon";
import folderIcon from "../../../assets/icons/folder.png";

function ProjectContent( {openWindow} ) {
    return (
        <div className="folder-files">
            <FileIcon icon={folderIcon} name="PopMedia" onClick={() => openWindow("about")}></FileIcon>
            <FileIcon icon={folderIcon} name="Practical ML" onClick={() => openWindow("about")}></FileIcon>
            <FileIcon icon={folderIcon} name="Flight Club" onClick={() => openWindow("about")}></FileIcon>
        </div>
    );
}

export default ProjectContent;