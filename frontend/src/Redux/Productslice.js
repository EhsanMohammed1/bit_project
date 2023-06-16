import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  url } from "./api.js";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
  deleteStatus:null
};

//products fetch
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/products`,{
       headers: {"x-auth-token": localStorage.getItem("token")}
      });
      return response.data;
    } catch (error) {
    }
  }
);

//create product
export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values) => {
    try {
      let formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("cat", values.cat);
      formData.append("color", values.color);
      formData.append("dic", values.dic);
      formData.append("brand", values.brand);
      formData.append("img", values.img);

      const response = await axios({
        method: "post",
        url: `${url}/products`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.values;
    } catch (error) {
      toast.error(error.response?.data);
    }
  }
);


// delete product
export const productsDelete = createAsyncThunk(
  "products/productsDelete",
  async (id) => {
    try {
      

      const response = await axios({
        method: "delete",
        url: `${url}/products/${id}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.values;
    } catch (error) {
      toast.error(error.response?.data);
    }
  }
);

//create Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [productsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.createStatus = "success";
      state.items.push(action.payload);
      toast.success("Product Created!");
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    


     [productsDelete.pending]: (state, action) => {
      state.productsStatus = "pending";
    },
    [productsDelete.fulfilled]: (state, action) => {
      state.productsStatus = "success";

const newList=state.items.filter(items=>items._id!==action.payload._id)
state.items=newList
   toast.success("Product Delete!");
    },
    [productsDelete.rejected]: (state, action) => {
      state.productsStatus = "rejected";
    },
  },
});

export default productsSlice.reducer;
