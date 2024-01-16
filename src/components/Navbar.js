import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Projects">Projects</Link>
        </li>

        <li>
          <Link to="/About">Story</Link>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={16} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={16} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
