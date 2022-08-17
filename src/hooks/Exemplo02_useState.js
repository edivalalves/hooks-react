import React, {useState} from 'react';

function Exemplo02_useState(){
    const [nome, setName] = useState('');
    const [idade, setIdade] = useState(0);
    
    
    
    return(
        <div>
            <input type='text' placeholder='Name' onChange={e => setName(e.target.value)} />
            <input type='number' placeholder='Idade' onChange={e => setIdade(e.target.value)} />

            <p>{nome}</p>
            <p>{idade}</p>

        </div>
    )
}

export default Exemplo02_useState 