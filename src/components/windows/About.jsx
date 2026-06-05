function AboutWindow({ onClose }) {
    return (
        <div className="window">
            <div className="window-header">
                <button onClick={ onClose }>X</button>
            </div>
            <div className="window-content">
                <h2>About Me</h2>
            </div>
        </div>
    );
}

export default AboutWindow;