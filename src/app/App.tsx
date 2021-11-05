import React, { useState } from 'react';
import Title from './components/Title/Title';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import classes from './App.module.css';

function App(): JSX.Element {
  const [companies, setCompanies] = useState([
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

  function handleSubmit(todo: {
    companyName: string;
    companyDescription: string;
  }) {
    setCompanies([
      { title: todo.companyName, description: todo.companyDescription },
      ...companies,
    ]);
  }

  return (
    <div className={classes.App}>
      <Title></Title>
      <Form onSubmit={handleSubmit}></Form>
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
