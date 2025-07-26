import Section from './Section'

function Contact() {
  return (
    <Section id="contact" title="Contact" className="bg-gray-50">
      <p>
        Feel free to reach out via{' '}
        <a href="mailto:santosh@example.com" className="text-blue-600 underline">
          santosh@example.com
        </a>
        .
      </p>
    </Section>
  )
}

export default Contact
