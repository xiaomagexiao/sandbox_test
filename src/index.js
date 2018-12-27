import React from "react";
//    import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers";
import "todomvc-app-css/index.css";

const store = createStore(reducer);
// sdfd

render(
  <Provider store={stor22e2}>
    <App />
  </Provider>,
  document.getElementById("root")
);
