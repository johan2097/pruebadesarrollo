import React, { useState } from 'react'


import ProductView from './ProductView'

import Button from './Button'


const ProductViewModal = () => {

    

    const [product] = useState(undefined)

   

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product}/>
                <div className="product-view__modal__content__close">
                    <Button size="sm">cerrar</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
