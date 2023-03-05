import React from "react";
import {
  AtSymbolIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
export const Contact = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row mb-3">
        <div className="flex flex-wrap sm:w-1/3 bg-gray-100 px-5 py-5 sm:pt-20">
          <ContactUs />
        </div>
        <div className="flex flex-wrap sm:w-1/3 px-5 pb-5 sm:pt-20">
          <ContactDetails />
        </div>

        <div className="flex flex-wrap sm:w-1/3">
          <Map />
        </div>
      </div>
    </>
  );
};

function Map() {
  return (
    <iframe
      title="ASSVS Location"
      className="w-full"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7516.620199322086!2d74.185471!3d19.614036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbea4b2d1f9ce543f!2sAmrutvahini%20Sheti%20and%20Shikshan%20Vikas%20Sanstha!5e0!3m2!1sen!2sin!4v1670306884812!5m2!1sen!2sin"
      height="500"
    ></iframe>
  );
}
function ContactDetails() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl text-bold">Contact us</h1>
        <ul className="pt-5">
          <li className="flex flex-row gap-5 mt-5">
            <PhoneIcon className="h-5 w-5 text-green-400" />
            <a href="tel:02425 259015">(02425) 259015/16/17/18 259148</a>
          </li>
          <li className="flex flex-row gap-5 mt-5">
            <AtSymbolIcon className="h-5 w-5 text-green-400" />
            <a href="mailto:principal@avcoe.org">principal@avcoe.org</a>
          </li>
          <li className="flex flex-row gap-5 mt-5">
            <MapPinIcon className="h-5 w-5 text-green-400" />
            <a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7516.620199322086!2d74.185471!3d19.614036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbea4b2d1f9ce543f!2sAmrutvahini%20Sheti%20and%20Shikshan%20Vikas%20Sanstha!5e0!3m2!1sen!2sin!4v1670306884812!5m2!1sen!2sin">
              ASSVS, Sangamner, A. Nagar 422608
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
function ContactUs() {
  return (
    <>
      <h1 className="text-2xl text-bold">Pitch us</h1>
    </>
  );
}
