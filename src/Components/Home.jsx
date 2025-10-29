import React from 'react';
import UpdateUser from './UpdateUser';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const coffees = useLoaderData();
    console.log(coffees)
    return (
        <div className='grid grid-cols-3 gap-5'>
          {
            coffees.map(coffee=>(
                <div className='border bg-amber-100 rounded-lg ' key={coffee._id}>
                    <img src={coffee.photo} alt="" />
                    <h4>{coffee.name}</h4>
                    <p></p>
                </div>
            ))
          }
        </div>
    );
};

export default Home;