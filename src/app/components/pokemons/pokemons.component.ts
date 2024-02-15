import { Component, OnInit } from '@angular/core';
import { FormBuscarPokemon } from 'src/app/models/form-buscar-pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemonSeleccionado = '';
  pokemons = [{
    'id': 0, 'nombre': '', 'img': '', 'categoria': '', 'tipo': ['', ''], 'talla': 0,
    'peso': 0
  }];
  cuenta = 0;
  formBuscarPokemon = new FormBuscarPokemon("");

  constructor(private servicePokemons: PokemonsService) { }
  ngOnInit() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.cuenta = this.servicePokemons.contarPokemons();
  }
  buscar(nombreDelPokemon: string) {
    this.pokemons = this.servicePokemons.buscarPokemon(nombreDelPokemon);
  }
  cancelarBuscar() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.formBuscarPokemon.setNombre('');
  }
}
