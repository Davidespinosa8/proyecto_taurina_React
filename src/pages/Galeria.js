import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/Galeria.css';
import ModalImage from './ModalImage';
import imagen1 from '../Imagenes/Taurina_IMG/Taurina_Nails2.jpeg';
import imagen2 from '../Imagenes/Taurina_IMG/Taurina_Nails3.jpeg';
import imagen3 from '../Imagenes/Taurina_IMG/Taurina_Nails4.jpeg';
import imagen4 from '../Imagenes/Taurina_IMG/Taurina_Nails5.jpeg';
import imagen5 from '../Imagenes/Taurina_IMG/Taurina_Nails6.jpeg';

const Galeria = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

const images = [ 
    imagen1,
    imagen2,
    imagen3, 
    imagen4,
    imagen5
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesMargin: 0,
};

const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
};

const closeModal = () => {
    setIsOpen(false);
};

return (
    <div className="galeria" id="galeria">
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} onClick={() => openModal(image)}>
                    <img src={image} alt={`Imagen ${index + 1}`} className="galeria-imagen" />
                </div>
            ))}
        </Slider>
        {isOpen && <ModalImage image={selectedImage} closeModal={closeModal} />}
    </div>
    );
};

export default Galeria;
