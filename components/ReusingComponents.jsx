import { useState } from "react";
import Elain from "./Elain";

const Props = () => {
    const [elaimia, setElaimia] = useState([
        {nimi: 'Aada', laji: 'koira', ika: 2, id: 1},
        {nimi: 'Mirri', laji: 'kissa', ika: 5, id: 2},
        {nimi: 'Aava', laji: 'kirahvi', ika:8, id: 3},
        {nimi: 'Max', laji: 'koira', ika: 10, id: 4},
        {nimi: 'Aatos', laji: 'koira', ika: 7, id: 5}

    ]);


    return (
        <div>
            <Elain
            elaimia={elaimia.filter(elain => elain.laji === 'koira')}
            title="Koiria:" />
        </div>
    );
}

export default Props;