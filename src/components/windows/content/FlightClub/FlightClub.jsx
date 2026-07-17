import FileIcon from "../../../icons/FileIcon";
import txtIcon from "../../../../assets/icons/txt.png";
import mp4Icon from "../../../../assets/icons/mp4.png";

function FlightClubContent( {openWindow} ) {
    return (
        <div className="folder-files">
            <FileIcon icon={txtIcon} name="README.txt" onClick={() => openWindow("flightReadMe")}></FileIcon>
            <FileIcon icon={mp4Icon} name="Demo.mp4" onClick={() => openWindow("fcDemo")}></FileIcon>
            <FileIcon icon={mp4Icon} name="User_Study.mp4" onClick={() => openWindow("catDemo")}></FileIcon>
        </div>
    );
}

export default FlightClubContent;