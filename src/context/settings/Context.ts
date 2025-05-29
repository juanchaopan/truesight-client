import {createContext, type Dispatch,} from "react";
import type {SettingsAction, SettingsState} from "./types.ts";
import {initialSettingsState} from "./reducer.ts";

export const SettingsContext = createContext<{
    settings: SettingsState;
    updateSettings: Dispatch<SettingsAction>;
}>({
    settings: initialSettingsState,
    updateSettings: () => {
    }
});