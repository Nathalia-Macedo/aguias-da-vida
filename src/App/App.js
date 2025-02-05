import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import TreatmentContent from "../Pages/Tratamento"
import { TextsProvider } from "../context/TextContext"

function App() {
  return (
    <Router>
      <TextsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamentos" element={<TreatmentContent />} />
          {/* Mantemos a rota específica para alcoolismo, caso seja necessária */}
          <Route path="/tratamentos/:type" element={<TreatmentContent />} />        </Routes>
      </TextsProvider>
    </Router>
  )
}

export default App

