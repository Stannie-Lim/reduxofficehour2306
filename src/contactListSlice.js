import { createSlice } from "@reduxjs/toolkit";

// name of the slice
// initial state
// the list of reducers (i like to call these the actions)
export const contactListSlice = createSlice({
  name: "contact_list",
  initialState: [
    {
      id: 1,
      name: "shakelvia",
      phoneNumber: "123-123-1234",
    },
    {
      id: 2,
      name: "jay",
      phoneNumber: "911",
    },
  ],

  reducers: {
    deleteContact: (state, action) => {
      // whatever is returned from this action, becomes the new state
      return state.filter((contact) => contact.id !== action.payload.id);
    },
  },
});
