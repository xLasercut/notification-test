import {createBrowserRouter} from 'react-router-dom';
import Home from '../views/Home.tsx';
import NotificationSettings from '../views/NotificationSettings.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/notification-settings',
    element: <NotificationSettings></NotificationSettings>,
  },
]);

export {router};
