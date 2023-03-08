import React from "react";

const Other = () => {
  const temp1 = [
    {
      name: "Power House",
      desc: "A 485 KVA Diesel Genset as a standby is installed to take care of uninterrupted power supply to the entire campus including hostels and quarters",
    },
    {
      name: "Central Computing Facilities",
      desc: "81 IBM machines with eye friendly TFT screens + 1 Server Xenon Make 100 mbps Leased Line for internet Connectivity with Wi-Fi Communication and Personality Development Software Career and Language software.",
    },
    {
      name: "Mess and Canteen",
      desc: "The students are provided with the hygienically prepared excellent quality food in a common mess hall. The campus has the canteens for snacks/fast food/refreshments.",
    },
  ];
  const temp2 = [
    {
      name: "AmrutKuti - Guest house",
      desc: "A beautiful guest house with ultramodern facilities comprising conference hall, dining hall and recreational facilities is situated on the hillock, which is surrounded by gardens. A panoramic scene of the campus,can be viewed from the guest house.",
    },
    {
      name: "Banking/ATM",
      desc: "The AVCOE has an extension counter of Sahakar Maharshi Shri Bhausaheb Thorat Sahakari Bank in its main building facilitating the financial transactions of the engineering students at the campus. The college also has the ATM of Union Bank for smooth monetary transaction.",
    },
  ];

  return (
    <>
      <h1 className="text-5xl text-bold text-center mb-2 sm:mt-2">
        Other Services
      </h1>

      <section className="text-neutral-700">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-col md:flex-row md:m-2 gap-3 ">
            <div className="flex flex-col md:w-1/2 md:p-3 gap-5 bg-gray-200 rounded-lg">
              {temp1.map((pos, index) => {
                return (
                  <div key={index}>
                    <b className="text-xl">{pos.name}</b>
                    <div className="w-full p-1 md:p-2">{pos.desc}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col md:w-1/2 md:p-3 gap-5 bg-gray-200 rounded-lg">
              {temp2.map((pos, index) => {
                return (
                  <div key={index}>
                    <b className="text-xl">{pos.name}</b>{" "}
                    <div className="w-full p-1 md:p-2">{pos.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Other;
