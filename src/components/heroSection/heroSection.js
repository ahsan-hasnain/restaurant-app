import React from 'react'
import pic from '../../assets/images/Hero img.png'
import pic2 from '../../assets/images/Frame.png'
import styles from './heroSection.module.css'
export const HeroSection = () => {
  return (
    <div className={`container my-5 `}>
        <div className={`row  align-items-center`}>
            <div className='col-12 col-md-6 my-4 text-center text-md-start'>
                    <div className={` ${styles.wrapper2} container w-100 d-flex flex-column gap-5 pe-5 `}>
                            <span className='f24'>Chase the new Flavour</span>
                            <span className='f40 YourText-600 text-white p-color'>" THE KEY TO FINE DINING "</span>
                            <span className='f18 grey'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </span>
                            <button className='primary-button w-[20px]' >Explore Menu</button>
                    </div>
            </div>
            <div className='col-6 d-none d-md-block'>
                <img src={pic} className={` ${styles.wrapper}  h-100 w-75 align-items-center`}/>

            </div>

        </div>

    </div>
  )
}
