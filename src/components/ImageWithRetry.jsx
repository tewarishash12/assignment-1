import React, { useEffect, useState } from "react";

const ImageWithRetry = ({ image }) => {
    const [retryCount, setRetryCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const errorImage = "https://cdn.pixabay.com/photo/2015/06/09/16/12/error-803716_640.png";

    useEffect(() => {
        if (retryCount < 3 && image.ready && !image.error) {
            const timer = setTimeout(loadImage, 5000);
            return () => clearTimeout(timer);
        }
    }, [retryCount, image.ready, image.error]);

    const loadImage = () => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => setLoading(false);
        img.onerror = () => {
            setRetryCount(retryCount + 1);
            setError(true);
        };
    };

    if (!image.ready || image.error) {
        return (
            <div className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={errorImage} alt="Error" className="rounded-full w-full h-full object-cover" />
            </div>
        );
    }

    return (
        <div className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            {loading && !error && <div className="spinner border-t-2 border-blue-500 animate-spin"></div>}
            {!loading && !error && (
                <img src={image.url} alt="Loaded" className="rounded-full w-full h-full object-cover" />
            )}
        </div>
    );
};

export default ImageWithRetry;
