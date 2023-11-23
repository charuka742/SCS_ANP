import React from "react";

const FeedbackCard = ({ feedback }: any) => {
  return (
    <div>
      <div className="w-[420px] h-[48px] ml-[20px] mt-[10px] border-[10px] bg-white">
        <p className="text-[14px] text-black font-bold p-[5px] w-[400px] h-[29px]">
          {feedback}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
