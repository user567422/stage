import { Component } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import OverDeWinkel from './pages/OverDeWinkel'
import MijnStage from './pages/MijnStage'
import Fotopagina from './pages/Fotopagina'
import Contactpagina from './pages/Contactpagina'

class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ color: '#e8b84a', background: '#0d1220', padding: '2rem', fontFamily: 'monospace', minHeight: '100vh' }}>
          <h2 style={{ marginBottom: '1rem' }}>⚠ Runtime error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#ff6b6b' }}>{this.state.error.toString()}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#aaa', fontSize: '0.8rem', marginTop: '1rem' }}>{this.state.error.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="over-de-winkel" element={<OverDeWinkel />} />
            <Route path="mijn-stage" element={<MijnStage />} />
            <Route path="fotos" element={<Fotopagina />} />
            <Route path="contact" element={<Contactpagina />} />
          </Route>
        </Routes>
      </HashRouter>
    </ErrorBoundary>
  )
}
