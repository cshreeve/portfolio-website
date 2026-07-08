import { useState } from "react";
import "./Home.css"
import desktopBackground from "../assets/backgrounds/hills.jpg";
import DesktopIcon from "../components/DesktopIcon"
import Window from "../components/windows/Window"
import AboutContent from "../components/windows/content/About"
import ProjectsContent from "../components/windows/content/Projects"
import ResumeContent from "../components/windows/content/Resume"
import folderIcon from "../assets/icons/folder.png";
import terminalIcon from "../assets/icons/terminal.png";
import arcadeIcon from "../assets/icons/arcade.png";

function Home(){
    const [showAbout, setShowAbout] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showResume, setShowResume] = useState(false);

    return (
        <div className="desktop" style={{backgroundImage: `url(${desktopBackground})`}}>
            <div className="desktop-icons">
                <div className="folders">
                    <DesktopIcon icon={folderIcon} name="About Me" onClick={() => setShowAbout(true)}></DesktopIcon>
                    <DesktopIcon icon={folderIcon} name="Projects" onClick={() => setShowProjects(true)}></DesktopIcon>
                    <DesktopIcon icon={folderIcon} name="Resume" onClick={() => setShowResume(true)}></DesktopIcon>
                </div>
                <div className="applications">
                    <DesktopIcon icon={terminalIcon} name="Terminal" onClick={() => setShowAbout(true)}></DesktopIcon>
                    <DesktopIcon icon={arcadeIcon} name="Arcade" onClick={() => setShowAbout(true)}></DesktopIcon>
                </div>
            </div>

            {showAbout && ( 
                <Window title="About Me" onClose={() => setShowAbout(false)}> <AboutContent/></Window> 
            )}

            {showProjects && ( 
                <Window title="My Projects" onClose={() => setShowProjects(false)}> <ProjectsContent/></Window> 
            )}

            {showResume && ( 
                <Window title="My Resume" onClose={() => setShowResume(false)}> <ResumeContent/></Window> 
            )}
        </div>
    );
}

export default Home;