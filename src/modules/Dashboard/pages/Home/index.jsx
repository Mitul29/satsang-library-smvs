import React, { useCallback, useState } from "react";

import { useGlobalSearchMutation } from "../../../../redux/api/homeApi";

import Navbar from "../../layout/Navbar";
import SearchComponent from "./components/SearchBar";
import SearchItem from "./components/SearchItem";

import data from "../../data/static-data.json";

const Home = () => {
  const [search, setSearch] = useState({ for: "subject", value: "" });

  const [globalSearch] = useGlobalSearchMutation();

  const searchContent = useCallback(async () => {
    if (search.value) {
      const { data, error } = await globalSearch({
        params: { value: search.value },
      });
      console.log("HELLO DATA", { data, error });
    }
  }, [search, globalSearch]);

  return (
    <>
      <Navbar />
      <div className="home__page m-1 p-1">
        <SearchComponent
          search={search}
          setSearch={setSearch}
          onSearch={searchContent}
        />

        <div className="mx-2 my-5">
          <h3 className="text-4xl">Search Result...</h3>

          {data.result.map((item) => (
            <SearchItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
