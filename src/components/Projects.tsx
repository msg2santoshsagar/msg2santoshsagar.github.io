function Projects() {
    return (
        <section id="projects" className="cv-card">
            <h2>Skills</h2>

            <div className="cv-panels">
                <div className="cv-panel">
                    <h3>Backend</h3>
                    <p className="cv-kicker">Core Java, J2EE, Spring Boot, Spring JPA, Spring Security, Hibernate, Microservices, REST APIs</p>
                </div>

                <div className="cv-panel">
                    <h3>Frontend</h3>
                    <p className="cv-kicker">Angular, AngularJS, React, JavaScript, jQuery, HTML5, CSS3</p>
                </div>

                <div className="cv-panel">
                    <h3>Databases</h3>
                    <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {['SQL', 'Oracle', 'PostgreSQL', 'MongoDB'].map((s) => (
                            <span key={s} className="cv-pill">{s}</span>
                        ))}
                    </div>
                </div>

                <div className="cv-panel">
                    <h3>Tools & Platforms</h3>
                    <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {['Git', 'Docker', 'Kubernetes', 'JHipster', 'JSON', 'XML'].map((s) => (
                            <span key={s} className="cv-pill">{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects
