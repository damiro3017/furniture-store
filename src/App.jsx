import '@fontsource-variable/outfit';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './assets/pages/HomePage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
