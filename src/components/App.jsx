import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import ItemDetails from './ItemDetails/ItemDetails';
import SearchResults from './SearchResults/SearchResults';

const Home = React.lazy(() => import('./pages/Home'));
const Catalog = React.lazy(() => import('./pages/Catalog'));
const News = React.lazy(() => import('./pages/News'));
const Contacts = React.lazy(() => import('./pages/Contacts'));

export const App = () => {
  return (
    <div>
      <Navigation />

      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:itemId" element={<ItemDetails />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};
