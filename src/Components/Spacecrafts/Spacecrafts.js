import React, { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import Loader from "../Loader/Loader";

import { useParams } from "react-router-dom";
import { data } from "./spacecrafts-data";
import Sun from "../Sun/Sun";
import Button from "../Button/Button";

export default function Spacecrafts() {
  const { modelName } = useParams();

  const [model, setModel] = useState();

  const Model = React.lazy(() => import(`./${modelName}/${modelName}.js`));

  useEffect(() => {
    setModel(data.find((el) => el.name === modelName));
  }, [modelName]);

  return (
    <>
      <div className="fixed top-20 h-auto md:top-24 left-0 md:left-4 w-full md:w-48  z-40 flex flex-wrap justify-center md:block  text-white ">
        {data &&
          data
            .sort((a, b) => a.year - b.year)
            .map((el) => <Button key={el.name} {...el} />)}
      </div>

      {model && (
        <>
          <div className="absolute bottom-4 left-0 z-40 w-full md:hidden">
            <div className="card-border text-white p-4 pt-0 h-48">
              <p className=" py-2 border-b-2 border-cyan-700">
                {model.displayName.toUpperCase()}
              </p>
              <div className="h-32  overflow-y-scroll">
                <p className="mt-10 text-sm">{model.description}</p>
              </div>
            </div>
          </div>

          <div className="absolute top-24 right-4 z-40 w-96 hidden md:block ">
            <div className="card-border text-white p-4 pt-0 ">
              <p className="sticky top-0 left-0 pl-0 py-2 border-b-2 border-cyan-700">
                {model.displayName.toUpperCase()}
              </p>
              <div className="h-32 overflow-y-scroll">
                <p className="mt-4 text-sm">{model.description}</p>
              </div>
            </div>
          </div>
        </>
      )}

      <Canvas
        className="bg-grid h-screen w-screen relative"
        dpr={2}
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 45, position: [30, 0, 0] }}
      >
        <Sun />
        <Stars fade count={4000} />
        <Suspense fallback={<Loader />}>
          <Float>
            <Model />
          </Float>

          <OrbitControls minDistance={5} maxDistance={45} enablePan={false} />
        </Suspense>
      </Canvas>
    </>
  );
}
