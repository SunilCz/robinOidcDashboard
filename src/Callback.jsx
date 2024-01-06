

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import userManager from './oidcConfig';
// import { useAuth } from './AuthContext';

// const Callback = () => {
//     const navigate = useNavigate();
//     const {setUser } = useAuth();
//     useEffect(() => {
//         userManager.signinRedirectCallback().then((data) => {
//             setUser(data);
//             navigate('/dashboard');
//         }).catch(e => {
//             console.error(e);
//         });
//     }, [navigate, setUser]);

//     return <div>Loading...</div>;
// };

// export default Callback;