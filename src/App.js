import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import messages_en from './translations/en.json'
import messages_es from './translations/es.json'
import messages_pt from './translations/pt.json'
import Bogota from './pages/Bogota'
import Honduras from './pages/Honduras'
import BuenosAires from './pages/BuenosAires'

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

let defaultEdition = 'honduras'
localStorage.setItem('edition', defaultEdition)
const edition =
  typeof window.localStorage !== 'undefined'
    ? localStorage.getItem('edition')
    : defaultEdition

export const ROUTES = [
  { id: 1, path: '/honduras', description: "Honduras" },
  { id: 2, path: '/bogota', description: "Bogota" },
  { id: 3, path: '/buenos-aires', description: "Buenos Aires" }
]

export const PALETTE = {
	GREEN: "#80ff9f",
  SKYBLUE: "#00BDE5",
  PINK: "#E573E5",
  GRAY: "#FAF7F5"
}



function App() {
  return (
    <div className="App">
      <IntlProvider
        locale={locale || defaultLanguage}
        messages={messages[locale || defaultLanguage]}
      >
        <Routes>
          <Route path="/" element={<Honduras />} />
          <Route path="/bogota" element={<Bogota />} />
          <Route path="/buenos-aires" element={<BuenosAires />} />
          <Route path="/honduras" element={<Honduras />} />
        </Routes>
      </IntlProvider>
    </div>
  )
}

export default App
