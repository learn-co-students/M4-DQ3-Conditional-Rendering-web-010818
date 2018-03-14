import React from 'react'
import MenuBar from '../components/MenuBar'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

export default class MainBox extends React.Component {
  state = { detailsToDisplay: ''}

  selectDetails = (e) => {
    this.setState({ detailsToDisplay: e.target.id })
  }

  renderDetails = () => {
    switch (this.state.detailsToDisplay) {
      case 'profile' :
        return <Profile />
      case 'photo' :
        return <Photos />
      case 'cocktail' :
        return <Cocktails />
      case 'pokemon' :
        return <Pokemon />
    }
  }

  render() {
    console.log(this.state.detailsToDisplay)
    return (
      <div>
        <MenuBar handleSelect={this.selectDetails}/>
        {this.renderDetails()}
      </div>
    )
  }
}
