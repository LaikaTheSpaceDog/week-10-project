import React from 'react';
import Squares from './components/Squares';
import SignUp from './components/SignUp';
import Button from './components/Button';
import Form from './components/Form';
import SignUp2 from './components/SignUp2';

const App = () => (
  <>
    <Squares />
    <SignUp minimumLength={ 12 } />
    <Button handleUpdate={ (value) => console.log(value) } />
    <Form handleSubmit={ (object) => console.log(object) } />
    <SignUp2 minimumLength={ 12 } />
  </>
);

export default App;
