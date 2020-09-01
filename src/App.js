import React from 'react';
import Squares from './components/Squares';
import SignUp from './components/SignUp';

const App = () => (
  <>
    <Squares />
    <SignUp minimumLength={ 12 } label={ "Password" } />
  </>
);

export default App;
