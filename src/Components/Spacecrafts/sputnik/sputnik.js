import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three-stdlib";

import model from "./sputnik.glb";
export default function Sputnik() {
  const gltf = useLoader(GLTFLoader, model);

  return (
    <>
      <pointLight position={[10, 20, 0]} intensity={5} />
      <primitive object={gltf.scene} rotation-x={Math.PI / 3} />
    </>
  );
}
