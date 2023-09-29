import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'


export const UserSlice = createSlice({
  name: 'user',
  initialState:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{ isAuthorized:false},
  reducers: {
    signOut: () => {
    
localStorage.setItem('user',JSON.stringify({isAuthorized:false}))
toast.error('Logged out')
return{isAuthorized:false}
    },
    authSuccess:(state,{payload})=>{

      // string to object
        localStorage.setItem('user',JSON.stringify({isAuthorized:true,user:payload}))
        return{isAuthorized:true,user:payload}
    }
  },
})


export const { signOut,authSuccess } = UserSlice.actions

export default UserSlice.reducer