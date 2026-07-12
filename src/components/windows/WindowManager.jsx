import Window from "./Window";

import AboutContent from "./content/About";
import ProjectsContent from "./content/Projects";
import ResumeContent from "./content/Resume";

function WindowManager({ windows, moveWindow, minimizeWindow, maximizeWindow, closeWindow }) {
    return (
        <>

            {windows.about.open && !windows.about.minimized && (
                 <Window title="About Me" x={windows.about.x} y={windows.about.y} maximized={windows.about.maximized} onMove={(x,y) => moveWindow("about", x, y)} onMinimize={() => minimizeWindow("about")} onMaximize={() => maximizeWindow("about")} onClose={() => closeWindow("about")}> <AboutContent/></Window> 
            )}

            {windows.projects.open && !windows.projects.minimized &&(
                <Window title="My Projects" x={windows.projects.x} y={windows.projects.y} maximized={windows.projects.maximized} onMove={(x,y) => moveWindow("projects", x, y)} onMinimize={() => minimizeWindow("projects")} onMaximize={() => maximizeWindow("projects")} onClose={() => closeWindow("projects")}> <ProjectsContent/></Window>
            )}

            {windows.resume.open && !windows.resume.minimized &&(
                <Window title="My Resume" x={windows.resume.x} y={windows.resume.y} maximized={windows.resume.maximized} onMove={(x,y) => moveWindow("resume", x, y)} onMinimize={() => minimizeWindow("resume")} onMaximize={() => maximizeWindow("resume")} onClose={() => closeWindow("resume")}> <ResumeContent/></Window>
            )}

        </>
    );
}

export default WindowManager;
