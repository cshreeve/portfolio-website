import "../ReadMe.css";
function FlightReadMeContent() {
    return (
        <div className="readme">

            <h1>PROJECT: Flight Club</h1>

            <p className="summary">
                An educational interactive bird identification game designed to introduce players to bird watching through exploration, identification challenges, and interactive field guides. Players explore illustrated environments, identify birds within each scene, and learn about species through visual descriptions and audio recordings.
            </p>

            <hr />

            <section>
                <h2>Project Information</h2>

                <div className="info-grid">

                    <span>Project Type</span>
                    <p>Software Engineering II Final Project</p>

                    <span>Duration</span>
                    <p>August 2024 – December 2024</p>

                    <span>Team Size</span>
                    <p>6 Developers</p>

                    <span>Role</span>
                    <p>Content Development & Data Management</p>

                </div>
            </section>

            <section>

                <h2>Technologies</h2>

                <div className="tech-grid">

                    <div>
                        <h3>Language</h3>
                        <ul>
                            <li>C++</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Framework</h3>
                        <ul>
                            <li>Qt Widgets</li>
                            <li>Qt Multimedia</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Libraries</h3>
                        <ul>
                            <li>Box2D</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Build Tools</h3>
                        <ul>
                            <li>CMake</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Data</h3>
                        <ul>
                            <li>JSON</li>
                        </ul>
                    </div>

                </div>

            </section>

            <section>

                <h2>Feature Highlights</h2>

                <div className="feature-grid">

                    <ul>
                        <li>Progressive scene-based gameplay</li>
                        <li>Interactive bird identification challenges</li>
                        <li>In-game field guide containing species information</li>
                        <li>Bird call audio recordings</li>
                        <li>Tutorial and help system</li>
                        <li>Level selection</li>
                        <li>Win screen animations</li>
                        <li>Data-driven bird and scene content loaded through JSON files</li>
                    </ul>

                </div>

            </section>

            <section>

                <h2>Engineering Challenges</h2>

                <article className="challenge">

                    <h3>Data-Driven Content Management</h3>

                    <p>
                        A key design decision in Flight Club was separating game content from the application logic through JSON-based data files. Rather than hardcoding bird information, scenes, and educational content directly into the application, data was organized into external JSON files that could be loaded dynamically.
                    </p>

                    <p>
                        I contributed to researching, organizing, and maintaining bird species information and structuring the JSON data used throughout the application. This approach allowed new species and scenes to be added more easily without requiring major code changes.
                    </p>

                    <div className="solution">
                        <strong>What I Learned</strong>
                        <p>
                            Separating content from application logic creates more maintainable and scalable software. Data-driven design allows developers and non-developers to expand applications more efficiently.
                        </p>
                    </div>

                </article>

                <article className="challenge">

                    <h3>Integrating Third-Party Libraries</h3>

                    <p>
                        The team utilized Box2D to support physics-based interactions within the game environment. Integrating and configuring external libraries presented challenges related to dependency management, build configuration, and ensuring compatibility with the existing Qt and CMake project structure.
                    </p>

                    <p>Although I was not the primary developer responsible for the Box2D implementation, I gained experience working within a larger codebase where different components depended on external libraries and build configurations.</p>

                    <div className="solution">
                        <strong>What I Learned</strong>
                        <p>
                            Large software projects often require understanding how different technologies integrate together, even when individual developers are responsible for different areas of implementation.
                        </p>
                    </div>

                </article>

            </section>

            <section>

                <h2>Primary Contributions</h2>

                <ul className="checklist">

                    <li>Bird species research and educational content development</li>
                    <li>JSON data organization for bird information and scenes</li>
                    <li>Field guide content management</li>
                    <li>Collaboration with developers to ensure data matched application requirements</li>
                    <li>Testing gameplay content and identifying usability issues</li>

                </ul>

            </section>

            <section>

                <h2>Key Takeaways</h2>

                <ul className="checklist">

                    <li>Introduction to Agile development process</li>
                    <li>Working collaboratively within a large development team</li>
                    <li>Designing and maintaining structured data formats</li>
                    <li>Understanding separation between content and application logic</li>
                    <li>Working within a C++ and Qt application architecture</li>
                    <li>Collaborating across technical and non-technical areas of development</li>

                </ul>

            </section>

        </div>
    );
}

export default FlightReadMeContent;