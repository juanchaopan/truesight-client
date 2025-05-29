import {type ReactNode, useReducer} from "react";
import {authReducer, initialAuthState} from "./reducer.ts";
import {AuthContext} from "./Context.ts";

export default function AuthProvider({children}: { children: ReactNode }) {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    return (
        <AuthContext.Provider value={{auth: state, updateAuth: dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}