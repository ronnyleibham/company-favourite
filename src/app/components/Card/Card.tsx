import React from 'react';
import classes from './Card.module.css';

type CardProps = {
  header: string;
  description: string;
};

function Card({ header, description }: CardProps): JSX.Element {
  return (
    <section className={classes.card}>
      <h2 className={classes.h2}>{header}</h2>
      <p className={classes.text}>{description}</p>
    </section>
  );
}

export default Card;
