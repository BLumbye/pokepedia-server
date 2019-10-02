import { Model } from 'mongoose';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokemonList } from './interfaces/pokemon-list.interface';
export declare class PokemonService {
    private readonly pokemonModel;
    constructor(pokemonModel: Model<Pokemon>);
    getAllPokemon(): Promise<PokemonList[]>;
    getPokemon(pokemonID: any): Promise<Pokemon>;
}
