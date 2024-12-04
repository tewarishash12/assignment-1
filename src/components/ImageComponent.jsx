import React from "react";
import ImageWithRetry from "./ImageWithRetry";

const ImageComponent = ({ name, images }) => {
    const placeholderImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwCJYSnbBLMEGWKfSnWRGC_34iCCKkxePpg&s";

    const imagesToDisplay = [
        ...images,
        ...Array(4 - images.length).fill({ url: placeholderImage, ready:true, error:false }) 
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">
                {name.split("\n").map((text, index) => (
                    <span key={index} className={index === 0 ? "font-bold" : "font-normal"}>
                        {text}
                        {index === 0 && <br />}
                    </span>
                ))}
            </h1>
            <div className="grid grid-cols-2 gap-6">
                {imagesToDisplay.map((image, index) => (
                    <ImageWithRetry key={index} image={image} />
                ))}
            </div>
        </div>
    );
};

const Placeholder = ({ count }) =>
    Array.from({ length: count }).map((_, index) => (
        <div
            key={index}
            className="w-10 h-10 rounded-full bg-gray-200 flex justify-center"
        >
            <span className="text-xs text-gray-500">N/A</span>
        </div>
    ));

export default ImageComponent;
