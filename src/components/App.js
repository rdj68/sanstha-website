import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Facilities } from "./Facilities/Facilities";
import Gallery from "./Gallery/Gallery";
import { HowToReach } from "./HowToReach/HowToReach";
import { Institute } from "./Institute/Institute";
import { Trustee } from "./About/Trustee";
import { Ceo } from "./About/Ceo";
import { Manager } from "./About/Manager";
import { President } from "./About/President";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/presidentmessage" element={<President />} />
        <Route path="/trsteedesk" element={<Trustee />} />
        <Route path="/ceodesk" element={<Ceo />} />
        <Route path="/managerdesk" element={<Manager />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/howtoreach" element={<HowToReach />} />
        <Route path="/institute" element={<Institute />} />
      </Routes>
    </>
  );
}

export default App;
