import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LinkView from './pages/LinkView.jsx'
import musicSection from './components/MusicSection.jsx'
import BannerImage from './components/TopBannerSection.jsx'
import ShowsSection from './components/ShowsSection.jsx'
import bioSection from './components/BioSection.jsx'
import contactSection from './components/ContactSection.jsx'
import EPKView from './pages/EPKView.jsx'
import NewsletterView from './pages/NewsletterView.jsx'
import UnderConstruction from './pages/UnderConstruction.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";



const router = createHashRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <LinkView></LinkView>,
    children: [{
      path:"Music",
      element: <musicSection></musicSection>
      },
      {
        path:"Home",
        element:<BannerImage></BannerImage>
      },
      {
        path:"Shows",
        element:<ShowsSection></ShowsSection>
      },
      {
        path:"Bio",
        element:<bioSection></bioSection>
      },
      {
        path:"Contact",
        element:<contactSection></contactSection>
      }
    ]
  },
  {
    path: "links",
    element: <LinkView></LinkView>,
    errorElement: <LinkView></LinkView>
  },
  {
    path: "epk",
    element: <EPKView></EPKView>,
    errorElement:<LinkView></LinkView>

  },
  {
    path:"newsletter",
    element: <NewsletterView></NewsletterView>,
    errorElement:<LinkView></LinkView>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
