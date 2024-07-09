import React from 'react'
import bg from '../../assets/images/BG.png'
import './contact.css'
export const Contact = () => {
    return (
        <div>
            <div class="position-relative overflow-hidden w-100 mt-0" >
                <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50">

                    <img src={bg} alt="Background" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />
                </div>
                <div class="position-relative text-white text-center py-5">
                    <div className='container '>
                        <div className='container'>
                            <div className='d-flex flex-column gap-3 text-center p-5'>
                                <span className='p-color f50'>GET IN TOUCH WITH US</span>
                                <span className='grey f24'>You can Get in Touch With Us by Visiting Us or By Reserving Your Seat Online</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container cardsContainer'>
                <div className='row'>
                    <div className='col-6 card dark-bg text-center p-4 rounded-20'>
                        <div className='d-flex flex-column gap-3'>
                            <span className='p-color f50'>Contact Imformation</span>
                            <div className='gap-2 d-flex flex-column'>
                                <span className='grey f24'>ahsanhasnain312@gmail.com</span>
                                <span className='grey f24'>03233566997</span>
                                <span className='grey f24'>Block A ABC Road, Lahore</span>
                            </div>
                        </div>



                    </div>
                    <div className='col-6 '>
                        <div className='card dark-bg h-100 text-center p-4 rounded-20'>
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    <iframe width="690" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=township%2C+lahore&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                    <a href="https://www.analarmclock.com"></a><br />
                                    <a href="https://www.onclock.net"></a><br />

                                    <a href="https://www.ongooglemaps.com">create map in google</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className='container mt-5'>

                <div className='d-flex flex-column text-center gap-5'>
                    <span className='p-color f50'>Reserve Your Seat</span>
                    <input placeholder='enter your number ' />
                    <input placeholder='enter your number ' />
                    <input placeholder='enter your number ' />
                    <button className='primary-button f26'>Reserve</button>

                </div>


            </div>
        </div>
    )
}
