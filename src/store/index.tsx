import { configureStore } from "@reduxjs/toolkit";
import users from "features/UserList/userSlice";
// @ts-ignore
// Ignore this, it's used for dispatch typing
// eslint-disable-next-line
import * as reduxThunk from "redux-thunk/extend-redux";
/*
 L'usage de Redux-Toolkit pour une mini-app est totalement inutile
 Je l'ai utilisé dans cette miniapp, pour montrer que je savais l'utiliser (pour de plus gros projets)
*/

const store = configureStore({
  reducer: {
    users: users,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
