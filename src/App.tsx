import './App.css'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
    return (
        <div className="cv-shell">
            <Header />

            <main className="cv-container">
                <About yearsText="9+ years" />
                <Experience />
                <Projects />

                <section id="achievements" className="cv-card">
                    <h2 className="text-xl font-semibold text-white">Key Achievements</h2>
                    <div className="cv-panels">
                        <div className="cv-panel">
                            <div className="text-sm font-semibold text-white">Workplace recognition</div>
                            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
                                <li>On-the-spot award for ramping up quickly and contributing to the Next Generation Portal project during challenging timelines.</li>
                                <li>Multiple appreciations from leads and clients for on-time delivery and quality.</li>
                            </ul>
                        </div>
                        <div className="cv-panel">
                            <div className="text-sm font-semibold text-white">Hackathons</div>
                            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
                                <li>2nd place — Slam Dunk Digital Hackathon (Feb 2018, TCS Talent Development).</li>
                                <li>12th place — Slam Dunk Digital Hackathon (Jan 2018), Innovation Pride Award.</li>
                                <li>First runner-up — Codu Challenge / Codeathon (Mar 2017, TCS Retail Talent Development).</li>
                                <li>8th place — Code Run Retail Hackathon (Feb 2017), Special Initiative Award.</li>
                            </ul>
                        </div>
                        <div className="cv-panel">
                            <div className="text-sm font-semibold text-white">Learning & innovation</div>
                            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
                                <li>Learning Achievement Awards for sustained learning and technical excellence.</li>
                                <li>Built reusable components and improved performance, earning recognition from leadership.</li>
                            </ul>
                        </div>
                        <div className="cv-panel">
                            <div className="text-sm font-semibold text-white">Team impact</div>
                            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
                                <li>Recognized for mentoring and unblocking peers to improve productivity and technical growth.</li>
                                <li>Contributed to innovation-driven initiatives and adoption of best practices in full-stack development.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="education" className="cv-card">
                    <h2 className="text-xl font-semibold text-white">Education</h2>
                    <div className="mt-4 text-slate-300">
                        <div className="font-semibold text-white">Bachelor of Technology in Computer Science and Engineering</div>
                        <div className="mt-1 text-sm text-slate-400">Maulana Abul Kalam Azad University of Technology, West Bengal | 2012 - 2016 | Kolkata, India</div>
                    </div>
                </section>

                <Contact />
            </main>
        </div>
    )
}

export default App
