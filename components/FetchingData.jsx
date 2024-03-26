import { useState, useEffect } from "react";
import Elokuva from "./Elokuva";

const FetchingData = () => {
    const [elokuvia, setElokuvia] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/elokuvia')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setElokuvia(data);
            })
    }, []);

    return (
        <div>
            {elokuvia && <Elokuva
            elokuvia={elokuvia}
            titile="Elokuvia:"/>}
        </div>
    )

}

export default FetchingData;