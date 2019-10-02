import { Model } from 'mongoose';
import { Pokemon } from './interfaces/pokemon.interface';
export declare class PokemonService {
    private readonly pokemonModel;
    constructor(pokemonModel: Model<Pokemon>);
    getAllPokemon(): Promise<Pokemon[]>;
    getPokemon(pokemonID: any): Promise<Pokemon>;
}
