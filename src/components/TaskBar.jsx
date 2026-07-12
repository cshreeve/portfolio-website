import "./TaskBar.css"

function TaskBar({windows}){
    console.log(windows);
    return (
       <div className="taskbar">
        {Object.entries(windows).map(([id, window]) => (
            window.open && (
                <button key={id}>{window.title}</button>
            )
        ))}
        </div>
    );
}

export default TaskBar;