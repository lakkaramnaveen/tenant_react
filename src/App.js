import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Suspense } from 'react';
const Owner = React.lazy(() => import('./components/Owner'));
const Login = React.lazy(() => import('./components/Login'));
const Update = React.lazy(() => import('./components/Update'));

function App() {
  return (
    <Suspense fallback={() => <h3>Loading....</h3>}>
      <Router>
        <Switch>
          <Route path="/owner" component={Owner}></Route>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/update" component={Update}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="*" render={() => <h3>Page Not Found, Please check the Url</h3>}></Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
