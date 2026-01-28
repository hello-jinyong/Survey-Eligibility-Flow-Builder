import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './context/ThemeContext';
import PublicLayout from './components/layout/PublicLayout';
import PrivateLayout from './components/layout/PrivateLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';
import { ToastProvider } from './context/ToastProvider';
import { Box, CircularProgress } from '@mui/material';
import { createStyle } from './theme/muiThemes';
import NotFound from './pages/_404/NotFound';

const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Builder = lazy(() => import('./pages/builder/Builder'));
const Analytics = lazy(() => import('./pages/analytics/Analytics'));
const Settings = lazy(() => import('./pages/settings/Settings'));


const LoadingFallback = () => (
  <Box sx={{ ...createStyle.loadingFallBack}}>
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ToastProvider>
          <CssBaseline />
          <Suspense fallback={<LoadingFallback />}>
            <BrowserRouter>
              <Routes>
                {/* Public Routes */}
                <Route element={<PublicLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                {/* Private Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route element={<PrivateLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/builder/:id" element={<Builder />} />
                    <Route path="/builder/new" element={<Builder />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/settings" element={<Settings />} />
                  </Route>
                </Route>

                {/* Catch-all Redirect */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
