import React from 'react'
import avater from 'photos/avater1.png'
import './TeamCard.css'

const TeamCard = ({name,post}:any) => {
  return (
    <div className='team-card'>
        <img className='avater' src={avater} alt="profile " />
        <div className='team-details'>
            <p className='card-details'>{name}</p>
            <p className='card-details'>{post}</p>
        </div>
    </div>
  )
}

export default TeamCard