import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from '@/components/layout/root-layout'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'

// Route-split the long-form case study so homepage visitors don't pay for it.
// After a new deploy, a client with a stale index.html can reference a JS
// chunk hash that no longer exists. Reload once to pick up the fresh build
// instead of surfacing a raw "Failed to fetch dynamically imported module" error.
const CaseStudyPage = lazy(() =>
  import('@/pages/case-study')
    .then((m) => ({ default: m.CaseStudyPage }))
    .catch((error): Promise<never> => {
      const reloadedKey = 'case-study-chunk-reload'
      if (!sessionStorage.getItem(reloadedKey)) {
        sessionStorage.setItem(reloadedKey, '1')
        window.location.reload()
        return new Promise(() => {})
      }
      throw error
    }),
)

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'work/:slug', element: <CaseStudyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
