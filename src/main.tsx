import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ThemeProvider } from "@mui/material/styles";
//import theme from './theme/

//<ThemeProvider theme={theme}>
  <App />
//</ThemeProvider>



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
