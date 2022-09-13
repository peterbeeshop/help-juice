import React from 'react';
import classes from './App.module.scss';
import Content from './components/Content/Content';
import Header from './components/header/Header';
import SubHeader from './components/subHeader/SubHeader';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <SubHeader />
        <Content/>
      </div>
    </div>
  );
}

export default App;
