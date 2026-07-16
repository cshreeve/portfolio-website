import FileIcon from "../../../icons/FileIcon";
import folderIcon from "../../../../assets/icons/folder.png";
import txtIcon from "../../../../assets/icons/txt.png";
import imgIcon from "../../../../assets/icons/img.png";
import urlIcon from "../../../../assets/icons/url.png";

function PortfolioContent( {openWindow} ) {
    return (
        <div className="folder-files">
            <FileIcon icon={txtIcon} name="README.txt" onClick={() => openWindow("folioReadMe")}></FileIcon>
            <FileIcon icon={txtIcon} name="Roadmap.txt" onClick={() => openWindow("roadmap")}></FileIcon>
            <FileIcon icon={urlIcon} name="Github.url" onClick={() => window.open("https://github.com/cshreeve/portfolio-website", "_blank")}/>
        </div>
    );
}

export default PortfolioContent;