import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Facilities } from "./Facilities/Facilities";
import Gallery from "./Gallery/Gallery";
import { Institute } from "./Institute/Institute";
import { Trustee } from "./About/Trustee";
import { Ceo } from "./About/Ceo";
import { Manager } from "./About/Manager";
import { President } from "./About/President";
import Navbar from "./common/Navbar";
import { Footer } from "./common/Footer";
function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/presidentmessage" element={<President />} />
          <Route path="/trusteedesk" element={<Trustee />} />
          <Route path="/ceodesk" element={<Ceo />} />
          <Route path="/managerdesk" element={<Manager />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/institute" element={<Institute />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
