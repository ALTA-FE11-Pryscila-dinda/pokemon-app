import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import { DatasType } from "../utils/datasType";

const PokemonDetail = () => {
  const { id_monster } = useParams();
  const [pokemon, setPokemon] = useState<DatasType>();
  const [newName, setNewName] = useState<string>("");
  const [namePokemon, setNamePokemon] = useState<boolean>(false);

  useEffect(() => {
    fetchPokemons();
  }, []);

  function fetchPokemons() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id_monster}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  function submitHandler() {
    const checkExist = localStorage.getItem("My Pokemon");
    if (checkExist) {
      let parseData = JSON.parse(checkExist);
      if (pokemon) {
        pokemon.sub_name = newName;
      }
      parseData.push(pokemon);

      localStorage.setItem("My Pokemon", JSON.stringify(parseData));
      alert("Add to My Pokemon");
    } else if (pokemon) {
      pokemon.sub_name = newName;
      localStorage.setItem("MyPokemon", JSON.stringify([pokemon]));
      alert("Added to My Pokemon");
    }
  }

  function handleCatch() {
    const randomize = Math.random().toFixed();
    if (randomize !== "0") {
      alert(`Congratulation! You caught ${pokemon?.name}`);
      setNamePokemon(true);
    } else {
      alert(`Sorry you failed`);
      setNamePokemon(false);
    }
  }

  return (
    <Layout>
      <div className="grid grid-flow-row  gap-4 p-4">
        <div className=" flex flex-col justify-center items-center content-center w-auto h-auto  border-4  border-hitam rounded-xl overflow-hidden">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id_monster}.svg`}
            alt=""
            className="p-4 h-64"
          />
          <div className="grid col-span-2  justify-center mt-3">
            {namePokemon ? (
              <form className="mb-10">
                <label className="flex flex-col">
                  <span className="text-sm text-hitam">Enter Name</span>
                  <input
                    className="text-black p-3 rounded-xl mb-3 w-40"
                    id="email"
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <button
                    className="border-4  bg-merahcerah rounded-xl p-3 hover:cursor-pointer"
                    onClick={() => submitHandler()}
                  >
                    Submit
                  </button>
                </label>
              </form>
            ) : (
              <p className="hidden"></p>
            )}
            <a
              className="border-4   border-hitam rounded-xl p-3 hover:cursor-pointer text-sm text-hitam"
              onClick={() => handleCatch()}
            >
              {" "}
              Catch here!!
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {pokemon?.types.map((data, index) => (
              <p
                className="bg-blue-500 border-2 py-3 rounded-3xl px-6 mb-3"
                key={index}
              >
                {data.type.name}
              </p>
            ))}
          </div>
        </div>
        <div className=" w-30 h-30  border-4 border-hitam rounded-xl text-start p-5 text-sm text-hitam grid gap-3 capitalize ">
          {pokemon?.stats.map((data) => (
            <div key={data.stat.name}>
              <p>{data.stat.name}</p>
              <div className="w-full bg-gray-400 dark:bg-gray-200 h-1">
                <div
                  className="bg-green-500 h-1"
                  style={{ width: `${data.base_stat}%` }}
                ></div>
              </div>
              <p>{data.base_stat}</p>
            </div>
          ))}
        </div>
        <div className=" w-30 h-32  border-4  border-hitam rounded-xl text-start p-5  grid gap-3 capitalize col-span-2 text-sm text-hitam ">
          <p>
            Name: {pokemon?.name}
            <br />
            Weight: {pokemon?.weight}
            <br />
            Height: {pokemon?.height}
          </p>
        </div>
        <div className="  border-4  border-hitam rounded-xl text-start p-5 text-sm text-hitam capitalize ">
          {pokemon?.abilities.map((data) => (
            <p key={data.ability.name} className="mb-3">
              {data.ability.name}
            </p>
          ))}
        </div>
        <div className="  border-4 border-hitam rounded-xl text-start p-5 text-sm text-hitam capitalize ">
          {pokemon?.moves.slice(0, 5).map((data) => (
            <p key={data.move.name} className="mb-3">
              {data.move.name}
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default PokemonDetail;
