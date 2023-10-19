import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/nhsuk-frontend/dist/nhsuk.css';
import {RouterProvider} from 'react-router-dom';
import {Footer} from 'nhsuk-react-components';
import {router} from './router/routes.tsx';
import HeaderComponent from './components/HeaderComponent.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderComponent></HeaderComponent>
    <RouterProvider router={router} />
    <Footer>
      <Footer.List>
        <Footer.ListItem href='https://digital.nhs.uk/services/strategic-data-collection-service-in-the-cloud-sdcs-cloud/accessibility-statement'>
          Accessibility
        </Footer.ListItem>
        <Footer.ListItem href='https://digital.nhs.uk/about-nhs-digital/privacy-and-cookies'>
          Privacy and Cookies
        </Footer.ListItem>
        <Footer.ListItem href='https://digital.nhs.uk/about-nhs-digital/contact-us/freedom-of-information'>
          Freedom of Information
        </Footer.ListItem>
        <Footer.ListItem href='https://digital.nhs.uk/about-nhs-digital/terms-and-conditions'>
          Terms and Conditions
        </Footer.ListItem>
        <Footer.ListItem href='https://digital.nhs.uk/about-nhs-digital/contact-us'>
          Contact Us
        </Footer.ListItem>
      </Footer.List>
      <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
    </Footer>
  </React.StrictMode>
);
