
import PWABadge from './PWABadge.tsx'
import './App.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './landingPage.tsx'
import ProjectEditor from './components/projectEditor.tsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage>
      
      </LandingPage>
    },
    {
      path:"/editor",
      element: <ProjectEditor>

      </ProjectEditor>
    }
  ])
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      
      <RouterProvider router={router}></RouterProvider>
      <PWABadge />
    </ThemeProvider>
  )
}

export default App
