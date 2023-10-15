import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "types/users";
const USERS_URL = "https://6511a930b8c6ce52b394dc63.mockapi.io/api/users/users";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

interface InitialState {
  users: Array<User>;
  status: string;
  error: null | string | undefined;
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

export const fetchFilteredUsers = createAsyncThunk(
  "users/fetchFilteredUsers",
  async (search: string) => {
    const response = await axios.get(`${USERS_URL}?search=${search}`);

    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId: string) => {
    const response = await axios.delete(`${USERS_URL}/${userId}`);
    return response.data;
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (userId: string) => {
    const response = await axios.put(`${USERS_URL}/${userId}`);

    return response.data;
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (user: User) => {
    const userData = {
      email: user.email,
      name: user.name,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const response = await axios.post(USERS_URL, userData, config);

    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state: InitialState, action) => {
        state.status = "succeeded";
        const loadedUsers = action.payload;

        state.users = loadedUsers;
      })
      .addCase(fetchUsers.rejected, (state: InitialState, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchFilteredUsers.pending, (state: InitialState, action) => {
        state.status = "loading";
      })
      .addCase(fetchFilteredUsers.fulfilled, (state: InitialState, action) => {
        state.status = "succeeded";
        const loadedUsers = action.payload;

        state.users = loadedUsers;
      })
      .addCase(fetchFilteredUsers.rejected, (state: InitialState, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state: InitialState, action) => {
        state.status = "succeeded";
        const { id } = action.payload;
        const users = state.users.filter((users) => users.id !== id);
        state.users = users;
      })
      .addCase(deleteUser.pending, (state: InitialState) => {
        state.status = "loading";
      })
      .addCase(deleteUser.rejected, (state: InitialState) => {
        state.status = "error";
      })
      .addCase(createUser.fulfilled, (state: InitialState, action) => {
        state.status = "succeeded";
        const { id } = action.payload;

        const users = state.users.filter((user) => {
          return id !== user.id;
        });
        state.users = users;
      })
      .addCase(createUser.pending, (state: InitialState) => {
        state.status = "loading";
      })
      .addCase(createUser.rejected, (state: InitialState) => {
        state.status = "error";
      });
  },
});

export const selectAllUsers = ({ users }: { users: InitialState }) =>
  users.users;
export const getUsersStatus = ({ users }: { users: InitialState }) =>
  users.status;
export const getUsersError = ({ users }: { users: InitialState }) =>
  users.error;

export default userSlice.reducer;
