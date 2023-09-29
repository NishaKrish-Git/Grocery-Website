import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './CartSlice'
import userSlice from './UserSlice'
import WishListSlice from './WishListSlice'

export default configureStore({
  reducer: {
    Cart:cartSlice,
    authReducer:userSlice,
    wishListReducer:WishListSlice
  },
})