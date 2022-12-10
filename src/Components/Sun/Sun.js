import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sun() {
  const ref = useRef();
  useFrame((state) => {
    const elapsed = state.clock.elapsedTime / 2;
    ref.current.position.x = 15 * Math.cos(elapsed);
    ref.current.position.z = 15 * Math.sin(elapsed);
  });
  return (
    <>
      <pointLight ref={ref} />
    </>
  );
}
