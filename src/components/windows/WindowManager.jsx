import Window from "./Window";

import AboutContent from "./content/About";
import ProjectsContent from "./content/Projects";
import ResumeContent from "./content/Resume";

function WindowManager({ windows, moveWindow, minimizeWindow, closeWindow }) {
    return (
        <>

            {windows.about.open && !windows.about.minimized && (
                 <Window title="About Me" x={windows.about.x} y={windows.about.y} onMove={(x,y) => moveWindow("about", x, y)} onMinimize={() => minimizeWindow("about")} onClose={() => closeWindow("about")}> <AboutContent/></Window> 
            )}

            {windows.projects.open && !windows.projects.minimized &&(
                <Window title="My Projects" x={windows.projects.x} y={windows.projects.y} onMove={(x,y) => moveWindow("projects", x, y)} onMinimize={() => minimizeWindow("projects")} onClose={() => closeWindow("projects")}> <ProjectsContent/></Window>
            )}

            {windows.resume.open && !windows.resume.minimized &&(
                <Window title="My Resume" x={windows.resume.x} y={windows.resume.y} onMove={(x,y) => moveWindow("resume", x, y)} onMinimize={() => minimizeWindow("resume")} onClose={() => closeWindow("resume")}> <ResumeContent/></Window>
            )}

        </>
    );
}

export default WindowManager;