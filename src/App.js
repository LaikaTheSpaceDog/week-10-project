import React from 'react';
import Squares from './components/Squares';
import SignUp from './components/SignUp';
import Button from './components/Button';
import Form from './components/Form';
import SignUp2 from './components/SignUp2';
import Articles from './news/Articles';
import Article from './news/Article';
import CreateArticle from './news/CreateArticle';
import ClickedHook from './hooks/ClickedHook';
import SquareHook from './hooks/SquareHook';
import ToggleHook from './hooks/ToggleHook';
import CounterHook from './hooks/CounterHook';
import StepHook from './hooks/StepHook';
import CatchHook from './hooks/CatchHook';
import RollHook from './hooks/RollHook';
import TempHook from './hooks/TempHook';
import ClickedReducer from './reducers/ClickedReducer';
import StepReducer from './reducers/StepReducer';
import TempReducer from './reducers/TempReducer';
import List from './ToDo/List';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/news">
        <Articles />
      </Route>
      <Route exact path="/hooks">
        <ClickedHook />
        <SquareHook colour="hotpink" />
        <ToggleHook initial="Hello" alternate="world" />
        <CounterHook initial={ 50 } max={ 100 } />
        <StepHook max={ 100 } step={ 5 } />
        <CatchHook jump={ 100 } />
        <RollHook names={ ["Alex", "Dean", "Gilson", "Marta", "Oliver", "Oscar", "Rohan", "Tom", "Zack"] } />
        <TempHook />
      </Route>
      <Route exact path="/reducers">
        <ClickedReducer />
        <StepReducer max={ 100 } step={ 5 } />
        <TempReducer />
      </Route>
      <Route exact path ="/todo">
        <List />
      </Route>
      <Route exact path="/news/create">
        <CreateArticle />
      </Route>
      <Route path="/news/:id" render={ ({ match }) => (
        <Article id={match.params.id} />
      )} />
      <Route exact path="/random">
        <Squares />
        <SignUp minimumLength={ 12 } />
        <Button handleUpdate={ (value) => console.log(value) } />
        <Form handleSubmit={ (object) => console.log(object) } />
        <SignUp2 minimumLength={ 12 } />
      </Route>
    </Switch>
  </Router>
);

export default App;
