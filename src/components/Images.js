/**
 * Images Component
 */

// Dependencies -------------------- /

import React from "react";
import Image from "./Image";

// Component -------------------- /

const Images = (props) => {
    return (
        <div className="row my-4 images">
            {props.images.length > 0 && props.images.map((image) => (
                <Image 
                    key={image.id} 
                    data-id={image.id}
                    src={image.path}
                    alt={image.alt}
                    handleImageClick={props.handleImageClick}
                    miss={props.miss} />
            ))}
        </div>
    );
};

// Export Component -------------------- /

export default Images;
