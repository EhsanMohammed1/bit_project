import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "./api";
import { toast } from "react-toastify";

const initialState = {
  list: [],
  status: null,
  deleteStatus: null,
};
//fetch users
export const userFetch = createAsyncThunk(
  "users/userFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/users`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      throw error; // Rethrow the error to be handled by the caller
    }
  }
);
//delete single user
export const userDelete = createAsyncThunk(
  "users/userDelete",
  async (id) => {
    try {
      const response = await axios.delete(`${url}/users/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      throw error; // Rethrow the error to be handled by the caller
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userFetch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(userFetch.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      })
      .addCase(userFetch.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(userDelete.pending, (state, action) => {
        state.status = "pending";


        
      })

.addCase(userDelete.fulfilled, (state, action) => {
  state.status = "success";
  const newList = state.list.filter((user) => user._id !== action.payload._id);
  state.list = newList;



  toast.success("User Deleted!", {
    position: "top-right",
  });
})

      .addCase(userDelete.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default userSlice.reducer;
