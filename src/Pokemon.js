import React, {Component} from 'react'
import { Route } from 'react-router-dom'

import './Github.css'
import PokemonUser from './PokemonUser'

class Pokemon extends Component {
    state = {
        username: '',
    }
  
    handleChange = ev => {
      this.setState({ username: ev.target.value })
    }
  
    handleSubmit = ev => {
      ev.preventDefault()
      this.props.history.push(`/pokemon/${this.state.username}`)
    }
  
    render() {
      return (
        <div className="Pokemon">
  
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                required
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">
                Look up Pokemon
              </button>
            </div>
          </form>
  
          <Route
            path="/pokemon/:username"
            component={PokemonUser}
          />
        </div>
      )
    }
  }
  
  export default Pokemon