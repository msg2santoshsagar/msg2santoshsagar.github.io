interface EducationItemProps {
  degree: string
  institution: string
  period: string
}

function EducationItem({ degree, institution, period }: EducationItemProps) {
  return (
    <div className="mb-6 text-left">
      <h3 className="text-xl font-semibold">{degree}</h3>
      <span className="text-sm">{institution}</span>
      <p className="text-sm text-gray-600">{period}</p>
    </div>
  )
}

export default EducationItem
