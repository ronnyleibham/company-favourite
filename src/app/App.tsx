import React from 'react';
import Title from './components/Title/Title';
import classes from './App.module.css';

function App(): JSX.Element {
  return (
    <div className={classes.App}>
      <Title></Title>
    </div>
  );
}

export default App;
