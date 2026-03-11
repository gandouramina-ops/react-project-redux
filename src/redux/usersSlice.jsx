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
export const editUser = createAsyncThunk("users/editUser", async (user) => {
  const response = await fetch(`${baseUrl}/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return id;
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
      .addCase(addUsers.rejected, (state, action) => {
        state.status = "failed";
        state.list.push(action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.status = "successed";
        const updated = action.payload;
        const index = state.list.findIndex((user) => user.id === updated.id);
        if (index !== -1) {
          state.list[index] = updated;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "successed";
        const deletedID = action.payload; //action.payload renvoie la réponse de l'api
        state.list = state.list.filter((user) => user.id !== deletedID);
      });
  }, //pour les act asynchrone (asynchthunk pour les api)
});
export default usersSlice.reducer;
