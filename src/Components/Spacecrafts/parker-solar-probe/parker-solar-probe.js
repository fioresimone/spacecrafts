import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three-stdlib";

import model from "./PSP.glb";
export default function PSB() {
  const gltf = useLoader(GLTFLoader, model);

  return (
    <>
      <pointLight position={[0, 20, 0]} intensity={2} />
      <primitive object={gltf.scene} scale={2} />
    </>
  );
}
