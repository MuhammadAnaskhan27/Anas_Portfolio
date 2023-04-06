import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Anas</h1>
            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>

                <li>
                    <a href="#testimonial" className='footer__link'>Testimonials</a>
                </li>

              
            </ul>

            <div className='footer__social'>
            <a href="https://www.facebook.com/anas.khan.3382/" className='footer__social-link' >
        <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.instagram.com/_khan_anas27_/" className='footer__social-link' >
        <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://twitter.com/Anas_khan_27__" className='footer__social-link' >
        <i class="bx bxl-twitter"></i>
        </a>
            </div>
            <span className='footer__copy'>MuhammadAnasKhan. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer