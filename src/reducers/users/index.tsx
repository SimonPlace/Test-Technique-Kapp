import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types/users";

interface initialStateType {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: initialStateType = {
  data: [],
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
  },
});

export const { setUsers, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
