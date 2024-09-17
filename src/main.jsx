import { StrictMode } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

const theme = extendTheme({
  colors: {
    myYellow: '#FBBC05'
  },
  shadows: {
    custom: '0px 20px 20px #7090B01F',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
