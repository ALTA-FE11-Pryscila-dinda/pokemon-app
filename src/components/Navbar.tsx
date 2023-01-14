import { SiPokemon } from "react-icons/si";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-center bg-merahtua">
      <Link to="/">
        <SiPokemon className="w-24 h-24 hover:cursor-pointer " />
      </Link>
    </div>
  );
};
