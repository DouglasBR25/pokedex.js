const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cardPokemonAberto = document.querySelector('.open')
        cardPokemonAberto.classList.remove('open')


        const idPokemonSelecionado = pokemon.attributes.id.value


        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')


        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')


        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add('ativo')
    })
})