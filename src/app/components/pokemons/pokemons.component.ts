import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons = [
    {
      'imagen': "./assets/img/1.png", 'id': 1, 'nombre': 'Bulbasaur', 'categoria': '', 'tipo': 'Planta y Venenosa', 'talla':
        '0,7 m', 'peso': '6.9 kg'
    },
    {
      'imagen': "./assets/img/2.png", 'id': 2, 'nombre': 'Ivysaur', 'categoria': '', 'tipo': 'Planta y Venenosa', 'talla':
        '1 m', 'peso': '13 kg'
    },
    {
      'imagen': "./assets/img/3.png", 'id': 3, 'nombre': 'Venusaur', 'categoria': '', 'tipo': 'Planta y Venenosa', 'talla':
        '2 m', 'peso': '100 kg'
    },
    {
      'imagen': "./assets/img/4.png", 'id': 4, 'nombre': 'Charmander', 'categoria': 'Lagarto', 'tipo': 'Fuego', 'talla':
        '0,6 m', 'peso': '8.5 kg'
    },
    {
      'imagen': "./assets/img/5.png", 'id': 5, 'nombre': 'Charmaleon', 'categoria': '', 'tipo': 'Fuego', 'talla':
        '1,1 m', 'peso': '19 kg'
    },
    {
      'imagen': "./assets/img/6.png", 'id': 6, 'nombre': 'Charizard', 'categoria': 'Planta', 'tipo': 'Fuego y Vuelo', 'talla':
        '1,7 m', 'peso': '90.5 kg'
    },

  ]

  constructor() { }
  ngOnInit(): void {

  }
}
