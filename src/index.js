import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import PostsPage from './pages/PostsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/resumes',
        element: <ResumePage />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();
