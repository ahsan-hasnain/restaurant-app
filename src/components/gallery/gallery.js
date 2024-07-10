import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import pic2 from '../../assets/images/gallery.jpg'
import pic3 from '../../assets/images/gallery2.jpg'
import pic4 from '../../assets/images/gallery3.jpg'
import pic5 from '../../assets/images/gallery4.jpg'
import pic6 from '../../assets/images/gallery5.jpg'
import pic7 from '../../assets/images/gallery6.jpg'
// Import Swiper styles
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';
const pics = [pic2, pic3, pic4, pic5, pic6, pic7]

export default function PanoramicSlider() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  function onClick(pic) {
    setSelectedImage(pic)
    document.getElementById("mypic").style.width = "100%";
  }

  function onClose() {
    setSelectedImage(null)
    console.log('closeed');
    document.getElementById("mypic").style.width = "0%";
  }
  return (
    <div className='main'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {pics.map(pic => (
          <SwiperSlide>
            <img src={pic} className='pic' alt={pic} onClick={() => onClick(pic)} />
          </SwiperSlide>
        ))}

      </Swiper>
      <div id="mypic" className="overlay">
        <span  className="closebtn grey" style={{cursor:'pointer'}} onClick={()=>onClose()}>CLOSE</span>
        <div className="overlay-content">
          <img src={selectedImage} style={{width:'auto', height:'60vh'}} alt={'something'}/>
        </div>
      </div>
    </div>
  );
}



