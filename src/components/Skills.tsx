import Section from './Section'
import SkillList from './SkillList'

function Skills() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'SQL',
    'MongoDB',
    'Docker',
    'AWS'
  ]

  return (
    <Section id="skills" title="Skills" className="bg-gray-50">
      <SkillList skills={skills} />
    </Section>
  )
}

export default Skills
