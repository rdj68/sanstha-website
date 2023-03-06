import React from "react";
import logo from "./slogo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white  pt-8">
      <div className="flex flex-col sm:flex-row px-4">
        <div className="flex flex-wrap text-left">
          <h4 className="text-xl font-semibold">
            Amrutvahini Sheti and Shikshan Vikas Sanstha, Sangamner
          </h4>
          <Contact />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-wrap mb-6 justify-end">
            <NavLinks />
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

function NavLinks() {
  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Institutes",
      path: "/",
    },
    {
      name: "Facilities",
      path: "/",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <div className="w-full lg:w-1/3 ml-auto">
      <span className="hidden sm:block uppercase text-violet-500 text-4sm font-semibold mb-2">
        Useful Links
      </span>
      <ul className="list-unstyled flex sm:flex-col gap-2">
        {navData.map((items) => (
          <li key={items.name}>
            <a
              className="text-blueGray-600 hover:scale-110 hover:text-violet-500 font-semibold block pb-2 text-sm"
              href={items.path}
            >
              {items.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Logo() {
  return (
    <div className="w-full lg:w-1/3 px-4">
      <img
        className="hidden sm:block md:w-full h-[100px] object-contain w-[100px]"
        src={logo}
        alt="ASSVS"
      />
      <div className="w-full text-center mt-10">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023 </span> by AVCOE
        </div>
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          All Rights Reserved
        </div>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="w-full lg:w-1/2 pb-5 text-left">
      <br />
      <h2 className=" mt-0 mb-1 text-blueGray-600">
        <b>Address : </b>ASSVS, Sangamner, A. Nagar-422608
      </h2>
      <h5 className=" mt-0 mb-1 text-blueGray-600">
        <b>Email : </b> principal@avcoe.org
      </h5>
      <h5 className=" mt-0 mb-1 text-blueGray-600">
        <b>Phone : </b> (02425) 259015/16/17/18 259148
      </h5>
      <h5 className=" mt-0 mb-1 text-blueGray-600">
        <b>Fax : </b> (02425) 259016
      </h5>
    </div>
  );
}
