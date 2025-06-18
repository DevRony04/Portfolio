import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import Summary from './Summary';
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import Education from './Education';
import CoreCompetencies from './CoreCompetencies';
import Certification from './Certification';
import './index.css'; // General styles

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Summary />,
      },
      {
        path: "/skills",
        element: <TechnicalSkills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/competencies",
        element: <CoreCompetencies />,
      },
      {
        path: "/certification",
        element: <Certification />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
