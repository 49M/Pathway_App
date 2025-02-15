import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../Pages/Homepage/Homepage';
import CSPath from '../Pages/CSPath/CSPath';
import MathPath from '../Pages/MathPath/MathPath';
import LSPath from '../Pages/LSPath/LSPath';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Homepage /> }, // Set Homepage as the default route
      { path: 'cspath', element: <CSPath /> },
      { path: 'mathpath', element: <MathPath /> },
      { path: 'lspath', element: <LSPath /> },
    ],
  },
]);