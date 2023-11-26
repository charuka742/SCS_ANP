import React from 'react'
import './GalleryCard2.css'
import { Link } from 'react-router-dom'

export const GalleryCard2 = ({image,name,discription,link}:any) => {
  return (
    <div>
        <div className='gallery-first-section' id='second-division'>
            <div className='first-content'>
            <h3 className='first-header' style={{marginLeft:'70px',color: '#FFFFFF'}}>{name}</h3>
            <hr className='first-line' id='second-gallery-line' style={{marginLeft:'130px'}}/>
            <p className='first-details' style={{marginTop:'30px',color: '#FFFFFF',textAlign:'left',marginLeft:'40px'}}>{discription}</p>
                <Link to={link}>
                <button className='view-btn' id='second-view'>View</button>
                </Link>
            </div>
            <div>
            <img className='gallery-img' id='second-image' src={image} alt="university of peradeniya" />
            </div>
        </div>
    </div>
  )
}
