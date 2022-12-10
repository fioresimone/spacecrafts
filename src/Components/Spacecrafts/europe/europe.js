import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three-stdlib";

import model from "./europe.glb";
export default function Europe() {
  const gltf = useLoader(GLTFLoader, model);

  return (
    <>
      <pointLight position={[10, 20, 0]} intensity={5} />
      <pointLight position={[10, -10, 5]} intensity={1} />
      <primitive object={gltf.scene} rotation-x={Math.PI / 3} scale={0.5} />
    </>
  );
}
