import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaBook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-black text-gray-400 w-[25%] p-6 flex flex-col space-y-4">
      <div className="bg-[#121212] rounded-md">
        <div className="flex items-center space-x-2 mb-8">
          <div className="text-3xl px-4 pt-3 font-bold text-white">Spotify 2.0</div>
        </div>
        <div>
          <Link to="/" exact className="w-[fit] flex items-center py-2.5 px-4 text-white rounded hover:text-white hover:bg-gray-800" activeClassName="text-white bg-gray-800">
            <FaHome className="mr-4" />
            Home
          </Link>
        </div>
        <Link to="/search" className="flex items-center py-2.5 px-4 rounded hover:text-white hover:bg-gray-800" activeClassName="text-white bg-gray-800">
          <FaSearch className="mr-4" />
          Search
        </Link>
      </div>
      <div className="h-[fit] flex-1 bg-[#121212] rounded-md space-y-2">
        <Link to="/playlists" className="flex items-center py-2.5 px-4 rounded hover:text-white hover:bg-gray-800" activeClassName="text-white bg-gray-800">
          <FaBook className="mr-4" />
          Your Library
        </Link>
        <Link to="/library" className="flex items-center py-2.5 px-4 rounded hover:text-white hover:bg-gray-800" activeClassName="text-white bg-gray-800">
          <span className="flex justify-center items-center">
            <span className="mr-[12px] text-[30px]">+</span>Add playlist
          </span>
        </Link>
        <div className="bg-[#242424] h-[30%] mx-2 flex flex-col px-3 py-2.5 items-start justify-start rounded text-white hover:text-white hover:bg-gray-800" activeClassName="text-white bg-gray-800">
          <div className="mb-6">Create yourfirst playlist</div>
          <button className="border rounded-3xl bg-white text-black px-1 py-1">Create playlist</button>
        </div>
        <div className=" h-[20%] mx-2 flex flex-col px-3 items-start justify-start rounded text-white hover:text-white hover:bg-gray-800" activeClassName="text-white bg-gray-800">
          <Link to="/Genre" className="mt-[2vh] mb-[1vh]">Genre</Link>
          <Link to="/Album" className="">Album</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
