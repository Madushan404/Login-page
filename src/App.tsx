import './index.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Froget from './pages/Froget'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import  FullLayout  from './pages/FullLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<FullLayout />}>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/froget" element={<Froget />} />
      </Route>
     
    )
  );

  return ( <RouterProvider router={router} />

   )
};

export default App;
