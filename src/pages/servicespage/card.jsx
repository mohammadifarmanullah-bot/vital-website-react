import React from 'react';

const Card = () => {
    return (
        <>
           <div className='flex max-w-24 bg-gray-200 rounded-2xl'>
            <div className='flex max-w-full max-h-5' style={{backgroundImage: "url('/oDPJlFdzsiXjyPZ6i4uSP12g2M.svg')"}}>
            </div>
            <h1>Pediatrics</h1>
            <p>Monitor your child's growth and development closely to ensure their health at every stage.</p>
            <a href="#">View Services</a>
            </div> 
        </>
    );
}

export default Card;
