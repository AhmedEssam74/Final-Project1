// import React, { useEffect, useState } from 'react'

// const ImageSrc = ({ img }) => {
//     const [imageUrl, setImageUrl] = useState(null);

//     useEffect(() => {
//         const blob = new Blob([new Uint8Array(img)], { type: 'image/png' });
//         const url = URL.createObjectURL(blob);
//         setImageUrl(url);

//         return () => {
//             URL.revokeObjectURL(url);
//         };
//     }, [img]);

//     if (!imageUrl) {
//         return <div>Loading image...</div>;
//     }
//     return (
//         <>
//             <img src={imageUrl} alt="image_f" />
//         </>
//     )
// }

// export default ImageSrc























