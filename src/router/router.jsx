import React from 'react'; 
import {
    createBrowserRouter,
  } from "react-router-dom";

  import { AboutPage } from "../components/About/About";
  import TermsNConditions from "../components/terms/TermsNConditions";
import App from "../App";

const routers = createBrowserRouter([    
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '',
          element: <AboutPage />
        },
        {
          path: 'terms-and-conditions',
          element: <TermsNConditions />
        },
      ]
    }
  ]);

  export default routers;