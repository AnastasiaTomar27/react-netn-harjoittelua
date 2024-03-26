import { useState, useEffect } from "react";
import Elokuva from "./Elokuva";

const Loading = () => {
    const [elokuvia, setElokuvia] = useState(null);
    const [isPending, setIsPendig] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/elokuviaa')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setElokuvia(data);
                setIsPendig(false);
                setError(null);
            })
            // any kind of networm error, if we can't connect to the server
            .catch(err => {
                setIsPendig(false);
                setError(err.message);
            })
        }, 1000)
    }, []);

    return (
        <div>
            {error && <div>{error}</div>}

            {isPending && <div>Loading...</div>}

            {elokuvia && <Elokuva
            elokuvia={elokuvia}
            titile="Elokuvia:"/>}

            
        </div>
       
    )

}

export default Loading;