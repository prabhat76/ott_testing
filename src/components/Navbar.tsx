import { useState, useEffect } from "react";
import { Bell, ChevronDown, Search } from "lucide-react";
import "./Navbar.css";

interface NetflixNavbarProps {
  isLoggedIn?: boolean;
  showBrowseButton?: boolean;
}

export default function NetflixNavbar({
  isLoggedIn = false,
  showBrowseButton = false
}: NetflixNavbarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <div className="logo-container">
            <div className="logo-text">NETFLIX</div>
          </div>
        </a>

        {isLoggedIn ? (
          <>
            <nav className="navbar-nav-desktop">
              <a href="/browse" className="nav-link active">Home</a>
              <a href="/browse?genre=series" className="nav-link">TV Shows</a>
              <a href="/browse?genre=movies" className="nav-link">Movies</a>
              <a href="/browse?genre=new" className="nav-link">New & Popular</a>
              <a href="/browse?list=mylist" className="nav-link">My List</a>
              <a href="/browse?browse=languages" className="nav-link">Browse by Languages</a>
            </nav>

            <div className="navbar-nav-mobile">
              <div className="dropdown-wrapper">
                <button className="dropdown-trigger ghost-button small-button">
                  Browse <ChevronDown className="dropdown-icon" />
                </button>
                <div className="dropdown-content" style={{ display: "none" }}>
                  <a href="/browse" className="dropdown-item">Home</a>
                  <a href="/browse?genre=series" className="dropdown-item">TV Shows</a>
                  <a href="/browse?genre=movies" className="dropdown-item">Movies</a>
                  <a href="/browse?genre=new" className="dropdown-item">New & Popular</a>
                  <a href="/browse?list=mylist" className="dropdown-item">My List</a>
                </div>
              </div>
            </div>

            <div className="navbar-actions">
              <div className="search-container">
                {searchOpen ? (
                  <div className="search-box">
                    <Search className="search-icon" />
                    <input
                      type="search"
                      placeholder="Titles, people, genres"
                      className="search-input"
                      autoFocus
                      onBlur={() => setSearchOpen(false)}
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="search-button ghost-button icon-button"
                  >
                    <Search className="search-icon" />
                  </button>
                )}
              </div>

              <button className="notification-button ghost-button icon-button">
                <Bell className="bell-icon" />
              </button>

              <div className="dropdown-wrapper">
                <button className="profile-button ghost-button">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="Profile"
                    className="profile-image"
                  />
                </button>
                <div className="profile-dropdown" style={{ display: "none" }}>
                  <div className="dropdown-item">Profile</div>
                  <div className="dropdown-item">Account</div>
                  <div className="dropdown-item">Help Center</div>
                  <div className="dropdown-item">Sign out of Netflix</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="navbar-actions">
            <div className="dropdown-wrapper">
              <button className="language-button ghost-button small-button">
                English <ChevronDown className="dropdown-icon" />
              </button>
              <div className="dropdown-content" style={{ display: "none" }}>
                <div className="dropdown-item">English</div>
                <div className="dropdown-item">Español</div>
                <div className="dropdown-item">Français</div>
              </div>
            </div>

            {showBrowseButton && (
              <button className="browse-button">
                <a href="/browse">Browse</a>
              </button>
            )}

            <button className="signin-button">
              <a href="/login">Sign In</a>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}