import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/Galeria.css';
import ModalImage from './ModalImage';

const Galeria = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    // Agrega más imágenes aquí
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
};

const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
};

const closeModal = () => {
    setIsOpen(false);
};

return (
    <div className="galeria">
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
