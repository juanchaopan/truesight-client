export interface AuthState {
    userId: string | null;
}

export type AuthAction =
    | { type: 'LOGIN', payload: { userId: string } }
    | { type: 'LOGOUT' }
