import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import messages_en from './translations/en.json'
import messages_es from './translations/es.json'
import messages_pt from './translations/pt.json'
import Bogota from './pages/Bogota'
import Honduras from './pages/Honduras'
import BuenosAires from './pages/BuenosAires'
import { EditionContextProvider } from './context/EditionContext'


const messages = {
  es: messages_es,
  en: messages_en,
  pt: messages_pt,
}

let defaultLanguage = 'es'
const locale =
  typeof window.localStorage !== 'undefined'
    ? localStorage.getItem('locale')
    : 'es'

export const PALETTE = {
  GREEN: "#80ff9f",
  SKYBLUE: "#00BDE5",
  PINK: "#E573E5",
  GRAY: "#FAF7F5"
}


const theme = {
  colors: {
    skyblue: "#00BDE5",
    green: "#00BDE5",
    pink: "#E573E5",
    gray: "#FAF7F5"
  }
}

function App() {
  return (
    <div className="App">
      <EditionContextProvider>
        <IntlProvider
          locale={locale || defaultLanguage}
          messages={messages[locale || defaultLanguage]}
        >
          <ThemeProvider theme={theme} >
            <Routes>
              <Route path="/" element={<Honduras />} />
              <Route path="/bogota" element={<Bogota />} />
              <Route path="/buenos-aires" element={<BuenosAires />} />
              <Route path="/honduras" element={<Honduras />} />
            </Routes>
          </ThemeProvider>
        </IntlProvider>
      </EditionContextProvider>
    </div>
  )
}

export default App
