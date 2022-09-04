import React, {useState, useEffect} from 'react';

const Dolar = () => {
    const [dolar, setDolar] = useState({});
    useEffect(() => {
       fetch('https://criptoya.com/api/dolar')
       .then(response => response.json())
       .then(({oficial, solidario, blue}) => {
            //console.log(Object.values({oficial, solidario, blue}))
            //console.log(Object.keys({oficial, solidario, blue}))
            setDolar(Object.entries({oficial, solidario, blue}).map((dolar,    indice) => 
            <div key={indice} className="divDolar">
                <p>Dolar {dolar[0]}: ${dolar[1]}</p>
            </div>
            ))
        }) 
        .catch(error => {
            console.error(error)
        })
    },[{}]);
    return (
        <>
            {dolar}
        </>
    );
}

export default Dolar;