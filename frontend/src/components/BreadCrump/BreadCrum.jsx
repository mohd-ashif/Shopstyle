import React from 'react';
import arrow_icon from "../../../public/Assets/breadcrum_arrow.png";

const BreadCrum = (props) => {
    const { product } = props;

    // Check if 'product' exists before accessing its properties
    if (!product) {
        return null; // or some default content if 'product' is not available
    }

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />

            {/* Check if 'product.category' exists before accessing it */}
            {product.category && (
                <>
                    {product.category} <img src={arrow_icon} alt="" />
                </>
            )}

            {/* Check if 'product.name' exists before accessing it */}
            {product.name && (
                <>
                    {product.name}
                </>
            )}
        </div>
    );
};

export default BreadCrum;
