import './Rate.scss';
import React from 'react';
import Content from '../Content/Content'

function Rate () {
    const tariffs = [
        {
            price: 300,
            classData: "blue",
            speed: 10,
        },       
        {
            price: 450,
            classData: "green",
            speed: 50,
        },
        {
            price: 550,
            classData: "red",
            speed: 100,
        },
        {
            price: 1000,
            classData: "black",
            speed: 200,
        },
    ];


    return (
            <div className='tariff'>
                {tariffs.map((tariff) => (
                    <Content {...tariff}
                    key={tariff.id}
                    />
                ))}
            </div>
        
    )
}

export default Rate;

