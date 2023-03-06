import React from "react";
import bbb from "./bbb.jpg";

export const Manager = () => {
  const temp = [
    {
      name: "Hon. Prof. V. B. Dhumal",
      position: "Manager Desk",
      desc: "Amrutvahini Sheti and Shikshan Vikas Sanstha has been instrumental in shaping the career of thousands of students in the last 39 years. We are committed to providing quality-based education with excellent teaching-learning processes for the exceptional development of the students. Apart from education, the Santha strives to develop students socially and culturally to make them good human beings. We believe our students should face the growing challenges of the globalized world with confidence and talent by employing knowledge of Technical skills and Managerial skills.",
    },
  ];

  return (
    <>
      <div>
        <b>
          <center className="mt-10 text-4xl">
            <h1> Manager Desk</h1>
          </center>
        </b>
      </div>

      {temp.map((post, po) => {
        return (
          <>
            <div class="flex justify-center  md:mx-20 mx-3  mt-10 mb-10">
              <div class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700  md:flex-row">
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
