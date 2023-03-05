import React from "react";
import bbb from "./bbb.jpg";

export const Directors = () => {
  const temp = [
    {
      name: "Shri. Balasaheb Bhausaheb Thorat",
      position: "President",
      age: 64,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },
    {
      name: "Shri. Keruji Haruji Gunjan Patil",
      position: "Vice President",
      age: 87,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },
    {
      name: "Shri. Bajirao Khandu Khemna",
      position: "Trustee",
      age: 81,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },
    {
      name: "Shri.Laxmanrao Balaji Kute",
      position: "Trustee",
      age: 67,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },
    {
      name: "Dr. Sudhir Bhaskarrao Tambe",
      position: "Trustee",
      age: 62,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },
    {
      name: "Shri. Ramnath Bhaurao Sonawane",
      position: "Trustee",
      age: 72,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },
    {
      name: "Shri Tulshiram Prabhakar Bhor",
      position: "Trustee",
      age: 62,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },

    {
      name: "Sou. Sharayu Ranjeet Deshmukh",
      position: "Trustee",
      age: 36,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },

    {
      name: "Shri Madhav Karbhari Chaudhari",
      position: "Trustee",
      age: 69,
      facebook: "facebook",
      twitter: "twitter",
      linkedin: "linkedin",
    },
  ];

  return (
    <>
      <div>
        <b>
          <center className="mt-10 text-4xl">
            <h1> Board of Directors</h1>
          </center>
        </b>
      </div>
      <div className="flex flex-wrap ml-8 mb-10 mt-10">
        {temp.map((post, po) => {
          return (
            <>
              <div class="flex m-5 justify-center">
                <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <a href="#!">
                    <img class="rounded-t-lg" src={bbb} alt="no" />
                  </a>
                  <div class="p-4">
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {post.name}
                    </h5>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      {post.position}
                    </p>
                    <h3 class="mb-4 text-xl text-neutral-600 dark:text-neutral-200">
                      Age : <b>{post.age}</b>
                    </h3>

                    <button
                      type="button"
                      class="inline-block rounded bg-primary mx-2 px-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Facebook
                    </button>
                    <button
                      type="button"
                      class="inline-block rounded bg-primary mx-2 px-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Twitter
                    </button>
                    <button
                      type="button"
                      class="inline-block rounded bg-primary mx-2 px-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
