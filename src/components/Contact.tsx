function Contact() {
    return (
        <section id="contact" className="cv-card">
            <h2>Contact</h2>
            <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
                <div className="cv-meta">Chennai, India</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    <a className="cv-btn" href="mailto:msg2santoshsagar@gmail.com">msg2santoshsagar@gmail.com</a>
                    <a className="cv-btn" href="https://www.linkedin.com/in/santosh-sagar/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="cv-btn" href="https://github.com/msg2santoshsagar/" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </section>
    )
}
export default Contact
