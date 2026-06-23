import "./Windows.css"

function AboutWindow({ onClose }) {
    return (
        <div className="window">
            <div className="window-header">
                <h1>About Me</h1>
                <button onClick={ onClose }>X</button>
            </div>
            
            <div className="window-content">
                <p>This is about me...</p>
            </div>
        </div>
    );
}

export default AboutWindow;