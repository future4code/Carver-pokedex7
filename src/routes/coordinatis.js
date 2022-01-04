export const goToPokedex = (history) => {
    history.push("/pokedex")
}

export const goToDetails = (history, id) => {
    history.push(`/pokemonDetails/${id}`)
}

export const goToHome = (history) => {
    history.push("/")
}