import {  useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPendig] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPendig(false);
                setError(null);
            })
            // any kind of network error, if we can't connect to the server
            .catch(err => {
                setIsPendig(false);
                setError(err.message);
            })
        }, 1000)
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;