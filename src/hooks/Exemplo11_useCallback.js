import React, {useState, useEffect, useCallback} from 'react';

function Exemplo11_useCallback(){

    const [cor, setCor] = useState('blue');
    const [numero, setNumero] = useState(0);

    const alterarCor = () => {
        setCor(cor == 'blue' ? 'gray' : 'blue');
    }

    const listarNumeros = useCallback(() => {
        return [numero-1, numero, numero+1];
    }, [numero]);

    return(
        <div style={{backgroundColor:cor}}>
            <button onClick={alterarCor}>Alterar cor</button>
            <input type='number' value={numero} onChange={e => setNumero(parseInt(e.target.value))} />

            <ComponenteListarNumeros lista={listarNumeros} />
        </div>
    )
}

function ComponenteListarNumeros({lista}){
    const [vetor, setVetor] = useState([]);

    useEffect(() => {
        console.log('Componente criado!');
        setVetor(lista);
    }, [lista]);

    return(
        <ul>
            {vetor.map(n =>(<li key={n}>{n}</li>))}
        </ul>
    )
}

export default Exemplo11_useCallback