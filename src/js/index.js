/* 
A) Primeiro passo: Quando clicar no pokémon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

B) Segundo passo: Pra isso vamos precisar trabalhar com dois elementos:
1 - listagem
2 - cartão pokémon

C) Terceiro passo: Precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela.

D) Quarto passso: Vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokémon
-----------------------------------------

- Remover a classe aberto só do cartão que esta aberto.
- ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar.
- Remover a classe ativo que marca o pokemon selecionado
-adicionar a classse ativo no item da lista selecionado
--------------------------------------------
*/

//criar duas variaveis no JS pra trabalhar com os elementos da tela:
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
 //Vou precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokémon
    pokemon.addEventListener('click', () => {
       //Remover a classe aberto só do cartão que esta aberto.
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar.
        const idPokemonSelecionado = pokemon.attributes.id.value
      
      const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
      cartaoPokemonParaAbrir.classList.add('aberto')

      //Remover a classe ativo que marca o pokemon selecionado
      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')
      
      //adicionar a classse ativo no item da lista selecionado
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado) 
       pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})