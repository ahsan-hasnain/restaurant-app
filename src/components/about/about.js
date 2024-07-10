import React from 'react'
import story from '../../assets/images/Mask Group.png'
import mission from '../../assets/images/Mask Group2.png'
import chef from '../../assets/images/Image3.png'

import sign from '../../assets/images/signature.png'

export const AboutUs = () => {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-6 d-none d-md-block'>
                    <img src={mission} />
                </div>
                <div className='col-12 col-md-6 '>
                    <div className='d-flex flex-column text-center text-md-start'>
                        <span className='f60 p-color YourFont-500'>Our Mission</span>
                        <span className='grey f24'>“At MAIZ, our mission is to bring the authentic flavors of Pakistan to the heart of Lahore, celebrating our rich culinary heritage with every dish. We are committed to using the freshest ingredients, traditional recipes, and a passion for hospitality to create an unforgettable dining experience that nourishes the body and soul, and fosters a sense of community and cultural pride.”

                        </span>
                    </div>
                </div>
                <div className='col-12 col-md-6 text-center text-md-start'>
                    <div className='d-flex flex-column'>
                        <span className='f60 p-color YourFont-500'>Our Story</span>
                        <span className='grey f24'>"Welcome to MAIZ, a family-owned gem in the heart of Lahore, where we celebrate the rich culinary traditions of Pakistan. From our cherished family recipes to the vibrant, authentic flavors that define our cuisine, every dish at MAIZ tells a story of heritage and passion. Join us to experience a warm, welcoming atmosphere and indulge in the finest Pakistani delicacies, crafted with love and served with pride."</span>
                    </div>
                </div>
                <div className='col-6 d-none d-md-block'>
                    <img src={story} className='img-fluid  text-end'></img>
                </div>
                <div className='col-6 d-none d-md-block'>
                    <img src={chef} className='img-fluid' />
                </div>
                <div className='col-12 col-md-6 text-center text-md-start mt-4'>
                    <div className='d-flex flex-column ps-md-5 gap-2 gap-md-4'>
                        <span className='YourFont-medium-italic'>Chef's Word</span>
                        <span className='p-color f60'>What We Believe In </span>
                        <span className='grey f18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</span>
                        <div className='d-flex flex-column'>
                            <span className='p-color f24'>Ahsan Husnain</span>
                            <span className='grey f18'>Chef and Co-founder</span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
