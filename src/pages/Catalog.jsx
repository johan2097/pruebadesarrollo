import React, { useCallback, useState, useEffect, useRef } from 'react'

import Helmet from '../components/Helmet'

import productData from '../assets/fake-data/products'

import InfinityList from '../components/InfinityList'

const Catalog = () => {

    const initFilter = {
        category: [],
        color: [],
        size: []
    }

    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)

    const [filter] = useState(initFilter)

    

    const updateProducts = useCallback(
        () => {
            let temp = productList

            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }

            if (filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }

            if (filter.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined
                })
            }

            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet>
            <div className="catalogo">
                <div className="catalogo__filter" ref={filterRef}>
                    <div className="catalogo__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
    
                </div>
                <div className="catalogo__filter__toggle">
                    
                </div>
                <div className="catalogo__content">
                    <InfinityList
                        data={products}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
