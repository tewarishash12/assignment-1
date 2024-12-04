import React, { useState } from 'react'

const ImageComponent = ({ images, name, designation }) => {
    const link = "https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-wrong-sign-incorrect-symbol-vector-png-image_12267047.png";
    const wrong = "https://w7.pngwing.com/pngs/385/780/png-transparent-red-x-illustration-x-mark-check-mark-wrong-sign-angle-symmetry-cross.png";
    const placeholder = "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"

    const [load, setLoad] = useState(true);
    const loader = 'https://loading.io/assets/mod/spinner/spinner/lg.gif';

    setInterval(() => {
        setLoad(false);
    }, 5000)

    while (images.length < 4) {
        images = [...images, { url: placeholder, ready: true, error: false }];
    }
    console.log(images);

    return (
        <div className='bg-black text-white flex justify-around h-[30vh] items-center'>
            {/* img */}
            <div className='flex w-[80px] flex-wrap'>
                {images.map((image, idx) =>
                    image.ready ? (
                        <>
                            {load && <img src={loader} alt={idx} className='h-[38px] w-[38px] rounded-full' />}
                            {!load && <img src={image.url} alt={idx} className='h-[38px] w-[38px] rounded-full' />}
                        </>

                    ) : (
                        <>
                            {load && <img src={loader} alt={idx} className='h-[38px] w-[38px] rounded-full' />}
                            {!load && <img src={wrong} alt={idx} className='h-[38px] w-[38px] rounded-full' />}
                        </>
                    )
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
            {images.map((image, idx) =>
                image.error ? (
                    <div>
                        {!load && <img src={link} alt="error" className='rounded-full h-[100px] w-[100px]' />}
                    </div>
                ) : ""
            )}

        </div>
    )
}

export default ImageComponent