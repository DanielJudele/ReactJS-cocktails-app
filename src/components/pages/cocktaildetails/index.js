import React from 'react';
import { withRouter } from 'react-router-dom';
import style from './style.css'

class CocktailDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { strDrink, strDrinkThumb } = this.props.location.state.cocktail

    return (<div>
      <div className="cocktaildetails">
        <h3>{strDrink}</h3>
        <img src={strDrinkThumb} style={{width:"400px", height:"400px"}} />

        <button onClick={() => this.props.history.goBack()}>Back</button>
    </div></div>);
    // }
  }
}


export default withRouter(CocktailDetails);
