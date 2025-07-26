function Header() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="w-full bg-blue-900 text-white py-4 px-8">
      <h1 className="text-3xl font-bold">Santosh Sagar</h1>
      <p className="text-sm">Full Stack Software Developer</p>
      <nav className="mt-2">
        <ul className="flex flex-wrap gap-4 justify-center text-sm">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
