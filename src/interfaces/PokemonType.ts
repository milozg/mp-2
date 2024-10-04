// The pokemon type
export interface PokemonType {
    name : string; //Name of the pokemon
    images: {
        small : string,
        large : string
    } //Two images of the pokemon, I only use the small one
    rarity : string; //Rarity of the Pokemon
}