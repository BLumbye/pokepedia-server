import { PokemonService } from './pokemon.service';
export declare class PokemonController {
    private pokemonService;
    constructor(pokemonService: PokemonService);
    getAllPokemon(res: any): Promise<any>;
    getPokemon(res: any, pokemonID: any): Promise<any>;
}
