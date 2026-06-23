import "./Windows.css"

function Window({ title, onClose, children }) {
    return (
        <div className="window">
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