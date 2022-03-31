import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Index from '../pages/index'

const Routes = () => {
    return (
        <Switch>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/index' component={Index}/>
        </Switch>
    )
}

export default Routes
