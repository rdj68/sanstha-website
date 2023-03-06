import React from "react";

const Founder = () => {
  return (
    <div className=" px-10 md:mx-20 m-2 rounded-lg text-center ">
      <div>
        <p className="md:text-3xl font-bold ">
          Amrutvahini Sheti and Shikshan Vikas Sanstha, Sangamner
        </p>
        <div className="flex flex-col items-center mt-4 md:flex-row gap-4">
          <img
            className="h-[130px] w-[130px] md:h-[250px] md:w-[250px] object-cover rounded-full shadow-md"
            src="https://pbs.twimg.com/media/FI4I2TUaMAQdcJ6?format=jpg&name=large"
            alt=""
          />
          <div className="mt-5">
            <p className="font-bold text">
              Late. Shri. Bhausaheb Santuji Thorat Founder, Amrutvahini Sheti
              and Shikshan Vikas Sanstha, Sangamner
            </p>
            <p className="mt-7">
              In the late seventies of the last century, Sangamner - a rural
              area was suffering from poverty, illiteracy, drought and
              unemployment. The basic cause of all these evils was rightly
              identified by Honorable Shri. Bhausaheb Thorat, a leader of
              cooperative movement, a great visionary and philanthropist. He
              converted his thoughts into reality by creating educational and
              training facilities. For this, he has founded the Amrutvahini
              Sheti and Shikshan Vikas Sanstha in 1978 to provide education to
              the poor farmer at his doorstep, which boosted the socioeconomic
              progress of the rural people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
