"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const pokemon_service_1 = require("./pokemon.service");
let PokemonController = class PokemonController {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    async getAllPokemon(res) {
        const pokemons = await this.pokemonService.getAllPokemon();
        return res.status(common_1.HttpStatus.OK).json(pokemons);
    }
    async getPokemon(res, pokemonID) {
        const pokemon = await this.pokemonService.getPokemon(pokemonID);
        if (!pokemon) {
            throw new common_1.NotFoundException('Pokemon does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(pokemon);
    }
};
__decorate([
    common_1.Get('pokemons'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "getAllPokemon", null);
__decorate([
    common_1.Get('pokemon/:pokemonID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('pokemonID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "getPokemon", null);
PokemonController = __decorate([
    common_1.Controller('pokemon'),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonController);
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map