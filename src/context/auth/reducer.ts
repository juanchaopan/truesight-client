import type {AuthAction, AuthState} from "./types.ts";

export const initialAuthState: AuthState = {
    userId: null,
}

export function authReducer(state: AuthState, action: AuthAction) {
    switch (action.type) {
        case "LOGIN":
            return {...state, userId: (action.payload || initialAuthState).userId};
        case "LOGOUT":
            return {...state, userId: null};
        default:
            return state;
    }
}