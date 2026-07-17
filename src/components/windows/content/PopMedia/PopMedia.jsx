import FileIcon from "../../../icons/FileIcon";
import txtIcon from "../../../../assets/icons/txt.png";
import mp4Icon from "../../../../assets/icons/mp4.png";
import imgIcon from "../../../../assets/icons/img.png";
import pdfIcon from "../../../../assets/icons/pdf.png";
import urlIcon from "../../../../assets/icons/url.png";

function PopMediaContent( {openWindow} ) {
    return (
        <div className="folder-files">
            <FileIcon icon={txtIcon} name="README.txt" onClick={() => openWindow("popReadMe")}></FileIcon>
            <FileIcon icon={mp4Icon} name="Demo.mp4" onClick={() => openWindow("popDemo")}></FileIcon>
            <FileIcon icon={imgIcon} name="Architecture.png" onClick={() => openWindow("popTech")}></FileIcon>
            <FileIcon icon={pdfIcon} name="Honors_Thesis.pdf" onClick={() => openWindow("thesis")}></FileIcon>
            <FileIcon icon={urlIcon} name="Website.url" onClick={() => window.open("https://www.thepopmedia.com", "_blank")}/>
        </div>
    );
}

export default PopMediaContent;