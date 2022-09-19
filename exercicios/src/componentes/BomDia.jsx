import React from "react";

export default propos => [
<h1 key='h1'>Bom dia {propos.nome}!!!</h1>,
<h2 key='h2'>Ate mais meu amor</h2>

]


// Pode ser deste outro modo aqui tambem.
// <React.Fragment>
// <h1>Bom dia {propos.nome}!!!</h1>
// <h2>Ate mais meu amor</h2>
// </React.Fragment>


// Pode ser envolvido em uma div que e o mais usado.

// <React.Fragment>
// <div>
        // <h1>Bom dia {propos.nome}!!!</h1>
        // <h2>Ate mais meu amor</h2>
//    </div>    
// </React.Fragment>