/**
 * Image Component
 */

// Dependencies -------------------- /

import React from "react";

// Component -------------------- /

const Image = (props) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 text-center">
            <img 
                src={props.src} 
                alt={props.alt}
                className={props.miss 
                    ? "img img-fluid rounded m-2 shake" 
                    : "img img-fluid rounded m-2"}
                onClick={() => props.handleImageClick(props["data-id"])} />
        </div>
    );
};

// Export Component -------------------- /

export default Image;
