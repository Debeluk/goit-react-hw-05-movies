import { lazy, Suspense } from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Pages/Cast/Cast'));
const Reviews = lazy(() => import('./Pages/Reviews/Reviews'));
const Header = lazy(() => import('./Header/Header'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

//test

export default App;



