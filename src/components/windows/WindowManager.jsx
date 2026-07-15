import Window from "./Window";

import AboutContent from "./content/About";
import AboutTextContent from "./content/AboutText";
import ProjectsContent from "./content/Projects";
import ResumeContent from "./content/Resume";
import TerminalContent from "./content/Terminal";
import ArcadeContent from "./content/Arcade";

function WindowManager({ windows, moveWindow, minimizeWindow, maximizeWindow, focusWindow, openWindow, closeWindow }) {
    return (
        <>

            {windows.about.open && !windows.about.minimized && (
                 <Window title="About Me" x={windows.about.x} y={windows.about.y} maximized={windows.about.maximized} onMove={(x,y) => moveWindow("about", x, y)} onMinimize={() => minimizeWindow("about")} onMaximize={() => maximizeWindow("about")} zIndex={windows.about.zIndex} onFocus={() => focusWindow("about")} onClose={() => closeWindow("about")}> <AboutContent openWindow={openWindow}/></Window> 
            )}

            {windows.aboutText.open && !windows.aboutText.minimized && (
                 <Window title="About.txt" x={windows.aboutText.x} y={windows.aboutText.y} maximized={windows.aboutText.maximized} onMove={(x,y) => moveWindow("aboutText", x, y)} onMinimize={() => minimizeWindow("aboutText")} onMaximize={() => maximizeWindow("aboutText")} zIndex={windows.aboutText.zIndex} onFocus={() => focusWindow("aboutText")} onClose={() => closeWindow("aboutText")}> <AboutTextContent/></Window> 
            )}

            {windows.projects.open && !windows.projects.minimized &&(
                <Window title="My Projects" x={windows.projects.x} y={windows.projects.y} maximized={windows.projects.maximized} onMove={(x,y) => moveWindow("projects", x, y)} onMinimize={() => minimizeWindow("projects")} onMaximize={() => maximizeWindow("projects")} zIndex={windows.projects.zIndex} onFocus={() => focusWindow("projects")} onClose={() => closeWindow("projects")}> <ProjectsContent openWindow={openWindow}/></Window>
            )}

            {windows.resume.open && !windows.resume.minimized &&(
                <Window title="My Resume" x={windows.resume.x} y={windows.resume.y} maximized={windows.resume.maximized} onMove={(x,y) => moveWindow("resume", x, y)} onMinimize={() => minimizeWindow("resume")} onMaximize={() => maximizeWindow("resume")} zIndex={windows.resume.zIndex} onFocus={() => focusWindow("resume")} onClose={() => closeWindow("resume")}> <ResumeContent/></Window>
            )}

            {windows.terminal.open && !windows.terminal.minimized &&(
                <Window title="Ask Camille" x={windows.terminal.x} y={windows.terminal.y} maximized={windows.terminal.maximized} onMove={(x,y) => moveWindow("terminal", x, y)} onMinimize={() => minimizeWindow("terminal")} onMaximize={() => maximizeWindow("terminal")} zIndex={windows.terminal.zIndex} onFocus={() => focusWindow("terminal")} onClose={() => closeWindow("terminal")}> <TerminalContent/></Window>
            )}

            {windows.arcade.open && !windows.arcade.minimized &&(
                <Window title="Arcade.exe" x={windows.arcade.x} y={windows.arcade.y} maximized={windows.arcade.maximized} onMove={(x,y) => moveWindow("arcade", x, y)} onMinimize={() => minimizeWindow("arcade")} onMaximize={() => maximizeWindow("arcade")} zIndex={windows.arcade.zIndex} onFocus={() => focusWindow("arcade")} onClose={() => closeWindow("arcade")}> <ArcadeContent/></Window>
            )}

        </>
    );
}

export default WindowManager;
