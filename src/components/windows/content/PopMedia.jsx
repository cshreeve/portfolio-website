import FileIcon from "../../icons/FileIcon";
import folderIcon from "../../../assets/icons/folder.png";
import txtIcon from "../../../assets/icons/txt.png";
import mp4Icon from "../../../assets/icons/mp4.png";
import imgIcon from "../../../assets/icons/img.png";
import pdfIcon from "../../../assets/icons/pdf.png";
import urlIcon from "../../../assets/icons/url.png";

function PopMediaContent( {openWindow} ) {
    return (
        <div className="folder-files">
            <FileIcon icon={txtIcon} name="README.txt" onClick={() => openWindow("overview")}></FileIcon>
            <FileIcon icon={mp4Icon} name="Demo.mp4" onClick={() => openWindow("popMedia")}></FileIcon>
            <FileIcon icon={imgIcon} name="Architecture.png" onClick={() => openWindow("about")}></FileIcon>
            <FileIcon icon={pdfIcon} name="Honors_Thesis.pdf" onClick={() => openWindow("about")}></FileIcon>
            <FileIcon icon={urlIcon} name="Website.url" onClick={() => openWindow("about")}></FileIcon>
        </div>
    );
}

export default PopMediaContent;