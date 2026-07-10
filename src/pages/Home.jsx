import { useState } from "react";
import "./Home.css"

import DesktopIcon from "../components/DesktopIcon"
import WindowManager from "../components/windows/WindowManager"

import folderIcon from "../assets/icons/folder.png";
import terminalIcon from "../assets/icons/terminal.png";
import arcadeIcon from "../assets/icons/arcade.png";

function Home(){
    const [windows, setWindows] = useState({
        about: false,
        projects: false,
        resume: false,
    });

    function openWindow(name) {
        setWindows(prev => ({
            ...prev,
            [name]: true
        }));
    }

    function closeWindow(name) {
        setWindows(prev => ({
            ...prev,
            [name]: false
        }));
    }

    return (
        <div className="desktop">
            <div className="desktop-icons">
                <div className="folders">
                    <DesktopIcon icon={folderIcon} name="About Me" onClick={() => openWindow("about")}></DesktopIcon>
                    <DesktopIcon icon={folderIcon} name="Projects" onClick={() => openWindow("projects")}></DesktopIcon>
                    <DesktopIcon icon={folderIcon} name="Resume" onClick={() => openWindow("resume")}></DesktopIcon>
                </div>
                <div className="applications">
                    <DesktopIcon icon={terminalIcon} name="Ask Camille" onClick={() => openWindow("about")}></DesktopIcon>
                    <DesktopIcon icon={arcadeIcon} name="Arcade" onClick={() => openWindow("about")}></DesktopIcon>
                </div>
            </div>

            <WindowManager windows={windows} closeWindow={closeWindow}></WindowManager>
        </div>
    );
}

export default Home;