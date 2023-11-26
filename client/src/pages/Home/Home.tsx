import React, { useEffect, useState } from "react";
import uni from "photos/uni2.jpg";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import uni_logo from "photos/uni_logo.png";
import uni3 from "photos/uni3.jpg";
import uni1 from "photos/uni1.jpg";
import uni2 from "photos/uni2.jpg";
import main from "photos/main.jpg";
import uni4 from "photos/uni4.jpeg";
import { DropDown } from "Components/DropDown";

const Home = ({ users }: any) => {
  const navigate = useNavigate();
  const [userJson, setUserJson] = useState<any>(null);

  useEffect(() => {
    const u = localStorage.getItem("loggedUser");
    // console.log(u)
    if (u != null) {
      setUserJson(JSON.parse(u));
    }
  }, [localStorage.getItem("loggedUser")]);

  const handleLogout = () => {
    localStorage.clear();
    setUserJson(null);
    navigate("/login");
  };

  return (
    <div style={{ marginBottom: "50px", width: "100%" }}>
      <div className='nav-section'>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}>
          <img
            style={{
              width: "75px",
              height: "75px",
              marginTop: "7px",
              marginLeft: "15px",
            }}
            src={uni_logo}
            alt='university logo'
          />
          <div>
            <p className='header-title uppercase'>University Alumini System</p>
          </div>
        </div>
        <div>
          <ul className='nav-list uppercase'>
            <li className='nav-icon'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-icon'>
              <Link to='/about'>About Us</Link>
            </li>

            <li className='nav-icon'>
              <Link to='/contact'>Contact</Link>
            </li>

            <li className='nav-icon'>
              {userJson ? (
                <button
                  style={{
                    border: "1px solid black",
                    padding: "3px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    marginTop: "-10px",
                  }}
                  onClick={handleLogout}>
                  LOGOUT
                </button>
              ) : (
                <button
                  style={{
                    border: "1px solid black",
                    padding: "3px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    marginTop: "-10px",
                  }}>
                  <Link to='/login'>LOGIN</Link>
                </button>
              )}
            </li>
            {userJson && (
              <li className='nav-icon' style={{ marginTop: "-10px" }}>
                <DropDown />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='home-nav'>
        <div className='mb-2'>
          <h6 className='hm-header-text uppercase mb-2'>Faculty of Science</h6>
          <h6 className='hm-header-sub-text'>
            Department of Statistics & Computer Science
          </h6>
        </div>

        <img className='hm-image' src={uni} alt='' />
      </div>
      <div style={{ display: "flex" }}>
        <div className='hm-raw'>
          <p className='hm-raw-content ml-20'>
            Transforming
            <br /> Education
            <br /> Experience
          </p>
        </div>
        <div className='hm-raw' style={{ background: "#A05D01" }}>
          <p className='hm-raw-content ml-20'>
            Transforming
            <br /> Education
            <br /> Experience
          </p>
        </div>
        <div className='hm-raw'>
          <p className='hm-raw-content ml-20 '>
            Transforming
            <br /> Education
            <br /> Experience
          </p>
        </div>
        <div className='hm-raw' style={{ background: "#A05D01" }}>
          <p className='hm-raw-content ml-20'>
            Transforming
            <br /> Education
            <br /> Experience
          </p>
        </div>
      </div>
      <div className='container'>
        <h1 className='hm-title'>University Of Peradeniya</h1>
        <p className='hm-content'>
          The University of Peradeniya, located in Sri Lanka, is renowned for
          its rich history and academic excellence. Established in 1942, it
          stands as a symbol of higher education in the country. Situated near
          the picturesque city of Kandy, the university campus is surrounded by
          lush greenery and historical landmarks. The institution has a diverse
          range of academic programs, covering fields such as science, arts,
          engineering, and medicine. The commitment to research and innovation
          at the University of Peradeniya has led to numerous breakthroughs and
          contributions to various fields. The vibrant campus life fosters a
          sense of community among students, and the university's cultural
          events and traditions add to the overall student experience. With a
          dedicated faculty and state-of-the-art facilities, the University of
          Peradeniya continues to be a leading educational institution,
          producing graduates who contribute significantly to the development of
          Sri Lanka and beyond.
        </p>
      </div>

      <div className='hm-second-section'>
        <div>
          <img className='hm-second-section-img' src={main} alt='' />
        </div>
        <div>
          <h1 className='hm-second-title'>Welcome to Faculty of Science</h1>
          <hr className='hm-second-line' />
          <p className='hm-second-content'>
            The Faculty of Science at the University of Peradeniya is a hub of
            academic excellence and innovation. Established with a commitment to
            fostering scientific inquiry and discovery, our faculty has been a
            cornerstone of the university since its inception. Located within
            the lush surroundings of the University of Peradeniya, the Faculty
            of Science offers a diverse range of programs covering fields such
            as physics, chemistry, biology, mathematics, and computer science.
            Our dedicated faculty members, who are experts in their respective
            fields, are committed to providing high-quality education and
            fostering a spirit of curiosity among students. Students at the
            Faculty of Science engage in cutting-edge research, contributing to
            advancements in scientific knowledge and technology. The
            state-of-the-art laboratories and research facilities provide an
            enriching environment for hands-on learning and experimentation. As
            part of the vibrant academic community at the University of
            Peradeniya, the Faculty of Science plays a crucial role in shaping
            the next generation of scientists, researchers, and leaders. Join us
            on a journey of exploration and discovery as we strive to push the
            boundaries of scientific knowledge and make a positive impact on
            society.
          </p>
        </div>
      </div>
      <div className='hm-bottom-section'>
        <div style={{ marginLeft: "80px" }}>
          <hr className='hm-bottom-line' />
          <h1 className='hm-bottom-title'>
            Department of Computer Science and Statistics
          </h1>
        </div>
        <div>
          <img
            className='hm-bottom-section-img'
            src={uni3}
            alt='uinversity of peradeniya'
          />
        </div>
      </div>
      <div style={{ display: "flex" }} className='hm-img'>
        <img className='bottom-img' src={uni1} alt='university of peradeniya' />
        <img className='bottom-img' src={uni2} alt='university of peradeniya' />
        <img className='bottom-img' src={uni4} alt='university of peradeniya' />
      </div>
    </div>
  );
};

export default Home;
