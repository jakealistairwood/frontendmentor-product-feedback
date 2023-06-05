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
import EditFeedback from './pages/EditFeedback/EditFeedback.jsx'
import { Navigate } from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/suggestions" replace />} />
      <Route path="/suggestions" element={<App />} />
      <Route path="/suggestions/:id" element={<SuggestionIndex />} />
      <Route path="/suggestions/add-feedback" element={<AddFeedback />} />
      <Route path="/suggestions/:id/edit-feedback" element={<EditFeedback />} />
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
