import React from 'react'
import {filhosComProps} from '../utils/utils'

export default props =>
<div>
  <h1>Família</h1>

  {filhosComProps(props)}
  
  {/* Fazendo o clone de vários elementos filhos, percorrendo com map (React.Children e o método necessário para chamar o map) */}
  {/* {React.Children.map(props.children, componenteFilho => {
    return React.cloneElement(componenteFilho, {...props})
  })} */}


  {/* Clonando o elemento filho e passando todas as props clonadas em um novo objeto */}
  {/* {React.cloneElement(props.children, {...props})} */}


  {/* Clonando o elemento filho e passando todas as props por referência */}
  {/* {React.cloneElement(props.children, props)} */}

  {/* Clonando o elemento filho e passando props específica */}
  {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}

  {/* Chamando diretamente o componente filho sem passar as props */}
  {/* {props.children} */}
</div>