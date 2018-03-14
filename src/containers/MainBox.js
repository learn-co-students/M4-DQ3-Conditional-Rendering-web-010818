import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

const componentList = {
  'profile': Profile ,
  'photo': Photos,
  'cocktail':Cocktails,
  'pokemon':Pokemon
}

class MainBox extends React.Component {
  state = {
    page:'profile'
  }


  changePage = (newPage) => {
    // let pageTitle = newPage[0].toUpperCase() + newPage.slice(1)
    // if (pageTitle === 'Photo' || pageTitle === 'Cocktail') {
    //   pageTitle += 's'
    // }
    // const pageComp = `<${pageTitle} />`
    this.setState({
      page:newPage
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    const Details = componentList[this.state.page]


    return (
      <div>
        <MenuBar handleChange={this.changePage} current={this.state.page}/>
        <Details />
      </div>
    )
  }

}

export default MainBox
