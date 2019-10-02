import { Document } from 'mongoose';
interface EvolvesTo {
    readonly is_baby: boolean;
    readonly species: string;
    readonly evolution_details: Array<{
        item: string;
        gender: number;
        held_item: string;
        known_move: string;
        known_move_type: string;
        location: string;
        min_level: number;
        min_happiness: number;
        min_beauty: number;
        min_affection: number;
        needs_overworld_rain: boolean;
        party_species: string;
        party_type: string;
        relative_physical_stats: number;
        time_of_day: string;
        turn_upside_down: boolean;
        trigger: string;
    }>;
    readonly evolves_to: EvolvesTo;
}
interface EvolutionChain {
    readonly id: number;
    readonly baby_trigger_item: string;
    readonly chain: {
        is_baby: boolean;
        species: string;
        evolves_to: EvolvesTo;
    };
}
export interface Pokemon extends Document {
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
    readonly id: {
        type: number;
        unique: true;
        required: true;
    };
    readonly type: {
        primary: string;
        secondary: string;
    };
    readonly genus: string;
    readonly height: number;
    readonly weight: number;
    readonly abilities: string[];
    readonly base_experience: number;
    readonly growth_rate: string;
    readonly egg_groups: string[];
    readonly gender_rate: number;
    readonly egg_cycles: number;
    readonly generation: number;
    readonly stats: Array<{
        base_stat: number;
        effort: number;
        name: string;
    }>;
    readonly evolution_chain: EvolutionChain;
    readonly held_items: string[];
    readonly moves: string[];
    readonly pokedex_entry: string;
    readonly shape: string;
}
export {};
