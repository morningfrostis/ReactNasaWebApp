import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/themes'
import Router from './container/router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
