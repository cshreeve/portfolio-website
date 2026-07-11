import Window from "./Window";

import AboutContent from "./content/About";
import ProjectsContent from "./content/Projects";
import ResumeContent from "./content/Resume";

function WindowManager({ windows, closeWindow }) {

    return (
        <>

            {windows.about.open && (
                 <Window title="About Me" x={windows.about.x} y={windows.about.y} onClose={() => closeWindow("about")}> <AboutContent/></Window> 
            )}

            {windows.projects.open && (
                <Window title="My Projects" x={windows.projects.x} y={windows.projects.y} onClose={() => closeWindow("projects")}> <ProjectsContent/></Window>
            )}

            {windows.resume.open && (
                <Window title="My Resume" x={windows.resume.x} y={windows.resume.y} onClose={() => closeWindow("resume")}> <ResumeContent/></Window>
            )}

        </>
    );
}

export default WindowManager;