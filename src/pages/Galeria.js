import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/Galeria.css';
import ModalImage from './ModalImage';

import imagen1 from '../Imagenes/Leonardo_Diffusion_a_cell_frame_a_iphone_frame_acrilic_nails_s_0.jpg';
import imagen2 from '../Imagenes/Leonardo_Diffusion_a_cell_frame_a_iphone_frame_picture_within_0.jpg';
import imagen3 from '../Imagenes/Leonardo_Diffusion_a_cell_frame_a_iphone_frame_picture_within_1.jpg';
import imagen4 from '../Imagenes/Leonardo_Diffusion_Only_a_cell_frame_a_iphone_frame_picture_wi_0.jpg';

const Galeria = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

const images = [ 
    imagen1,
    imagen2,
    imagen3, 
    imagen4
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
    slidesMargin: 8,
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
