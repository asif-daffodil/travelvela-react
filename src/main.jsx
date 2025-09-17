import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Bootstrap CSS (installed via package.json)
// Global CSS moved into the root layout component (`src/layouts/layout-1.jsx`)
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.js'
import { Provider } from 'react-redux'
import { store } from './store'
// import BackToTop from './components/layout/BackToTop';

// Third-party CSS equivalents for the original HTML site's styles
// ...vendor CSS imports have been moved into the layout component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </Provider>
  </StrictMode>,
)
