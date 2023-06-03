import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './routes/root.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SuggestionIndex from './pages/SuggetionIndex/SuggestionIndex.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/suggestions" element={<Root />}>
    <Route index element={<App />} />
    <Route path="/suggestions/:id" element={<SuggestionIndex />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
