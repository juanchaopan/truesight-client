import {createContext, type Dispatch,} from "react";
import type {AuthAction, AuthState} from "./types.ts";
import {initialAuthState} from "./reducer.ts";

export const AuthContext = createContext<{
    auth: AuthState;
    updateAuth: Dispatch<AuthAction>;
}>({
    auth: initialAuthState,
    updateAuth: () => {
    }
});