import React from "react";
import { bod, messsageList } from "./aboutData";

export const About = () => {
  return (
    <>
      {messsageList.map((person) => (
        <CardMessage
          key={person.name}
          name={person.name}
          message={person.message}
          post={person.position}
          imgSrc={person.imgSrc}
          color={person.colorBg}
          heading={person.heading}
        />
      ))}
      <div>
        <h1 className="text-3xl text-center font-bold">Board of Directors</h1>
        <div className="bod flex w-full overflow-x-scroll my-5">
          {bod.map((person) => (
            <CardBod
              key={person.name}
              name={person.name}
              post={person.position}
              imgSrc={person.src}
            />
          ))}
        </div>
      </div>
    </>
  );
};

function CardBod({ name, post, imgSrc }) {
  return (
    <div className="w-1/2 sm:w-1/3 flex-shrink-0 mb-5 bg-gray-200 hover:shadow-lg cursor-pointer mx-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

function CardMessage({ heading, name, post, message, imgSrc, color }) {
  return (
    <>
      <div className="mt-5">
        <b className="mt-10 text-4xl text-center">
          <h1>{heading}</h1>
        </b>
      </div>
      <div className={"flex justify-center md:mx-20 mx-3  mt-10 mb-10" + color}>
        <div className="flex flex-col rounded-lg shadow-lg dark:bg-neutral-700  md:flex-row">
          <img
            className="h-full w-full rounded-t-lg md:w-full md:rounded-none md:rounded-l-lg"
            src={imgSrc}
            alt={heading}
          />

          <div className="flex flex-col p-6">
            <h5 className="mb-2 text-4xl font-medium text-neutral-800 dark:text-neutral-50">
              {name}
            </h5>
            <p className="text-xl text-neutral-500 dark:text-neutral-300">
              {post}
            </p>
            <br />

            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
