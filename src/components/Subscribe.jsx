import React from "react";

import Title from "./Title";

const Subscribe = () => {
  return (
    <div className="bg-[#eee] w-full px-8 py-12 flex flex-col items-center text-center">
      <Title title="Subscribe Now" />
      <p className="w-[60%] min-w-[20rem] text-xs md:text-sm mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        similique ratione numquam maxime nulla amet quis, architecto soluta
        earum vel veniam, rem accusamus odio molestias placeat iste illo enim
        voluptas.
      </p>
      <form className="border-2 border-black w-full lg:w-[50%] pr-2 pl-4 py-2 bg-white rounded-[2rem] flex items-center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          className="text-sm md:text-base outline-none bg-transparent w-full"
        />
        <button className="bg-black text-white text-sm md:text-base px-8 py-2 rounded-3xl">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
