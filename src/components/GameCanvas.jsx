// components/GameCanvas.jsx
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { useSelector } from "react-redux";

import { checkTheGift } from "./gameLogic";
import Intro from "./Intro";

function GameCanvas() {
  const { kurdistan_whole_points, syria_whole_points, turkey_whole_points } =
    useSelector((state) => state.points);

  useEffect(() => {
    console.log(
      "points",
      kurdistan_whole_points,
      syria_whole_points,
      turkey_whole_points
    );
  }, [kurdistan_whole_points, syria_whole_points, turkey_whole_points]);

  checkTheGift();

  return (
    <>
      {/* <Intro /> */}
      <Canvas shadows camera={{ position: [0, 7, -8], fov: 90 }}>
        <color attach="background" args={["#333"]} />
        <fog attach="fog" args={["#333", 5, 30]} />
        <Experience />
      </Canvas>
      <div className="fixed bottom-0 w-[100%] h-[50px] flex flex-row text-center items-center justify-center ">
        <div className="  relative flex flex-row gap-[5px] w-[33.33%] text-center items-center justify-center">
          <h1 className="text-[35px] font-bold text-white">
            {kurdistan_whole_points}
          </h1>
          <img
            className="h-[40px] w-[50px] fixed bottom-[50px]"
            src="public/flags/flag_of_kurdistan.png"
            alt=""
          />

          <img
            className="h-[50px] w-[50px] fixed bottom-[65px] right-[70%]"
            src="public/donations_icons/tiktok_kurdistan.webp"
            alt=""
          />
        </div>

        <div className="  relative flex flex-row gap-[5px] w-[33.33%] text-center items-center justify-center">
          <h1 className="text-[35px] font-bold text-white">
            {syria_whole_points}
          </h1>
          <img
            className="h-[40px] w-[50px] fixed bottom-[50px]"
            src="public/flags/flag_of_syria.png"
            alt=""
          />
          <img
            className="h-[50px] w-[50px] fixed bottom-[65px] right-[20%]  "
            src="public/donations_icons/flower_syria.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default GameCanvas;
