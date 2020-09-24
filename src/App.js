import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import ClientsControl from "./components/ClientsControl/ClientsControl";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/clients' component={ClientsControl} />
        <Route path='/' exact component={Dashboard} />
      </Switch>
    </Layout>
  );
};

export default App;
