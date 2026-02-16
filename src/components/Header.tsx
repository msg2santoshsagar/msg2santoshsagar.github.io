function Header() {
    return (
        <header
            style={{
                borderBottom: '1px solid rgba(255,255,255,0.10)',
                background: 'rgba(2, 6, 23, 0.55)',
                backdropFilter: 'blur(10px)',
            }}
        >
            <div style={{ margin: '0 auto', width: '100%', maxWidth: 1040, padding: '32px 16px 18px' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 14,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: 14,
                        }}
                    >
                        <div>
                            <h1 style={{ margin: 0, fontSize: 36, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.02em' }}>
                                Santosh Sagar
                            </h1>
                            <p style={{ margin: '10px 0 0', color: 'rgba(226,232,240,0.85)' }}>Full Stack Software Engineer</p>
                            <p style={{ margin: '8px 0 0', color: 'rgba(226,232,240,0.75)', fontSize: 14 }}>
                                Chennai, India • Java / Spring Boot • Angular / React • Microservices
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                            <a
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '10px 12px',
                                    borderRadius: 12,
                                    border: '1px solid rgba(255,255,255,0.14)',
                                    background: 'rgba(255,255,255,0.06)',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                }}
                                href="./resume.pdf"
                                download
                            >
                                Download PDF
                            </a>
                            <a
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '10px 12px',
                                    borderRadius: 12,
                                    border: '1px solid rgba(255,255,255,0.14)',
                                    background: 'rgba(255,255,255,0.06)',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                }}
                                href="https://www.linkedin.com/in/santosh-sagar/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '10px 12px',
                                    borderRadius: 12,
                                    border: '1px solid rgba(255,255,255,0.14)',
                                    background: 'rgba(255,255,255,0.06)',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                }}
                                href="https://github.com/msg2santoshsagar/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <nav
                        aria-label="Sections"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 14,
                            paddingTop: 8,
                        }}
                    >
                        {[
                            { href: '#about', label: 'About' },
                            { href: '#experience', label: 'Experience' },
                            { href: '#projects', label: 'Skills' },
                            { href: '#achievements', label: 'Achievements' },
                            { href: '#education', label: 'Education' },
                            { href: '#contact', label: 'Contact' },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                style={{
                                    color: 'rgba(226,232,240,0.80)',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    padding: '6px 8px',
                                    borderRadius: 10,
                                    border: '1px solid rgba(255,255,255,0.10)',
                                    background: 'rgba(255,255,255,0.04)',
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
