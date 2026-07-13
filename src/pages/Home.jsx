import { useState } from "react";
import "./Home.css"

import DesktopIcon from "../components/DesktopIcon"
import WindowManager from "../components/windows/WindowManager"
import TaskBar from "../components/TaskBar"

import folderIcon from "../assets/icons/folder.png";
import terminalIcon from "../assets/icons/terminal.png";
import arcadeIcon from "../assets/icons/arcade.png";

function Home(){
    const [windows, setWindows] = useState({
        about: {
            title: "About Me",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null
        },
        projects: {
            title: "Projects",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null
        },
        resume: {
            title: "Resume",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null
        },
        terminal: {
            title: "Ask Camille",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null
        },
        arcade: {
            title: "Arcade",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null
        },
    });

    function openWindow(name) {
        setWindows(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                open: true,
                minimized: false,
            }
        }));
    }

    function closeWindow(name) {
        setWindows(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                open: false
            }
        }));
    }

    function minimizeWindow(name) {
        setWindows(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                minimized: true
            }
        }));
    }

    function maximizeWindow(name) {
        setWindows(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                maximized: !prev[name].maximized
            }
        }));
    }

    function restoreWindow(name) {
        setWindows(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                minimized: false
            }
        }));
    }

    function moveWindow(name, x, y) {
        setWindows(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                x,
                y
            }
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
                    <DesktopIcon icon={terminalIcon} name="Ask Camille" onClick={() => openWindow("terminal")}></DesktopIcon>
                    <DesktopIcon icon={arcadeIcon} name="Arcade" onClick={() => openWindow("arcade")}></DesktopIcon>
                </div>
            </div>

            <WindowManager windows={windows} moveWindow={moveWindow} minimizeWindow={minimizeWindow} maximizeWindow={maximizeWindow} closeWindow={closeWindow}></WindowManager>
            <TaskBar windows={windows} openWindow={restoreWindow}></TaskBar>
        </div>
    );
}

export default Home;