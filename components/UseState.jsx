import { useState } from 'react';

const UseState1 = () => {
    const [name, setName] = useState('Pekka');
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName('Mikko');
        setAge(30);
    }

    return (
        <div className="divs">
            <h5>useState</h5>
            <p>{name} on {age}-vuotias.</p>
            <button onClick={handleClick}>Paina</button>
        </div>
    );
}

export default UseState1;