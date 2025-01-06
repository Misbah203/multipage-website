import React from 'react';
const Donuts =()=>{

const donutData = [
    {id: 1, name: 'Chocolate Donut', price: 220, description: 'sweet and creamy', image: './donuts 4.jpg'},
    {id: 2, name: 'Glazed Donut', price: 200, description: 'sweet and creamy', image: './glaze donut.avif'},
    {id: 3, name: 'Oreo Donut', price: 300, description: 'sweet and creamy', image: './oreo donut 2.jpg'},
    {id: 4, name: 'Sprinkle Donut', price: 230, description: 'sweet and creamy', image: './sprinkle donut.png'},
    {id: 5, name: 'Stawberry Donut', price: 200, description: 'sweet and creamy', image: './straw donut.jpg'},
    {id: 6, name: 'All in One Donut', price: 800, description: 'sweet and creamy', image: './mix donut.webp'}
]
    return(
        <div>
        <div className='donuts'>
      {donutData.map((donut)=>(
        <div key={donut.id} className='donuts-container'>
            <img src={donut.image} alt={donut.name} />
            <h3>{donut.name}</h3>
            <p>{donut.description}</p>
            <p className='price'>${donut.price}</p>
            <button>Add to Cart</button>
            </div>
      ))}
        </div>
        </div>
    )
}

export default Donuts;