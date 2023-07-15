import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './Body';
import Footer from './component/Footer';
import About from './component/About'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorElement from './component/errorElement';
import { SearchContextProvider } from './SearchContext';
import Restaurants from './component/Restaurants';
import Parent from './component/Classcom1';

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
      {
        path: "/classcomponent",
        element: <Parent />
      },
      {
        path: '/restaurant/:id',
        element: <Restaurants />
      }
    ]
  },

])

// Render the AppLayout component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
