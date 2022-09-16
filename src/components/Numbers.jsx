import React, { useState } from 'react'

const Numbers = () => {
    const [num, setNum] = useState(0);

    const onClickIncrase = () => {
        setNum((PrevNum) => PrevNum + 1);
    };

    const onClickDecrease = () => {
        setNum((PrevNum) => PrevNum - 1);
    };

    return (
        <div>
            <button onClick={onClickIncrase}>Increase</button>
            <button onClick={onClickDecrease}>Decrease</button>
            <p>{num}</p>
        </div>
    )
}

export default Numbers