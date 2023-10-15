import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types/users";

interface initialStateType {
  data: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
}

const initialState: initialStateType = {
  data: [],
  filteredUsers: [],
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setFilteredUsers: (state, action: PayloadAction<User[]>) => {
      state.filteredUsers = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearFilters: (state) => {
      state.filteredUsers = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setUsers,
  setLoading,
  setError,
  setFilteredUsers,
  clearFilters,
} = userSlice.actions;

export default userSlice.reducer;
