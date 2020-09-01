import React from 'react';
import Squares from './components/Squares';
import SignUp from './components/SignUp';
import Button from './components/Button';

const App = () => (
  <>
    <Squares />
    <SignUp minimumLength={ 12 } label={ "Password" } />
    <Button handleUpdate={ (value) => console.log(value) } />
  </>
);

export default App;
