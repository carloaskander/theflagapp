import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css'

// Components
import Navbar from './Navbar';
import MainContent from './MainContent';
import CountryDetail from './CountryDetail';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
      <BrowserRouter>
          <div className='App'>
              <Navbar />
              <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/:countryName" element={<CountryDetail />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}


export default App;