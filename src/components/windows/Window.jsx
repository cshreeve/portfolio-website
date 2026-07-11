import "./Windows.css"

function Window({ title, x, y, onClose, children }) {
    return (
        <div className="window" style={{ left: x ?? "50%", top: y ?? "50%", transform: x === null ? "translate(-50%, -50%)" : "none"}}>
            <div className="window-header">
                <h1>{title}</h1>
                <button onClick={ onClose }>X</button>
            </div>
            
            <div className="window-content">
                {children}
            </div>
        </div>
    );
}

export default Window;