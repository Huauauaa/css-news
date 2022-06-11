import { Routes, Route } from 'react-router-dom'
import CarouselEffect from './pages/CarouselEffect'
import ContentVisibility from './pages/ContentVisibility'
import CSSHome from './pages/CSSHome'
import ObjectFit from './pages/ObjectFit'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CSSHome />} />
        <Route path="content-visibility" element={<ContentVisibility />} />
        <Route path="carousel-effect" element={<CarouselEffect />} />
        <Route path="object-fit" element={<ObjectFit />} />
      </Routes>
    </div>
  )
}

export default App
