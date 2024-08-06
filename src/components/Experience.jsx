import { Environment, OrbitControls } from "@react-three/drei";
import { DodgeCar } from "./dodge";
import { BlueCar } from "./BlueCar";
import { Road } from "./Road";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <Road />
      <DodgeCar />
      <BlueCar />
    </>
  );
};
