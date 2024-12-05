import React, { useState } from 'react'
import ImageDisplay from './ImageDisplay';

const ImageComponent = ({ images, name, designation, counter, setCounter }) => {
    const link = "https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-wrong-sign-incorrect-symbol-vector-png-image_12267047.png";
    const placeholder = "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"

    const [load, setLoad] = useState(true);
    
    setInterval(() => {
        setLoad(false);
    }, 5000)
    
    while (images.length < 4) {
        images = [...images, { id:crypto.randomUUID(), url: placeholder, ready: true, error: false, count:counter }];
    }

    return (
        <div className='bg-black text-white flex justify-around h-[30vh] items-center'>
            {/* img */}
            <div className='flex w-[80px] flex-wrap'>
                {images.map((image, idx) =>
                <>
                    {<ImageDisplay key={image.id} image={image} setCounter={setCounter} />}
                </>
                )}
            </div>
            {/* text */}
            <div>
                <div className='text-4xl font-bold' >
                    {name}
                </div>
                <div className='text-gray-300 text-xl' >
                    {designation}
                </div>
            </div>
            {/* error */}
            {images.map((image) =>
                image.error ? (
                    <>
                        {!load && <img src={link} alt="error" className='rounded-full h-[100px] w-[100px]' />}
                    </>
                ) : <></>
            )}
        </div>
    )
}

export default ImageComponent