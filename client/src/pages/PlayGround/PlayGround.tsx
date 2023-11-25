<<<<<<< HEAD
import React from 'react'

const PlayGround = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <button
                className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none focus:shadow-outline-blue"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </form>
=======
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
>>>>>>> 44b090ac0a9474c8f5ab99183e1bc00c51a238d7
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}

export default PlayGround
=======
};

export default PlayGround;
>>>>>>> 44b090ac0a9474c8f5ab99183e1bc00c51a238d7
