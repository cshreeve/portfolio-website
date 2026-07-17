import "../ReadMe.css";
function CNNReadMeContent() {
    return (
        <div className="readme">

            <h1>PROJECT: CNN Music Classification By Genre</h1>

            <p className="summary">
                A machine learning project exploring convolutional neural networks (CNNs) for audio classification. The project focused on transforming raw audio data into visual spectrogram representations and training a CNN model to classify music samples into one of ten possible genres
            </p>

            <hr />

            <section>
                <h2>Project Information</h2>

                <div className="info-grid">

                    <span>Project Type</span>
                    <p>Practical Machine Learning Final Project</p>

                    <span>Duration</span>
                    <p>August 2025 – December 2025</p>

                    <span>Team Size</span>
                    <p>Solo Project</p>

                </div>
            </section>

            <section>

                <h2>Technologies</h2>

                <div className="tech-grid">

                    <div>
                        <h3>Programming Language</h3>
                        <ul>
                            <li>Python</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Development Environment</h3>
                        <ul>
                            <li>Google Colab</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Libraries</h3>
                        <ul>
                            <li>NumPy</li>
                            <li>Matplotlib</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Dataset</h3>
                        <ul>
                            <li>Kaggle Music Genre Dataset</li>
                        </ul>
                    </div>

                </div>

            </section>

            <section>

                <h2>Engineering Challenges</h2>

                <article className="challenge">

                    <h3>Data Preprocessing & Feature Extraction</h3>

                    <p>
                        A major challenge was preparing raw audio data for use in a machine learning model. Audio files required preprocessing and conversion into spectrogram representations before they could be used as CNN inputs.
                    </p>

                    <p>
                        This process required ensuring consistent formatting, handling variations between audio samples, and creating a dataset structure that could be reliably consumed by the model.
                    </p>

                    <div className="solution">
                        <strong>What I Learned</strong>
                        <p>
                            Data preparation and feature engineering are often just as important as model selection. A well-structured dataset is essential for producing meaningful results. 
                        </p>
                    </div>

                </article>

                <article className="challenge">

                    <h3>Model Architecture & Hyperparameter Tuning</h3>

                    <p>
                        Developing an effective CNN architecture required experimenting with different model configurations and training parameters. I iterated on the model by adjusting factors such as layer structure, optimization settings, and training parameters in order to improve classification performance.
                    </p>

                    <p>Each iteration required evaluating model results, identifying areas for improvement, and balancing model complexity with accuracy.</p>

                    <div className="solution">
                        <strong>What I Learned</strong>
                        <p>
                            Machine learning development is an iterative process. Improving model performance requires systematic experimentation, evaluation, and understanding the impact of different architectural choices.
                        </p>
                    </div>

                </article>

            </section>

            <section>

                <h2>Key Takeaways</h2>

                <ul className="checklist">

                    <li>Transforming raw data into meaningful machine learning features</li>
                    <li>Applying CNN architectures to non-traditional image data</li>
                    <li>Evaluating model performance through iterative experimentation</li>
                    <li>Understanding the impact of hyperparameters on machine learning results</li>
                    <li>Developing a structured machine learning workflow from data preparation through evaluation</li>

                </ul>

            </section>

        </div>
    );
}

export default CNNReadMeContent;