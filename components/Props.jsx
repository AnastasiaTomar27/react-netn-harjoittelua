import { useState } from "react";
import Elain from "./Elain";

const Props = () => {
    const [elaimia, setElaimia] = useState([
        {nimi: 'Aada', laji: 'koira', ika: 2, id: 1},
        {nimi: 'Mirri', laji: 'kissa', ika: 5, id: 2},
        {nimi: 'Aava', laji: 'kirahvi', ika:8, id: 3}
    ]);


    return (
        <div>
            <Elain 
            elaimia={elaimia}
            title="Eläimiä:"/>
        </div>
    );
}

export default Props;