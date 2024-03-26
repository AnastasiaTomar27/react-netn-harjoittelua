import { useState, useEffect } from "react";
import Elokuva from "./Elokuva";
import useFetch from "./useFetch";

const Home = () => {
    const {data: elokuvia, isPending, error} = useFetch('http://localhost:8000/elokuvia')

    return (
        <div>
            {error && <div>{error}</div>}

            {isPending && <div>Loading...</div>}

            {elokuvia && <Elokuva elokuvia={elokuvia} titile="Elokuvia:"/>}
        </div>
       
    )

}

export default Home;