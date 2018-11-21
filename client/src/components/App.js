import React from 'react';
import Header from './Header';
import Character_index from './Characters_index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CharacterProfile from './Character_profile';

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/characters/profile/:id"
          component={CharacterProfile}
        />
        <Route exact path="/characters/:id" component={Character_index} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
