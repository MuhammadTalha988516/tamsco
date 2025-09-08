import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Lights from './components/pages/Lights';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/lights" element={<Lights />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
