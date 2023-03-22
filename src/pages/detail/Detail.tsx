import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { functionThunkDetail, RelatedProduct } from '../../redux/reducer/productDetailSlice'
import { DispatchType, RootState } from '../../redux/store'
import ProductItem from '../product/ProductItem'
import { useParams } from 'react-router-dom'

type Props = {}

function Detail({ }: Props) {
 
    const params = useParams();
    const id: string | undefined = params.id
    const { productDetail } = useSelector((state: RootState)=> state.productDetailSlice);
    const dispatch:DispatchType = useDispatch()

   useEffect(()=>{
    const actionThunk = functionThunkDetail(id as string)
    dispatch(actionThunk)
    
   },[id])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img src={productDetail?.image} alt={productDetail?.image} />
                </div>
                <div className='col-8'>
                    <h4>{productDetail?.name}</h4>
                    <b>{productDetail?.shortDescription}</b>
                </div>
            </div>
            <div className='row'>
                {productDetail?.relatedProducts.map((prod: RelatedProduct, index:number)=>{
                    return <div key={index} className='col-4'>
                    <ProductItem prod={prod}/>
                </div>
                })}
                
               
            </div>
        </div>
    )
}

export default Detail