import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to='/' state={{ from: location.pathname }} />
  }
  return children;
}

export default ProtectedRoute;
