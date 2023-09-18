// holds all the slices of the store
// holds the store
import { configureStore } from "@reduxjs/toolkit";

import { contactListSlice } from "./contactListSlice";

// takes in an object as an argument
/*
{
  reducer: {

  },
}

dont forget this^ if you do, it'll say something about undefined reducer
*/
const store = configureStore({
  reducer: {
    contactList: contactListSlice.reducer,
  },
});

export default store;

// window is a global object that's accessible from anywhere
window.store = store;
