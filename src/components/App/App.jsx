import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import JogsPage from '../../pages/JogsPage/JogsPage';
import InfoPage from '../../pages/InfoPage/InfoPage';
import AuthenticationPage from '../../pages/AuthenticationPage/AuthenticationPage';

import './App.css';

const App = () => {
    return (
        <div className = 'homePage'>
            <Switch>
                <Route exact path = '/' component={HomePage}/>
                <Route  path = '/jogs' component={JogsPage}/>
                <Route  path = '/info' component={InfoPage}/>
                <Route  path = '/info' component={InfoPage}/>
                <Route  path = '/authentication' component={AuthenticationPage}/>
            </Switch>        
        </div>
    );
}
export default App;
