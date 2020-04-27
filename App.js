import React from "react";
import reducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);
import firebaseConfig from "./config/firabase";

import Navigation from "./navigations/navigation";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
