import "./FileIcon.css"

function FileIcon({ icon, name, onClick, onDoubleClick }){
    return (
         <div className="file" onClick={onClick} onDoubleClick={onDoubleClick}>
            <img src={icon} alt="txt" className="file-icon-image"/>
            <p className="file-label">{name}</p>
        </div>
    );
}

export default FileIcon;
