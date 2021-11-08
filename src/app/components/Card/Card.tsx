import React, { useState } from 'react';
import classes from './Card.module.css';

type CardProps = {
  header: string;
  description: string;
  priority: number;
};

function Card({ header, description, priority }: CardProps): JSX.Element {
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
        id="checkbox"
        className={classes.checkbox}
        onClick={modifyApplied}
      />
      <label className={classes.labelChecklist} htmlFor="checklist">
        applied
      </label>
      <label className={classes.labelPriority} htmlFor="priority">
        Priority
      </label>
      <input
        type="number"
        id="priority"
        min="1"
        max="5"
        step="1"
        value={priority}
      />
    </section>
  );
}

export default Card;
