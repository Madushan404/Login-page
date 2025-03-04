import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  users: { email: string; password: string }[]; 
  currentUser: { email: string } | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  users: [], 
  currentUser: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email, password } = action.payload;

      
      const existingUser = state.users.find(user => user.email === email);
      if (existingUser) {
        state.errorMessage = "User already exists. Please login.";
      } else {
        state.users.push({ email, password }); 
        state.isAuthenticated = true;
        state.currentUser = { email };
        state.errorMessage = null;
      }
    },
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email, password } = action.payload;

      
      const existingUser = state.users.find(user => user.email === email && user.password === password);

      if (existingUser) {
        state.isAuthenticated = true;
        state.currentUser = { email };
        state.errorMessage = null;
      } else {
        state.isAuthenticated = false;
        state.currentUser = null;
        state.errorMessage = "Invalid email or password.";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.errorMessage = null;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
