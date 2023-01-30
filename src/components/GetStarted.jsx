import React from "react";

//Assets
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
    <div className="flex justify-center items-center flex-col bg-primary w-full h-full rounded-full">
      <div className="flex justify-center items-start">
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-3">
          <span className="text-gradient">Get</span>{" "}
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
