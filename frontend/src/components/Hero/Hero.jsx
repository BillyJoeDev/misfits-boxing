import React from 'react'
import './Hero.css'
import { FaYoutube, FaTicketAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
        <div className='hero-img' />
        <div className='hero-container'>
            <img className='hero-brand-logo' src='images/brand-icon-white.png' />
            <div className='hero-buttons'>
                <a className='hero-secondary-button' target='#' href='https://youtu.be/q9rvW4cVOJ8'><FaYoutube /> Watch Trailer</a>
                <a className='hero-primary-button' target='#' href='https://www.axs.com/uk/events/440365/ksi-vs-swarmz-tickets?skin=theo2'><FaTicketAlt /> Purchase Tickets</a>
            </div>
        </div>
    </div>
  )
}

export default Hero