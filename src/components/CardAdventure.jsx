import React from "react";

const CardAdventure = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={props.url}
        alt={props.title}
        className="rounded-full object-cover w-32 mb-3"
      />
      <span className="text-base text-green font-extrabold">{props.title}</span>
      <span className="text-xs text-center font-medium w-[70%] md:w-[90%] my-2">
        {props.text}
      </span>
      <button className="border-2 border-black text-xs px-3 py-1 hover:text-white hover:bg-black duration-150">
        Read More
      </button>
    </div>
  );
};

export default CardAdventure;
