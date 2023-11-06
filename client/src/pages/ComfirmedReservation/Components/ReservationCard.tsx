import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const ReservationCard = ({
  resourceId,
  userId,
  date,
  startTime,
  endTime,
  setDeleteId,
  reservationId,
}: any) => {
  const [user, setUser] = useState<any>();
  const [resource, setResource] = useState<any>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getuserbyid/${userId}`)
      .then((res) => {
        if (res.data.status === 1) {
          setUser(res.data.data);
          // toast.success("Reservation Deleted");
        } else {
          // toast.error("Reservation not Deleted");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/getresourcebyid/${resourceId}`
      )
      .then((res) => {
        if (res.data.status === 1) {
          setResource(res.data.data);
          // console.log("resource Added");
        } else {
          // console.log("resource not Added");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (e: any) => {
    e.preventDefault();
    setDeleteId(reservationId);

    axios
      .delete(
        `${process.env.REACT_APP_API_BASE_URL}/deleteReservation/${reservationId}`
      )
      .then((res) => {
        if (res.data.status === 1) {
          setResource(res.data.data);
          toast.success("Reservation Deleted");
        } else {
          toast.error("Reservation not Deleted");
        }
      })
      .catch((err) => console.error(err));
  };

  //accept mail

  const handleAcceptMail = (e: any) => {
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/acceptMailSend/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: userId,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        if (response.data.status === 1) {
          console.log(response.data);
          // window.location.reload();
          toast.success("Mail Send");
          // navigate("/login");
          // navigate(0);
          return;
        } else {
          toast.error("Mail not send");
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //cancel mail

  const handleCancelMail = (e: any) => {
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/cancelMailSend/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: userId,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        if (response.data.status === 1) {
          console.log(response.data);
          // window.location.reload();
          toast.success("Mail Send");
          // navigate("/login");
          // navigate(0);
          return;
        } else {
          toast.error("Mail not send");
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-around items-start bg-slate-900 w-[95%] h-[110px] rounded-[25px]">
      <div className="">
        <h1 className="text-white text-[15px] pt-[20px] font-bold">
          Resource Name
        </h1>
        <h1 className="text-white text-[15px] pt-[10px] font-bold">
          {resource?.resourceName}
        </h1>
      </div>
      {/* <div className="mt-[30px]"> */}
      <div className="">
        <h1 className="text-white text-[15px] w-full pt-[20px] font-bold">
          Name
        </h1>
        <h1 className="text-white text-[15px] pt-[20px] font-bold">
          {`${user?.fname}`}
          {/* <br />
          {`${user?.lname}`} */}
        </h1>
      </div>
      <div className="">
        <h1 className="text-white text-[15px] w-full pt-[20px] font-bold">
          Date
        </h1>
        <h1 className="text-white text-[15px] pt-[20px] font-bold">{date}</h1>
      </div>
      <div className="">
        <h1 className="text-white text-[15px] w-full pt-[20px] font-bold">
          Start Time
        </h1>
        <h1 className="text-white text-[15px] pt-[20px] font-bold">
          {startTime}
        </h1>
      </div>
      <div className="">
        <h1 className="text-white text-[15px] w-full pt-[20px] font-bold">
          End Time
        </h1>
        <h1 className="text-white text-[15px] pt-[20px] font-bold">
          {endTime}
        </h1>
      </div>
      {/* </div> */}
      <div className="flex justify-around -mt-8">
        <div className="mt-[60px]">
          <button
            className="w-[50px] h-[50px] rounded-[50px] text-white bg-green-600 hover:bg-green-400 font-bold text-[15px]"
            onClick={handleAcceptMail}
          >
            <div className="flex justify-center">
              <FaCheck />
            </div>
          </button>
        </div>
        <div className="mt-[60px]">
          <button
            className="w-[50px] h-[50px] rounded-[50px] ml-4 text-white bg-red-600 hover:bg-red-400 font-bold text-[15px]"
            onClick={(e) => {
              handleDelete(e);
              handleCancelMail(e);
            }}
          >
            <div className="flex justify-center">
              <FaTrash />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
