import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Room from './routes/room';

function App(): JSX.Element {
  const router = createHashRouter([
    {
      path: '/',
      element: <Root />,
      // loader: rootLoader,
      // errorElement: <div>Oops! There was an error.</div>,
      // children: [],
    },
    {
      path: 'room/:roomId',
      element: <Room />,
    },
    {
      path: '*',
      element: <div>Oops! There was an error.</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
