import React from "react";

const Gallery = () => {
  return (
    <>
      <h1 className="text-5xl text-bold text-center mb-2 sm:mt-2">Gallery</h1>
      <section className="text-neutral-700">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <Images />
          </div>
        </div>
      </section>
    </>
  );
};

const images = [...Array(12).keys()].map(
  (i) => process.env.PUBLIC_URL + `/gallery/${i + 1}.JPG`
);

function Images() {
  return images.map((imageUrl) => (
    <div key={imageUrl} className="flex w-1/2 sm:w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block rounded-lg object-fit object-center"
          src={imageUrl}
        />
      </div>
    </div>
  ));
}

export default Gallery;
