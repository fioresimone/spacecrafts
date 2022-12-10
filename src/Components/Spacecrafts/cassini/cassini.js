import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three-stdlib";

import model from "./Cassini.glb";
export default function Cassini() {
  const gltf = useLoader(GLTFLoader, model);

  return (
    <>
      <pointLight position={[10, 20, 0]} intensity={5} />
      <primitive object={gltf.scene} rotation-x={Math.PI / 3} />
    </>
  );
}
