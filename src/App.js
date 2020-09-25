import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import ClientsControl from "./components/ClientsControl/ClientsControl";
import handleInitialData from "./store/actions/shared";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  });

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
