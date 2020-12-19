import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Interior from './Interior';



const Router = (props) => (<Switch>
<Route exact path='/' component={Home} name='home'/>
<Route  path='/Home' component={Home}/>
<Route  path='/Interior' component={Interior}/>



</Switch>)

export default Router;