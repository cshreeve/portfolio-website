import { useState } from "react";
import "./Home.css"

import DesktopIcon from "../components/icons/DesktopIcon"
import WindowManager from "../components/windows/WindowManager"
import TaskBar from "../components/TaskBar"

import folderIcon from "../assets/icons/folder.png";
import terminalIcon from "../assets/icons/terminal.png";
import arcadeIcon from "../assets/icons/arcade.png";

function Home(){
    const [topZIndex, setTopZIndex] = useState(1);
    const [windows, setWindows] = useState({
        about: {
            title: "About Me",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null,
            zIndex: 1
        },
        aboutText: {
            title: "About.txt",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null,
            zIndex: 1
        },
        projects: {
            title: "Projects",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null,
            zIndex: 1
        },
        resume: {
            title: "Resume",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null,
            zIndex: 1
        },
        terminal: {
            title: "Ask Camille",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null,
            zIndex: 1
        },
        arcade: {
            title: "Arcade.exe",
            open: false,
            minimized: false,
            maximized: false,
            x: null,
            y: null,
            zIndex: 1
        },
    });

    function openWindow(name) {
        focusWindow(name),
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
        focusWindow(name),
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

    function focusWindow(name) {
        setTopZIndex(prevTopZIndex => {
            const nextTopZIndex = prevTopZIndex + 1;

            setWindows(prev => ({
                ...prev,
                [name]: {
                    ...prev[name],
                    zIndex: nextTopZIndex
                }
            }));

            return nextTopZIndex;
        });
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
                    <DesktopIcon icon={arcadeIcon} name="Arcade.exe" onClick={() => openWindow("arcade")}></DesktopIcon>
                </div>
            </div>

            <WindowManager windows={windows} moveWindow={moveWindow} minimizeWindow={minimizeWindow} maximizeWindow={maximizeWindow} focusWindow={focusWindow} openWindow={openWindow} closeWindow={closeWindow}></WindowManager>
            <TaskBar windows={windows} openWindow={restoreWindow}></TaskBar>
        </div>
    );
}

export default Home;
