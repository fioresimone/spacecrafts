import { Html } from "@react-three/drei";
import classes from "./Loader.module.css";

export default function Loader() {
  return (
    <Html center className="">
      <span className={classes.loader}></span>
    </Html>
  );
}
