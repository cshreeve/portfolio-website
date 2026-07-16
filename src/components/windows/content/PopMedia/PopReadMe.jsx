import "./PopReadMe.css";
function PopReadMeContent() {
    return (
        <div className="readme">

            <h1>PROJECT: PopMedia</h1>

            <p className="summary">
                A cross-platform multimedia ratings and review application
                developed as my senior capstone project at the University of
                Utah. PopMedia allows users to discover, review, and receive
                personalized recommendations for books, movies, and television
                shows.
            </p>

            <hr />

            <section>
                <h2>Project Information</h2>

                <div className="info-grid">

                    <span>Access</span>
                    <a
                        href="https://www.thepopmedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.thepopmedia.com
                    </a>

                    <span>Project Type</span>
                    <p>Senior Capstone</p>

                    <span>Duration</span>
                    <p>August 2025 – May 2026</p>

                    <span>Team Size</span>
                    <p>4 Developers</p>

                    <span>Role</span>
                    <p>Frontend Lead<br />Full-Stack Developer</p>

                </div>
            </section>

            <section>

                <h2>Technologies</h2>

                <div className="tech-grid">

                    <div>
                        <h3>Frontend</h3>
                        <ul>
                            <li>Flutter</li>
                            <li>Dart</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Backend</h3>
                        <ul>
                            <li>Python</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Database</h3>
                        <ul>
                            <li>PostgreSQL</li>
                            <li>Pinecone</li>
                            <li>Firebase</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Cloud</h3>
                        <ul>
                            <li>AWS</li>
                        </ul>
                    </div>

                </div>

            </section>

            <section>

                <h2>Related Work</h2>

                <h3>Honors Thesis</h3>

                <blockquote>
                    "User Experience Focused Development: The Importance of User
                    Experience From Both The Consumer and Developer Lens"
                </blockquote>

                <p>
                    This project served as the basis for my Honors College
                    thesis, which explored how thoughtful developer tooling and
                    user experience improve long-term software quality and
                    maintainability.
                </p>

            </section>

            <section>

                <h2>Feature Highlights</h2>

                <div className="feature-grid">

                    <div>

                        <h3>Core Features</h3>

                        <ul>
                            <li>Media Search</li>
                            <li>Public / Private Reviews</li>
                            <li>Review Editing</li>
                            <li>Followers & Following</li>
                            <li>Recommendations</li>
                            <li>Trending Media</li>
                        </ul>

                    </div>

                    <div>

                        <h3>Advanced Features</h3>

                        <ul>
                            <li>Profile Photos</li>
                            <li>Imported Reviews</li>
                            <li>Achievement Badges</li>
                            <li>Annual Recap</li>
                            <li>Mood-Based Recommendations</li>
                            <li>Collaborative Playlists</li>
                            <li>Season Reviews</li>
                            <li>Random Recommendation Wheel</li>
                            <li>Admin Dashboard</li>
                            <li>Accessibility Features</li>
                        </ul>

                    </div>

                </div>

            </section>

            <section>

                <h2>Engineering Challenges</h2>

                <article className="challenge">

                    <h3>Data Quality & Book Metadata</h3>

                    <p>
                        Initially we relied on Google Play Books as our data source, but inconsistent metadata (e.g., “J.K Rowling” vs. “J.K. Rowling”) resulted in duplicate entries and difficult data cleaning.
                    </p>

                    <div className="solution">
                        <strong>Solution</strong>
                        <p>
                            Migrated to ISBNDB, significantly reducing duplicate records and improving data quality while still performing custom cleaning. 
                        </p>
                    </div>

                </article>

                <article className="challenge">

                    <h3>Recommendation System & Pinecone Limits</h3>

                    <p>
                        Our recommendation engine uses Pinecone as a vector database to store media embeddings and generate recommendations using cosine similarity. Initially, every item searched by a user was automatically vectorized and stored.
                    </p>

                    <p>Shortly before our final presentation, we discovered our project had mistakenly been assigned a higher-tier Pinecone account and was moved to the free tier, introducing storage and rate limitations.</p>

                    <div className="solution">
                        <strong>Solution</strong>
                        <p>
                            We adjusted our ingestion strategy to prioritize high-value media while leveraging the embeddings that had already been generated. The experience reinforced the importance of understanding third-party service limitations early in development.
                        </p>
                    </div>

                </article>

                <article className="challenge">

                    <h3>Performance & Latency</h3>

                    <p>
                        Performance issues became one of the most common pieces of feedback during our initial user study. Long loading time negatively impacted the overall user experience.
                    </p>

                    <div className="solution">
                        <strong>Solution</strong>
                        <p>
                            Our team implemented frontend and backend caching strategies while introducing multithreading on the backend to reduce response times.
                        </p>
                    </div>

                </article>

                <article className="challenge">

                    <h3>Frontend Leadership</h3>

                    <p>
                        At the start of the project, I was the only member of the team with prior frontend development experience through my internship at Peraton. As Frontend Lead, I researched Flutter best practices, established our frontend architecture, and helped my teammates become productive with Flutter development by assisting with SDK setup, mobile device emulation, and component design.
                    </p>

                    <div className="solution">
                        <strong>What I Learned</strong>
                        <p>
                            Technical leadership often means enabling the rest of the team to contribute effectively, not just writing the code yourself.
                        </p>
                    </div>

                </article>

                <article className="challenge">

                    <h3>CI/CD & Automated Testing</h3>

                    <p>
                        Early in development, our team prioritized implementing application features before investing in deployment automation and testing. As the project matured, I took ownership of researching and implementing our CI/CD pipeline.
                    </p>
                    <p>This included creating unit, integration, and end-to-end tests while learning how automated pipelines support reliable deployments.</p>
                    <div className="solution">
                        <strong>What I Learned</strong>
                        <p>
                            Waiting until the end of a project to build testing infrastructure creates unnecessary technical debt. Integrating testing and deployment automation earlier would have made development faster and more reliable throughout the project. 
                        </p>
                    </div>

                </article>

            </section>

            <section>

                <h2>Primary Contributions</h2>

                <ul className="checklist">

                    <li>Frontend Architecture</li>
                    <li>Full-Stack Development</li>
                    <li>CI/CD Pipeline</li>
                    <li>Automated Testing</li>
                    <li>Accessibility Features</li>
                    <li>User Achievement Badges</li>
                    <li>Spoiler Censoring</li>
                    <li>Admin Dashboard</li>

                </ul>

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

export default PopReadMeContent;