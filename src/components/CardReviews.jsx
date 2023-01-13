import React from "react";

const CardReviews = (props) => {
  return (
    <div>
      <p className="bg-[#eee] text-xs p-3 text__comment relative">
        {props.comment}
      </p>
      <div className="flex gap-2 mt-6">
        <img src={props.url} alt={props.name} className="rounded-full w-16" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{props.name}</span>
          <span className="text-sm text-green font-medium">
            {props.profession}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardReviews;
