import React from 'react';
import './Button.css';

const Button = props => {
    return(
        <a href={props.href} class='button' target="_blank" rel="noopener noreferrer">
            {props.content}
        </a>
    );
}

export default Button;
