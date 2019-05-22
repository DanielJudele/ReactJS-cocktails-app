import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Alcoholic from '../../pages/alcoholic/index';
import Ordinarydrink from '../../pages/ordinarydrink/index';
import NonAlcoholic from '../../pages/nonAlcoholic/index';
import Cocktailglass from '../../pages/cocktailglass/index';
import Champagneflute from '../../pages/champagneflute/index';
import CocktailDetails from '../../pages/cocktaildetails/index';
import style from './style.css'
import AddCocktail from '../../pages/addcocktail';


const NavBar = (props) => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">                                        
                    <NavLink to={'/alcoholic'} className="nav-link" activeClassName="nav-link-active">Alcoholic </NavLink>
                    <NavLink to={'/nonAlcoholic'} className="nav-link" activeClassName="nav-link-active">Non Alcoholic</NavLink>
                    <NavLink to={'/ordinarydrink'} className="nav-link" activeClassName="nav-link-active">Ordinary drink</NavLink>
                    <NavLink to={'/cocktailglass'} className="nav-link" activeClassName="nav-link-active">Cocktail glass</NavLink>
                    <NavLink to={'/champagneflute'} className="nav-link" activeClassName="nav-link-active">Champagne flute</NavLink>                    
            </nav>            
            <Switch>                
                <Route exact path='/alcoholic' component={Alcoholic} />
                <Route exact path='/nonAlcoholic' component={NonAlcoholic} />
                <Route path='/ordinarydrink' component={Ordinarydrink} />
                <Route path='/cocktailglass' component={Cocktailglass} />
                <Route path='/champagneflute' component={Champagneflute} />
                <Route path="/details" component={CocktailDetails}/>
                <Route path="/addcocktail" component={AddCocktail}/>
                <Redirect from="/" to="/alcoholic" />                
            </Switch>
        </Router>)
}

export default NavBar;