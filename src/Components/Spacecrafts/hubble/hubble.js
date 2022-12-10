import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three-stdlib";

import model from "./Hubble.glb";
export default function Hubble() {
  const gltf = useLoader(GLTFLoader, model);

  return (
    <>
      <pointLight position={[10, 20, 0]} intensity={5} />
      <primitive
        object={gltf.scene}
        scale={[0.5, 0.5, 0.5]}
        rotation-x={Math.PI / 3}
      />
    </>
  );
}
