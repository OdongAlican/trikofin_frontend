import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import IndividualCustomerForm from './IndividualCustomer';
import ViewIndividualCustomer from './ViewIndividualCustomer';

const Router = () => (
  <div className="router-section">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/individualcustomerform" component={IndividualCustomerForm} />
        <Route path="/viewindividualcustomerform/:id" component={ViewIndividualCustomer} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
