import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
//import { CAMPSITES } from './app/shared/CAMPSITES';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route  path='contact' element={<ContactPage />}/>
        <Route  path='directory' element={<CampsitesDirectoryPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
