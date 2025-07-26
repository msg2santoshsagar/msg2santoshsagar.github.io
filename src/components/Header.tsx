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
    <header className="w-full bg-blue-900 text-white shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-4 px-8">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold">Santosh Sagar</h1>
          <p className="text-sm">Full Stack Software Developer</p>
        </div>
        <nav className="mt-2 sm:mt-0">
          <ul className="flex flex-wrap gap-4 justify-center sm:justify-end text-sm list-none">
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
