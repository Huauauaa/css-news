import { Routes, Route } from 'react-router-dom'
import CarouselEffect from './pages/CarouselEffect'
import ContentVisibility from './pages/ContentVisibility'
import CSSHome from './pages/CSSHome'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CSSHome />} />
        <Route path="content-visibility" element={<ContentVisibility />} />
        <Route path="carousel-effect" element={<CarouselEffect />} />
      </Routes>
    </div>
  )
}

export default App
