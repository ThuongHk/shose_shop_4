import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callApiProductList, ProductType } from '../../redux/reducer/productSlice'
import { DispatchType, RootState } from '../../redux/store'
import ProductItem from '../product/ProductItem'

type Props = {}

function Home({ }: Props) {
  const { productList } = useSelector((state: RootState) => state.productSlice);
  console.log(productList)

  const dispatch: DispatchType = useDispatch()
 
  useEffect(()=>{
    const actionThunk = callApiProductList()
    dispatch(actionThunk)
  },[])
 
  return (
    <div className="container">
      <h5>_Shose shop_</h5>
      <div className="row">
        {productList.map((prod: ProductType, index: number) => {
          return <div key={index} className="col-4">
            <ProductItem prod={prod}/>
          </div>
        })}


      </div>
    </div>
  )
}

export default Home