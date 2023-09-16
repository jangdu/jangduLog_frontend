import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <div className="">
      <ScrollToTop />
      <div className="">
        <header className="">
          <Navbar />
        </header>
        <div className="max-w-6xl mx-auto p-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
