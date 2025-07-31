import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PublicDashboard from "./pages/PublicDashboard";
import WelcomePage from "./components/WelcomePage";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Header from "./components/Header";
import AuthModal from "./components/AuthModal";
import QuickNav from "./components/QuickNav";
import { useState, useEffect } from "react";

function AppContent() {
  const { isAuthenticated, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Show auth modal on every page visit if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setShowAuthModal(true);
    }
  }, [isAuthenticated, loading]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontSize: '18px',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div className="loading-spinner"></div>
        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
          Cargando aplicación...
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      transition: 'all 0.3s ease'
    }}>
      <Header />
      <main style={{ 
        paddingTop: isAuthenticated ? '80px' : '0',
        animation: 'fadeIn 0.5s ease-in'
      }}>
        <Routes>
          <Route 
            path="/public" 
            element={
              <div style={{ animation: 'slideIn 0.5s ease-in' }}>
                <PublicDashboard />
              </div>
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <div style={{ animation: 'slideIn 0.5s ease-in' }}>
                  <Dashboard />
                </div>
              ) : (
                <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
                  <WelcomePage />
                </div>
              )
            } 
          />
        </Routes>
      </main>
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      {isAuthenticated && <QuickNav />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
