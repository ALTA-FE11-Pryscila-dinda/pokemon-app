import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

import Layout from "../components/Layout";
import { DatasType } from "../utils/datasType";

const MyPokemon = () => {
  const [datas, setDatas] = useState<DatasType[]>([]);
  const navigate = useNavigate();

  function onClickDetail(index: number) {
    navigate(`/detail/${index}`);
  }

  function handleDelPokemon(data: DatasType) {
    let dupeDatas: DatasType[] = datas.slice();

    const filterData = dupeDatas.filter(
      (item) => item.sub_name !== data.sub_name
    );
    localStorage.setItem("My Pokemon", JSON.stringify(filterData));
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [localStorage]);

  function fetchData() {
    const getPokemon = localStorage.getItem("My Pokemon");
    if (getPokemon) {
      setDatas(JSON.parse(getPokemon));
    }
  }

  return (
    <Layout>
      <div className="grid grid-cols-3  gap-4 p-4">
        {datas?.map((data, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center content-center w-auto h-auto  border-4  border-hitam rounded-xl bg-blue-100 relative"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
              className="p-4 h-64"
              onClick={() => {
                onClickDetail(data.id);
              }}
            />
            <TiDeleteOutline
              className="h-7 w-7 absolute top-0 right-0 hover:cursor-pointer"
              onClick={() => handleDelPokemon(data)}
            />
            <div className="bg-hitam w-full text-sm uppercase p-2">
              <p>
                {data.name}
                <br />({data.sub_name})
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MyPokemon;
