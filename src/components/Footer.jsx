// src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="horizontal-space-between-container">
          <div className="vertical-container">
            <div className="footer-logo-wrapper">
              <img
                src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/60cc626e9fee237f63b6d591_Logo Imverse.png"
                loading="lazy"
                alt=""
                className="footer-logo"
              />
            </div>
            <div className="button-container">
              <a href="utility-pages/sign-up.html" className="light-button w-inline-block">
                <div>SIGN UP</div>
              </a>
              <div className="button-spacer-16px"></div>
              <a href="utility-pages/login-page.html" className="primary-button w-inline-block">
                <div>LOG IN</div>
              </a>
            </div>
          </div>

          <div className="footer-wrapper">
            <div className="footer-column right-margin-80">
              <a href="games.html" className="white-footer-link">Games</a>
              <a href="events.html" className="white-footer-link">Events</a>
              <a href="media-page.html" className="white-footer-link">Media</a>
              <a href="blog.html" className="white-footer-link">Blog</a>
              <a href="team.html" className="white-footer-link">Team</a>
            </div>
            <div className="footer-column right-margin-80">
              <a href="about.html" className="white-footer-link">About</a>
              <a href="job-post.html" className="white-footer-link">Jobs</a>
              <a href="press.html" className="white-footer-link">Press</a>
              <a href="contact-us.html" className="white-footer-link">Contact</a>
              <a href="utility-pages/beta-testing.html" className="white-footer-link">Beta Testing</a>
            </div>
            <div className="footer-column">
              <a href="template/licenses.html" className="white-footer-link">Licensing</a>
              <a href="template/style-guide.html" className="white-footer-link">Style Guide</a>
              <a href="template/changelog.html" className="white-footer-link">Changelog</a>
              <a href="light-option/home.html" className="white-footer-link">Light Version</a>
            </div>
          </div>

          <div className="footer-column social">
            <h4 className="bottom-margin-20">
              Let’s stay<br /><span className="purple-highlight">connected</span>
            </h4>
            <div className="bottom-margin-20">
              <div className="social-wrapper">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-link w-inline-block"><img src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/601b08bd8bcb4b4ef28f2de8_facebook.svg" alt="Facebook" /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-link w-inline-block"><img src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/601b08bdbce5fc7b3f3167f3_twitter.svg" alt="Twitter" /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-link w-inline-block"><img src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/601b08bd4bc0851cafae8b4f_instagram.svg" alt="Instagram" /></a>
                <a href="https://www.twitch.tv/" target="_blank" rel="noreferrer" className="social-link w-inline-block"><img src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/601b08bd7148a021b66c4f89_export.svg" alt="Twitch" /></a>
              </div>
            </div>
            <div className="social-wrapper">
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="social-link w-inline-block"><img src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/601b08bd4bc0850784ae8b4d_youtube.svg" alt="Youtube" /></a>
              <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer" className="social-link w-inline-block"><img src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/601b08bdf3122178cbf82822_steam.svg" alt="Steam" /></a>
              <a href="https://www.pinterest.ru/" target="_blank" rel="noreferrer" className="social-link w-inline-block"><img src="https://cdn.prod.website-files.com/601a27d15148f65959c89ffd/601b08bdbce5fc20453167f2_pinterest.svg" alt="Pinterest" /></a>
            </div>
          </div>
        </div>

        <div className="grey-line margins-30"></div>

        <div className="copyright-text">
          Designed by <a href="https://gameloom.io/" target="_blank" rel="noreferrer">GameLoomInteractive</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
