import React from "react";

import Title from "./Title";
import CardPackages from "./CardPackages";
import { dataPackages } from "./DataPackages";

const Packages = () => {
  return (
    <div className="w-full py-12 px-8 bg-grey">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        <Title title="Popular Packages" />
        <div className="w-[60%] sm:w-[90%] md:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataPackages.map((item, index) => {
            return (
              <CardPackages
                title={item.title}
                price={item.price}
                url={item.url}
                text={item.text}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
