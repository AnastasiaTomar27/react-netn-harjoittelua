import { useState } from "react";
import Elain2 from "./Elain2";

const Props = () => {
    const [elaimia, setElaimia] = useState([
        {nimi: 'Aada', laji: 'koira', ika: 2, id: 1},
        {nimi: 'Mirri', laji: 'kissa', ika: 5, id: 2},
        {nimi: 'Aava', laji: 'kirahvi', ika:8, id: 3},
        {nimi: 'Max', laji: 'koira', ika: 10, id: 4},
        {nimi: 'Aatos', laji: 'koira', ika: 7, id: 5}
    ]);

    const handleDelete = (id) => {
        const uusi_elaimia_lista = elaimia.filter(elain => elain.id !== id)
        setElaimia(uusi_elaimia_lista);
    }

    return (
        <div>
            <Elain2
            elaimia={elaimia}
            title="Eläimiä:" 
            handleDeelete={handleDelete}/>
        </div>
    );
}

export default Props;