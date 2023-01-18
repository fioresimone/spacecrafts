import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <Canvas
      style={{ height: "100vh", width: "100vw", position: "relative" }}
      className="bg-black z-50"
      dpr={2}
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 45, position: [30, 0, 0] }}
    >
      <Html as="div" center>
        <div
          className="start mx-auto text-white flex justify-center items-center cursor-pointer"
          onClick={() => navigate("m/sputnik")}
        >
          <p>Start</p>
        </div>
        <div
          className="text-gray-500 text-center mt-10"
          style={{ width: "300px" }}
        >
          Drag to rotate - Pinch/Scroll to zoom
        </div>
      </Html>
    </Canvas>
  );
}
