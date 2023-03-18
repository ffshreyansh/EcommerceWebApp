import React from 'react'


function Products(props) {
    return (
        <div className="">
            <a href={`/products/${props.name.toLowerCase().replace(' ', '-')}`}>
            <div key={props.id} className="rounded-md">
                <div className="object-contain w-100% h-content">
                    
                        <img src={props.image} className="object-cover rounded-md w-full h-96" alt="product-img" />
                    
                    <div>
                        <div className="flex justify-between font-semibold mt-2">
                            <p className="text-2xl">{props.name}</p>
                            <p>{props.price}</p>
                        </div>
                        <p className="mt-2">{props.description}</p>
                        <div className="mt-2 flex items-center">
                            {[...Array(props.rating)].map((star, index) => (
                                <i key={index} className="fa-solid fa-star"></i>
                            ))}
                            {[...Array(5 - props.rating)].map((star, index) => (
                                <i key={index} className="fa-regular fa-star"></i>
                            ))}
                            <p className="ml-2">({props.reviews})</p>
                        </div>
                    </div>
                </div>
            </div>
            </a>
        </div>
    )
}

export default Products
