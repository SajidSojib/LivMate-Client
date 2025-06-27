import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Utility/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const Private = ({ children }) => {
    const location = useLocation();
    const { user, loading } = use(AuthContext);
    if (loading) {
      return (
        <div className="flex items-center mx-auto loading loading-infinity loading-xl"></div>
      );
    }
    if (!user) {
      return <Navigate state={location?.pathname} to="/login"></Navigate>;
    }

    return children;
};

export default Private;