// React Imports
import React from 'react'
import {render} from 'react-dom'

// Router imports
import {Router, Route, browserHistory, Redirect} from 'react-router'

// Material Design imports
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Redux components
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// App level components
import App from './app/App'
import Home from './app/components/home/Home'
import Dogs from './app/components/dog/Dogs'

import dogApp from './app/reducers'

require('./main.css')

const store = createStore(
  combineReducers({
    dogApp,
    routing: routerReducer
  })
)

injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store)

const DogApp = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route name="home" path="/home" component={Home}/>
          <Route name="dogs" path="/dogs" component={Dogs}/>
        </Route>
        <Redirect from="/" to="home" />
      </Router>
    </MuiThemeProvider>
  </Provider>
)

render((<DogApp />), document.getElementById('app'))