import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three-stdlib";

import model from "./Voyager.glb";
export default function Voyager() {
  const gltf = useLoader(GLTFLoader, model);

  return (
    <>
      <pointLight position={[0, 20, 0]} intensity={2} />
      <pointLight position={[10, -10, 5]} intensity={1} />
      <primitive object={gltf.scene} />
    </>
  );
}
