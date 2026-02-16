function Experience() {
    return (
        <section id="experience" className="cv-card">
            <h2>Experience</h2>

            <div style={{ marginTop: 16, display: 'grid', gap: 18 }}>
                <div>
                    <div className="cv-section-title">
                        <h3>Technical Lead</h3>
                        <div className="cv-meta">KLA-Tencor Software • Dec 2020 - Present • Chennai, India</div>
                    </div>
                    <ul className="text-slate-300">
                        <li>Built and scaled full-stack solutions across frontend (Angular) and backend (Spring Boot, Python).</li>
                        <li>Owned feature delivery and issue resolution to keep execution smooth and predictable.</li>
                        <li>Partnered with customers and stakeholders to understand pain points and deliver effective fixes and enhancements.</li>
                        <li>Improved stability through performance tuning, bug fixes, and focused optimizations.</li>
                        <li>Delivered well-tested changes aligned with engineering best practices and coding standards.</li>
                        <li>Mentored team members and unblocked technical queries to improve team throughput.</li>
                        <li>Supported deployments and containerization using Docker and Kubernetes.</li>
                        <li>Contributed to continuous improvement and adoption of better engineering practices.</li>
                    </ul>
                </div>

                <div>
                    <div className="cv-section-title">
                        <h3>Full Stack Developer</h3>
                        <div className="cv-meta">Mr. Cooper • Dec 2018 - Dec 2020 • Chennai, India</div>
                    </div>
                    <ul className="text-slate-300">
                        <li>Delivered key modules using Java 8, Spring Boot, React, and Node.js to improve maintainability and performance.</li>
                        <li>Designed and implemented microservices with improved scalability and service-to-service communication.</li>
                        <li>Applied TDD practices to increase code quality and reduce production defects.</li>
                        <li>Created reusable React components to improve UI consistency and accelerate delivery.</li>
                        <li>Optimized MongoDB queries, improving database performance by ~30%.</li>
                        <li>Mentored junior developers and resolved technical blockers to improve team productivity.</li>
                        <li>Worked with cross-functional teams on CI/CD, code review standards, and version control practices.</li>
                    </ul>
                </div>

                <div>
                    <div className="cv-section-title">
                        <h3>Full Stack Developer</h3>
                        <div className="cv-meta">Tata Consultancy Services • Aug 2016 - Dec 2018 • Chennai, India</div>
                    </div>
                    <ul className="text-slate-300">
                        <li>Modernized legacy web applications by transforming them into RESTful services for mobile consumption.</li>
                        <li>Designed and built structured REST APIs using Spring Boot and AngularJS for seamless integration.</li>
                        <li>Used TDD to improve reliability and reduce defects in production.</li>
                        <li>Created reusable artifacts to reduce manual effort and improve development efficiency.</li>
                        <li>Tuned database queries to reduce response times and improve application performance.</li>
                        <li>Implemented Google Analytics to track usage and improve user engagement.</li>
                        <li>Automated CSS/JS minification via Gulp to improve page load speed.</li>
                        <li>Used JHipster for rapid development and faster delivery.</li>
                        <li>Mentored junior developers and shared best practices across the team.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Experience
