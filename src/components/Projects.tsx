import Section from './Section'

function Projects() {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio built with React, Vite and Tailwind CSS.'
    },
    {
      name: 'E-commerce Platform',
      description: 'Full featured online shop with custom backend APIs.'
    },
    {
      name: 'Real-time Chat App',
      description: 'WebSocket powered chat application with notifications.'
    }
  ]

  return (
    <Section id="projects" title="Projects" className="bg-white">
      <ul className="space-y-4 text-left">
        {projects.map(project => (
          <li key={project.name}>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
