import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import AuthProvider from './context/auth/Provider.tsx'
import App from './App.tsx'
import './index.css'
import SettingsProvider from "./context/settings/Provider.tsx";

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
        <AuthProvider>
            <SettingsProvider>
                <App/>
            </SettingsProvider>
        </AuthProvider>
    // </StrictMode>
,
)
