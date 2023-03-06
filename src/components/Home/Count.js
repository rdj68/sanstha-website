import bg from "./photos/count_bg.jpg";
import courseIcon from "./photos/courseIcon.png";
import studentIcon from "./photos/studentIcon.png";
import teacherIcon from "./photos/teacherIcon.png";
import expIcon from "./photos/experienceIcon.png";
import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

export const Count = () => {
  return (
    <>
      <div
        className="flex flex-wrap md:py-20"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-1/2 md:w-1/4 flex p-5 text-white">
          <img
            className="w-1/4 md:w-1/4 "
            src={teacherIcon}
            alt="TeacherIcon"
          />
          <div className="flex flex-col text-4xl">
            <ModifiedCountUp end={400} />
            <p className="text-xl">Teachers</p>
          </div>
        </div>

        <div className="w-1/2 md:w-1/4 flex p-5 text-white">
          <img
            className="w-1/4 md:w-1/4 "
            src={studentIcon}
            alt="studentIcon"
          />
          <div className="flex flex-col text-4xl">
            <ModifiedCountUp end={1500} />
            <p className="text-xl">Students</p>
          </div>
        </div>

        <div className="w-1/2 md:w-1/4 flex p-5 text-white">
          <img className="w-1/4 md:w-1/4 " src={courseIcon} alt="course" />
          <div className="flex flex-col text-4xl">
            <ModifiedCountUp end={25} />
            <p className="text-xl">Courses</p>
          </div>
        </div>

        <div className="w-1/2 md:w-1/4 flex p-5 text-white">
          <img className="w-1/4 md:w-1/4 " src={expIcon} alt="exp" />
          <div className="flex flex-col text-4xl">
            <ModifiedCountUp end={42} />
            <p className="text-xl">Years Exp.</p>
          </div>
        </div>
      </div>
    </>
  );
};

function ModifiedCountUp({ end }) {
  return (
    <CountUp end={end}>
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
}
