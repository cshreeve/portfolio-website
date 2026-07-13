import Window from "./Window";

import AboutContent from "./content/About";
import ProjectsContent from "./content/Projects";
import ResumeContent from "./content/Resume";
import TerminalContent from "./content/Terminal";
import ArcadeContent from "./content/Arcade";

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

            {windows.terminal.open && !windows.terminal.minimized &&(
                <Window title="Ask Camille" x={windows.terminal.x} y={windows.terminal.y} maximized={windows.terminal.maximized} onMove={(x,y) => moveWindow("terminal", x, y)} onMinimize={() => minimizeWindow("terminal")} onMaximize={() => maximizeWindow("terminal")} onClose={() => closeWindow("terminal")}> <TerminalContent/></Window>
            )}

            {windows.arcade.open && !windows.arcade.minimized &&(
                <Window title="Arcade" x={windows.arcade.x} y={windows.arcade.y} maximized={windows.arcade.maximized} onMove={(x,y) => moveWindow("arcade", x, y)} onMinimize={() => minimizeWindow("arcade")} onMaximize={() => maximizeWindow("arcade")} onClose={() => closeWindow("arcade")}> <ArcadeContent/></Window>
            )}

        </>
    );
}

export default WindowManager;
