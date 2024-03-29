import "./MobileNav.css";
import PropTypes from 'prop-types';


const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="src/assets/logo.png" alt="" />

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            
            <li>
              <a className="menu-item">Skills</a>
            </li>

            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            
            <li>
              <a className="menu-item">Contact</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire ME
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

MobileNav.propTypes = {
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.any
  };


