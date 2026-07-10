import Window from "./Window";

import AboutContent from "./content/About";
import ProjectsContent from "./content/Projects";
import ResumeContent from "./content/Resume";

function WindowManager({ windows, closeWindow }) {

    return (
        <>

            {windows.about && (
                 <Window title="About Me" onClose={() => closeWindow("about")}> <AboutContent/></Window> 
            )}

            {windows.projects && (
                <Window title="My Projects" onClose={() => closeWindow("projects")}> <ProjectsContent/></Window>
            )}

            {windows.resume && (
                <Window title="My Resume" onClose={() => closeWindow("resume")}> <ResumeContent/></Window>
            )}

        </>
    );
}

export default WindowManager;