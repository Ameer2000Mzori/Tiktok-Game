import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function EndScreen({ countryName, countryFlag }) {
  return (
    <div>
      <h1>Congratulations!</h1>
      <p>turkey have has </p>
      <p>Your score: {localStorage.getItem("score")}</p>
    </div>
  );
}
