function Navbar() {
    return (
        <header className="navbar">
            <a href="#start" className="logo">
                <span className="logo-dot"></span>
                AKF
            </a>


            <nav className="nav-links" aria-label="Huvudnavigation">
                <a href="#Projects">Projekt</a>
                <a href="#about">Om mig</a>
                <a href="#skills">Kompetenser</a>
                <a href="#contact">Kontakt</a>
            </nav>


            <a
                href="https://github.com/abbekf"
                className="github-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Github
                </a>
        </header>
    )
}

export default Navbar
