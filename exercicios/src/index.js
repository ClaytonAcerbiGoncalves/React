import React from 'react'
import ReactDOM from 'react-dom'

import {BomDia, BoaTarde, BoaNoite} from './componentes/Multiplos'

ReactDOM.render(
<div>
    <BomDia nome="Clayton" />
    <BoaTarde nome="Mariane" />
    <BoaNoite nome="Lucas" />
</div>
,document.getElementById('root'))
 