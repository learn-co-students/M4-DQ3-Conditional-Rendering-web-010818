import React from 'react'

const MenuBar = (props) => {
  const {activeButton, changeItem} = props
  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const updateMenuCallback = (event) => {
    let item = event.target.id
    changeItem(item)
  }


  return (
    <div onClick={updateMenuCallback} className="ui four item menu">
      <a className={"item " + (activeButton === 'profile' ? 'active' : null)} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a className={"item " + (activeButton === 'photo' ? 'active' : null)} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={"item " + (activeButton === 'cocktail' ? 'active' : null)} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={"item " + (activeButton === 'pokemon' ? 'active' : null)} id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
