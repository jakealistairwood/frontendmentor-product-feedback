import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './routes/root.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SuggestionIndex from './pages/SuggetionIndex/SuggestionIndex.jsx'
import AddFeedback from './pages/AddFeedback/AddFeedback.jsx'
import RoadmapBoard from './pages/RoadmapBoard/RoadmapBoard.jsx'
import { FeedbackContextProvider } from './context/FeedbackContext.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/suggestions" element={<Root />}>
      <Route index element={<App />} />
      <Route path="/suggestions/:id" element={<SuggestionIndex />} />
      <Route path="/suggestions/add-feedback" element={<AddFeedback />} />
    </Route>
    <Route path="/roadmap" element={<RoadmapBoard />}></Route>
  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackContextProvider>
      <RouterProvider router={router} />
    </FeedbackContextProvider>
  </React.StrictMode>,
)
