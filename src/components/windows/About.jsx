import "./Windows.css"

function AboutWindow({ onClose }) {
    return (
        <div className="window">
            <div className="window-header">
                <h1>About Me</h1>
                <button onClick={ onClose }>X</button>
            </div>
            <div className="window-content">
                <h2>About Me</h2>
            </div>
        </div>
    );
}

export default AboutWindow;