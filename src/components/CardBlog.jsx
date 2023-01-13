import React from "react";
import { FaCalendar } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const CardBlog = (props) => {
  return (
    <div className="rounded-md overflow-hidden relative grid grid-rows-2">
      <div>
        <img src={props.url} alt={props.title} />
      </div>
      <div className="flex items-center justify-between text-xs text-white bg-greyDark px-4 py-2 w-[70%] rounded-md absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
        <div className="flex items-center gap-1">
          <FaCalendar /> {props.date}
        </div>{" "}
        <div className="flex items-center gap-1">
          <BsFillPersonFill /> {props.person}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-black text-center">
        <span className="text-lg font-semibold">{props.title}</span>
        <p className="text-xs md:text-sm">{props.text}</p>
        <button className="text-xs md:text-sm border-2 border-black px-3 py-1 hover:text-white hover:bg-black duration-150">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardBlog;
