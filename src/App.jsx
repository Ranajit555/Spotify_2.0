import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Player from "./components/Player";
import Navbar from "./components/Navber";
import songs from "./assets/songs";
import Album from "./pages/Albums";
import Genre from "./pages/Genre";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [musics, setMusics] = useState(null);
  useEffect(() => {
    const getMusic = async () => {
      const url = `https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5&q=%3CREQUIRED%3E`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "d01f0af71emsh43895e008fde272p173567jsn5ff7486fecf0",
          "x-rapidapi-host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMusics(result);
      } catch (error) {
        console.error(error);
      }
    };

    getMusic();
  }, []);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%]  flex">
        <Sidebar />
        <div className="flex-1 mt-[3vh]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home songs={songs} setCurrentSong={setCurrentSong} />} />
            <Route path="/playlists" element={<Playlists songs={songs} setCurrentSong={setCurrentSong} />} />
            <Route path="/albums" element={<Album musics={musics} />} />
            <Route path="/genres" element={<Genre musics={musics} />} />
          </Routes>
        </div>
      </div>
      <div className="">
        <Player currentSong={currentSong} />
      </div>
    </div>
  );
};

export default App;
