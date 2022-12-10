import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three-stdlib";

import model from "./SPITZER.glb";
export default function Spitzer(props) {
  const gltf = useLoader(GLTFLoader, model);

  return (
    <>
      <pointLight position={[10, -10, 5]} intensity={1} />

      <primitive object={gltf.scene} scale={[1, 1, 1]} rotation={[0, 0, 1.1]} />
    </>
  );
}
