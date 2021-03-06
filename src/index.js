import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import reducer from "./store/reducers";
import middleware from "./store/middleware";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, middleware);

const app = (
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <LoadingBar />
      <App />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
