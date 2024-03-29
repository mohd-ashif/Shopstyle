import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/BreadCrump/BreadCrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import RelatedProduct from '../components/RelatedProducts/RelatedProduct'
import Footer from '../components/Footer/Footer'


const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProduct />
      <Footer />
    </div>
  )
}

export default Product