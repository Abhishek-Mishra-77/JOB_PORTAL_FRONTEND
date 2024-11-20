import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import './App.css'
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import JobListing from "./pages/jobListing";
import Job from "./pages/job";
import PostJob from "./pages/postJob";
import SavedJobs from "./pages/savedJobs";
import MyJobs from "./pages/MyJobs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      }
      ,
      {
        path: '/jobs',
        element: <JobListing />
      }
      ,
      {
        path: '/job/:id',
        element: <Job />
      }
      ,
      {
        path: '/job-post',
        element: <PostJob />
      }
      ,
      {
        path: '/saved-jobs',
        element: <SavedJobs />
      }
      ,
      {
        path: '/my-jobs',
        element: <MyJobs />
      }
    ]
  }
])

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App
