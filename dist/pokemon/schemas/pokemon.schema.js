"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const EvolvesToSchema = new mongoose.Schema();
EvolvesToSchema.add({
    is_baby: Boolean,
    species: String,
    evolution_details: [{
            item: String,
            gender: Number,
            held_item: String,
            known_move: String,
            known_move_type: String,
            location: String,
            min_level: Number,
            min_happiness: Number,
            min_beauty: Number,
            min_affection: Number,
            needs_overworld_rain: Boolean,
            party_species: String,
            party_type: String,
            relative_physical_stats: Number,
            time_of_day: String,
            turn_upside_down: Boolean,
            trigger: String,
        }],
    evolves_to: [EvolvesToSchema],
});
const EvolutionChainSchema = new mongoose.Schema({
    id: Number,
    baby_trigger_item: String,
    chain: {
        is_baby: Boolean,
        species: String,
        evolves_to: [EvolvesToSchema],
    },
});
exports.PokemonSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    sprites: {
        back_default: String,
        back_female: String,
        back_shiny: String,
        back_shiny_female: String,
        front_default: String,
        front_female: String,
        front_shiny: String,
        front_shiny_female: String,
    },
    id: { type: Number, unique: true, required: true },
    type: {
        primary: String,
        secondary: String,
    },
    genus: String,
    height: Number,
    weight: Number,
    abilities: [String],
    base_experience: Number,
    growth_rate: String,
    egg_groups: [String],
    gender_rate: Number,
    egg_cycles: Number,
    generation: Number,
    stats: [{ base_stat: Number, effort: Number, name: String }],
    evolution_chain: EvolutionChainSchema,
    held_items: [String],
    moves: [String],
    pokedex_entry: String,
    shape: String,
});
//# sourceMappingURL=pokemon.schema.js.map