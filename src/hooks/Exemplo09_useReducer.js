import React, { useReducer } from 'react';

function Exemplo09_userReducer(){

    const funcao = (state, acao) => {
        switch(acao){
            case 'incrementar':
            return state + 1;

            case 'decrementar':
            return state -1;

            default:
            return 0;
        }
    }

    const [contador, executarFuncao] = useReducer(funcao, 0);

    return(
        <div>
            < h1>{contador}</h1>

            <button onClick={e => executarFuncao('incrementar')}>Incrementar</button>
            <button onClick={e => executarFuncao('decrementar')}>Decrementar</button>
        </div>
    )
}

export default Exemplo09_userReducer