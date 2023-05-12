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
        toast.error(`${action.payload.name} is Removed from Card `, {
          position: "top-left",
        });
      } else {
        const tempProduct = { ...action.payload, cardQuantity: 1 };
        toast.success(`${action.payload.name}is add to Card`, {
          position: "top-left",
        });
        state.cardItems.push(tempProduct);
      }
      state.cardTotalQuantity += 1;

      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },

    removeFromCard(state, action) {
      const nextCardItems = state.cardItems.filter(
        (cardItem) => cardItem.id !== action.payload.id
      );
      state.cardItems = nextCardItems;

      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
      toast.success(`${action.payload.name}is completely Romved from Card `, {
        position: "top-left",
      });
    },
    addTotal(state, action) {
      state.value += action.payload;
    },
    decreasCard(state, action) {
      const itemIndex = state.cardItems.findIndex(
        (cardItem) => cardItem.id === action.payload.id
      );

      if (state.cardItems[itemIndex].cardQuantity > 1) {
        state.cardItems[itemIndex].cardQuantity -= 1;

        toast.error(`${action.payload.name} card is decreased  `, {
          position: "top-left",
        });
      } else if (state.cardItems[itemIndex].cardQuantity === 1) {
        const nextCardItems = state.cardItems.filter(
          (cardItem) => cardItem.id !== action.payload.id
        );
        state.cardItems = nextCardItems;

        toast.error(`${action.payload.name}is  Romved from Card`, {
          position: "top-left",
        });
      }

      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    clearAllCards(state, action) {
      state.cardItems = [];
      toast.success(`All cards Are removed `, {
        position: "top-left",
      });
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    getTotal(state, action) {
      let { total, quantity } = state.cardItems.reduce(
        (cardTotal, cardItem) => {
          const { price, cardQuantity } = cardItem;
          const itemTotal = price * cardQuantity;

          cardTotal.quantity += cardQuantity;
          cardTotal.total += itemTotal;

          return cardTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cardTotalAmount = total;
      state.cardTotalQuantity = quantity;
    },
  },
});

export const {
  addToCard,
  removeFromCard,
  decreasCard,
  addTotal,
  clearAllCards,
  getTotal,
} = cardSlice.actions;
export default cardSlice.reducer;
