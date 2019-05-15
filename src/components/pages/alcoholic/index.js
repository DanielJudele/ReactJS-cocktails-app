import React, { Component } from 'react';
import axios from "axios";
import style from './style.css'
import { withRouter } from 'react-router-dom';
import details from '../../organisms/details/index';

class Alcoholic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      showDetails: false,
      items: [],
      selectedItem: {}
    };
  }

  componentDidMount() {
    var linkUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

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

  onShowDetails(item) {
    let { history } = this.props;
  history.push({
   pathname: '/somepage',
   search: 'name=jhon&amp;age=24'
  });
    // console.log(this.state.showCategories);
    // this.setState(
    //   {
    //     showCategories: false,
    //     showDetails: true,
    //     showTitleDetails: false,
    //     selectedItem: item
    //   },
    //   () => {
    //     this.forceUpdate();
    //   }
    // );
  }

  onShowTitleDetails(item) {
    this.setState({ showDetails: true, selectedItem: item });
  }
  componentDidUpdate() {
    this.render();
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
        <div className="container">
          {items.map(item => (
            <div className="box" key={item.idDrink}>
              <div>
                <a onClick={this.onShowDetails.bind(this, item)} href="#">
                  <img src={item.strDrinkThumb} style={{ width: "130px" }} />
                </a>
              </div>
              <div>
                <a onClick={this.onShowTitleDetails.bind(this, item)} href="#">
                  {item.strDrink}
                </a>
              </div>
            </div>
          ))}
          {this.state.showDetails & this.state.selectedItem ? (
          categoriesDetails
        ) : (
          <ItemIconDetails
            itemUrl={this.state.selectedItem.strDrinkThumb}
            itemTitle={this.state.selectedItem.strDrink}
            action={this.backToCategories}
          />
        )}
        </div>
      );
    }
  }
}

export default Alcoholic;