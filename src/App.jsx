import { createElement } from "react";
import { FaCoffee, FaFacebook, FaGithub, FaGlobe, FaHeart, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa";
import About from "./components/about";
import RecipeBox from "./components/recipeBox";
import ScrollToTopButton from "./components/scrollToTopButton";
import "./index.css";

const connectLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
];

const supportLinks = [
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const App = () => (
    <div className="recipe-app-shell">
        <header className="app-header">
            <a className="app-brand" href="#top" aria-label="Recipe Box home">
                <img src="/recipe-box/logo.png" alt="Ashish Ranjan logo" />
                <span><small>LOCALSTORAGE KITCHEN</small><strong>Recipe Box</strong></span>
            </a>
            <div className="header-actions">
                <a href="#top">My recipes</a>
                <a href="https://github.com/a2rp/recipe-box" target="_blank" rel="noopener noreferrer" aria-label="Open repository">
                    <FaGithub />
                </a>
            </div>
        </header>

        <main id="top" className="recipe-main">
            <RecipeBox />
            <About />
        </main>

        <footer className="app-footer">
            <div className="footer-inner">
                <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
                <div className="footer-link-groups">
                    <div className="footer-links" aria-label="Social links">
                        {connectLinks.map(({ label, href, icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{createElement(icon)}</a>)}
                    </div>
                    <div className="footer-links" aria-label="Support links">
                        {supportLinks.map(({ label, href, icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{createElement(icon)}</a>)}
                    </div>
                </div>
            </div>
        </footer>

        <ScrollToTopButton />
    </div>
);

export default App;
