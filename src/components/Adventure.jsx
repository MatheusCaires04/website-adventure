import React from "react";
import CardAdventure from "./CardAdventure";
import { dataAdventure } from "./DataAdventure";
import Title from "./Title";

const Adventure = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1100px] mx-auto py-8">
        <Title title="Adventure Idea!" />
        <div className="mt-8 md:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {dataAdventure.map((item, index) => {
            return (
              <CardAdventure
                key={index}
                url={item.url}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Adventure;
