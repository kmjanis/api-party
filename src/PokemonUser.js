import React, { Component } from 'react'
import Github from './Pokemon';

class PokemonUser extends Component {
  constructor(props){
    super(props)

      this.state={
          pokemon: {},
      }

      this.fetchPokemonData()
  } 

  
    fetchPokemonData = () => {
    const {pokemon} = this.props.match.params
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
     .then(response => response.json())
     .then(pokemon => this.setState({pokemon}))
}

    
componentDidUpdate(prevProps){
    if(prevProps.match.params.pokemon !== this.props.match.params.pokemon){
        this.fetchPokemonData()
    }
}


  render() {
    return (
      <div className="PokemonUser">
       <h2>{this.state.pokemon.name}
       </h2>
       {
           this.state.pokemon.sprites && (
               <img
                src={this.state.pokemon.sprites.front_default}
                alt={this.state.pokemon.name}
                />
       )
    }
      </div>
    )
  }
}

export default PokemonUser
