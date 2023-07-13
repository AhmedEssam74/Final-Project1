import React from 'react'

const Rateing = ({ value, setValue }) => {
    // const stars = [];
    // for (let i = 0; i < 5; i++) {
    //     stars.push(
    //         <span key={i} className={i < value ? 'star-filled' : 'star-empty'}>
    //             &#9733;
    //         </span>
    //     );
    // }

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <span
                key={i}
                className={i < value ? 'star-filled' : 'star-empty'}
                onClick={() => setValue(i)}
            >
                &#9733;
            </span>
        );
    }
    return (
        <div>{stars}</div>
    )
}

export default Rateing
