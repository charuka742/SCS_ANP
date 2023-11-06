import React from 'react'
import './ContactCard.css'

const ContactCard = ({iconName,title,content}:any) => {
  return (
    <div className='full-card'>
        <div className='icon-bar'>
            <img src={iconName} alt="icon" className='detail-icon'/> 
        </div>
        <div className='contact-details'>
            <h1 className='cnt-detail-text'>{title}<br />{content}</h1>
            {/* <p className='cnt-detail-text'>{content}</p> */}
        </div>
    </div>
  )
}

export default ContactCard