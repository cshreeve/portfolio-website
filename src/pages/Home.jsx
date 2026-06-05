import { useState } from "react";
import FolderIcon from "../components/FolderIcon"
import AboutWindow from "../components/windows/About"

function Home(){
    const [showAbout, setShowAbout] = useState(false);

    return (
        <div>
            <FolderIcon
                name="About Me"
                onClick={() => setShowAbout(true)}
            ></FolderIcon>

            {showAbout && (
                <AboutWindow onClose={() => setShowAbout(false)}></AboutWindow>
            )}
        </div>
    );
}

export default Home;