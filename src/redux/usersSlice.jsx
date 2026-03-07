import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseUrl = "http://localhost:3001/users";
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
});
export const addUsers = createAsyncThunk("users/addUsers", async (user) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
});
const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {}, //pour les act synchrone ( simple )
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      }) //pending l'état en attente
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "successed";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.list.push(action.payload);
      });
  }, //pour les act asynchrone (asynchthunk pour les api)
});
export default usersSlice.reducer;
