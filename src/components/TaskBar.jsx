import "./TaskBar.css"

function TaskBar({windows, openWindow}){
    return (
       <div className="taskbar">
        <div className="taskbar-items">
            {Object.entries(windows).map(([id, window]) => (
                window.open && (
                    <button onClick={() => openWindow(id) } key={id}>{window.title}</button>
                )
            ))}
        </div>
      </div>
    );
}

export default TaskBar;