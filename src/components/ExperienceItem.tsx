interface ExperienceItemProps {
  role: string
  company: string
  period: string
  description: string
}

function ExperienceItem({ role, company, period, description }: ExperienceItemProps) {
  return (
    <div className="mb-6 text-left">
      <h3 className="text-xl font-semibold">{role} - {company}</h3>
      <span className="text-sm text-gray-600">{period}</span>
      <p className="mt-2">{description}</p>
    </div>
  )
}

export default ExperienceItem
