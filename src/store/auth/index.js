import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "AhmetOsmanSezg2",
    fullName: "Ahmet Osman Sezgin",
    avatar:
      "https://pbs.twimg.com/profile_images/1489543314068099073/mHJh7z-n_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      userName: "AhmetOsmanSezg2",
      fullName: "Ahmet Osman Sezgin",
      avatar:
        "https://pbs.twimg.com/profile_images/1489543314068099073/mHJh7z-n_400x400.jpg",
    },
    {
      id: 2,
      userName: "aosfs",
      fullName: "AOSFS",
      avatar:
        "https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //state metodları
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
