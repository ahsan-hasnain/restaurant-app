import React from 'react'
import pic from '../../assets/images/Hero img.png'
import pic2 from '../../assets/images/Frame.png'
import styles from './heroSection.module.css'
export const HeroSection = () => {
  return (
    <div className={`container my-5 `}>
        <div className={`row  align-items-center`}>
            <div className='col-6'>
                    <div className={` ${styles.wrapper2} d-flex flex-column gap-5 pe-5 `}>
                            <span className='f26'>Chase the new Flavour</span>
                            <h1 className='f80 YouText-600 text-white p-color'>" THE KEY TO FINE DINING "</h1>
                            <span className='f18 grey'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </span>
                            <button className='primary-button w-[20px]' >Explore Menu</button>
                    </div>
            </div>
            <div className='col-6'>
                <img src={pic} className={` ${styles.wrapper} img-fluid align-items-center`}/>

            </div>

        </div>

    </div>
  )
}
