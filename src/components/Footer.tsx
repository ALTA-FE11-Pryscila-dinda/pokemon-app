import { MdCatchingPokemon } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex justify-around bg-hitam py-3 ">
      <Link to="/">
        <div className=" flex flex-col justify-center items-center hover:cursor-pointer">
          <AiFillHome className="w-8 h-8 mb-2 " />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/my-pokemon-list">
        <div className="flex flex-col justify-center items-center hover:cursor-pointer">
          <MdCatchingPokemon className="w-8 h-8 mb-2" />
          <p>My Pokemon</p>
        </div>
      </Link>
    </div>
  );
};
