const produto = {
  nome: 'Caneta Bic Preta',
  preco: 1.90,
  desconto: 0.5
}

function clone(objeto){
    return { ...objeto}
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto, novoProduto)

//exemplo de spread, como funciona o spread (resolve vários problemas de "memória")