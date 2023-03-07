import React from "react";
import bbb from "./bbb.jpg";

export const Ceo = () => {
  const temp = [
    {
      name: "Hon. Anil B. Shinde",
      position: "Chief Executive Officer AVSSV, Sanstha",
      desc: "In the globalized world, India needs to produce world-class professionals in the fields of Engineering, Medicine, Pharmacy, and Management. For that, state-of-the-art education facilities are a must. And we at Amrutvahini Sheti and Shikshan Vikas Sanstha strive hard to provide them. We work with a great sense of determination and commitment to fulfill the dreams of our students.We aspire to be recognized by people as the leading organization in imparting quality education to the youths of India and make ASSVS a unique hub of technical education, research, and placement.As an esteemed organization, we assure you that the faith you have put in us is meaningful and wise. You will get benefited from it.",
    },
  ];

  return (
    <>
      <div>
        <b>
          <center className="mt-10 text-4xl">
            <h1> CEO's Desk</h1>
          </center>
        </b>
      </div>

      {temp.map((post, po) => {
        return (
          <>
            <div class="flex justify-center  md:mx-20 mx-3 mt-10 mb-10">
              <div class="flex flex-col rounded-lg bg-gray-200 shadow-lg dark:bg-neutral-700  md:flex-row">
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
