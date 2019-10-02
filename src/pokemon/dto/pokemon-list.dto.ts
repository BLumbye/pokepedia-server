import { Document } from 'mongoose';

export class PokemonListDTO extends Document {
  readonly name: string;
  readonly sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  readonly id: { type: number; unique: true; required: true };
  readonly type: {
    primary: string;
    secondary: string;
  };
  readonly generation: number;
}
