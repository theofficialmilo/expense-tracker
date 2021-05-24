import React, {useEffect, useContext} from 'react';
import {useDispatch} from 'react-redux'

import {BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';

import {ThemeProvider} from '@material-ui/core/styles';
import {CustomMuiTheme as theme} from './utils/theme'

//Utils fucntions
import {fakeExpenses} from './utils/fakeData'
import {setExpenseList} from './state/expensesDucks'

import Home from './pages/Home';

//getRegistered Context

//Get fake data if not registed


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
