import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";


const Navbar = () => {
  const Styles = {
    mainNavContainer : "w-[100vw] bg-white sticky top-0 left-0 hidden md:inline",
    mainSidenavContainer : "p-2 bg-white sticky top-0 md:hidden",
    navContainer : "p-4 border-b-[1px] flex flex-col justify-center ",
    li_items : "hover:bg-gray-100 hover:text-blue-700 rounded-md p-2 w-full text-center cursor-pointer",
    nav_items : "flex gap-1 cursor-pointer items-center justify-center hover:text-blue-600",
    nav_dropdown : "flex flex-col absolute gap-2 p-2 justify-center items-center bg-white border-[1px] rounded-lg ",
    sideContainer : "mt-1 flex flex-col gap-4 p-2",
    side_items : "ml-10",
    navText : "font-bold text-gray-700 hover:text-blue-700 cursor-pointer  mt-3 flex gap-1 items-center",
    sideDropdown : "p-2 rounded-md flex gap-4 flex-col transition-all duration-500 ease-out",
    sideMainContainer : "shadow-lg p-2",
    sideDropdownItem : "p-2 bg-violet-700 text-white cursor-pointer  text-center rounded-lg transition-all duration-500 ease-out"
  };
  let logo = "./images/slogo.png"
  const [toggle, setToggle] = useState(false);
  const [about, setAbout] = useState(false);
  const [institutes, setInstitutes] = useState(false);
  const [facilities, setFacilities] = useState(false);
  const aboutItems = [
    "About Us",
    "President Message",
    "Trustee Desk",
    "CEO's Desk",
    "Manager's Desk",
    "Board of Directors",
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
    "Bus Service",
    "Hostel",
    "Banking",
    "Other Facilities",
  ];

  return (
    <>
      <div className={Styles.mainNavContainer}>
        <div className={Styles.navContainer}>
          <ul className="flex gap-6">
            <li>
              <img
                src={logo}
                className="h-10"
                alt="logo"
              />
            </li>
            <li>
              <div className={Styles.nav_items}>
                <p>Home</p>
              </div>
            </li>

            <li
              onMouseEnter={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              <div className={Styles.nav_items}>
                <p>About</p>
                <ChevronDownIcon className="h-4 w-4" />
              </div>
              {about && (
                <ul className={Styles.nav_dropdown}>
                  {aboutItems.map((item, index) => (
                    <li key={index} className={Styles.li_items}>
                      {item}
                    </li>
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
                <ChevronDownIcon className="h-4 w-4" />
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
                <ChevronDownIcon className="h-4 w-4" />
              </div>
              {facilities && (
                <ul className={Styles.nav_dropdown}>
                  {facilitiesData.map((item, index) => (
                    <p target="blank" key={index} className={Styles.li_items}>
                      {item}
                    </p>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <div className={Styles.nav_items}>
                <p>Gallery</p>
              </div>
            </li>
            <li>
              <div className={Styles.nav_items}>
                <p>How to Reach</p>
              </div>
            </li>
            <li>
              <div className={Styles.nav_items}>
                <p>Contact</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* sideNavigation  */}
      <div className={Styles.mainSidenavContainer}>
        {
            toggle ? <XMarkIcon  onClick={()=>setToggle(!toggle)}
            className="h-8 w-8 cursor-pointer"  /> 
            :  
            <Bars3Icon
            onClick={()=>setToggle(!toggle)}
            className="h-8 w-8 cursor-pointer"
          />
        }
       
        <div className={Styles.sideContainer}>
          {toggle && (
            <ul className={Styles.sideMainContainer}>
              <li>
                <p className={Styles.navText}>Home</p>
              </li>
              <li>
                <div onClick={()=>setAbout(!about)} className={Styles.navText}>
                    <p>About</p>
                    <ChevronDownIcon className="h-4 w-4" />
                </div>
                <div className={Styles.side_items}>

                    {about && (
                        <div className={Styles.sideDropdown}>
                            {
                            aboutItems.map((item,index)=>(
                                <p className={Styles.sideDropdownItem} key={index}>{item}</p>
                            ))
                            }
                        </div>
                    )
                    }
                </div>
              </li>
              <li>
                <div onClick={()=>setInstitutes(!institutes)} className={Styles.navText}>
                    <p>Institutes</p>
                    <ChevronDownIcon className="h-4 w-4" />
                </div>
                <div className={Styles.side_items}>

                    {institutes && (
                        <div className={Styles.sideDropdown}>
                            {
                            institutesData.map((item,index)=>(
                                <a className={Styles.sideDropdownItem} key={index} target="blank" href={item.url}>{item.name}</a>
                            ))
                            }
                        </div>
                    )
                    }
                </div>
              </li>
              <li>
                <div onClick={()=>setFacilities(!facilities)} className={Styles.navText}>
                    <p>Facilities</p>
                    <ChevronDownIcon className="h-4 w-4" />
                </div>
                <div className={Styles.side_items}>

                    {facilities && (
                        <div className={Styles.sideDropdown}>
                            {
                            facilitiesData.map((item,index)=>(
                                <p className={Styles.sideDropdownItem} key={index}>{item}</p>
                            ))
                            }
                        </div>
                    )
                    }
                </div>
              </li>
              <li>
                <p className={Styles.navText}>Gallery</p>
              </li>
              <li>
                <p className={Styles.navText}>How to Reach</p>
              </li>
              <li>
                <p className={Styles.navText}>Contact</p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
