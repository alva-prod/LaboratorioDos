import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    };

    const decrement = (value = 1) => {
        setCounter(counter - value);
    };

    const reset = () => {
        setCounter(initialValue);
    };

    const random = () => {
        const min = 1
        const max = 101
        const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;   
        setCounter( getRandomInt() )
    }
    return { counter, increment, decrement, reset, random };
};
