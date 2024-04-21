import React from 'react'; 
import {
    createBrowserRouter, Navigate 
  } from "react-router-dom";

  import { AboutPage } from "../components/About/About";
  import ContactUs from '../components/contactUs/ContactUs';
  import TermsNConditions from "../components/terms/TermsNConditions";
import App from "../App";
import PrivacyNPolicy from '../components/terms/PrivacyNPolicy';

const routers = createBrowserRouter([    
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '',
          element: <Navigate to="/about-us" replace />,
        },
        {
          path:'about-us',
          element : <AboutPage />
        },
        {
          path:'contact-us',
          element : <ContactUs />
        },
        {
          path: 'terms-and-conditions',
          element: <TermsNConditions />
        },
        {
          path: 'privacy-policy',
          element: <PrivacyNPolicy />
        }
      ]
    }
  ]);

  export default routers;