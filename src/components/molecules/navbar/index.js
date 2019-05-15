import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Alcoholic from '../../pages/alcoholic/index';
import Ordinarydrink from '../../pages/ordinarydrink';
import NonAlcoholic from '../../pages/nonAlcoholic';
import style from './style.css'
import Cocktailglass from '../../pages/cocktailglass';
import Champagneflute from '../../pages/champagneflute';

const NavBar = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">                
                    <Link to={'/'} className="nav-link"> Alcoholic </Link>
                    <Link to={'/nonAlcoholic'} className="nav-link">Non Alcoholic</Link>
                    <Link to={'/ordinarydrink'} className="nav-link">Ordinary drink</Link>
                    <Link to={'/cocktailglass'} className="nav-link">Cocktail glass</Link>
                    <Link to={'/champagneflute'} className="nav-link">Champagne flute</Link>                
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Alcoholic} />
                <Route path='/nonAlcoholic' component={NonAlcoholic} />
                <Route path='/ordinarydrink' component={Ordinarydrink} />
                <Route path='/cocktailglass' component={Cocktailglass} />
                <Route path='/champagneflute' component={Champagneflute} />
            </Switch>
        </Router>)
}

export default NavBar;