import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "./api.js";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
  deleteStatus: null,
  productsStatus: null,
  productDetails: null,
};

//products fetch
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/products`, {
        headers: { "x-auth-token": localStorage.getItem("token") }
      });
      return response.data;
    } catch (error) {
    }
  }
);

// Fetch product details by productId
export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductDetails',
  async (productId) => {
    try {
      const response = await axios.get(`${url}/products/${productId}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data);
      throw error;
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

      return response.data;
    } catch (error) {
      toast.error(error.response?.data);
    }
  }
);

// update product
export const productsUpdate = createAsyncThunk(
  'products/productsUpdate',
  async (values) => {
    try {

      console.log(values.name);
      let formData = new FormData();
      formData.append("id", values.productId);
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("cat", values.cat);
      formData.append("color", values.color);
      formData.append("dic", values.dic);
      formData.append("brand", values.brand);
      formData.append("img", values.img);

      const response = await axios({
        method: "put",
        url: `${url}/products/${values.productId}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
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

      return id
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

    [fetchProductDetails.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchProductDetails.fulfilled]: (state, action) => {
      state.productDetails = action.payload;
      state.status = "success";
    },
    [fetchProductDetails.rejected]: (state, action) => {
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

    [productsUpdate.pending]: (state, action) => {
      state.UpdateStatus = "pending";
    },
    [productsUpdate.fulfilled]: (state, action) => {
      state.UpdateStatus = "success";
      const index = state.items.findIndex((item) => item._id === action.payload._id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      toast.success("Product Updated!");
    },
    [productsUpdate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },





    [productsDelete.pending]: (state, action) => {
      state.productsStatus = "pending";
    },
    [productsDelete.fulfilled]: (state, action) => {
      state.productsStatus = "success";

      const newList = state.items.filter(item => item._id !== action.payload)
      state.items = newList
      toast.success("Product Delete!");
    },
    [productsDelete.rejected]: (state, action) => {
      state.productsStatus = "rejected";
    },
  },
});

export default productsSlice.reducer;
