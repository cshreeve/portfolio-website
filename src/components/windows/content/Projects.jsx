import FileIcon from "../../icons/FileIcon";
import folderIcon from "../../../assets/icons/folder.png";
import txtIcon from "../../../assets/icons/txt.png";

function ProjectContent( {openWindow} ) {
    return (
        <div className="folder-files">
            <FileIcon icon={txtIcon} name="Overview.txt" onClick={() => openWindow("overview")}></FileIcon>
            <FileIcon icon={txtIcon} name="Internship.txt" onClick={() => openWindow("about")}></FileIcon>
            <FileIcon icon={folderIcon} name="PopMedia" onClick={() => openWindow("about")}></FileIcon>
            <FileIcon icon={folderIcon} name="Portfolio" onClick={() => openWindow("about")}></FileIcon>
            <FileIcon icon={folderIcon} name="Flight Club" onClick={() => openWindow("about")}></FileIcon>
            <FileIcon icon={folderIcon} name="CNN Classifier" onClick={() => openWindow("about")}></FileIcon>
        </div>
    );
}

export default ProjectContent;