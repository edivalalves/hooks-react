import React, { useMemo, useState} from 'react';

function Exemplo10_useMemo(){

    const [contador, setContador] = useState(0);

    const [nomes, setNomes] = useState(['Mayra', 'Ralf', 'Henrique', 'juliana']);

    const listarSemRender = useMemo(() => {
        return <ListarNomes lista={nomes} />
    }, [nomes]);

    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={e => setContador(contador+1)}>Incrementar</button>

            {listarSemRender}
        </div>
    )
}

function ListarNomes({lista}){
    console.log('Componentes ListarNomes criado!');

    return(
        <ul>
            {lista.map(nome => (<li key={nome}>{nome}</li>))}
        </ul>
    )
}

export default Exemplo10_useMemo