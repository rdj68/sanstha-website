import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const VisionAndMission = () => {
  return (
    <div className=" p-10 w-[98vw]  ml-2">
      <div className="flex flex-col items-center md:flex-row w-full justify-between gap-8 ">
        <div className="w-[100%] md:w-[50%] shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-out min-h-[400px] text-center  p-4 rounded-lg">
          <p className="text-4xl font-bold">Vision</p>
          <p className="text-xl mt-10">
            "Transformation of Rural people by means of Excellent EDUCATION"
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-out min-h-[400px] text-center  p-4 rounded-lg">
          <p className="text-4xl font-bold">Mission</p>
          <div className="mt-10 flex flex-col gap-4  text-xl">
            <div className="flex gap-2 items-center p-4 border-[1px] rounded-lg border-green-300 ">
              <CheckIcon className="h-6 w-6 text-green-500" />
              <p>To impart the best knowledge as per the norms of Education.</p>
            </div>
            <div className="flex gap-2 items-center p-4 border-[1px] rounded-lg border-green-300 ">
              <CheckIcon className="h-6 w-6 text-green-500" />
              <p>To produce competent and trustworthy youths for country.</p>
            </div>
            <div className="flex gap-2 items-center p-4 border-[1px] rounded-lg border-green-300 ">
              <CheckIcon className="h-6 w-6 text-green-500" />
              <p>To increase the employment rate of youth from Rural area in various sectors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
