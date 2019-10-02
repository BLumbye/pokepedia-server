import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokemonList } from './interfaces/pokemon-list.interface';
import { PokemonDTO } from './dto/pokemon.dto';
import { PokemonListDTO } from './dto/pokemon-list.dto';

@Injectable()
export class PokemonService {
  constructor(@InjectModel('Pokemon') private readonly pokemonModel: Model<Pokemon>) { }

  // Fetch all pokemons
  async getAllPokemon(): Promise<PokemonList[]> {
    const pokemons = await this.pokemonModel.find().select('name sprites id type generation').exec();
    return pokemons;
  }

  // Get a single pokemon
  async getPokemon(pokemonID): Promise<Pokemon> {
    const pokemon = await this.pokemonModel.findOne({ id: pokemonID }).exec();
    return pokemon;
  }
}
