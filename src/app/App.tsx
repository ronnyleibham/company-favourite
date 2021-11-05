import React, { useState } from 'react';
import Title from './components/Title/Title';
import Card from './components/Card/Card';
import classes from './App.module.css';

function App(): JSX.Element {
  const [companies, _setCompanies] = useState([
    {
      title: 'LinkedIn',
      description: 'Lorem ipsum bal bla fiedelbumm',
    },
    {
      title: 'Xing',
      description: 'Lorem ipsum bal bla fiedelbumm',
    },
    {
      title: 'Apple Europe',
      description: 'Lorem ipsum bal bla fiedelbumm',
    },
  ]);

  return (
    <div className={classes.App}>
      <Title></Title>
      {companies.map((singleCompany) => (
        <Card
          header={singleCompany.title}
          description={singleCompany.description}
        ></Card>
      ))}
    </div>
  );
}

export default App;
