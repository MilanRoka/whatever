import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
