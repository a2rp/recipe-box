import { createElement, useEffect, useState } from "react";
import {
    FaCodepen,
    FaCoffee,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHandHoldingHeart,
    FaLinkedin,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import About from "./components/about";
import RecipeBox from "./components/recipeBox";
import ScrollToTopButton from "./components/scrollToTopButton";
import "./index.css";

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHandHoldingHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const year = new Date().getFullYear();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="recipe-app-shell">
            <header className="app-header">
                <a className="app-brand" href="#top" onClick={closeMenu} aria-label="Recipe Box home">
                    <img src="/recipe-box/logo.png" alt="Ashish Ranjan logo" />
                    <span>
                        <small>LOCALSTORAGE KITCHEN</small>
                        <strong>Recipe Box</strong>
                    </span>
                </a>
                <div className="header-actions">
                    <a href="#top" onClick={closeMenu}>My recipes</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="https://github.com/a2rp/recipe-box" target="_blank" rel="noopener noreferrer" aria-label="Open repository">
                        <FaGithub />
                    </a>
                    <button
                        className="app-menu-button"
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </header>

            <nav className={"mobile-header-menu " + (menuOpen ? "is-open" : "")} aria-label="Mobile navigation">
                <a href="#top" onClick={closeMenu}>My recipes</a>
                <a href="#about" onClick={closeMenu}>About</a>
            </nav>

            <main id="top" className="recipe-main">
                <RecipeBox />
                <About />
            </main>

            <footer className="app-footer">
                <div className="footer-inner">
                    <span>Copyright &copy; {year}{" "}
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                            Ashish Ranjan
                        </a>
                    </span>
                    <div className="footer-links" aria-label="Social and support links">
                        {footerLinks.map(({ label, href, icon }) => (
                            <a
                                href={href}
                                key={label}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={label}
                                title={label}
                            >
                                {createElement(icon)}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>

            <ScrollToTopButton />
        </div>
    );
};

export default App;
