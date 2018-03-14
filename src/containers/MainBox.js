import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    item: null,
  }

  handleItemChange = (item) => {
    this.setState({item})
  }

  component(){
    if (this.state.item === 'pokemon'){
      return <Pokemon />
    } else if (this.state.item === 'photo'){
      return <Photos />
    } else if (this.state.item === 'cocktail'){
      return <Cocktails />
    } else if (this.state.item === 'profile'){
      return <Profile />
    } else {
      return <div></div>
    }
  }

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */


    const detailsToDisplay = this.component()

    return (
      <div>
        <MenuBar activeButton={this.state.item} changeItem={this.handleItemChange}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
