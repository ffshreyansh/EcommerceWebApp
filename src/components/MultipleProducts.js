import React from 'react'
import Products from './Products'

function MultipleProducts(props) {
  return (
    <div className='grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-4 mt-20'>
        <Products
        image = "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
        name = "Jordan Shoes"
        description = "Original Jordan Shoe from Nike"
        price = "$549"
        rating = {4}
        reviews = {124}
       />
       
       <Products
        image = "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        name = "Sunglasses"
        description = "Rayban black wayfarer"
        price = "$129"
        rating = {3}
        reviews = {124}
       />
       <Products
        image = "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        name = "Boot Casual Shoes"
        description = "Formal shoe for Casual ocassions."
        price = "$349"
        rating = {3}
        reviews = {124}
       />
    </div>
  )
}

export default MultipleProducts
