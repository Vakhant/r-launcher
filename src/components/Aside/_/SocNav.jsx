import React from 'react'
import css from './css/SocNav.module.css'

const SocNav = () => {
  return (
    <nav className={css.soc_nav}>
        <a className={css.soc_nav_block} href="#">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0H5C2.2 0 0 2.2 0 5V9V13C0 15.8 2.2 18 5 18H19C21.8 18 24 15.8 24 13V9V5C24 2.2 21.8 0 19 0ZM11 13H10V9V5H11L16 9L11 13Z" fill="white"/>
          </svg>
          </a>
        <a className={css.soc_nav_block} href="#">
          <svg width="24" height="14" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M31.5585 1.28656C31.7809 0.544943 31.5585 0 30.5001 0H27.0001C26.1101 0 25.6999 0.470751 25.4773 0.989849C25.4773 0.989849 23.6975 5.32823 21.1761 8.1463C20.3603 8.96204 19.9895 9.22159 19.5445 9.22159C19.322 9.22159 18.9883 8.96204 18.9883 8.22049V1.28656C18.9883 0.396621 18.7417 0 18.0001 0H12.5001C11.9439 0 11.6095 0.413039 11.6095 0.804492C11.6095 1.64813 12.8701 1.84269 13.0001 4.21585V9.36998C13.0001 10.5 12.796 10.7049 12.351 10.7049C11.1645 10.7049 8.27829 6.34711 6.5665 1.36069C6.23103 0.391497 5.89456 0 5.00006 0H1.50006C0.500061 0 0.300049 0.470751 0.300049 0.989849C0.300049 1.91688 1.48663 6.51481 5.82495 12.5959C8.71715 16.7488 12.7921 19 16.5001 19C18.7248 19 19.0001 18.5 19.0001 17.6388V14.5C19.0001 13.5 19.2108 13.3004 19.9153 13.3004C20.4344 13.3004 21.3244 13.56 23.4009 15.5623C25.774 17.9354 26.1652 19 27.5001 19H31.0001C32.0001 19 32.5001 18.5 32.2116 17.5133C31.896 16.5299 30.763 15.103 29.2595 13.4117C28.4437 12.4476 27.2201 11.4094 26.8493 10.8902C26.3302 10.2228 26.4785 9.92611 26.8493 9.33288C26.8493 9.33288 31.1135 3.32591 31.5585 1.28656Z" fill="white"/>
        </svg>
          </a>
        <a className={css.soc_nav_block} href="#">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.8 0.600004L7.99999 3.1L0.799989 5.8C0.399989 6 0.399989 6.5 0.699989 6.7L5.69999 9.5C6.09999 9.7 6.29999 10 6.49999 10.3L7.99999 12.9L9.29999 15.3C9.49999 15.6 10.1 15.6 10.2 15.2L15.4 1.2C15.6 0.800004 15.2 0.400004 14.8 0.600004Z" fill="white"/>
        </svg>
        </a>
        <a className={css.soc_nav_block} href="#">
        
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 15.3V12.1ZM6.4 13.1L7.6 13.5C9 14 10.5 14.2 12 14.3V2H9L7 0C7 0 6 0.4 4.7 1.7C2.7 3.6 0.1 7.5 0 14.7C0 14.9 0.1 15.1 0.2 15.2C0.9 15.9 3.2 17.9 7.6 18C7.9 18 8.1 17.8 8.2 17.6L8.6 16.7C8.8 16.3 8.6 15.9 8.2 15.7L6.2 15C6.1 15 6 14.9 6 14.8V13.4C6 13.2 6.2 13.1 6.4 13.1ZM8.5 7C9.9 7 11 8.1 11 9.5C11 10.9 9.9 12 8.5 12C7.1 12 6 10.9 6 9.5C6 8.1 7.1 7 8.5 7Z" fill="white"/>
            <path d="M0 12.1V15.3ZM18 13.4V14.8C18 14.9 17.9 15 17.8 15L15.8 15.7C15.4 15.9 15.2 16.3 15.4 16.7L15.8 17.6C15.9 17.8 16.1 18 16.4 18C20.8 17.9 23.1 15.9 23.8 15.2C23.9 15.1 24 14.9 24 14.7C23.9 7.5 21.3 3.6 19.3 1.7C18 0.4 17 0 17 0L15 2H12V14.3C13.5 14.3 15 14 16.4 13.5L17.6 13.1C17.8 13.1 18 13.2 18 13.4ZM18 9.5C18 10.9 16.9 12 15.5 12C14.1 12 13 10.9 13 9.5C13 8.1 14.1 7 15.5 7C16.9 7 18 8.1 18 9.5Z" fill="white"/>
          </svg>
        </a>
    </nav>
  )
}

export default SocNav