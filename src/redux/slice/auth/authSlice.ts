import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUser {
    userName: string;
    password: string;
}

interface IAuthData extends IUser {
    isAuth?: boolean;
}

export interface AuthState {
   usersData: Array<IUser>;
   authData: IAuthData | null;
}

const initialState: AuthState = {
    usersData: [{userName: 'admin', password: 'admin'}],
    authData: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<IUser>) => {
            state.usersData.push(action.payload)
        },
        setAuthData: (state, action: PayloadAction<IAuthData>) => {
            state.authData = {isAuth: true, ...action.payload}
        },
        logout: (state) => {
            state.authData = null;
        }
    }
})

export const { register, setAuthData, logout } = authSlice.actions;

export default authSlice.reducer;