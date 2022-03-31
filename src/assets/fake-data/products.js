const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default


const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "Vestido Rojo",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "camiseta1",
        colors: ["Blanco", "rojo", "Naranjado"],
        slug: "Camiseta",
        size: ["s", "m", "l", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Camiseta Polo Mujer",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta2",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Camiseta deportiva Millonarios",
        price: '19000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta3",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Camiseta oso mujer",
        price: '159000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta4",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Sombrero de mujer",
        price: '159000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta5",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Camiseta Love Mujer",
        price: '159000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta6",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Camiseta cuadritos mujer",
        price: '159000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta7",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Camiseta paris mujer",
        price: '159000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta8",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Camiseta Latina",
        price: '159000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta9",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "Camiseta mujer",
        price: '159000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "camiseta",
        colors: ["Blanco", "rojo", "Azul"],
        slug: "Camiseta9",
        size: ["s", "m"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "jean",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean11",
        size: ["s", "m", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "jean",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean11",
        size: ["s", "m", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "jean",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean11",
        size: ["s", "m", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "jean",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean11",
        size: ["s", "m", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "jean",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean11",
        size: ["s", "m", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "jean",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean11",
        size: ["s", "m", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "jean",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean11",
        size: ["s", "m", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        title: "jean",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean",
        size: ["s", "m", "l", "xl"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData