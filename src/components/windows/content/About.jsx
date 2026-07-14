import FileIcon from "../../icons/FileIcon";
import txtIcon from "../../../assets/icons/txt.png";

function AboutContent( {openWindow} ) {
    return (
       <FileIcon icon={txtIcon} name="About.txt" onClick={() => openWindow("aboutText")} onDoubleClick={() => openWindow("aboutText")}></FileIcon>
    );
}

export default AboutContent;