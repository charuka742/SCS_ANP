import React from 'react'
import './Contact.css'
import uni1 from 'photos/uni1.jpg'
import ContactCard from './Components/ContactCard'

const details = [
  {
    title:'Telephone Number',
    content:'045-3455678'
  },
  {
    title:'E-mail Address',
    content:'universityofperadeniya@gmail.com'
  },
  {
    title:'Address',
    content:'No.09, Peradeniya, Kandy.'
  },
  {
    title:'Facebook/ Instagram',
    content:'jgnjkfdgdfbknfdnbkdbinednkd'
  }
]

function createDetailsCard(details:any){
  return(
    <ContactCard 
    title={details.title}
    content={details.content}
  />
  )
}

const Contact = () => {
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
        <div>
            <img src={uni1} alt="university of peradeniya" className='cnt-img' />
          </div>
          <div style={{display:'flex',alignItems:'center',marginLeft:'120px'}}>
            <h1 className='cnt-text'>Contact Us<br />For More Information<br /><hr className='cnt-line'/></h1>
          </div>
     </div>
     <div className='cnt-section'>
        {details.map(createDetailsCard)}
     </div>
     <div>
      <form action="" method='' className='cnt-form'>
        <div>
          <h1 className='cnt-enquiry'>Send us an Enquiry</h1>
          <p className='cnt-para'>Fill out your details and we will get back to you, all details will be kept confidential and only used by our team</p>
        </div>
        <div className='cnt-input-details'>
          <div>
            <label className='cnt-input-label' htmlFor="fullNamw">Full Name</label>
            <input className='cnt-input-area' type="text" id='fullName' />
          </div>
          <div>
            <label className='cnt-input-label' htmlFor="cmail">E-mail</label>
            <input className='cnt-input-area' type="email" id='cmail' />
          </div>
          <div>
            <label className='cnt-input-label' htmlFor="pNumber">Phone Number</label>
            <input className='cnt-input-area' type="tel" id='pNumber' />
          </div>
          <div>
            <label className='cnt-input-label' htmlFor="venue">Venue Name</label>
            <input className='cnt-input-area' type="text" id='venue' />
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'14% 86%',marginTop:'50px'}}>
            <label className='cnt-input-label' htmlFor="message" >Message</label>
            <textarea className='cnt-input-area' id='message'></textarea>
          </div>
          <button className='cnt-send-btn'>Send</button>
      </form>
     </div>
    </div>
  )
}

export default Contact