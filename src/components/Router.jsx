/* eslint-disable  react/jsx-props-no-spreading */
/* eslint-disable  react/prop-types */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import IndividualCustomerForm from './IndividualCustomer';
import ViewIndividualCustomer from './ViewIndividualCustomer';
import UpdateIndividualCustomer from './UpdateIndividualCustomer';
import Signature from './Signature';
import Identification from './Identification';
import ContactInfo from './ContactInfo';

const Router = () => (
  <div className="router-section">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/individualcustomerform" component={IndividualCustomerForm} />
        <Route path="/updatecustomer/:id" component={UpdateIndividualCustomer} />
        <Route
          path="/viewindividualcustomerform/:id"
          render={props => <ViewIndividualCustomer key={props.match.params.id} {...props} />}
        />
        <Route path="/signature" component={Signature} />
        <Route path="/identification" component={Identification} />
        <Route path="/contactinfo" component={ContactInfo} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
