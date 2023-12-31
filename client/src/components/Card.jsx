import React from "react";

import { download } from "../assets";

import { downloadImage } from "../utils/";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className=" rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />

      <div className=" absolute group-hover:flex flex-col max-h-[94.5%] hidden bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            {/* avatar */}
            <div className="w-7 h-7 rounded-full object-cover flex items-center justify-center bg-green-700 text-white text-sm font-bold">
              {name[0]}
            </div>

            <p className="text-white text-sm">{name}</p>
          </div>

          <button
            className=" outline-none  border-none bg-transparent"
            type="button"
            onClick={() => downloadImage(_id, photo)}
          >
            <img
              src={download}
              alt="d"
              className="h-6 w-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
