import Section from './Section'
import EducationItem from './EducationItem'

function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'State University',
      period: '2010 - 2014'
    }
  ]

  return (
    <Section id="education" title="Education" className="bg-gray-50">
      {education.map(item => (
        <EducationItem
          key={item.degree + item.institution}
          {...item}
        />
      ))}
    </Section>
  )
}

export default Education
