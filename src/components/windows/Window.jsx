import "./Windows.css"
import { useRef, useState } from "react";

function Window({ title, x, y, maximized, onMove, onMinimize, onMaximize, onClose, children }) {
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({x: 0, y:0});
    const windowRef = useRef();

    function handleMouseDown(e) {
        if (maximized) return;
        const rect = windowRef.current.getBoundingClientRect();

        setDragging(true);

        setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });

        // if this was the first drag, lock in the position
        if (x === null || y === null) {
            onMove(rect.left, rect.top);
        }
    }

    function handleMouseUp(e) {
        setDragging(false);
    }

    function handleMouseMove(e) {
        if (!dragging || maximized) return;
        onMove(
            e.clientX - offset.x, 
            e.clientY - offset.y
        );
    }

    return (
        <div ref={windowRef}
            className="window"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp} 
            style={{ 
                left: maximized ? 0 : x ?? "50%", top: maximized ? 0 : y ?? "50%",
                width: maximized ? "100%" : "500px", height: maximized ? "100%" : "400px",
                transform: maximized ? "none" : x === null ? "translate(-50%, -50%)" : "none"
            }}>
            <div className="window-header" onMouseDown={handleMouseDown}>
                <h1>{title}</h1>
                <div className="window-control">
                    <button onClick={ onMinimize }>-</button>
                    <button onClick= { onMaximize }>{maximized ? "❐" : "□"}</button>
                    <button onClick={ onClose }>X</button>
                </div>
            </div>
            
            <div className="window-content">
                {children}
            </div>
        </div>
    );
}

export default Window;
