import "./AboutText.css";

function AboutTextContent() {
    return (
        <div className="about-text">

            <section>
                <p>
                    Hi, I'm Camille!
                </p>

                <p>
                    I'm a software engineer interested in building 
                    thoughtful applications that combine problem solving, 
                    creativity, and user experience.
                </p>
            </section>

            <section>
                <h2>EDUCATION</h2>
                <p>
                    University of Utah
                    <br />
                    Honors B.S. Computer Science
                    <br />
                    Minors: Mathematics & Ecology
                </p>
            </section>

            <section>
                <h2>EXPERIENCE</h2>
                <p>
                    Full Stack Development Intern @ Peraton
                </p>
            </section>

            <section>
                <h2>FUN FACTS</h2>
                <p>
                    I spent a summer on the coast of Argentina studying the Southern Right Whale as a part of my ecology minor.
                </p>

                <p>
                    Outside of computer science, I enjoy yoga, reading,
                    and spending time with my family.
                </p>
            </section>

        </div>
    );
}

export default AboutTextContent;