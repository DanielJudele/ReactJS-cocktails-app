import React, { Component } from 'react';
import axios from "axios";
import style from './style.css'
import { withRouter } from 'react-router-dom';
import details from '../cocktaildetails/index';

class Cocktailglass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    var linkUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

    axios
      .get(linkUrl)
      .then(response => {
        let results = response.data.drinks;
        this.setState({ items: results, isLoaded: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err, isLoaded: true });
      });
  }

  handleClick(e, item) {
    e.preventDefault();
    this.props.history.push({ pathname: '/details', state: { cocktail: item } });
  }

  handleAddClick(e) {
    e.preventDefault();
    this.props.history.push({ pathname: '/addcocktail' });
  }

  componentDidUpdate() {
  }

  componentWillUnmount() { }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log({ error, isLoaded, items });
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="boxAdd">
            <button onClick={e => this.handleAddClick(e)}>Add</button>
          </div>
          <div className="container">
            {items.map(item => (
              <div className="box" key={item.idDrink}>
                <div>
                  <a onClick={e => this.handleClick(e, item)} href="#">
                    <img src={item.strDrinkThumb} style={{ width: "130px", height: "130px" }} />
                  </a>
                  <p >{item.strDrink} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Cocktailglass);