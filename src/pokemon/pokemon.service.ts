import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokemonDTO } from './dto/pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(@InjectModel('Pokemon') private readonly pokemonModel: Model<Pokemon>) { }

  // Fetch all pokemons
  async getAllPokemon(): Promise<Pokemon[]> {
    const pokemons = await this.pokemonModel.find().exec();
    return pokemons;
  }

  // Get a single pokemon
  async getPokemon(pokemonID): Promise<Pokemon> {
    const pokemon = await this.pokemonModel.find({ id: pokemonID }).exec();
    return pokemon;
  }
}
