import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';
const pizzaImage = () => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} className={classes.PizzaImg} />
    </div>
);

export default pizzaImage;