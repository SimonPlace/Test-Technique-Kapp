import { combineReducers, configureStore } from "@reduxjs/toolkit";
import users from "reducers/users";
import thunk from "redux-thunk";
import type {} from "redux-thunk/extend-redux";
/*
 L'usage de Redux-Toolkit pour une mini-app est totalement inutile
 Je l'ai utilisé dans cette miniapp, pour montrer que je savais l'utiliser (pour de plus gros projets)
*/

const reducer = combineReducers({ users });

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
