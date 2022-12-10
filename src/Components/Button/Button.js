import { Link } from "react-router-dom";
import sound from "../../Assets/sound.wav";

export default function Button({ name, displayName }) {
  const audio = new Audio(sound);
  audio.volume = 0.5;
  return (
    <Link
      to={`/m/${name}`}
      className="card-border flex md:pl-1 items-center w-1/3 h-8 md:h-10 md:w-full text-xs mb-2"
      onClick={() => audio.play()}
    >
      <div>{displayName}</div>
    </Link>
  );
}
