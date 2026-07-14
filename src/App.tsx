import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from '@/components/layout/root-layout'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'

// Route-split the long-form case study so homepage visitors don't pay for it.
const CaseStudyPage = lazy(() =>
  import('@/pages/case-study').then((m) => ({ default: m.CaseStudyPage })),
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
