import i18n from '@/i18n'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import './App.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </I18nextProvider>
)
