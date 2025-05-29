export interface SettingsState {
    aiProvider: "openai";
}

export type SettingsAction =
    | { type: 'SET_AI_PROVIDER', payload: { aiProvider: "openai" } }
