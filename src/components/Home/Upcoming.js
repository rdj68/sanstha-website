import React from "react";

export const Upcoming = () => {
  let temp = [
    {
      date: "10 Jan 2023",
      name: "Medha 2k23",
      desc: "lorem20 fdgdfh hdfh dh h dhd hd hhd hdddddddddddddddd hhhhghgfn ",
    },
    {
      date: "20 March 2023",
      name: "Medha 2k23",
      desc: "lorem20 fdgdfh hdfh dh h dhd hd hhd hdddddddddddddddd hhhhghgfn ",
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-semibold md:mb-6 text-center">
        Upcoming Events
      </h1>
      <div className="flex flex-col md:flex-row mx-2 md:m-3">
        <div className="text-center md:w-1/2">
          <img
            className="w-full h-[700px] object-contain"
            src="/home/medha.jpeg"
            alt="medha"
          ></img>
        </div>
        <div className="text-center md:w-1/2 border-[1px]  shadow-md rounded-md p-2">
          {temp.map((item, index) => (
            <marquee key={index}>
              <CardUpcoming
                date={item.date}
                name={item.name}
                desc={item.desc}
              />
            </marquee>
          ))}
        </div>
      </div>
    </>
  );
};

function CardUpcoming({ date, name, desc }) {
  return (
    <div className="flex flex-col m-2 gap-2 p-3 bg-yellow-200  rounded-lg text-center">
      <div className="font-bold text-2xl ">{date}</div>
      <div className="flex flex-col">
        <div className="font-semibold p-2">{name}</div>
        <div className="text-sm w-[300px]">{desc}</div>
      </div>
    </div>
  );
}
