import React from "react";
import { instituteData } from "./InstituteData";

export function Institutes() {
  return (
    <div className="p-2">
        <p className="text-4xl mb-4 font-semibold text-center">Institutes</p>
      <div className="flex flex-row gap-2 overflow-auto">
        {instituteData.map((institute, index) => {
          return (
            <InstituteCard
              key={index}
              name={institute.name}
              description={institute.description}
              imgSrc={institute.src}
            />
          );
        })}
      </div>
    </div>
  );
}
function InstituteCard({ name, description, imgSrc }) {
  return (
    <div className="w-1/2 sm:w-1/5 flex-shrink-0 mb-5 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col p-2">
        <img className="mx-5 shadow-lg" src={imgSrc} alt={name} />
        <div className="pl-2 text-center">
          <h1 className="sm:text-2xl font-semibold  dark:text-white">{name}</h1>
        </div>
      </div>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
