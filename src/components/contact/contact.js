import React from 'react'
import img from '../../assets/images/img.png'

export const Contact = () => {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 text-center text-md-start'>
                    <div className='d-flex flex-column gap-4'>
                        <div>
                            <span className='f60 p-color'>Contact Us</span>
                        </div>
                        <div>
                            <span className='grey'>Block A ABC Road, Lahore</span>
                        </div>
                        <div className='d-flex flex-column gap-2'>

                            <span className='f26 p-color'>Opening Hours</span>
                            <span className='grey'>Mon - Fri: 10:00 am - 02:00 am</span>
                            <span className='grey'>Mon - Fri: 10:00 am - 02:00 am</span>


                        </div>
                        <div>
                            <button className='primary-button px-3 f18'>Reserve Your Seat Now</button>

                        </div>
                    </div>
                </div>
                <div className='col-6 d-none d-md-block'>
                    <div>
                        <img src={img} className='img-fluid p-5' />
                    </div>
                </div>

            </div>

        </div>
    )
}
