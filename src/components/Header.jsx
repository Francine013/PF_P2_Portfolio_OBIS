export default function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-brand">
                    <span className="brand-accent">F</span>MRO<span className="brand-dot">.</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                </ul>
            </nav>

            <header className="hero-section">
                <div className="hero-content">
                    <p className="hero-greeting">Hi there, I'm</p>
                    <h1 className="hero-name">Francine Mei R. Obis</h1>
                    <h2 className="hero-title">Information Technology Student</h2>
                    <p className="hero-description">
                        A dedicated IT student with a strong foundation in databases and software development.
                        I build structured, efficient, and user-friendly applications.
                    </p>
                    <div className="hero-cta">
                        <a href="mailto:10cineeeee@gmail.com" className="btn-primary">Hire Me</a>
                        <a href="https://github.com/Francine013" target="_blank" rel="noopener noreferrer" className="btn-secondary">View GitHub</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="glow-circle"></div>
                </div>
            </header>
        </>
    );
}
