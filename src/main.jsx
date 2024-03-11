import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LinkView from './pages/LinkView.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "links",
    element: <LinkView></LinkView>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
