import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Bogota from './pages/Bogota'
import Honduras from './pages/Honduras'
import BuenosAires from './pages/BuenosAires'
import { EditionContextProvider } from './context/EditionContext'
import { LanguageProvider } from './context/LanguageContext';

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
        <LanguageProvider>
          <ThemeProvider theme={theme} >
            <Routes>
              <Route path="/" element={<Honduras />} />
              <Route path="/bogota" element={<Bogota />} />
              <Route path="/buenos-aires" element={<BuenosAires />} />
              <Route path="/honduras" element={<Honduras />} />
            </Routes>
          </ThemeProvider>
        </LanguageProvider>
      </EditionContextProvider>
    </div>
  )
}

export default App
