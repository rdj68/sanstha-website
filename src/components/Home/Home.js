import React from "react";
import Founder from "./Founder";
import ImageCarousel from "./ImageCarousel";
import VisionAndMission from "./VisionAndMission";
import { Institutes } from "./Institutes";
import { Upcoming } from "./Upcoming";
import { Count } from "./Count";

export const Home = () => {
  return (
    <>
      <ImageCarousel />
      <Founder />
      <VisionAndMission />
      <Institutes />
      <Upcoming />
      <Count />
    </>
  );
};
