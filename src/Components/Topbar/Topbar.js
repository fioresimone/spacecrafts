import classes from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div
      className={
        "w-screen h-10 fixed flex items-center px-2 z-50  justify-center " +
        classes.navbar
      }
    >
      <div className={classes.leftBlock}></div>
      <div className={classes.rightBlock}></div>
    </div>
  );
}
