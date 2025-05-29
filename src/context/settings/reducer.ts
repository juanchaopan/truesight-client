import type {SettingsAction, SettingsState} from "./types.ts";

export const initialSettingsState: SettingsState = {
    aiProvider: "openai",
}

export function settingsReducer(state: SettingsState, action: SettingsAction) {
    switch (action.type) {
        case "SET_AI_PROVIDER":
            return {...state, userId: (action.payload || initialSettingsState).aiProvider};
        default:
            return state;
    }
}