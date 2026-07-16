import FileIcon from "../../icons/FileIcon";
import txtIcon from "../../../assets/icons/txt.png";
import urlIcon from "../../../assets/icons/url.png";

function AboutContent( {openWindow} ) {
    return (
        <div className="folder-files">
            <FileIcon icon={txtIcon} name="About.txt" onClick={() => openWindow("aboutText")} onDoubleClick={() => openWindow("aboutText")}/>
            <FileIcon icon={urlIcon} name="LinkedIn.url" onClick={() => window.open("https://www.linkedin.com/in/camilleshreeve111/", "_blank")}/>
            <FileIcon icon={urlIcon} name="Github.url" onClick={() => window.open("https://github.com/cshreeve", "_blank")}/>
        </div>
    );
}

export default AboutContent;