import React from 'react';
import './pizza.scss';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = () => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} className={classes.PizzaImg} />
        <p>Testing Scss</p>
    </div>
);
export default pizzaImage;
