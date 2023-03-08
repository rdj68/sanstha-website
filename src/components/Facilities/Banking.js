import React from "react";
import Hostel_img from "./hostel.jpg";
const Banking = () => {
  const temp1 = [
    {
      desc: "R.O. drinking water with cooler, capacity of R. O. is 250 Liter/Hr. Available Drinking Water per student per day = 10.27 Liter",
    },
    {
      desc: "(250Lit/Hr x 24=6000Liter/584= 10.27 Liter) [Sinhgad]Hot water Facility. Available Hot water per student per day = 22.26 Liter",
    },
    {
      desc: "(Using Solar System with Capacity of 13000 Lit/584 student= 22.26 Lit.)3. Normal usable water approximately 75 Lit. per student per day",
    },
    {
      desc: "First Aid and Medical Dispensary (MBSS Doctor is available during 6pm to 8pm daily)",
    },
    { desc: "Vehicle for medical emergency is available" },
    { desc: "24 Hr Power supply with 200KVA , 63KVA generator backup" },
    { desc: "Wi-Fi Facility in hostel premises" },
    { desc: "LCD Television with Dish Connection" },
    { desc: "Daily 5 News paper(Including Two English News paper)" },
  ];

  const temp2 = [
    { desc: "Separate fitness center for Boys and Girls" },
    { desc: "Guest house for parents in hostel campus" },
    {
      desc: "Xerox, Laundry, Book stall, general stores & Beauty Parlor for Girls",
    },
    { desc: "For Safety Fire Extinguishers are install in all hostel" },
    { desc: "Security Person available in each hostel" },
    { desc: "CCTV Install in all hostels" },
    { desc: "Five Mess and Canteen" },
    { desc: "Internet Center at girls hostel" },
    { desc: "Reading room for girls at hostel" },
    { desc: "Open Theater space for to show Movies and any emergency" },
    {
      desc: "Compliant register is placed, so that students can register their complaints which may solved with two days",
    },
    { desc: "Biometric attendance in girls hostel" },
  ];

  return (
    <>
      <div className="flex flex-col md:mx-40 md:px-22 mx-2 text-center items-center">
        <div className="py-10 text-center">
          <b className="text-5xl text-center">Banking</b>
        </div>
        <div>
          <img
            className="md:px-20 md:h-[400px] md:w-[1000px]"
            src={Hostel_img}
            alt=""
          />
        </div>
        <div className="py-10">
          <p className="space-y-2 font-semibold">
            The Hostel Complex has been built within the campus. Three
            independent blocks are provided for boys and a separate block for
            girl students. All the hostels encompass beautiful gardens. Each
            hostel has resident rector to monitor and to maintain the
            discipline. Hostel rooms are airy, clean and well furnished.{" "}
          </p>
        </div>
        <div>
          <b className="text-[25px]">Facilities : </b>
        </div>
        <div className="py-2 flex flex-col md:flex-row shadow-md px-5 pb-10">
          <div className="md:w-1/2">
            <ul class="my-5  space-y-2 text-left text-gray-400 dark:text-gray-400"></ul>
            {temp1.map((post) => {
              return (
                <>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>{post.desc}</span>
                  </li>
                </>
              );
            })}
          </div>
          <div className="md:w-1/2">
            <ul class="my-5  space-y-2 text-left text-gray-400 dark:text-gray-400"></ul>
            {temp2.map((post) => {
              return (
                <>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>{post.desc}</span>
                  </li>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banking;
