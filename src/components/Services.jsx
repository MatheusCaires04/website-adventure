import React from "react";

import Title from "./Title";
import { dataService } from "./DataServices";
import CardServices from "./CardServices";

const Services = () => {
  return (
    <div className="w-full px-8 py-12 bg-grey">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <Title title="What We Offer" />
        <div className="md:w-[80%] lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataService.map((item, index) => {
            return (
              <CardServices
                url={item.url}
                title={item.title}
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

export default Services;
