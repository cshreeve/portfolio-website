import { useState } from "react";
import "./Home.css"
import FolderIcon from "../components/FolderIcon"
import Window from "../components/windows/Window"
import AboutContent from "../components/windows/content/About"
import ProjectsContent from "../components/windows/content/Projects"
import ResumeContent from "../components/windows/content/Resume"

function Home(){
    const [showAbout, setShowAbout] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showResume, setShowResume] = useState(false);

    return (
        <div className="desktop">
            <div className="folders">
                <FolderIcon name="About Me" onClick={() => setShowAbout(true)}></FolderIcon>
                <FolderIcon name="Projects" onClick={() => setShowProjects(true)}></FolderIcon>
                <FolderIcon name="Resume" onClick={() => setShowResume(true)}></FolderIcon>
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