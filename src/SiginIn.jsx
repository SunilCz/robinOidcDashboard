import React, { useEffect } from 'react';
import { useOidc } from '@axa-fr/react-oidc';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { login, isAuthenticated, oidcUser } = useOidc();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated after component mounts
    if (isAuthenticated) {
      // Redirect to the dashboard if already authenticated
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    await login();
  };

  // Check if user is authenticated after login function is called
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to the dashboard after successful authentication
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate, oidcUser]);

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={handleLogin}>Login</button>
      )}
       {isAuthenticated && (
        <button onClick={() => logout()}>Logout</button>
      )}
    </div>
  );
};

export default SignIn;
