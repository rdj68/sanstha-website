import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Facilities } from "./Facilities/Facilities";
import Gallery from "./Gallery/Gallery";
import Navbar from "./common/Navbar";
import { Footer } from "./common/Footer";
import Bus from "./Facilities/Bus";
import Hostel from "./Facilities/Hostel";
import Banking from "./Facilities/Banking";
import Other from "./Facilities/Other";
function App() {
  return (
    <>
      <div className="flex flex-col bg-[#F7F7F7] justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/busservice" element={<Bus />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/otherfacilities" element={<Other />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
