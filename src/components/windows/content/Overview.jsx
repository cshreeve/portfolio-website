import "./Overview.css";
import popLogo from "../../../assets/project_imgs/pop_logo.png";
import portfolioLogo from "../../../assets/project_imgs/portfolio_logo.png";
import flightClub from "../../../assets/project_imgs/flight_club.png";
import cnnSpectogram from "../../../assets/project_imgs/cnn_spec.png";

function OverviewContent() {
    return (
        <div className="projects">

            <section>
                <p>
                    This folder contains a selection of projects completed throughout my academic and professional career. For a summary of my professional internship experience, see Internship_Highlights.txt. Individual project folders contain more in-depth information about each project, including technologies used, architecture, screenshots, demo videos, and source code where available for each of the following projects.
                </p>
            </section>

            <section className="project">
                <img src={popLogo} alt="PopMedia Logo" className="pop-img"></img>
                <div className="project-info">
                    <h2>PopMedia <a href="https://www.thepopmedia.com" target="_blank" rel="noopener noreferrer">🌐</a></h2>
                    <h3>Senior Capstone • Flutter • Dart • Python • PostgreSQL</h3>
                    <p> PopMedia is a cross-platform multimedia ratings and review application that allows users to rate books, movies, and television shows, connect with friends, and receive cross-media recommendations based on their overall entertainment preferences. Developed over the course of my senior year at the University of Utah, the project was completed by a team of four computer science students.</p>
                </div>
            </section>

            <section className="project">
                <img src={portfolioLogo} alt="Portfolio Logo" className="portfolio-img"></img>
                <div className="project-info">
                    <h2>Portfolio Website</h2>
                    <h3>Web Development • React • TypeScript • CSS</h3>
                    <p>A personal portfolio website inspired by a retro computer desktop environment. Built with React and TypeScript, the site features draggable windows, a custom taskbar, interactive folders, and a desktop-inspired interface designed to showcase my projects and experience in a memorable way.</p>
                </div>
            </section>

            <section className="project">
                <img src={flightClub} alt="Flight Club Loading Screen" className="flight-img"></img>
                <div className="project-info">
                    <h2>Flight Club</h2>
                    <h3>Educational App • C++ • QT Creator</h3>
                    <p>Flight Club is an educational game designed to introduce users to bird watching through interactive species identification challenges. Players progress through different habitats while learning to recognize birds by their appearance, fun facts, and calls using an in-game field guide containing descriptions, facts, and audio recordings.</p>
                </div>
            </section>

            <section className="project">
                <img src={cnnSpectogram} alt="CNN Spectogram" className="cnn-img"></img>
                <div className="project-info">
                    <h2>CNN Music Genre Classifier</h2>
                    <h3>Machine Learning • Python • NumPy</h3>
                    <p>For my Practical Machine Learning final project, I trained a convolutional neural network to classify 1,000 thirty-second music clips spanning ten genres. Audio files were converted into spectrograms, allowing the model to learn visual representations of sound while experimenting with CNN architectures, hyperparameter tuning, and model evaluation.</p>
                </div>
            </section>

        </div>
    );
}

export default OverviewContent;
