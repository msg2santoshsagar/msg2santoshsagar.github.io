import Section from './Section'
import ExperienceItem from './ExperienceItem'

function Experience() {
  const experiences = [
    {
      role: 'Senior Full Stack Engineer',
      company: 'Tech Corp',
      period: '2021 - Present',
      description:
        'Leading the development of scalable web applications and mentoring junior developers.'
    },
    {
      role: 'Full Stack Developer',
      company: 'Innovate Labs',
      period: '2017 - 2021',
      description:
        'Built and maintained cross-platform solutions using modern frameworks and cloud services.'
    },
    {
      role: 'Software Engineer',
      company: 'Startup XYZ',
      period: '2014 - 2017',
      description:
        'Worked on both frontend and backend features for the company’s flagship product.'
    }
  ]

  return (
    <Section id="experience" title="Experience" className="bg-white">
      {experiences.map(exp => (
        <ExperienceItem key={exp.role + exp.company} {...exp} />
      ))}
    </Section>
  )
}

export default Experience
