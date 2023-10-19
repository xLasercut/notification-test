import {createBrowserRouter} from 'react-router-dom';
import NotificationSettings from '../views/NotificationSettings.tsx';
import App from '../App.tsx';
import Home from '../views/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/notification-test/',
    element: <App />,
    children: [
      {
        path: '/notification-test/',
        element: <Home></Home>,
      },
      {
        path: '/notification-test/notification-settings',
        element: <NotificationSettings></NotificationSettings>,
      },
    ],
  },
]);

export {router};
