import styled from "styled-components";
import {PokemonType} from "../interfaces/PokemonType.ts";

// Styled div for the layout of all pokemon objects
const AllPokemonDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
`;

// Styled div for a single pokemon object
const SinglePokemonDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;
    gap: 2vh;
    font-family: "Press Start 2P", system-ui;
    font-weight: 200;
    font-style: normal;
`;

// Styled div for the rarity of the pokemon, change text color based on rarity
const RarityDiv=styled.div<{rarity:string}>`
    color: ${(props) => (props.rarity && props.rarity.startsWith("Rare") 
                            ? '#cc2936'
                            : props.rarity === ("LEGEND")
                            ? 'magenta'
                            : 'black')};
`;


export default function Pokemon(props : { data : PokemonType[] }){
    return(
        <AllPokemonDiv>
            {
                // map each pokemon object to a single pokemon div to be displayed
                props.data.map((pokemon : PokemonType) =>
                    <SinglePokemonDiv>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.images.small}/>
                        <RarityDiv rarity={pokemon.rarity}>
                            <h4>Rarity: {pokemon.rarity}</h4>
                        </RarityDiv>
                    </SinglePokemonDiv>
                )
            }
        </AllPokemonDiv>
    );
}