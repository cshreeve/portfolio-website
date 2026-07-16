import "../ReadMe.css";
function FolioReadMeContent() {
    return (
        <div className="readme">

            <h1>PROJECT: Portfolio Website</h1>

            <p className="summary">
                A personal portfolio website inspired by classic Windows desktop
                environments. Rather than presenting projects as a traditional web page,
                the site recreates a desktop operating system where visitors can explore
                folders, open files, and interact with projects through draggable
                windows.
                <br />
                The goal of the project was to create a portfolio that demonstrates
                software engineering skills while providing recruiters with a memorable
                and interactive experience.
            </p>

            <hr />

            <section>
                <h2>Project Information</h2>

                <div className="info-grid">

                    <span>Access</span>
                    <a
                        href="https://www.camilleshreeve.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.camilleshreeve.com
                    </a>

                    <span>Project Type</span>
                    <p>Personal Project</p>

                    <span>Duration</span>
                    <p>May 2026 – Present</p>

                    <span>Team Size</span>
                    <p>Solo Project</p>

                </div>
            </section>

            <section>

                <h2>Technologies</h2>

                <div className="tech-grid">

                    <div>
                        <h3>Frontend</h3>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Build Tools</h3>
                        <ul>
                            <li>Vite</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Deployment</h3>
                        <ul>
                            <li>GitHub</li>
                            <li>GoDaddy</li>
                        </ul>
                    </div>

                </div>

            </section>

            <section>

                <h2>Design Goals</h2>

                 <div className="design-goals">
                    <ul>
                        <li>Create a memorable alternative to a traditional portfolio website</li>
                        <li>Encourage exploration through an interactive desktop interface</li>
                        <li>Demonstrate frontend engineering skills using custom UI components</li>
                        <li>Highlight projects in a way that feels engaging without sacrificing professionalism</li>
                        <li>Blend nostalgia with modern web technologies</li>
                    </ul>
                </div>

            </section>

            <section>

                <h2>Feature Highlights</h2>

                <div className="feature-grid">
                    <ul>
                        <li>Draggable desktop windows</li>
                        <li>Custom window manager</li>
                        <li>Taskbar with active application tracking</li>
                        <li>Window minimize, maximize, and close controls</li>
                        <li>Dynamic z-index management</li>
                        <li>Retro desktop interface</li>
                        <li>Interactive project explorer</li>
                        <li>Embedded PDF viewer</li>
                        <li>Built-in media viewer</li>
                        <li>Responsive layouts</li>
                        <li>Desktop-style loading animations</li>
                    </ul>

                </div>

            </section>

            <section>

                <h2>Engineering Challenges</h2>

                <article className="challenge">

                    <h3>Window Management Architecture</h3>

                    <p>
                        One of the largest challenges was designing a reusable window management system that could support multiple applications while maintaining independent state. Each window needed to track properties such as position, size, open status, minimized status, and stacking order.
                    </p>

                    <p>
                        The initial implementation relied on individual state variables for each window, which quickly became difficult to maintain as additional windows were added. I redesigned the architecture around a centralized WindowManager that stores window information in a single state object and handles opening, closing, minimizing, maximizing, moving, and focusing windows.
                    </p>

                    <div className="solution">
                        <strong>What I Learned</strong>
                        <p>
                            Creating a scalable component architecture early prevents complexity as an application grows. Centralizing shared behavior allowed new windows and features to be added without duplicating logic 
                        </p>
                    </div>

                </article>

                <article className="challenge">

                    <h3>Drag-and-Drop Window Movement</h3>

                    <p>
                        Implementing draggable windows required managing mouse events, calculating cursor offsets, and updating window positions dynamically without causing unexpected movement. An early version caused windows to jump away from the cursor because the position calculations did not account for the difference between the mouse location and the window origin.
                    </p>

                    <p>
                        I refined the dragging logic by tracking the initial cursor position and window position when dragging begins, then calculating the offset during movement. This created a smoother desktop-like experience.
                    </p>

                    <div className="solution">
                        <strong>What I Learned</strong>
                        <p>
                            Small interaction details have a large impact on perceived quality. User interfaces require careful attention not only to functionality, but also to how interactions feel. 
                        </p>
                    </div>

                </article>

                
            </section>

            <section>

                <h2>Key Takeaways</h2>

                <ul className="checklist">

                    <li>Leading frontend architecture</li>
                    <li>Building CI/CD pipelines</li>
                    <li>Automated testing</li>
                    <li>User-centered design</li>
                    <li>Technical leadership</li>

                </ul>

            </section>

        </div>
    );
}

export default FolioReadMeContent;