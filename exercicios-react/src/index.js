import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente.jsx'
//import /*CompA*/ A, { CompB as B /*Não é default*/} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDom.render(
  <div>
   <Familia sobrenome ="Pereira">
    <Membro nome = "André" />
    <Membro nome = "Mariana" />    
  </Familia> 
  {/* <Familia>
    <Membro nome = "André" sobrenome ="Pereira" />
    <Membro nome = "Mariana" sobrenome = "Pereira" />
  </Familia>  */}
  {/* <FamiliaSilva sobrenome = "Silva"/>  */}
  {/* <MultiElementos/> */}
  {/* <A valor="Olá eu sou o A" /> 
  <B valor="Olá eu sou o B" /> */}
{/* <PrimeiroComponente valor={2*3}/> */
}
</div>
, elemento)