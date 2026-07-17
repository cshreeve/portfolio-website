import Window from "./Window";

import AboutContent from "./content/About";
import AboutTextContent from "./content/AboutText";
import OverviewContent from "./content/Overview";
import InternshipContent from "./content/Internship";
import ProjectsContent from "./content/Projects";
import PopMediaContent from "./content/PopMedia/PopMedia";
import PopReadMeContent from "./content/PopMedia/PopReadMe";
import PopDemoContent from "./content/PopMedia/PopDemo";
import PopTechContent from "./content/PopMedia/PopTech";
import ThesisContent from "./content/PopMedia/Thesis";
import PortfolioContent from "./content/Portfolio/Portfolio";
import FolioReadMeContent from "./content/Portfolio/FolioReadMe";
import RoadMapContent from "./content/Portfolio/RoadMap";
import FlightClubContent from "./content/FlightClub/FlightClub";
import FlightReadMeContent from "./content/FlightClub/FlightReadMe";
import CatDemoContent from "./content/FlightClub/CatDemo";
import CNNContent from "./content/CNN/CNN";
import CNNReadMeContent from "./content/CNN/CNNReadMe";
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

            {windows.overview.open && !windows.overview.minimized && (
                 <Window title="Overview.txt" x={windows.overview.x} y={windows.overview.y} maximized={windows.overview.maximized} onMove={(x,y) => moveWindow("overview", x, y)} onMinimize={() => minimizeWindow("overview")} onMaximize={() => maximizeWindow("overview")} zIndex={windows.overview.zIndex} onFocus={() => focusWindow("overview")} onClose={() => closeWindow("overview")}> <OverviewContent/></Window> 
            )}

            {windows.internship.open && !windows.internship.minimized && (
                 <Window title={windows.internship.title} x={windows.internship.x} y={windows.internship.y} maximized={windows.internship.maximized} onMove={(x,y) => moveWindow("internship", x, y)} onMinimize={() => minimizeWindow("internship")} onMaximize={() => maximizeWindow("internship")} zIndex={windows.internship.zIndex} onFocus={() => focusWindow("internship")} onClose={() => closeWindow("internship")}> <InternshipContent/></Window> 
            )}

            {windows.popMedia.open && !windows.popMedia.minimized && (
                 <Window title={windows.popMedia.title} x={windows.popMedia.x} y={windows.popMedia.y} maximized={windows.popMedia.maximized} onMove={(x,y) => moveWindow("popMedia", x, y)} onMinimize={() => minimizeWindow("popMedia")} onMaximize={() => maximizeWindow("popMedia")} zIndex={windows.popMedia.zIndex} onFocus={() => focusWindow("popMedia")} onClose={() => closeWindow("popMedia")}> <PopMediaContent openWindow={openWindow}/></Window> 
            )}

            {windows.popReadMe.open && !windows.popReadMe.minimized && (
                 <Window title={windows.popReadMe.title} x={windows.popReadMe.x} y={windows.popReadMe.y} maximized={windows.popReadMe.maximized} onMove={(x,y) => moveWindow("popReadMe", x, y)} onMinimize={() => minimizeWindow("popReadMe")} onMaximize={() => maximizeWindow("popReadMe")} zIndex={windows.popReadMe.zIndex} onFocus={() => focusWindow("popReadMe")} onClose={() => closeWindow("popReadMe")}> <PopReadMeContent/></Window> 
            )}

            {windows.popTech.open && !windows.popTech.minimized && (
                 <Window title={windows.popTech.title} x={windows.popTech.x} y={windows.popTech.y} maximized={windows.popTech.maximized} onMove={(x,y) => moveWindow("popTech", x, y)} onMinimize={() => minimizeWindow("popTech")} onMaximize={() => maximizeWindow("popTech")} zIndex={windows.popTech.zIndex} onFocus={() => focusWindow("popTech")} onClose={() => closeWindow("popTech")}> <PopTechContent/></Window> 
            )}

            {windows.popDemo.open && !windows.popDemo.minimized && (
                 <Window title={windows.popDemo.title} x={windows.popDemo.x} y={windows.popDemo.y} maximized={windows.popDemo.maximized} onMove={(x,y) => moveWindow("popDemo", x, y)} onMinimize={() => minimizeWindow("popDemo")} onMaximize={() => maximizeWindow("popDemo")} zIndex={windows.popDemo.zIndex} onFocus={() => focusWindow("popDemo")} onClose={() => closeWindow("popDemo")}> <PopDemoContent/></Window> 
            )}

            {windows.thesis.open && !windows.thesis.minimized && (
                 <Window title={windows.thesis.title} x={windows.thesis.x} y={windows.thesis.y} maximized={windows.thesis.maximized} onMove={(x,y) => moveWindow("thesis", x, y)} onMinimize={() => minimizeWindow("thesis")} onMaximize={() => maximizeWindow("thesis")} zIndex={windows.thesis.zIndex} onFocus={() => focusWindow("thesis")} onClose={() => closeWindow("thesis")}> <ThesisContent/></Window> 
            )}

            {windows.portfolio.open && !windows.portfolio.minimized && (
                 <Window title={windows.portfolio.title} x={windows.portfolio.x} y={windows.portfolio.y} maximized={windows.portfolio.maximized} onMove={(x,y) => moveWindow("portfolio", x, y)} onMinimize={() => minimizeWindow("portfolio")} onMaximize={() => maximizeWindow("portfolio")} zIndex={windows.portfolio.zIndex} onFocus={() => focusWindow("portfolio")} onClose={() => closeWindow("portfolio")}> <PortfolioContent openWindow={openWindow}/></Window> 
            )}

            {windows.folioReadMe.open && !windows.folioReadMe.minimized && (
                 <Window title={windows.folioReadMe.title} x={windows.folioReadMe.x} y={windows.folioReadMe.y} maximized={windows.folioReadMe.maximized} onMove={(x,y) => moveWindow("folioReadMe", x, y)} onMinimize={() => minimizeWindow("folioReadMe")} onMaximize={() => maximizeWindow("folioReadMe")} zIndex={windows.folioReadMe.zIndex} onFocus={() => focusWindow("folioReadMe")} onClose={() => closeWindow("folioReadMe")}> <FolioReadMeContent/></Window> 
            )}

            {windows.roadmap.open && !windows.roadmap.minimized && (
                 <Window title={windows.roadmap.title} x={windows.roadmap.x} y={windows.roadmap.y} maximized={windows.roadmap.maximized} onMove={(x,y) => moveWindow("roadmap", x, y)} onMinimize={() => minimizeWindow("roadmap")} onMaximize={() => maximizeWindow("roadmap")} zIndex={windows.roadmap.zIndex} onFocus={() => focusWindow("roadmap")} onClose={() => closeWindow("roadmap")}> <RoadMapContent/></Window> 
            )}

            {windows.flightclub.open && !windows.flightclub.minimized && (
                 <Window title={windows.flightclub.title} x={windows.flightclub.x} y={windows.flightclub.y} maximized={windows.flightclub.maximized} onMove={(x,y) => moveWindow("flightclub", x, y)} onMinimize={() => minimizeWindow("flightclub")} onMaximize={() => maximizeWindow("flightclub")} zIndex={windows.flightclub.zIndex} onFocus={() => focusWindow("flightclub")} onClose={() => closeWindow("flightclub")}> <FlightClubContent openWindow={openWindow}/></Window> 
            )}

            {windows.flightReadMe.open && !windows.flightReadMe.minimized && (
                 <Window title={windows.flightReadMe.title} x={windows.flightReadMe.x} y={windows.flightReadMe.y} maximized={windows.flightReadMe.maximized} onMove={(x,y) => moveWindow("flightReadMe", x, y)} onMinimize={() => minimizeWindow("flightReadMe")} onMaximize={() => maximizeWindow("flightReadMe")} zIndex={windows.flightReadMe.zIndex} onFocus={() => focusWindow("flightReadMe")} onClose={() => closeWindow("flightReadMe")}> <FlightReadMeContent/></Window> 
            )}

            {windows.catDemo.open && !windows.catDemo.minimized && (
                 <Window title={windows.catDemo.title} x={windows.catDemo.x} y={windows.catDemo.y} maximized={windows.catDemo.maximized} onMove={(x,y) => moveWindow("catDemo", x, y)} onMinimize={() => minimizeWindow("catDemo")} onMaximize={() => maximizeWindow("catDemo")} zIndex={windows.catDemo.zIndex} onFocus={() => focusWindow("catDemo")} onClose={() => closeWindow("catDemo")}> <CatDemoContent/></Window> 
            )}

            {windows.cnn.open && !windows.cnn.minimized && (
                 <Window title={windows.cnn.title} x={windows.cnn.x} y={windows.cnn.y} maximized={windows.cnn.maximized} onMove={(x,y) => moveWindow("cnn", x, y)} onMinimize={() => minimizeWindow("cnn")} onMaximize={() => maximizeWindow("cnn")} zIndex={windows.cnn.zIndex} onFocus={() => focusWindow("cnn")} onClose={() => closeWindow("cnn")}> <CNNContent openWindow={openWindow}/></Window> 
            )}

            {windows.cnnReadMe.open && !windows.cnnReadMe.minimized && (
                 <Window title={windows.cnnReadMe.title} x={windows.cnnReadMe.x} y={windows.cnnReadMe.y} maximized={windows.cnnReadMe.maximized} onMove={(x,y) => moveWindow("cnnReadMe", x, y)} onMinimize={() => minimizeWindow("cnnReadMe")} onMaximize={() => maximizeWindow("cnnReadMe")} zIndex={windows.cnnReadMe.zIndex} onFocus={() => focusWindow("cnnReadMe")} onClose={() => closeWindow("cnnReadMe")}> <CNNReadMeContent/></Window> 
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
