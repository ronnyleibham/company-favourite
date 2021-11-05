import React, { useState } from 'react';
import classes from './Form.module.css';

type FormProps = {
  onSubmit: (todo: { companyName: string; companyDescription: string }) => void;
};

function Form({ onSubmit }: FormProps): JSX.Element {
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ companyName, companyDescription });
    setCompanyName('');
    setCompanyDescription('');
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label className={classes.label}>
        Company Name:
        <input
          className={classes.input}
          type="text"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
      </label>
      <label className={classes.label}>
        Company Details:
        <textarea
          className={classes.textarea}
          rows={5}
          value={companyDescription}
          onChange={(event) => setCompanyDescription(event.target.value)}
        ></textarea>
      </label>
      <label>
        <input
          className={classes.submit}
          type="submit"
          value="create new Card"
        />
      </label>
    </form>
  );
}

export default Form;
