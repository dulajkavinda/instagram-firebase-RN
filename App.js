import React from "react";
import reducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

import TabNavigator from "./navigations/TabNavigator";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}

export default App;
