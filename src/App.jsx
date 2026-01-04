import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";

const App = () => {
  const [sidebar, setSidbar] = useState(true);

  return (
    <div>
      <Navbar setSidbar={setSidbar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/Video/:CategoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
