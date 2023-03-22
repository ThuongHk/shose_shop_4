import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeLogin } from '../../pages/login/Login'
import { ACCESS_TOKEN, history, http, settings, USER_LOGIN } from '../../util/settings/config'


export type LoginType = {
   email: string,
   accessToken: string
}

export type StateLogin = {
    useLogin: LoginType | null,
   
    
}

const initialState: StateLogin = {
   useLogin: settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) : null
  
}

const userLoginSlice = createSlice({
  name: 'userLoginSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
   builder
   .addCase(callApiLoginSlice.fulfilled, (state: StateLogin, action: PayloadAction<LoginType>)=>{
      state.useLogin = action.payload
      console.log(action.payload)
      settings.setStorageJson(USER_LOGIN,action.payload);
      settings.setStorage(ACCESS_TOKEN,action.payload.accessToken)
      settings.setCookieJson(USER_LOGIN,action.payload,30)
      settings.setCookie(ACCESS_TOKEN,action.payload.accessToken,30)
      history.push('/profile')
   })
   
  }
});

export const {} = userLoginSlice.actions

export default userLoginSlice.reducer



export const callApiLoginSlice = createAsyncThunk('userLoginSlice/callApiLoginSlice', async (values: TypeLogin): Promise<LoginType>=>{
   const result = await http.post(`/api/Users/signin`, values)
   // console.log(response)
   return result.data.content
})

