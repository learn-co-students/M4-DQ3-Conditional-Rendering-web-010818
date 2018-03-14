import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selection: 'profile'
  }

  changeSelection = (event) => {
    this.setState({
      selection: event.target.id
    })
  }

  selectedPage = () => {
    if (this.state.selection === 'profile') {
      return <Profile />
    } else if (this.state.selection === 'photo') {
      return <Photos />
    } else if (this.state.selection === 'cocktail') {
      return <Cocktails />
    } else if (this.state.selection === 'pokemon') {
      return <Pokemon />
    }
  }

  render() {

    return (
      <div>
        <MenuBar click={this.changeSelection} />
        <div>{ this.selectedPage() }</div>
      </div>
    )
  }

}

export default MainBox
