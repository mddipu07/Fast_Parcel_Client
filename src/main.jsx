import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import 'aos/dist/aos.css';
import  AOS  from 'aos'
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query';

AOS.init()

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist max-w-7xl mx-auto'>
     <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
     </QueryClientProvider>
    </div>
  </StrictMode>,
)
