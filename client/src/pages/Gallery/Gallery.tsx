import React from "react";
import gym from "photos/gym.jpg";
import art from "photos/art.jpg";
import play from "photos/playground.jpg";
import "./Gallery.css";
import { Link } from "react-router-dom";
import { GalleryCard } from "./Components/GalleryCard";
import { GalleryCard2 } from "./Components/GalleryCard2";

const gallery = [
  {
    image: "uni1",
    name: "Play Ground",
    discription:
      "Lorem ipsum dolor sit amet. Et illum odio est voluptate inven tore At ipraesntium similique qui nostrum quia aut suscipit hdolorem vel voluptatem fugiat vel iusto galisum. Ut dolor fdhgikes nobis et necessitatibus necessitatibus in corrupt hfdiiiolorkes quo esse dolorem non officiis corporis hic co gjkijfirrupti sequi. Vel incidunt cupiditate non quis volupta pgsiiis et excepturi sint in voluptatum inventore est asperi giipes consequuntur qui maiores consequatur qui quia ull am. Et recusandae eligendi hic quia galisum ad atque sun ui eligendi vitae!Qui totam similique et voluptatem totam et njdkjnbksnbipsum totam ut sunt veniam aut asperiores nulla. Sed consequatur repellendus eum accusamus rerum et minus hjkju ikkneque aut repellendus molestiae eos ipsa delectus nam",
    link: "/playground",
  },
];

function genareteGallery(gallery: any) {
  return (
    <GalleryCard
      image={gallery.image}
      name={gallery.name}
      discription={gallery.discription}
      link={gallery.link}
    />
  );
}

function genareteGallery2(gallery: any) {
  return (
    <GalleryCard2
      image={gallery.image}
      name={gallery.name}
      discription={gallery.discription}
      link={gallery.link}
    />
  );
}

const Gallery = () => {
  return (
    <div>
      <h2 className="gallery-header">Gallery</h2>
      {/* {gallery.map(genareteGallery)} */}
      {/* {gallery.map(genareteGallery2)} */}

      <div className="gallery-first-section">
        <div>
          <img
            className="gallery-img"
            src={play}
            alt="university of peradeniya"
          />
        </div>
        <div className="first-content">
          <h3 className="first-header" style={{ marginLeft: "70px" }}>
            Play Ground
          </h3>
          <hr className="first-line" style={{ marginLeft: "130px" }} />
          <p className="first-details" style={{ marginTop: "30px" }}>
            Lorem ipsum dolor sit amet. Et illum odio est voluptate inven tore
            At ipraesntium similique qui nostrum quia aut suscipit hdolorem vel
            voluptatem fugiat vel iusto galisum. Ut dolor fdhgikes nobis et
            necessitatibus necessitatibus in corrupt hfdiiiolorkes quo esse
            dolorem non officiis corporis hic co gjkijfirrupti sequi. Vel
            incidunt cupiditate non quis volupta pgsiiis et excepturi sint in
            voluptatum inventore est asperi giipes consequuntur qui maiores
            consequatur qui quia ull am. Et recusandae eligendi hic quia galisum
            ad atque sun ui eligendi vitae!Qui totam similique et voluptatem
            totam et njdkjnbksnbipsum totam ut sunt veniam aut asperiores nulla.
            Sed consequatur repellendus eum accusamus rerum et minus hjkju
            ikkneque aut repellendus molestiae eos ipsa delectus nam{" "}
          </p>
          <Link to="/playground">
            <button className="view-btn">View</button>
          </Link>
        </div>
      </div>
      <div className="gallery-first-section" id="second-division">
        <div className="first-content">
          <h3
            className="first-header"
            style={{ marginLeft: "70px", color: "#FFFFFF" }}
          >
            Gymnasium
          </h3>
          <hr
            className="first-line"
            id="second-gallery-line"
            style={{ marginLeft: "130px" }}
          />
          <p
            className="first-details"
            style={{
              marginTop: "30px",
              color: "#FFFFFF",
              textAlign: "left",
              marginLeft: "40px",
            }}
          >
            Lorem ipsum dolor sit amet. Et illum odio est voluptate inven tore
            At ipraesntium similique qui nostrum quia aut suscipit hdolorem vel
            voluptatem fugiat vel iusto galisum. Ut dolor fdhgikes nobis et
            necessitatibus necessitatibus in corrupt hfdiiiolorkes quo esse
            dolorem non officiis corporis hic co gjkijfirrupti sequi. Vel
            incidunt cupiditate non quis volupta pgsiiis et excepturi sint in
            voluptatum inventore est asperi giipes consequuntur qui maiores
            consequatur qui quia ull am. Et recusandae eligendi hic quia galisum
            ad atque sun ui eligendi vitae!Qui totam similique et voluptatem
            totam et njdkjnbksnbipsum totam ut sunt veniam aut asperiores nulla.
            Sed consequatur repellendus eum accusamus rerum et minus hjkju
            ikkneque aut repellendus molestiae eos ipsa delectus nam{" "}
          </p>
          <Link to="/stadium">
            <button className="view-btn" id="second-view">
              View
            </button>
          </Link>
        </div>
        <div>
          <img
            className="gallery-img"
            id="second-image"
            src={gym}
            alt="university of peradeniya"
          />
        </div>
      </div>
      <div className="gallery-first-section">
        <div>
          <img className="gallery-img" src={art} alt="gymnasium" />
        </div>
        <div
          className="first-content"
          style={{ marginBottom: "200px", marginTop: "70px" }}
        >
          <h3 className="first-header" style={{ marginLeft: "70px" }}>
            Art Theature
          </h3>
          <hr
            className="first-line"
            style={{ marginLeft: "130px", background: "#630202" }}
          />
          <p className="first-details" style={{ marginTop: "30px" }}>
            Lorem ipsum dolor sit amet. Et illum odio est voluptate inven tore
            At ipraesntium similique qui nostrum quia aut suscipit hdolorem vel
            voluptatem fugiat vel iusto galisum. Ut dolor fdhgikes nobis et
            necessitatibus necessitatibus in corrupt hfdiiiolorkes quo esse
            dolorem non officiis corporis hic co gjkijfirrupti sequi. Vel
            incidunt cupiditate non quis volupta pgsiiis et excepturi sint in
            voluptatum inventore est asperi giipes consequuntur qui maiores
            consequatur qui quia ull am. Et recusandae eligendi hic quia galisum
            ad atque sun ui eligendi vitae!Qui totam similique et voluptatem
            totam et njdkjnbksnbipsum totam ut sunt veniam aut asperiores nulla.
            Sed consequatur repellendus eum accusamus rerum et minus hjkju
            ikkneque aut repellendus molestiae eos ipsa delectus nam{" "}
          </p>
          <Link to="/auditorium">
            <button className="view-btn" style={{ background: "#630202" }}>
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
