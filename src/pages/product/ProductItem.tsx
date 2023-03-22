import React from 'react'
import { NavLink } from 'react-router-dom'
import { RelatedProduct } from '../../redux/reducer/productDetailSlice'
import { ProductType } from '../../redux/reducer/productSlice'

type Props = {
    prod?: ProductType | RelatedProduct
}

function ProductItem({prod}: Props) {
    return (
        <div className='card'>
            <div className='card-head position-relative'>
            <i className="fa fa-heart position-absolute mx-3 text-danger end-0 mt-3"></i>
                <img src={prod?.image ? prod.image : require('../../assets/img/day.png')} alt={prod?.image} className='w-100'/>
            </div>
            <div className='card-body'>
                <h5>{prod?.name ? prod.name : 'lorem so insem bassess'}</h5>
                <b>{prod?.shortDescription}</b>
            </div>
            <div className='d-flex justify-content-around text-center'>
                <NavLink to={`/${prod?.id}`} className={'bg-danger text-light w-100 text-decoration-none'}>Buy now</NavLink>
                <b className='bg-success text-light w-100'>{prod?.price}</b>
            </div>
        </div>
    )
}

export default ProductItem