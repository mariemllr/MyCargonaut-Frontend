import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  image?: string;
  id?: number;
  password?: string;
  isLoggedIn?: boolean;
  smoker?: boolean;
  note?: string;
  birthday?: Date;
  rideCount?: number;
};

const initialState: UserState = {
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  phone: undefined,
  image: undefined,
  id: undefined,
  password: undefined,
  isLoggedIn: false,
  smoker: false,
  note: undefined,
  birthday: undefined,
  rideCount: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: () => {
      return initialState;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      const {
        firstName,
        lastName,
        email,
        phone,
        image,
        id,
        isLoggedIn,
        smoker,
        note,
        birthday,
        rideCount,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phone = phone;
      state.image = image;
      state.id = id;
      state.isLoggedIn = isLoggedIn;
      state.smoker = smoker;
      state.note = note;
      state.birthday = birthday;
      state.rideCount = rideCount; // And here
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setSmoker: (state, action: PayloadAction<boolean>) => {
      state.smoker = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
    setBirthday: (state, action: PayloadAction<Date>) => {
      state.birthday = action.payload;
    },
    setRideCount: (state, action: PayloadAction<number>) => {
      state.rideCount = action.payload;
    },
  },
});

export const {
  login,
  logout,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setImage,
  setPassword,
  setUser,
  setSmoker,
  setNote,
  setBirthday,
  setRideCount,
} = userSlice.actions;

export default userSlice.reducer;
