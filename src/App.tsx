import './index.css'
import Login from './pages/login'
import Signup from './pages/signup'
import Froget from './pages/Froget'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/froget" element={<Froget />} />
      </>
    )
  );

  return ( <RouterProvider router={router} />


   )
};

export default App;
