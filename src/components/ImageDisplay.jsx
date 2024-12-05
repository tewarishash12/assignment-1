import React, { useState } from 'react'

const ImageDisplay = ({ image, setCounter }) => {
    const loader = 'https://loading.io/assets/mod/spinner/spinner/lg.gif';
    const wrong = "https://w7.pngwing.com/pngs/385/780/png-transparent-red-x-illustration-x-mark-check-mark-wrong-sign-angle-symmetry-cross.png";

    const [load, setLoad] = useState(true);

    setInterval(() => {
        setLoad(false);
    }, 5000)

    function handleError(e) {
        console.log(image.count)
        if (image.count < 2) {
            const loader = setInterval(() => {
                setCounter(prevCount => {
                    const newCount = prevCount + 1;
                    if (newCount >= 2)
                        clearInterval(loader)
                    return newCount
            })
            }, 5000);
    } else {
        e.target.src = wrong;
    }
}

return (
    <div>
        {
            image.ready ? (
                <>
                    {image.count < 3 && load && (<img src={loader} alt={image.idx} className='h-[38px] w-[38px] rounded-full' />)}
                    {!load && <img key={image.id} src={image.url} alt={image.idx} className='h-[38px] w-[38px] rounded-full' onError={handleError} />}
                    {/* {image.count>=3 && !load && <img src={image.url} alt={image.idx} className='h-[38px] w-[38px] rounded-full' onError={()=>handleError(image.url)} />} */}
                </>
            ) : (
                <>
                    {load && <img src={loader} alt={image.idx} className='h-[38px] w-[38px] rounded-full' />}
                    {!load && <img src={wrong} alt={image.idx} className='h-[38px] w-[38px] rounded-full' />}
                </>
            )}
    </div>
)
}

export default ImageDisplay