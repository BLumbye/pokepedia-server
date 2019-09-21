import { Controller, Get, Res, HttpStatus, Query, NotFoundException, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonDTO } from './dto/pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) { }

  // Retreive pokemons
  @Get('pokemons')
  async getAllPokemon(@Res() res) {
    const pokemons = await this.pokemonService.getAllPokemon();
    return res.status(HttpStatus.OK).json(pokemons);
  }

  // Fetch a single pokemon based on id
  @Get('pokemon/:pokemonID')
  async getPokemon(@Res() res, @Param('pokemonID') pokemonID) {
    const pokemon = await this.pokemonService.getPokemon(pokemonID);
    if (!pokemon) { throw new NotFoundException('Pokemon does not exist!'); }
    return res.status(HttpStatus.OK).json(pokemon);
  }
}
