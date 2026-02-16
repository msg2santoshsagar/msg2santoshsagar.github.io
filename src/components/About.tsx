type AboutProps = {
    yearsText: string
}

function About({ yearsText }: AboutProps) {
    return (
        <section id="about" className="cv-card">
            <h2>About</h2>
            <p>
                Full Stack Software Engineer with {yearsText} of experience (Aug 2016 onwards) designing and
                delivering scalable applications across modern frontend and backend stacks. Experienced across the
                full SDLC—from requirement analysis to design, development, testing, deployment, and integration—
                with strong collaboration and communication in Agile and Waterfall environments.
            </p>
        </section>
    )
}

export default About
