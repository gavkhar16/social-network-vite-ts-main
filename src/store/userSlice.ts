import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_data: string;
  city: string;
}

interface IUserStateProps {
  user: null | IUser;
}

const initialState: IUserStateProps = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {changeUser} = userSlice.actions;
