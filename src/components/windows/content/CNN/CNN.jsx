import FileIcon from "../../../icons/FileIcon";
import txtIcon from "../../../../assets/icons/txt.png";
import urlIcon from "../../../../assets/icons/url.png";

function CNNContent( {openWindow} ) {
    return (
        <div className="folder-files">
            <FileIcon icon={txtIcon} name="README.txt" onClick={() => openWindow("cnnReadMe")}></FileIcon>
            <FileIcon icon={urlIcon} name="Colab.url" onClick={() => window.open("https://colab.research.google.com/drive/1mj23OXWnv2E964wUVbjj801rmy9CzFN9#scrollTo=72d14EfbcoCe", "_blank")}/>
        </div>
    );
}

export default CNNContent;