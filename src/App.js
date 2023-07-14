import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './Body';
import Footer from './component/Footer';
import About from './component/About'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorElement from './component/errorElement';
import { SearchContextProvider } from './SearchContext';

// AppLayout component
const AppLayout = () => {

  return (<>
    <SearchContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </SearchContextProvider>
  </>)
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/About',
        element: <About />
      },
    ]
  },

])

// Render the AppLayout component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
