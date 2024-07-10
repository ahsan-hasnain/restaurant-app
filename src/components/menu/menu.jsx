import React from 'react'
import item from '../../assets/images/Image2.png'
import item2 from '../../assets/images/Image33.png'
import item3 from '../../assets/images/Image4.png'
import item4 from '../../assets/images/Image6.png'
import item5 from '../../assets/images/Image8.png'

const items = [
    {name: 'Biryani', price: 'Rs. 500', src: item},
    {name: 'Sajji', price: 'Rs. 2000', src: item2},
    {name: 'Mandi', price: 'Rs. 5000', src: item3},
    {name: 'Qorma', price: 'Rs. 2400', src: item4},
    {name: 'Chicken Rice', price: 'Rs. 900', src: item5},
    {name: 'Biryani', price: 'Rs. 500', src: item}

] 
export const MenuPage = () => {
    const [search, setSearch] = React.useState('')
    const filteredItems = items.filter(item => item.name.toLocaleLowerCase().includes(search))
  return (
    <div className='container'>
        <div className=' d-flex gap-3 align-items-center my-3'>
            <span className='f18'>Search Dishes</span>
            <input value={search} placeholder='search items' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className='p-color YourFont-500  f60 text-center'>
            <span>Our Menu</span>
        </div>
        <div className='row'>
            {filteredItems.map(item => (
                <div className='col-12 col-sm-6 col-md-4 my-3'>
                    <div className='d-flex flex-column gap-2'>
                        <div>
                            <img src={item.src} className='img-fluid  w-100'/>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span className='f24 p-color'>{item.name}</span>
                            <span className='grey f18'>{item.price}</span>
                        </div>
                    </div>
                    
               </div>
                
            ))}

        </div>

    </div>
  )
}
