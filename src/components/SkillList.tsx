interface SkillListProps {
  skills: string[]
}

function SkillList({ skills }: SkillListProps) {
  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {skills.map(skill => (
        <li key={skill} className="bg-gray-200 px-3 py-1 rounded text-sm">
          {skill}
        </li>
      ))}
    </ul>
  )
}

export default SkillList
