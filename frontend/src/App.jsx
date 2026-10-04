import { Routes, Route } from 'react-router-dom'
import BriefPage from './components/BriefPage.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/brief/:id" element={<BriefPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App