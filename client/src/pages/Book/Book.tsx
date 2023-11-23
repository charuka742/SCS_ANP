import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const Book = () => {
  //for book now form
  interface User1 {
    token: number;
    user: object;
    // add any other properties that your user object has
  }

  const [userdetails, setUserDetails] = useState<any>(
    localStorage.getItem("loggedUser")
  );
  const user1: User1 | null = userdetails ? JSON.parse(userdetails) : null;

  const userJson = localStorage.getItem("loggedUser");
  const userEmail = localStorage.getItem("userEmail");
  const user: User | null = userJson ? JSON.parse(userJson).user : null;

  const [note, setNote] = useState<any>();
  const [resources, setResources] = useState<any>([]);
  const [data, setData] = useState<any>({
    resourceId: null,
    date: "",
    startTime: "",
    endTime: "",
    userId: user?.userId,
  });

  const navigate = useNavigate();

  interface User {
    userId: number;
    fname: string;
    lname: string;
    telephone: string;
    userRole: string;
    role: string;
  }

  // console.log("A:>>", user?.userId);

  const [isAvailable, setIsAvailable] = useState<any>(false);

  // get mapping for getting data

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllResources`)
      .then((res) => setResources(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  // console.log("resource>>", resources);

  const placesUser = resources.filter(
    (item: any) => item[`${user?.userRole}Avalibility`] === true
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(event.target.value);
  };

  // console.log("VEN:>>", data);
  //post mapping for reservation
  const handleBooking = (e: any) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/addReservation`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: { ...data, note },
    };

    axios(config).then(function (response) {
      if (response.data.status === 1) {
        // console.log(response.data.data);
        // localStorage.setItem("loggedUser", JSON.stringify(response.data.data));
        // localStorage.setItem("userId", data.userId);
        toast.success("Reservation Successful");
        // navigate("/");
        // navigate(0);
        return;
      } else {
        // toast.error(result.data.user.message);
        toast.error("Reservation is not complete");
        console.log("Reservation not complete");
      }
    });
  };
  // console.log({ ...data, note });
  // console.log(note);
  const [avalible, setAvalible] = useState<boolean>(false);
  const checkAvalibility = (e: any) => {
    e.preventDefault();

    const request = {
      resourceId: data.resourceId,
      selectedDate: data.date,
      selectedTimeFrom: data.startTime,
      selectedTimeTo: data.endTime,
    };
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/checkresourceavalibility`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: request,
    };

    axios(config).then(function (response) {
      if (response.data.status === 1) {
        setAvalible(true);
        toast.success("Resource avalible");
        return;
      } else {
        setAvalible(false);
        toast.error("Resource not avalible");
        console.log("Reservation not complete");
      }
    });
  };

  console.log("AAA>>", data);

  return (
    <div>
      <h1 className="booking-title">Booking</h1>
      <form action="" method="" className="booking-form">
        <div>
          <h1 className="check-details">Availability Check</h1>
          <div className="checkAvailable">
            <div>
              <label htmlFor="checkVenue" className="labelText">
                Venue Name
              </label>
              <select
                name="resourceId"
                id="checkVenue"
                className="inputCheck"
                onChange={(e) => handleChange(e)}
              >
                <option> Choose Resource </option>
                {placesUser?.map((item: any, index: any) => (
                  <option value={item.resourceId} key={index}>
                    {item?.resourceName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="checkDate" className="labelText">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="checkDate"
                className="inputCheck"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="checkTime" className="labelText">
                Time
              </label>
              <input
                name="startTime"
                type="time"
                id="checkTime"
                className="inputCheck"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="checkToTime" className="labelText">
                To
              </label>
              <input
                type="time"
                name="endTime"
                id="checkToTime"
                className="inputCheck"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {isAvailable && <p>Not available</p>}
          <button
            className="checkButton"
            style={{
              backgroundColor: data.startTime >= data.endTime ? "grey" : "",
            }}
            disabled={data?.startTime >= data?.endTime ? true : false}
            onClick={checkAvalibility}
          >
            Check
          </button>
        </div>

        {avalible === true && (
          <div>
            <div>
              <h1 className="bookLocation-title">Book the Location</h1>
              <div className="location-details">
                <div style={{ marginTop: "15px" }}>
                  <label htmlFor="bookingName" className="booking-details">
                    Full Name
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="bookingName"
                    className="booking-area"
                    value={user !== null ? user?.fname + " " + user?.lname : ""}
                  />
                </div>
                <div style={{ marginTop: "15px" }}>
                  <label htmlFor="bookingMail" className="booking-details">
                    E mail
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="bookingMail"
                    className="booking-area"
                    value={userEmail !== null ? userEmail : ""}
                  />
                </div>
                <div style={{ marginTop: "15px" }}>
                  <label htmlFor="bookingNumber" className="booking-details">
                    Phone Number
                  </label>
                  <input
                    disabled={true}
                    type="text"
                    id="bookingNumber"
                    className="booking-area"
                    value={user !== null ? user?.telephone : ""}
                  />
                </div>
                <div style={{ marginTop: "15px" }}>
                  <label htmlFor="bookingVenue" className="booking-details">
                    Venue Name
                  </label>
                  <select
                    disabled={true}
                    name="resourceId"
                    id="bookingVenue"
                    className="booking-area"
                    value={data !== null ? data?.resourceId : ""}
                  >
                    {placesUser.map((item: any, index: any) => (
                      <option value={item?.resourceId} key={index}>
                        {item.resourceName}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    display: "grid",
                    gridTemplateColumns: "14% 86%",
                  }}
                >
                  <label
                    htmlFor="bookingRequirment"
                    className="booking-details"
                  >
                    Requirments
                  </label>
                  <textarea
                    id="bookingRequirment"
                    onChange={(e: any) => {
                      setNote(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <div style={{ marginTop: "15px" }}>
                    <label htmlFor="bookingDate" className="booking-details">
                      Date
                    </label>
                    <input
                      disabled={true}
                      type="date"
                      id="bookingDate"
                      className="booking-area"
                      value={data?.date}
                    />
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <label htmlFor="bookingTime" className="booking-details">
                      Time
                    </label>
                    <input
                      disabled={true}
                      type="time"
                      id="bookingTime"
                      className="booking-area"
                      value={data?.startTime}
                    />
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <label htmlFor="bookingToTime" className="booking-details">
                      To
                    </label>
                    <input
                      disabled={true}
                      type="time"
                      id="bookingToTime"
                      className="booking-area"
                      value={data?.endTime}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="book-button" onClick={(e) => handleBooking(e)}>
              Book
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Book;
