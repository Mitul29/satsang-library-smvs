import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../layout/Navbar";

import data from "../../data/static-data.json";

const Matter = () => {
  const params = useParams();
  const [matterObj, setMatterObj] = useState(null);

  useEffect(() => {
    const existMatter = data.result.find((r) => r.id.toString() === params.id);
    if (existMatter) {
      setMatterObj(existMatter);
    }
  }, [params]);

  return (
    <>
      <Navbar />
      {matterObj && (
        <div className="mt-5 p-2">
          <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
            {matterObj.title}
          </h5>
          <div className="my-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex mb-2 text-gray-700 text-sm">
              <p className="pr-2">
                Character: <span>{matterObj.character}</span>
              </p>
              |
              <p className="px-2">
                Character With: <span>{matterObj.characterWith}</span>
              </p>
            </div>

            <p className="mb-2 font-normal text-gray-700">{matterObj.matter}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Matter;
