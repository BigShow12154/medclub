import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LandingPage from './pages/LandingPage';

// Lazy loaded components
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage'));
const BodyMapPage = lazy(() => import('./pages/symptom/BodyMapPage'));
const HealthReportsPage = lazy(() => import('./pages/reports/HealthReportsPage'));
const DoctorsPage = lazy(() => import('./pages/doctors/DoctorsPage'));
const DoctorDetailPage = lazy(() => import('./pages/doctors/DoctorDetailPage'));
const FamilyMembersPage = lazy(() => import('./pages/family/FamilyMembersPage'));
const MarketplacePage = lazy(() => import('./pages/marketplace/MarketplacePage'));
const CartPage = lazy(() => import('./pages/marketplace/CartPage'));

function App() {
  return (
    <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center"><LoadingSpinner size="large" /></div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/body-map" element={<BodyMapPage />} />
            <Route path="/health-reports" element={<HealthReportsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:id" element={<DoctorDetailPage />} />
            <Route path="/family" element={<FamilyMembersPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;