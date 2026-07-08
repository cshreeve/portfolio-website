import "./DesktopIcon.css"

function DesktopIcon({ icon, name, onClick }){
    return (
        <div className="desktop-icon" onClick={onClick}>
            <img src={icon} alt={name} className="desktop-icon-image"/>
            <p className="desktop-icon-label">{name}</p>
        </div>
    );
}

export default DesktopIcon;