import React from "react";

const CardPackages = (props) => {
  return (
    <div className="border-2 border-black rounded-md p-3 bg-white hover:bg-greyDark duration-150 card__packages">
      <div>
        <img src={props.url} alt={props.title} />
      </div>
      <div className="text-center flex flex-col items-center pt-4 gap-2 group-hover:text-white">
        <span className="text-base font-semibold">{props.title}</span>
        <p className="text-xs font-normal w-[80%]">{props.text}</p>
        <span className="text-lg text-green group-hover:text-green font-light">
          {props.price}
        </span>
        <button className="text-xs font-medium border-2 border-greyDark px-2 py-1 duration-150">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default CardPackages;
