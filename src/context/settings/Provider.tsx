import {type ReactNode, useReducer} from "react";
import {initialSettingsState, settingsReducer} from "./reducer.ts";
import {SettingsContext} from "./Context.ts";

export default function SettingsProvider({children}: { children: ReactNode }) {
    const [state, dispatch] = useReducer(settingsReducer, initialSettingsState);
    return (
        <SettingsContext.Provider value={{settings: state, updateSettings: dispatch}}>
            {children}
        </SettingsContext.Provider>
    );
}