import React from 'react'
import image from '../../assets/images/Image.png'

export const Special = () => {
  return (
    <div className='container my-5 '>
        <div className='text-center'>
    <span className='f40 YourText-600  p-color'>" OUR SPECIALS "</span>
        </div>
        <div className='row mt-4'>
            <div className='col-12 col-md-4'>
                <div className='d-flex flex-column gap-5'>
                    <span className='f40 YourFont-500 text-center'>Cocktails</span>
                    {cocktails.map(cocktail => (
                        <div className='d-flex flex-column'>
                            <div className='d-flex justify-content-between'>
                            <span className='p-color'>{cocktail.name}</span>
                            <span>Rs. {cocktail.price}</span>

                            </div>
                            <div>
                                <span className='grey'>{cocktail.type}</span>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
            <div className='col-12 col-md-4 text-center'>
                <img src={image} className='img-fluid '/>
            </div>
            <div className='col-12 col-md-4'>
            <div className='d-flex flex-column gap-5'>
                    <span className='f40 YourFont-500 text-center'>Sandwiches</span>
                    {sandwiches.map(sandwich => (
                        <div className='d-flex flex-column'>
                            <div className='d-flex justify-content-between'>
                            <span className='p-color'>{sandwich.name}</span>
                            <span>Rs. {sandwich.price}</span>

                            </div>
                            <div>
                                <span className='grey'>{sandwich.type}</span>
                            </div>

                        </div>
                    ))}

                </div>
            </div>


        </div>

    </div>
  )
}



const cocktails = [
    {
      name: "Mojito",
      type: "Classic",
      price: 350
    },
    {
      name: "Margarita",
      type: "Tequila-Based",
      price: 400
    },
    {
      name: "Cosmopolitan",
      type: "Vodka-Based",
      price: 450
    },
    {
      name: "Pina Colada",
      type: "Rum-Based",
      price: 500
    },
    {
      name: "Whiskey Sour",
      type: "Whiskey-Based",
      price: 550
    }
  ];
  const sandwiches = [
    {
      name: "Grilled Cheese Sandwich",
      type: "Vegetarian",
      price: 120
    },
    {
      name: "Chicken Club Sandwich",
      type: "Non-Vegetarian",
      price: 180
    },
    {
      name: "Veggie Delight Sandwich",
      type: "Vegan",
      price: 150
    },
    {
      name: "BLT Sandwich",
      type: "Non-Vegetarian",
      price: 200
    },
    {
      name: "Egg Salad Sandwich",
      type: "Vegetarian",
      price: 160
    }
  ];
  
  