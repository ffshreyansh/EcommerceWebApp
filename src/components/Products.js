import React from 'react'

function Products() {
    return (
        <div class="grid grid-cols-4 gap-4 p-10">
            <div className='rounded-md'>
                <div className='object-contain w-100% h-content'>
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                            className='object-cover rounded-md w-full h-96' alt="product-img" />
                    </a>
                    <div>
                        <div className='flex justify-between font-semibold mt-2'>
                            <p className='text-2xl'>Product Name</p>
                            <p>$499</p>
                        </div>
                        <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        <div className='mt-2 flex items-center'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className='ml-2'>(34)</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Products