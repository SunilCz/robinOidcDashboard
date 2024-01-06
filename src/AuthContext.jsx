// import React, { createContext, useState, useContext, useEffect } from 'react';
// import userManager from './oidcConfig';

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     console.log(user);

//     useEffect(() => {
//         userManager.getUser().then(user => {
//             if (user) {
//                 setUser(user);
//             }
//         });
//     }, []);

//     const signIn = async () => {
//         await userManager.signinRedirect();
//     };

//     const signOut = async () => {
//         await userManager.signoutRedirect();
//     };

//     return (
//         <AuthContext.Provider value={{ user, setUser, signIn, signOut }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);