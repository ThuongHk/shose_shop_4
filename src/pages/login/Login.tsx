import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { DispatchType } from '../../redux/store'
import { callApiLoginSlice } from '../../redux/reducer/userLoginSlice'


type Props = {}
export type TypeLogin = {
  email: string,
  password: string
}
function Login({ }: Props) {

 const dispatch: DispatchType = useDispatch()
  const formFormik = useFormik<TypeLogin>({
    initialValues:{
      email: '',
      password: ''
    },
    onSubmit: (values: TypeLogin) =>{
      
      const actionThunk = callApiLoginSlice(values)
        dispatch(actionThunk)
    }
  })
  return (
    <div>
      <form  onSubmit={formFormik.handleSubmit} className="w-25 m-auto">
        <div>
          <div className="form-group">
            <b>Email:</b>
            <input type="email" name='email' className="form-control" value={formFormik.values.email}  onChange={formFormik.handleChange} />
          </div>
          <div className="form-group">
            <b>password:</b>
            <input type="password" name='password' className="form-control" value={formFormik.values.password} onChange={formFormik.handleChange} />
          </div>
        </div>
        <button type='submit' className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  )
}

export default Login