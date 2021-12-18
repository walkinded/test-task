import React from 'react'
import './footer.css'

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div className='box-container'>
        <div className='footer__wrapper'>
          <p>Developed by Roman Lab</p>
          <p>Copyright &copy; {today.getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
