import React, { useState } from 'react';
import classes from './Card.module.css';

type CardProps = {
  header: string;
  description: string;
};

function Card({ header, description }: CardProps): JSX.Element {
  const [applied, setApplied] = useState(false);

  function modifyApplied() {
    setApplied(!applied);
  }

  return (
    <section
      className={`${classes.card} ${applied ? classes['card--applied'] : ''}`}
    >
      <h2 className={classes.h2}>{header}</h2>
      <p className={classes.text}>{description}</p>
      <input
        type="checkbox"
        className={classes.checkbox}
        onClick={modifyApplied}
      />
    </section>
  );
}

export default Card;
