import React from "react";

const CardServices = (props) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center p-4 border-2 border-black rounded-md card__services">
      <img src={props.url} alt={props.title} className="w-16" />
      <span className="text-lg font-semibold">{props.title}</span>
      <p className="text-sm">{props.text}</p>
      <button className="text-sm font-medium py-1 px-3 border-2 border-black  duration-150">
        Read More
      </button>
    </div>
  );
};

export default CardServices;
