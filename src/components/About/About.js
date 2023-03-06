import React from "react";
import { bod } from "./aboutData";
import { President } from "./President";
import { Trustee } from "./Trustee";
import { Manager } from "./Manager";
import { Ceo } from "./Ceo";

export const About = () => {
  return (
    <>
      <President />
      <Trustee />
      <Manager />
      <Ceo />
      <div>
        <h1 className="text-3xl text-left">Board of Directors</h1>
        <div className="bod flex w-full overflow-x-scroll my-5">
          {bod.map((person) => (
            <CardBod
              key={person.name}
              name={person.name}
              post={person.position}
              imgSrc={process.env.PUBLIC_URL + person.src}
              description={person.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

function CardBod({ name, post, description, imgSrc }) {
  return (
    <div className="w-1/2 sm:w-1/3 flex-shrink-0 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col md:flex-row p-2">
        <img
          className="mx-5 md:w-1/2 rounded-full shadow-lg"
          src={imgSrc}
          alt={name}
        />
        <div className="pl-2 text-center">
          <h1 className="sm:text-2xl font-semibold  dark:text-white">{name}</h1>
          <h2 className="text-sm font-semibold dark:text-white">
            {post},<br />
            ASSVS
          </h2>
        </div>
      </div>
      {/* <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div> */}
    </div>
  );
}
function PresidentMessage({ name, post, description, imgSrc }) {
  return (
    <>
      <div>
        <h1 className="text-3xl text-left"> President's Message</h1>
      </div>
      <div class="flex ml-20 mr-20 mt-10 mb-10">
        <div class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700  md:flex-row">
          <img
            class="h-full w-full rounded-t-lg md:w-full md:rounded-none md:rounded-l-lg"
            src={imgSrc}
            alt="no"
          />

          <div class="flex flex-col p-6">
            <h5 class="mb-2 text-4xl font-medium text-neutral-800 dark:text-neutral-50">
              {name}
            </h5>
            <p class="text-xl text-neutral-500 dark:text-neutral-300">{post}</p>
            <br />

            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
