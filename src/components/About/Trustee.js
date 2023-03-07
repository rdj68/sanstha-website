import React from "react";
import bbb from "./bbb.jpg";

export const Trustee = () => {
  const temp = [
    {
      name: "Hon. Dr. Sudhir Bhaskarrao Tambe",
      position: "Member of Legislative Council , Maharashtra State",
      desc: "The education imparted in the schools and colleges of Amrutvahini Sheti and Shikshan Vikas Sanstha is the sum of all attributes required in any profession. We impart quality education to enhance the personality of our students; build their character and intellect, thereby making them reliable and self-sufficient in this highly competitive world. Our objective is not only to educate students but also to instill in them values of integrity, honesty, and capability for hard work. ASSVS services students to realize their dreams and spread their wings to soar high in the sky.",
    },
    {
      name: "Hon. Sau Sharayutai Deshmukh",
      position: "...........:......",
      desc: "Amrutvahini Sheti and Shikshan Vikas Sanstha is strive hard to maintain the cultural and aesthetic environment in all institutes, which is necessary for the overall development of the students. Cultural activities have been organized to showcase hidden talents in the students. For that, Sanstha always organizes various competitions and programs in its schools and colleges.",
    },
  ];

  return (
    <>
      <div>
        <b>
          <center className="md:mt-10 mx-2 text-4xl">
            <h1> Managing Trustee Desk</h1>
          </center>
        </b>
      </div>

      {temp.map((post, po) => {
        return (
          <>
            <div class="flex justify-center md:mx-20 mx-3 mt-10 mb-10">
              <div class="flex flex-col rounded-lg bg-purple-100 shadow-lg dark:bg-neutral-700  md:flex-row">
                <img
                  class="h-full w-full rounded-t-lg md:w-full md:rounded-none md:rounded-l-lg"
                  src={bbb}
                  alt="no"
                />

                <div class="flex flex-col p-6">
                  <h5 class="mb-2 text-4xl font-medium text-neutral-800 dark:text-neutral-50">
                    {post.name}
                  </h5>
                  <p class="text-xl text-neutral-500 dark:text-neutral-300">
                    {post.position}
                  </p>
                  <br />

                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {post.desc}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
