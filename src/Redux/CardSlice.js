import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cardItems: localStorage.getItem("cardItems")
    ? JSON.parse(localStorage.getItem("cardItems"))
    : [],
  cardTotalQuantity: 0,
  cardTotalAmount: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard(state, action) {
      const itemIndex = state.cardItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cardQuantity += 1;
        toast.error(`${action.payload.name}is Romved from Card`, {
          position: "top-left",
        });
      } else {
        const tempProduct = { ...action.payload, cardQuantity: 1 };
        toast.success(`${action.payload.name}is  Added to Card`, {
          position: "top-left",
        });
        state.cardItems.push(tempProduct);
      }
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },

    removeFromCard(state, action) {
      const nextCardItems = state.cardItems.filter(
        (cardItem) => cardItem.id !== action.payload.id
      );
      state.cardItems = nextCardItems;

      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
      toast.error(`${action.payload.name}is Romved from Card`, {
        position: "top-left",
      });
    },


    decreasCard(state, action) {
      const itemIndex = (state = state.cardItems.findIndex(
        (cardItem) => cardItem.id === action.payload.id
      ));

      if (state.cardItems[itemIndex].cardQuantity > 1) {
        state.cardItems[itemIndex].cardQuantity -= 1;

        toast.info(`${action.payload.name}cardQuantity`, {
          position: "top-left",
        });
      } 
      
      
      else if (state.cardItems[itemIndex].cardQuantity === 1) {
        const nextCardItems = state.cardItems.filter(
          (cardItem) => cardItem.id !== action.payload.id
        );
        state.cardItems = nextCardItems;

        toast.error(`${action.payload.name}is Romved from Card`, {
          position: "top-left",
        });
      }
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
  },
});

export const { addToCard, removeFromCard, decreasCard } = cardSlice.actions;
export default cardSlice.reducer;
