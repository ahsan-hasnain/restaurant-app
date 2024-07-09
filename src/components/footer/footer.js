import React from 'react'
import bg from '../../assets/images/BG.png'
import logo from '../../assets/images/logo.png'
export const Footer = () => {
  return (
    <div class="position-relative overflow-hidden w-100 mt-5" >
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50">

        <img src={bg} alt="Background" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />
    </div>
    <div class="position-relative text-white text-center py-5">
        <div className='container '>
            <div className='row'>
                <div className='col-4'>
                    <div className='d-flex flex-column gap-3'>
                        <span className='f24'>Contact Us</span>
                        <span>Block A ABC Road, Lahore</span>
                        <span>+92 323 3566997</span>
                        <span>+92 323 3566997</span>

                    </div>

                </div>
                <div className='col-4'>
                    <div className='d-flex flex-column gap-3'>
                        <span className='f24'><img src={logo} className='img-fluid'/></span>
                        <span>"The best way to find yourself is to lose yourself in the service of others.”</span>
                        

                    </div>

                </div>
                <div className='col-4'>
                    <div className='d-flex flex-column gap-3'>
                        <span className='f24'>Working Hours</span>
                        <span>Monday-Friday:
                        <br />
                        08:00 am - 12:00 am</span>
                        <span>Saturday-Sunday:<br />
                       
                       07:00am - 11:00 pm</span>

                    </div>

                </div>

            </div>
            <div className='mt-4'>
                <span className='grey'>Made By AHSAN HUSNAIN </span>
            </div>

        </div>
    </div>
</div>
  )
}
