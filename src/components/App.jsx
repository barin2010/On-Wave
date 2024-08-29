import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import News from './pages/News';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};
