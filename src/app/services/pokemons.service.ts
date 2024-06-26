import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemons = [
    {
      'id': 1, 'nombre': 'Bulbasaur ', 'img': './assets/img/1.png ', 'categoria': 'grano',
      'tipo': ['planta',
        'veneno'], 'talla': 0.70, 'peso': 6.9
    },
    {
      'id': 2, 'nombre': 'Ivysaur ', 'img': './assets/img/2.png', 'categoria': 'grano', 'tipo':
        ['planta',
          'veneno'], 'talla': 1, 'peso': 13
    },
    {
      'id': 3, 'nombre': 'Venusaur ', 'img':
        './assets/img/3.png', 'categoria': 'grano', 'tipo': ['planta',
          'veneno'], 'talla': 2, 'peso': 100
    },
    {
      'id': 4, 'nombre': 'Charmander', 'img':
        './assets/img/4.png', 'categoria': 'lagarto', 'tipo': ['fuego'],
      'talla': 0.6, 'peso': 8.5
    },
    {
      'id': 5, 'nombre': 'Charmaleon', 'img':
        './assets/img/5.png', 'categoria': 'llama', 'tipo': ['fuego'],
      'talla': 1.1, 'peso': 19
    },
    {
      'id': 6, 'nombre': 'Charizard', 'img':
        './assets/img/6.png', 'categoria': 'llama', 'tipo': ['fuego', 'vuelo'],
      'talla': 1.7, 'peso': 90.5
    }
  ];
  constructor() { }
  getPokemons() {
    return this.pokemons;
  }
  contarPokemons() {
    return this.pokemons.length;
  }
  buscarPokemon(nombreDelPokemon: string) {
    let regex = new RegExp(nombreDelPokemon, 'gi');
    return this.pokemons.filter(pokemon => pokemon.nombre.match(regex));
    }
   
}