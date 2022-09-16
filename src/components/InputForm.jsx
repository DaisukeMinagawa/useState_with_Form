import React, { useState } from 'react'

//追加するときのお決まりのおまじない
const InputForm = () => {
    const [text, setText] = useState('');
    const [fluets, setFluets] = useState([]);
    const handleChange = (e) => { setText(() => e.target.value) };
    const onClickAdd = () => {
        const newFluets = [...fluets, text];
        setFluets(newFluets);
    };

    return (
        <div>
            <p>{text}</p>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={onClickAdd}>Add</button>
            <ul>
                {fluets.map((fluet) => (<li>{fluet}</li>))}
            </ul>
        </div>
    )
}

export default InputForm
