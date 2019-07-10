import React from 'react'

export default props => 
  <div>
    <button 
      onClick={() => props.notificarSaida('Praia', 'Shopping')}>
      Vou Sair
    </button>
  </div>
