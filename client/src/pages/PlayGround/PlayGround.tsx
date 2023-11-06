import React, { useEffect, useState } from "react";
import play4 from "photos/paly4.jpg";
import play3 from "photos/play3.jpeg";
import play2 from "photos/play2.jpg";
import play1 from "photos/play1.jpeg";
import play from "photos/playground.jpg";
import "./PlayGround.css";
import { Link } from "react-router-dom";
import { ImageViewer } from "react-image-viewer-dv";
import axios from "axios";
import FeedbackCard from "./Components/FeedbackCard";

const PlayGround = () => {
  const [feedbacks, setFeedbacks] = useState<any>([]);

  //get all feedback
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getFeedbackByResourceId/2`)
      .then((res) => setFeedbacks(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  // const placeFeedback = feedback.filter;

  console.log("feedback>>?", feedbacks);

  return (
    <div>
      <div className="pg-first-section">
        <div>
          <ImageViewer>
            <img
              className="big-image"
              src={play}
              alt="university play ground"
            />
          </ImageViewer>
        </div>
        <div>
          <div>
            <ImageViewer>
              <img
                className="small-image"
                src={play1}
                alt="university play ground"
              />
            </ImageViewer>
            <ImageViewer>
              <img
                className="small-image"
                src={play2}
                alt="university play ground"
              />
            </ImageViewer>
          </div>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <ImageViewer>
            <img
              className="small-image"
              src={play3}
              alt="university play ground"
            />
          </ImageViewer>
          <ImageViewer>
            <img
              className="small-image"
              src={play4}
              alt="university play ground"
            />
          </ImageViewer>
        </div>
      </div>
      <div className="pg-second-section">
        <div>
          <h2 id="pg-title">Play Ground</h2>
          <hr className="pg-line" />
          <p className="pg-content">
            Lorem ipsum dolor sit amet. Et illum odio est voluptates inventore
            At praesentium similique qui nostrum quia aut suscipit dolorem vel
            voluptatem fugiat vel iusto galisum. Ut dolores nobis et
            necessitatibus necessitatibus in corrupti dolores quo esse dolorem
            non officiis corporis hic corrupti sequi. Vel incidunt cupiditate
            non quis voluptas et excepturi sint in voluptatum inventore est
            asperiores consequuntur qui maiores consequatur qui quia ullam. Et
            recusandae eligendi hic quia galisum ad atque sunt qui eligendi
            vitae! Qui totam similique et voluptatem totam et ipsum totam ut
            sunt veniam aut asperiores nulla. Sed consequatur repellendus eum
            accusamus rerum et minus neque aut repellendus molestiae eos ipsa
            delectus nam{" "}
          </p>
          <button className="book-btn">
            <Link to="/book">Book Now</Link>
          </button>
        </div>
        <div>
          <h4 id="pg-rating">Ratings</h4>
          <div className="pg-rating-star"></div>
          <p id="rate-number">256 ratings</p>
          <div>
            <h1 id="reviews-text">Reviews</h1>
            <div className="overflow-y-scroll reviews-section">
              {feedbacks?.map((f: any) => (
                <>
                  <FeedbackCard feedback={f.feedbackText} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
