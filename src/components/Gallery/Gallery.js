import React from "react";
import Navbar from "../common/Navbar";
import images from "./data";
import Navbar from "../common/Navbar";

const Gallery = () => {
  return (
    <>
      <h1 className="text-5xl text-bold text-center mb-2 sm:mt-2">Gallery</h1>
      <section className="overflow-auto text-neutral-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <GenerateImages />
          </div>
        </div>
      </section>
    </>
  );
};

function GenerateImages() {
  const listImage = images.map((image) => (
    <div className="flex w-1/2 sm:w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block rounded-lg object-fit object-center"
          src={require("" + image.url)}
        />
      </div>
    </div>
  ));
  return listImage;
}

export default Gallery;
