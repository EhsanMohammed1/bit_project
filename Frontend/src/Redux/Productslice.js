import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api.js";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

//products fetch
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/products`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//create product
export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values) => {
    //  name,
    //     brand,
    //     price,
    //     cat,
    //     color,
    //     dic,
    //     img: productimage
    try {
      console.log(values);
      let formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("cat", values.cat);
      formData.append("color", values.color);
      formData.append("dic", values.dic);
      formData.append("brand", values.brand);
      formData.append("img", values.img);

      // const response = await axios.post(`${url}/products`, values,{

      // });

      const response = await axios({
        method: "post",
        url: `${url}/products`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      return response.values;
    } catch (error) {
      console.log(error);
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
      state.items.push(action.payload);
      state.createStatus = "success";
      // toast.success("Product Created!");
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});

export default productsSlice.reducer;
