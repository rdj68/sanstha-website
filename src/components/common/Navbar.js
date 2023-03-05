import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const Styles = {
    mainNavContainer: "w-[100vw]  hidden md:inline",
    mainSidenavContainer: "p-2 bg-white sticky top-0 md:hidden",
    navContainer: "p-4 border-b-[1px] flex flex-col justify-center ",
    li_items:
      "hover:bg-gray-100 transition-all duration-300 ease-out hover:text-blue-700 rounded-md p-2 w-full text-center cursor-pointer",
    nav_items:
      "flex gap-1 cursor-pointer items-center justify-center hover:text-blue-600",
    nav_dropdown:
      "flex flex-col absolute gap-2 p-2 justify-center items-center bg-white border-[1px] rounded-lg ",
    sideContainer: "mt-1 flex flex-col gap-4 p-2  rounded-lg",
    side_items: "ml-10",
    navText:
      " hover:text-blue-700 cursor-pointer border-[1px] p-1 bg-gray-100 rounded-md pl-3 mt-3 flex gap-1 items-center justify-between",
    sideDropdown:
      "p-2 rounded-md flex gap-4 flex-col transition-all duration-300 ease-out",
    sideMainContainer: " p-2 rounded-lg border-[1px]",
    sideDropdownItem:
      "p-2 hover:text-blue-600 hover:bg-gray-100 text-sm text-gray-600 cursor-pointer border-[1px]  text-center rounded-lg transition-all duration-500 ease-out",
  };
  const [toggle, setToggle] = useState(false);
  const [about, setAbout] = useState(false);
  const [institutes, setInstitutes] = useState(false);
  const [facilities, setFacilities] = useState(false);
  const aboutItems = [
    {
      name: "About Us",
      to: "/aboutus",
    },
    {
      name: "President Message",
      to: "/presidentmessage",
    },
    {
      name: "Trustee Desk",
      to: "/trusteedesk",
    },
    {
      name: "CEO's Desk",
      to: "/ceodesk",
    },
    {
      name: "Manager's Desk",
      to: "/managerdesk",
    },
    {
      name: "Board of Directors",
      to: "/bod",
    },
  ];
  const institutesData = [
    {
      name: "Amrutvahini College of Engineering",
      url: "https://www.avcoe.org/",
    },
    {
      name: "Amrutvahini Polytechnic",
      url: "https://amrutpoly.co.in/",
    },
    {
      name: "Amrutvahini Polytechnic",
      url: "https://amrutpoly.co.in/",
    },
    {
      name: "Amrutvahini College of Management and Business Administration",
      url: "http://ww1.amrutimba.org/",
    },
    {
      name: "Amrutvahini College of Management and Business Administration",
      url: "http://ww1.amrutimba.org/",
    },
    {
      name: "Amrutvahini College of Pharmacy (B.Pharmacy)",
      url: "https://amrutpharm.co.in/",
    },
    {
      name: "Amrutvahini College of Pharmacy (D.Pharmacy)",
      url: "https://amrutdpharm.org/",
    },
    {
      name: "Amrutvahini Model School and Junior College",
      url: "https://amrutvahinimodelschoolandjrcollege.org/",
    },
    {
      name: "Amrutvahini International School",
      url: "https://amrutvahiniinternationalschool.org/",
    },
    {
      name: "Amrutvahini Industrial Training and Institute (ITI)",
      url: "https://amrutitc.org/",
    },
  ];
  const facilitiesData = [
    {
      name: "Bus Service",
      to: "/busservice",
    },
    {
      name: "Hostel",
      to: "/hostel",
    },
    {
      name: "Banking",
      to: "/banking",
    },
    {
      name: "Other Facilities",
      to: "/otherfacilities",
    },
  ];

  return (
    <div className="bg-white sticky top-0 left-0 z-10">
      <div className={Styles.mainNavContainer}>
        <div className={Styles.navContainer}>
          <ul className="flex gap-6">
            <li>
              <img src={require("./slogo.png")} className="h-10" alt="logo" />
            </li>
            <li>
              <Link to="/">
                <div className={Styles.nav_items}>
                  <p>Home</p>
                </div>
              </Link>
            </li>

            <li
              onMouseEnter={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              <div className={Styles.nav_items}>
                <p>About</p>
                {about ? (
                  <ChevronUpIcon className="h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4" />
                )}
              </div>
              {about && (
                <ul className={Styles.nav_dropdown}>
                  {aboutItems.map((item, index) => (
                    <Link key={index} className={Styles.li_items} to={item.to}>
                      <li>{item.name}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setInstitutes(true)}
              onMouseLeave={() => setInstitutes(false)}
            >
              <div className={Styles.nav_items}>
                <p>Institutes</p>
                {institutes ? (
                  <ChevronUpIcon className="h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4" />
                )}
              </div>
              {institutes && (
                <ul className={Styles.nav_dropdown}>
                  {institutesData.map((institute, index) => (
                    <a
                      href={institute.url}
                      target="blank"
                      key={index}
                      className={Styles.li_items}
                    >
                      {institute.name}
                    </a>
                  ))}
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setFacilities(true)}
              onMouseLeave={() => setFacilities(false)}
            >
              <div className={Styles.nav_items}>
                <p>Facilities</p>
                {facilities ? (
                  <ChevronUpIcon className="h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4" />
                )}
              </div>
              {facilities && (
                <ul className={Styles.nav_dropdown}>
                  {facilitiesData.map((item, index) => (
                    <Link key={index} to={item.to} className={Styles.li_items}>
                      <p target="blank">{item.name}</p>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/gallery">
                <div className={Styles.nav_items}>
                  <p>Gallery</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className={Styles.nav_items}>
                  <p>Contact</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* sideNavigation  */}
      <div className={Styles.mainSidenavContainer}>
        <div className="border-b-[1px] p-2 flex gap-4 items-center justify-between">
          <img src={require("./slogo.png")} className="h-10" alt="logo" />
          {toggle ? (
            <XMarkIcon
              onClick={() => setToggle(!toggle)}
              className="h-8 w-8 cursor-pointer"
            />
          ) : (
            <Bars3Icon
              onClick={() => setToggle(!toggle)}
              className="h-8 w-8 cursor-pointer"
            />
          )}
        </div>

        <div className={Styles.sideContainer}>
          {toggle && (
            <ul className={Styles.sideMainContainer}>
              <li onClick={() => setToggle(!toggle)}>
                <Link to="/">
                  <p className={Styles.navText}>Home</p>
                </Link>
              </li>
              <li>
                <div
                  onClick={() => setAbout(!about)}
                  className={Styles.navText}
                >
                  <p>About</p>
                  {about ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </div>
                <div className={Styles.side_items}>
                  {about && (
                    <div className={Styles.sideDropdown}>
                      {aboutItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          className={Styles.sideDropdownItem}
                          onClick={() => setToggle(!toggle)}
                        >
                          <p>{item.name}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div
                  onClick={() => setInstitutes(!institutes)}
                  className={Styles.navText}
                >
                  <p>Institutes</p>
                  {institutes ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </div>
                <div className={Styles.side_items}>
                  {institutes && (
                    <div className={Styles.sideDropdown}>
                      {institutesData.map((item, index) => (
                        <a
                          className={Styles.sideDropdownItem}
                          key={index}
                          target="blank"
                          href={item.url}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div
                  onClick={() => setFacilities(!facilities)}
                  className={Styles.navText}
                >
                  <p>Facilities</p>
                  {facilities ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </div>
                <div className={Styles.side_items}>
                  {facilities && (
                    <div className={Styles.sideDropdown}>
                      {facilitiesData.map((item, index) => (
                        <Link
                          to={item.to}
                          className={Styles.sideDropdownItem}
                          key={index}
                          onClick={() => setToggle(!toggle)}
                        >
                          <p>{item.name}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/gallery">
                  <p className={Styles.navText}>Gallery</p>
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/contact">
                  <p className={Styles.navText}>Contact</p>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
