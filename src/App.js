import React from "react";
import ImageComponent from "./components/ImageComponent";

function App() {
  const images = [
    { url: "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75", ready: true, error: false },
    { url: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg", ready: true, error: false },
    { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", ready: true, error: false },
    { url: "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80", ready: true, error: false }
];

  return (
    <div className="width-full">
      <ImageComponent images={images} name="Explorin Academy" designation="3+ offline centres" />
    </div>
  );
}

export default App;