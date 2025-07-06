// NetflixFooter.tsx
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import "./Footer.css";

export default function NetflixFooter() {
  const footerLinks = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Center", "Terms of Use", "Contact Us", "Do Not Sell or Share My Personal Information"],
  ];

  return (
    <footer className="netflix-footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="#" className="social-link">
            <Facebook className="social-icon" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="social-link">
            <Instagram className="social-icon" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="social-link">
            <Twitter className="social-icon" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="social-link">
            <Youtube className="social-icon" />
            <span className="sr-only">Youtube</span>
          </a>
        </div>

        <div className="footer-links-grid">
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className="footer-links-column">
              {column.map((link, linkIndex) => (
                <div key={linkIndex} className="footer-link-item">
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button className="service-code-button">Service Code</button>

        <p className="copyright-text">© 1997-{new Date().getFullYear()} Netflix, Inc.</p>
      </div>
    </footer>
  );
}