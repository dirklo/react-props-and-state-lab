import React from 'react'
// eslint-disable-next-line
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map((pet) => <div className="ui cards" id={pet.id}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>)
  }
}

export default PetBrowser
