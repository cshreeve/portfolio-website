import "./ReadMe.css";
function InternshipContent() {
    return (
        <div className="readme">

            <h1>INTERNSHIP: Full Stack Development Intern @ Peraton</h1>

            <p className="summary">
                A year-long software engineering internship focused on developing and
                maintaining enterprise web applications supporting environmental
                compliance systems for the United States Air Force and allied military
                organizations.
            </p>

            <hr />

            <section>
                <h2>Project Information</h2>

                <div className="info-grid">

                    <span>Company</span>
                    <p>Peraton</p>

                    <span>Role</span>
                    <p>Full Stack Development Intern</p>

                    <span>Duration</span>
                    <p>January 2025 – December 2025</p>

                    <span>Team Size</span>
                    <p>Apims Development Team</p>

                </div>
            </section>

            <section>

                <h2>Technologies</h2>

                <div className="tech-grid">

                    <div>
                        <h3>Frontend</h3>
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Backend</h3>
                        <ul>
                            <li>Java</li>
                            <li>Hibernate</li>
                            <li>TopLink</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Database</h3>
                        <ul>
                            <li>Oracle SQL</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Testing</h3>
                        <ul>
                            <li>Selenium</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Development Practices</h3>
                        <ul>
                            <li>Agile Development</li>
                            <li>Bi-weekly Production Releases</li>
                        </ul>
                    </div>

                </div>

            </section>

            <section>

                <h2>Project Overview</h2>

                <p>
                    During my internship, I contributed to a full-stack React and Javaapplication used for environmental compliance management. My work included developing frontend features, improving backend data access,
                    automating testing processes, and contributing to production releases within an Agile development environment.
                </p>

            </section>

            <section>

                <h2>Engineering Contributions</h2>

                <article className="challenge">

                    <div className="solution">
                        <strong>Feature Development</strong>
                        <p>
                            I developed new features across both the React frontend and Java backend, working within an existing enterprise codebase. This required learning the application's architecture, understanding existing patterns, and collaborating with experienced developers to deliver production-ready changes.
                        </p>
                    </div>

                </article>

                <article className="challenge">

                    <div className="solution">
                        <strong>Test Automation</strong>
                        <p>
                            I migrated an existing manual testing workflow into Selenium automation, increasing test coverage by approximately 10%.
                            <br />
                            This experience showed me the importance of reliable automated testing in large applications where frequent production releases require confidence that new changes do not introduce regressions.
                        </p>
                    </div>

                </article>
                 <article className="challenge">

                    <div className="solution">
                        <strong>Database & Backend Improvements</strong>
                        <p>
                            I created Oracle SQL scripts to support warehouse data version management and improved backend query security by migrating query logic from TopLink to Hibernate and implementing role-based access controls.
                            <br />
                            This work gave me experience understanding how frontend changes connect with backend architecture, database design, and application security.
                        </p>
                    </div>

                </article>
                <article className="challenge">

                    <div className="solution">
                        <strong>Working in a large codebase</strong>
                        <p>
                            One of the biggest challenges was becoming productive in a large, existing application with unfamiliar technologies and architecture.
                        </p>
                        <p>
                            I learned how to navigate legacy code, document my understanding, ask effective questions, and collaborate with teammates to solve problems without requiring constant direction.
                        </p>
                    </div>

                </article>
                
            </section>

            <section>

                <h2>Key Takeaways</h2>

                <ul className="checklist">

                    <li>Developing software within a professional engineering team</li>
                    <li>Working with enterprise-scale applications</li>
                    <li>Understanding Agile development and production release cycles</li>
                    <li>Writing maintainable code within an existing architecture</li>
                    <li>Building automated tests to improve software reliability</li>
                    <li>Balancing feature development with long-term code quality</li>

                </ul>

            </section>

        </div>
    );
}

export default InternshipContent;