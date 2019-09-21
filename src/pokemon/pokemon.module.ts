import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonSchema } from './schemas/pokemon.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }]),
  ],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
