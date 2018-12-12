import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import CharactersPage from "./BrowsePage";
import { Route } from "react-router-dom";
import App from "./App";
import ProfilePage from "./ProfilePage";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/:type/profile/:uid" component={ProfilePage} />
      <Route exact path="/:type/:id" component={CharactersPage} />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
