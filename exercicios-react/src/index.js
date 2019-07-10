import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente.jsx'
//import /*CompA*/ A, { CompB as B /*Não é default*/} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
 //import Contador from './componentes/Contador'
 import Hook from './componentes/Hook'

const elemento = document.getElementById('root')
ReactDom.render(
  <div>
    <Hook/>
   {/* <Contador numeroInicial={100}/> */}
   {/* <ComponenteClasse valor='Sou um componente de classe!'/> */}
   {/* <Pai/> */}
   {/* <ComponenteComFuncao /> */}
   {/* <Familia sobrenome ="Pereira">
    <Membro nome = "André" />
    <Membro nome = "Mariana" />    
  </Familia>  */}
  {/* <Familia>
    <Membro nome = "André" sobrenome ="Pereira" />
    <Membro nome = "Mariana" sobrenome = "Pereira" />
  </Familia>  */}
  {/* <FamiliaSilva sobrenome = "Silva"/>  */}
  {/* <MultiElementos/> */}
  {/* <A valor="Olá eu sou o A" /> 
  <B valor="Olá eu sou o B" /> */}
  {/* <PrimeiroComponente valor={2*3}/> */}
</div>
, elemento)