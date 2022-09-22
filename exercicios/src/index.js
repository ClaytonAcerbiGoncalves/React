import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
<div>
    <Pai nome="Clayton" sobrenome="Acerbi">
        <Filho nome="Lucas" sobrenome="Acerbi" />
        <Filho nome="Gustavo" sobrenome="Acerbi" />
        <Filho nome="Elizabete" sobrenome="Acerbi" />

    </Pai>
</div>
,document.getElementById('root'))
 