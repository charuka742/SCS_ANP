import React from 'react'
// import uni from 'photos/uni1.jpg'
import { Link } from 'react-router-dom'
import './GalleryCard.css'

export const GalleryCard = ({image,name,discription,link}:any) => {
  return (
    <div>
        <div className='gallery-first-section'>
         <div>
            <img className='gallery-img' src={image} alt="university of peradeniya" />
          </div>
          <div className='first-content'>
            <h3 className='first-header' style={{marginLeft:'70px'}}>{name}</h3>
            <hr className='first-line' style={{marginLeft:'130px'}}/>
            <p className='first-details' style={{marginTop:'30px'}}>{discription}</p>
              <Link to={link}>
                <button className='view-btn'>View</button>
              </Link>
          </div>
        </div>
    </div>
  )
}
