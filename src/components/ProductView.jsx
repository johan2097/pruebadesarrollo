import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'


import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {

    

    let product = props.product

    if (product === undefined) product = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description: ""
    }

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand] = useState(false)


    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setSize(undefined)
    }, [product])



    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                    Detalles de producto
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                  
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                       Kit
                    </div>
                    <div className="product__info__item__list">
                        
                                <div className="product__info__item__list__item">
                                    <span className="product__info__item__list__item__size">
                                        Home
                                    </span>
                                </div>
                                <div className="product__info__item__list__item">
                                <span className="product__info__item__list__item__size">
                                        Away
                                    </span>
                                </div>
                                <div className="product__info__item__list__item">
                                <span className="product__info__item__list__item__size">
                                        Third
                                    </span>
                                </div>
                           
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Tama??o
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.size.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                    <span className="product__info__item__list__item__size">
                                        {item}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Cantidad
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button>A??adir al carrito</Button>
                </div>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Detalles
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)
