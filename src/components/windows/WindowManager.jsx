import Window from "./Window";

import AboutContent from "./content/About";
import ProjectsContent from "./content/Projects";
import ResumeContent from "./content/Resume";

function WindowManager({ windows, moveWindow, closeWindow }) {
    return (
        <>

            {windows.about.open && (
                 <Window title="About Me" x={windows.about.x} y={windows.about.y} onMove={(x,y) => moveWindow("about", x, y)} onClose={() => closeWindow("about")}> <AboutContent/></Window> 
            )}

            {windows.projects.open && (
                <Window title="My Projects" x={windows.projects.x} y={windows.projects.y} onMove={(x,y) => moveWindow("projects", x, y)} onClose={() => closeWindow("projects")}> <ProjectsContent/></Window>
            )}

            {windows.resume.open && (
                <Window title="My Resume" x={windows.resume.x} y={windows.resume.y} onMove={(x,y) => moveWindow("resume", x, y)} onClose={() => closeWindow("resume")}> <ResumeContent/></Window>
            )}

        </>
    );
}

export default WindowManager;