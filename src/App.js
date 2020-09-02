import React from 'react';
import Squares from './components/Squares';
import SignUp from './components/SignUp';
import Button from './components/Button';
import Form from './components/Form';
import SignUp2 from './components/SignUp2';
import Articles from './news/Articles';
import Article from './news/Article';
import { BrowserRouter as Router, Route, } from "react-router-dom";

const App = () => (
  <Router>
    <Route exact path="/news">
      <Articles />
    </Route>
    <Route exact path="/news/:id" render={ ({ match }) => (
      <Article id={match.params.id} />
    )} />
    <Route exact path="/random">
      <Squares />
      <SignUp minimumLength={ 12 } />
      <Button handleUpdate={ (value) => console.log(value) } />
      <Form handleSubmit={ (object) => console.log(object) } />
      <SignUp2 minimumLength={ 12 } />
    </Route>
  </Router>
);

export default App;
