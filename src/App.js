import React from 'react';
import Squares from './components/Squares';
import SignUp from './components/SignUp';
import Button from './components/Button';
import Form from './components/Form';

const App = () => (
  <>
    <Squares />
    <SignUp minimumLength={ 12 } label={ "Password" } />
    <Button handleUpdate={ (value) => console.log(value) } />
    <Form handleSubmit={ (name, email) => console.log({"name": name, "email": email}) } />
  </>
);

export default App;
