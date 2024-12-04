import React, { useEffect, useState } from "react";
import ImageComponent from "./components/ImageComponent";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("./images.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <ImageComponent name={`Explorin Academy\n3+ Online Centers`} images={images} />

    </div>
  );
}

export default App;
