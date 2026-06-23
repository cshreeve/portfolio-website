import { useState } from "react";
import "./Home.css"
import FolderIcon from "../components/FolderIcon"
import AboutWindow from "../components/windows/About"

function Home(){
    const [showAbout, setShowAbout] = useState(false);

    return (
        <div className="desktop">
            <div className="folders">
                <FolderIcon name="About Me" onClick={() => setShowAbout(true)}></FolderIcon>
            </div>

            {showAbout && (
                <AboutWindow onClose={() => setShowAbout(false)}></AboutWindow>
            )}
        </div>
    );
}

export default Home;