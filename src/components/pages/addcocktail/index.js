import React from 'react';
import { withRouter } from 'react-router-dom';
import style from './style.css'

class AddCocktail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="addcocktail">
      <div className="addcocktailimage">
        <input type="file" name="pic" accept="image/*"></input>
      </div>
      <div className="addcocktaildetails">
        <input name="cocktailname" type="text" placeholder="Cocktail name" />
        <input name="ingredient1" type="text" placeholder="Ingredient 1" />
        <input name="ingredient2" type="text" placeholder="Ingredient 2" />
        <textarea name="quantity" rows="4" cols="30" placeholder="Quantity"></textarea>
        <button onClick={() => this.props.history.goBack()}>Create cocktail</button>
      </div>
    </div>);
  }
}


export default withRouter(AddCocktail);
