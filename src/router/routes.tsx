import {createBrowserRouter} from 'react-router-dom';
import Home from '../views/Home.tsx';
import NotificationSettings from '../views/NotificationSettings.tsx';

const router = createBrowserRouter([
  {
    path: '/notification-test/',
    element: <Home />,
  },
  {
    path: '/notification-test/notification-settings',
    element: <NotificationSettings></NotificationSettings>,
  },
]);

export {router};
