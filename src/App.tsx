import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {ThemeProvider} from '@material-ui/core/styles';
import {CustomMuiTheme as theme} from './utils/theme'

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' render={() => (<Home />)}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
