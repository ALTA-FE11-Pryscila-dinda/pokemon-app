import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

interface datasType {
  name?: string;
  url?: string;
}

const Index = () => {
  const [datas, setDatas] = useState<datasType[]>([]);
  const navigate = useNavigate();

  function onClickDetail(index: number) {
    navigate(`/detail/${index}`);
  }

  useEffect(() => {
    fetchDatas();
  }, []);

  function fetchDatas() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((res) => {
        setDatas(res.data.results);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <div className="grid grid-cols-1  gap-4 p-4">
        {datas.map((pokemon, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center content-center w-30 h-30  border-4 border-hitam  rounded-xl "
            onClick={() => {
              onClickDetail(index + 1);
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                index + 1
              }.svg`}
              alt=""
              className="p-4 h-64"
            />
            <div className="bg-hitam w-full text-lg uppercase p-2 rounded">
              {pokemon.name}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
