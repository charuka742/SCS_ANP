import React from 'react'
import uni from 'photos/uni_photo.jpg'
import uni2 from 'photos/uni2.jpg'
import './About.css'
import TeamCard from './Components/TeamCard'

const team = [
  {
    name:"Charuka",
    position:"VC of university of peradeniya"
  },
  {
    name:"Sadeepa",
    position:"DVC of university of peradeniya"
  },
  {
    name:"ABS",
    position:"DVC of university of peradeniya"
  },
  {
    name:"Prof.abc",
    position:"DVC of university of peradeniya"
  },
  {
    name:"Prof.abc",
    position:"DVC of university of peradeniya"
  },
  {
    name:"Prof.abc",
    position:"DVC of university of peradeniya"
  }
  // {
  //   name:"Mr. Lamawansha",
  //   position:"DVC of university of peradeniya"
  // },
  // {
  //   name:"Mr. Lamawansha",
  //   position:"DVC of university of peradeniya"
  // },
  // {
  //   name:"Mr. Lamawansha",
  //   position:"DVC of university of peradeniya"
  // }
]

function createCard(team: any){
  return(
    <TeamCard
      name={team.name}
      post={team.position}
    />
  )
}

const About = () => {
  return (
    <div>
      <div className='upper-section'>
        <div className='upper-content'>
          <h1 className='header-text'>About Us</h1>
          <hr className='line' />
          <p className='about-content'>Lorem ipsum dolor sit amet. Et illum odio est voluptates inventore At praesentium similique qui nostrum quia aut suscipit dolorem vel voluptatem fugiat vel iusto galisum. Ut dolores nobis et necessitatibus necessitatibus in corrupti dolores quo esse dolorem non officiis corporis hic corrupti sequi. Vel incidunt cupiditate non quis voluptas et excepturi sint in voluptatum inventore est asperiores consequuntur qui maiores consequatur qui quia ullam. Et recusandae eligendi hic quia galisum ad atque sunt qui eligendi vitae!
            Qui totam similique et voluptatem totam et ipsum totam ut sunt veniam aut asperiores nulla. Sed consequatur repellendus eum accusamus rerum et minus neque aut repellendus molestiae eos ipsa delectus nam </p>
        </div>
        <div>
          <img className='content-photo' src={uni} alt="nature" />
        </div>
      </div>
      <div className='mid-section' id='mid-top'>
        <div className='mid-side-box'>
          <div className='side-box'>
            <h2 className='mid-text'>Vision</h2>
          </div>
          <div>
            <p className='mid-content'>nam explicabo galisum aut galisum assumenda.  Cum neque perferendis quo sint nesciunt in iure voluptas ea voluptas </p>
          </div>          
        </div>
        <div className='mid-right-side'>
          <p className='mid-header'>Our Services</p>
          <hr className='line' id='mid-line'/>
        </div>
      </div>
      <div className='middle2'>
        <div className='mid-section' id='middle'>
          <div>
            <p className='mid-content'>nam explicabo galisum aut galisum assumenda.  Cum neque perferendis quo sint nesciunt in iure voluptas ea voluptas </p>
          </div>
          <div>
            <h2 className='mid-text' id='mission-text'>Mission</h2>
            <img className='uni-photo' src={uni2} alt="university of peradeniya" />
          </div>
        </div>
        <div>
          <p className='middle-side-content'>Lorem ipsum dolor sit amet. Et illum odio est voluptates inventore At praesentium similique qui nostrum quia aut suscipit dolorem vel voluptatem fugiat vel iusto galisum. Ut ptas et excepturi sint in voluptatum inventore et asperiores consores consequaur qui quia ullam. Et recusandae eligendi hic quia 
              galisum ad atque sunt qui eligendi vitae Qui totam similique et voluptatem totam et ipsum totam ut sunt veniam aut asperiores nulla. Sed consequatur repellendus eum accusamus rerum et min,
              us neque aut repellendus molestiae eos ipsa delectus 
              nam explicabo galisum aut galisum assumenda. Cum neque perferendis quo sint nesciunt in iure voluptas ea voluptas  
              Lorem ipsum dolor sit amet. Et illum odio est voluptates inventore At praesentium similique qui nostrum quia aut suscipit dolorem vel voluptatem fugiat vel iusto galisum. Ut ptas et excepturi sint in voluptatum inventore es 

              t asperiores consequuntur qui maiores consequatur qui quia ullam. Et recusandae eligendi hic quia galisum ad atque sunt qui eligendi vitae!Qui totam similique et voluptatem totam et ipsum 
              totam ut sunt veniam aut asperiores nulla. Sed consequatur repellendus eum accusamus rerum et minus neque aut repellendus molestiae eos ipsa delectus nam explicabo galisum aut galisum assumenda. Cum neque perferendis quo sint nesciunt in iure 
              voluptas ea voluptas </p>
        </div>
      </div>
      <div className='brown-row'>
        <div className='row-column' id='first-row-column'>
          <p className='row-content'>World’s  University</p>
        </div>
        <div className='row-column' id='second-column'>
          <p className='row-content'>World’s  University</p>
        </div>
        <div className='row-column'>
          <p className='row-content'>World’s  University</p>
        </div>
        <div className='row-column' id='fourth-column'>
          <p className='row-content'>World’s  University</p>
        </div>
      </div>
      <div className='bottom-section'>
        <div>
          <h1 className='mid-header' style={{width:'100%'}}>Our Team</h1>
          <hr className='line' id='team-line'/>
        </div>
        <div className='team-section'>
          {team.map(createCard)}
        </div>
      </div>
    </div>
  )
}

export default About