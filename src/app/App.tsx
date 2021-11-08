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
      priority: 2,
    },
    {
      title: 'Xing',
      description: 'Lorem ipsum bal bla fiedelbumm',
      priority: 4,
    },
    {
      title: 'Apple Europe',
      description: 'Lorem ipsum bal bla fiedelbumm',
      priority: 5,
    },
  ]);

  // function updatePriority

  function handleSubmit(todo: {
    companyName: string;
    companyDescription: string;
    companyPriority: number;
  }) {
    setCompanies([
      {
        title: todo.companyName,
        description: todo.companyDescription,
        priority: todo.companyPriority,
      },
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
          priority={singleCompany.priority}
        ></Card>
      ))}
    </div>
  );
}

export default App;
