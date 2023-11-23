import React, { useEffect, useState } from "react";
import ReservationCard from "./Components/ReservationCard";
import axios from "axios";

const ComfirmedReservation = () => {
  const [reservation, setReservation] = useState<any>([]);
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    const filterdData = reservation?.filter(
      (r: any) => r.reservationId !== deleteId
    );
    setReservation(filterdData);
  }, [deleteId]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllReservation`)
      .then((res) => setReservation(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  console.log("AAAAfuck>>", reservation);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="mt-[20px] mb-[20px] text-black text-[50px] font-bold">
          Reservation
        </h1>
      </div>
      <div className="ml-[15px] mb-[100px] mt-[50px] grid grid-flow-rows gap-8">
        {reservation?.map((r: any) => (
          <>
            <ReservationCard
              resourceId={r.resourceId}
              userId={r.userId}
              date={r.date}
              startTime={r.startTime}
              endTime={r.endTime}
              setDeleteId={setDeleteId}
              reservationId={r.reservationId}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ComfirmedReservation;
