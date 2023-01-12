import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaShoppingCart,
  FaEye,
  FaShare,
} from "react-icons/fa";

const CardShop = (props) => {
  return (
    <div className="border-2 border-black group">
      <div className="relative overflow-hidden">
        <img src={props.url} alt={props.product} />
        <div className="absolute bottom-[-100%] left-[50%] translate-x-[-50%] flex gap-4 text-lg group-hover:bottom-4 duration-200">
          <div className="bg-greyDark text-white p-2 cursor-pointer hover:bg-green">
            <FaShoppingCart />
          </div>
          <div className="bg-greyDark text-white p-2 cursor-pointer hover:bg-green">
            <FaEye />
          </div>
          <div className="bg-greyDark text-white p-2 cursor-pointer hover:bg-green">
            <FaShare />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 px-1 py-3">
        <span className="text-base font-semibold">{props.product}</span>
        <span className="text-base font-normal text-green">{props.price}</span>
        <div className="flex gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>
    </div>
  );
};

export default CardShop;
