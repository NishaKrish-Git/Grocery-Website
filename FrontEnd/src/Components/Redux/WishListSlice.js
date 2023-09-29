import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishList: [],
  
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState:localStorage.getItem('wishlist')?JSON.parse(localStorage.getItem('wishlist')):initialState,
  reducers: {
    addToWishList: (state, {payload}) => {
      state.wishList.push(payload)
      localStorage.setItem('wishlist',JSON.stringify(state))
      toast.success('Product is added to WishList')
    },

    removeItemFromWishList: (state, action) => {
      state.wishList = state.wishList.filter((item) => item._id !== action.payload);
      localStorage.setItem('wishlist',JSON.stringify(state))
      toast.success('Product is removed from WishList')
    },
    
  
  },
});

export const {
    addToWishList,
    removeItemFromWishList,
  
} = wishListSlice.actions;

export default wishListSlice.reducer;