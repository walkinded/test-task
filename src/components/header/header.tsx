import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header>
      <div className='box-container'>
        <div className='header__wrap'>
          <h1>{title}</h1>
          <nav>
            <Link to="/">users</Link>
            <Link to="/about-me">about me</Link>
            <Link to="/about">about</Link>
          </nav>
        </div>
      </div>
      

    </header>
  )
}

Header.defaultProps = {
  title: "header"
}

export default Header;
