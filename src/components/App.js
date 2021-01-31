import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import Routes from "./Routes";

const store = createStore(reducers, {}, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
