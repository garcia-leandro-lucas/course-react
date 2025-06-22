import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui';
import { HeroresRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='login' element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />

            {/* <Route path="login" element={<LoginPage />} /> */}

            <Route path='/*' element={
              <PrivateRoute>
                <HeroresRoutes />
              </PrivateRoute>
            } />

            {/* <Route path="/*" element={<HeroresRoutes />} /> */}
        </Routes>
    </>
  )
}
